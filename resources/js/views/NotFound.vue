<template>
    <div class="w-full h-screen grid justify-items-center">
        <div class="w-full h-fit m-auto grid gap-6 justify-items-center text-custom-black">
            <!-- Not Found Message - Typewriter Effect -->
            <p class="text-[26px]">{{ write }}</p>

            <div class="flex items-center gap-8">
                <!-- Go Back Button -->
                <button @click="$router.back()" class="flex items-center gap-2 text-[18px] text-white font-medium px-8 py-[5px] bg-custom-orange rounded-[5px]">
                    <Icon icon="icon-park-outline:back" height="24px" />
                    <span>Go Back</span>
                </button>
                
                <!-- Go to Home Button -->
                <a href="/" class="flex items-center gap-2 text-[18px] text-white font-medium px-8 py-[5px] bg-custom-red rounded-[5px]">
                    <span>Go to Home</span>
                    <Icon icon="iconamoon:home" height="24px" />
                </a>
            </div>

            <!-- 404 Animation -->
            <LottieAnimation :animationData="not_found_animation" :renderer="'canvas'" :width="'600px'" :height="'600px'" :speed="0.75" />
        </div>
    </div>
</template>

<script>
import not_found_animation from '../../assets/animations/404.json'
import { Icon } from '@iconify/vue';

export default {
    name: "Not Found",
    data(){
        return{
            not_found_animation,
            text: "Sorry, the page you are looking for does not exist..",
            textArr: [],
            write: ""
        }
    },
    async mounted(){
        this.textArr = this.text.split("")
        this.typewriter(0)
    },
    methods: {
        async typewriter(index){
            this.write = this.write+this.textArr[index]

            if(index != this.textArr.length - 1){
                setTimeout(() => {
                    this.typewriter(index+1)
                }, 50);
            }else{
                setTimeout(() => {
                    this.write = ""
                    this.typewriter(0)
                }, 3000)
            }
        }
    },
    components: {
        Icon
    }
}
</script>