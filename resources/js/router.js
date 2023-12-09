import {createRouter, createWebHistory} from 'vue-router';
import NotFound from './views/NotFound.vue'
import Home from './views/Home.vue'
import AdminLogin from './views/admin/Login.vue'
import AdminDashboard from './views/admin/Dashboard.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/:catchAll(.*)",
            name: "NotFound",
            component: NotFound,
        },
        {
            path: '/',
            component: Home,
            name: "Home"
        },
        // Admin Pages
        {
            path: '/admin-login',
            name: 'AdminLogin',
            component: AdminLogin
        },
        {
            path: '/admin',
            children: [
                {
                    path: 'dashboard',
                    name: 'AdminDashboard',
                    component: AdminDashboard
                },
            ],
            beforeEnter: checkAdmin
        }
    ],
})

async function checkAdmin(to, from, next){
    const token = window.localStorage.getItem('axpert_token');

    if(token){
        // Check Admin Token to see if its Valid
        await axios.get('/api/check-token/', {
            headers: {
                "Authorization": "Bearer "+token
            }
        })
        .then(response => {
            if(response.data.valid){
                next();
                return;
            }else{
                // API Token not recent
                // Send to Login Screen - Token Not Valid
                window.localStorage.removeItem('axpert_token')
                next({name: 'AdminLogin'});
                return;
            }
        }).
        catch(error => {
            // API Token not Valid
            // Send to Login Screen - Token Not Valid
            window.localStorage.removeItem('axpert_token')
            next({name: 'AdminLogin'});
            return;
        })
    }else{
        // Send to Admin Login Screen - No Token Found
        next({name: 'AdminLogin'});
        return;
    }
}

export default router