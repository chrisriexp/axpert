<?php

namespace App\Http\Controllers\API\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    /**
     * POST
     * Check to see if an auth token is valid, pass the token in the header as a bearer token
     * @return bool valid
     */
    public function check_token(Request $request){
        $token = $request->bearerToken();

        if(User::where('remember_token', $token)->exists()){
            $response = [
                'valid'=> true
            ];
            return response()->json($response, 200);
        }else{
            $response = [
                'valid'=> false
            ];
            return response()->json($response, 400);
        }
    }

    /**
     * POST
     * Admin Login Request
     * send 'email' and 'password' parameters in request body
     * @return bool success
     * @return string message
     * @return string authentication token
     */
    public function login(Request $request){
        $validator = Validator::make($request->all(), [
            'email'=> 'required|email',
            'password'=> 'required|min:8'
        ]);

        if($validator->fails()){
            $response = [
                'success'=> false,
                'message'=> $validator->errors()
            ];

            return response()->json($response, 400);
        }

        if(Auth::attempt(['email'=> strtolower($request->email), 'password'=> $request->password])){
            // To let the IDE know $user is from the model - createTokena and save wont show as errors
            /** @var \App\Models\User $user **/
            
            $user = Auth::user();
            $user->tokens()->delete();
            $token = $user->createToken('token', [$user->role])->plainTextToken;
            $user->setRememberToken($token);
            $user->save();

            $response = [
                'success'=> true,
                'message'=> 'User login successful.',
                'token'=> $token,
            ];

            return response()->json($response, 200);
        } else {    
            $response = [
                'success'=> false,
                'message'=> User::where('email', strtolower($request->email))->exists() ? 'Incorrect password' : 'User does not exist'
            ];

            return response()->json($response, 401);
        }
    }

    /**
     * Register a new user within the system, this should be limited to admin use only
     * requires 'name', 'email', 'password', and 'confirm_password' fields.
     * @return bool success
     * @return string message
     */
    public function register(Request $request){
        $validator = Validator::make($request->all(), [
            'name'=> 'required',
            'email'=> 'required|email',
            'password'=> 'required|min:8',
            'confirm_password'=> 'required|same:password'
        ]);

        if($validator->fails()){
            $response = [
                'success'=> false,
                'message'=> $validator->errors()
            ];

            return response()->json($response, 400);
        }

        $findUser = User::where('email', strtolower($request->email))->exists();

        if($findUser){
            $response = [
                'success'=> false,
                'message'=> 'User already exists.'
            ];

            return response()->json($response, 422);
        }

        $input = $request->all();
        $input['email'] = strtolower($input['email']);
        $input['password'] = bcrypt($input['password']);

        $user = User::create($input);
        $user->save();

        $response = [
            'success'=> true,
            'message'=> 'User registered successfully.'
        ];

        return response()->json($response, 200);
    }

    /**
     * Logout Request
     * @return bool success
     * @return string message
     */
    public function logout(Request $request){
        $request->user()->remember_token = null;
        $request->user()->tokens()->delete();
        $request->user()->save();

        return response()->json(['success'=> true, 'message'=> 'User logout sucessful.'], 200);
    }
}
