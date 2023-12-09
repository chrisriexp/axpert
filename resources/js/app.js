import './bootstrap.js'
import './axiosConfig.js'
import {createApp} from 'vue'
import App from './App.vue'
import router from './router.js'
import '../css/app.css'
import '../css/tailwind.css'
import 'animate.css';

// Lottie
import Vue3Lottie from 'vue3-lottie'

// Prime Vue
import PrimeVue from 'primevue/config'
import ToastService from 'primevue/toastservice';

// App
createApp(App)
.use(router)
.use(Vue3Lottie, { name: 'LottieAnimation' })
.use(PrimeVue).use(ToastService)
.mount("#app")