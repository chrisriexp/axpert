<template>
    <div class="w-full h-screen absolute grid grid-cols-2 text-custom-black text-[16px]">
        <div class="w-full h-full grid p-10 bg-sidebar-bg">
            <!-- Left Side - Information and Animation -->
            <div class="w-full h-fit grid gap-4 m-auto font-medium">
                <p>Welcome to the,</p>
                
                <div class="grid">
                    <h1 class="text-[24px]">AXpert Admin Portal</h1>
                    <p class="font-normal">If you work at AXpert Window Tinting please enter your login credentials to enter your portal. If you require a password reset please contact your manager.</p>
                </div>

                <LottieAnimation :animationData="login_animation" :renderer="'canvas'" :width="'500px'" :height="'500px'" :speed="0.75" class="m-auto" />
            </div>
        </div>

        <div class="w-full h-full grid p-10">
            <!-- Right Side - Login Form -->
            <div class="w-[45%] h-fit grid justify-items-center m-auto px-6 py-12 border-[1px] border-custom-black border-opacity-10 rounded-[5px] relative overflow-hidden">
                <img src="../../../assets/logo.jpg" alt="Axpert Logo" class="h-[150px]">
                
                <div v-if="loading" :class="loading ? 'animate__fadeInRight' : 'animate__fadeOutRight'" class="w-full h-fit grid animate__animated">
                    <Loading :height="'150px'" :width="'150px'" />
                </div>

                <form v-else @submit.prevent="Login" :class="loading ? 'animate__fadeOutLeft' : 'animate__fadeInLeft'" class="w-full grid gap-6 animate__animated ">
                    <!-- Username -->
                    <input type="text" v-model="login.email" placeholder="Username / Email">
                    <!-- Password -->
                    <div class="relative">
                        <input :type="viewPass ? 'text' : 'password'" v-model="login.password" placeholder="Password" class="w-full pr-12">
                        <!-- View Password Icon -->
                        <button @click="viewPass = !viewPass" type="button" class="w-[24px] h-[24px] right-2 top-2 absolute">
                            <Icon :icon="viewPass ? 'carbon:view-filled' : 'carbon:view-off-filled'" height="24px" class="text-[#DEDEDE]" />
                        </button>
                    </div>

                    <!-- Submit -->
                    <input type="submit" value="Login" class="w-full text-[18px]">
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import Loading from '../../components/loading.vue';
import login_animation from '../../../assets/animations/login-animation.json'
import { Icon } from '@iconify/vue';

export default {
    name: "Admin Login",
    data(){
        return{
            login_animation,
            viewPass: false,
            loading: false,
            login: {
                email: "",
                password: ""
            }
        }
    },
    async mounted(){
        const token = window.localStorage.getItem('axpert_token')
        if(token){
            this.$router.push({name: "AdminDashboard"})
        }
    },
    methods: {
        async Login(){
            this.loading = true

            if(!this.login.email || !this.login.password){
                this.loading = false
                this.$toast.add({
                    severity: 'warn',
                    summary: 'Validation Error',
                    detail: 'Please enter a valid '+ (this.login.email ? 'password' : 'email'),
                    life: 2500
                })
                return
            }

            await axios.post('/api/login', this.login)
            .then(response => {
                this.$toast.add({
                    severity: 'success',
                    summary: 'Login',
                    detail: response.data.message,
                    life: 2500
                })
                window.localStorage.setItem('axpert_token', response.data.token)
                this.$router.push({name: "AdminDashboard"})
            })
            .catch(error => {
                this.loading = false
                this.password = ""

                if(error.response.status == 400){
                    const keys = Object.keys(error.response.data.message)
                    keys.forEach(key => {
                        error.response.data.message[key].forEach(error => {
                            this.$toast.add({ 
                                severity: 'error',
                                summary: 'Login Error',
                                detail: error,
                                life: 2500
                            })
                        })
                    })
                }else if(error.response.status == 500){
                    this.$toast.add({ 
                        severity: 'error',
                        summary: 'Internal Service Error',
                        detail: 'Please contact a system admin.',
                        life: 2500
                    })
                }else{
                    this.$toast.add({ 
                        severity: 'error',
                        summary: 'Login Error',
                        detail: error.response.data.message,
                        life: 2500
                    })
                }
            })
        }
    },
    components: {
        Loading,
        Icon
    }
}
</script>