<template>
    <Toast />
    <router-view class="hidden md:grid"/>
    <!-- Mobile View for Now -->
    <div class="m-auto grid md:hidden gap-6 justify-items-center px-4 py-32 text-custom-orange text-center">
        <Icon icon="line-md:alert" height="48px" />
        <p class="font-medium text-[18px]">Appologies, the mobile version of the site is still under developmet..</p>
        <LottieAnimation :animationData="coding_animation" :renderer="'canvas'" :width="'300px'" :height="'300px'" :speed="0.75" class="m-auto" />
    </div>
</template>

<script>
import Toast from 'primevue/toast';
import { Icon } from '@iconify/vue';
import coding_animation from '../assets/animations/coding-animation.json'

export default {
    name: "App",
    data(){
        return{
            coding_animation
        }
    },
    components: {
        Icon,
        Toast
    }
}
</script>

<style>
/**Font from google font */
#app {
  font-family: 'Montserrat', sans-serif;
}

@media (-webkit-device-pixel-ratio: 1.25) {
    :root {
      zoom: 0.8;
    }
}

/* Input Styling */
input[type="text"], input[type="password"], input[type="tel"], input[type="email"]{
    border-radius: 5px;
    outline: none;
    border: 1px solid #DEDEDE;
    -webkit-box-shadow: none;
    box-shadow: none;
}
input[type="text"]:focus, input[type="password"]:focus, input[type="tel"]:focus, input[type="email"]:focus{
    border: 1px solid #DEDEDE;
    outline: none;
    -webkit-box-shadow: none;
    box-shadow: none;
}

input[type="submit"]{
    color: white;
    font-weight: 600;
    background-color: #C20114;
    padding: 5px 16px 5px 16px;
    border-radius: 5px;
    cursor: pointer;
}

/* Chrome, Safari, Edge, Opera */
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
/* Firefox */
input[type="number"] {
    -moz-appearance: textfield;
}
</style>