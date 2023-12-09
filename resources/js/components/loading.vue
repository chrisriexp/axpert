<template>
    <div class="w-fit h-fit grid m-auto">
        <LottieAnimation :animationData="loading_animation" :renderer="'canvas'" :width="width" :height="height" :speed="0.75" class="m-auto" />
    </div>
</template>

<script>
import loading_animation from '../../assets/animations/loading.json'

export default {
    name: "Loading Animation",
    props: {
        height: {
            type: String,
            default: "300px"
        },
        width: {
            type: String,
            default: "300px"
        }
    },
    data(){
        return{
            loading_animation
        }
    }
}
</script>