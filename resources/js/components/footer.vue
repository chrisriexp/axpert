<template>
    <div class="w-full h-fit grid bg-ghost-white px-12 py-8 items-center gap-2">
        <img src="../../assets/images/new_logo.png" alt="Logo" class="h-[50px]">
        <!-- Line -->
        <div class="w-full my-2 border-[2px] border-custom-red rounded-full"></div>

        <div class="w-full grid grid-cols-3 gap-8 relative">
            <div class="h-fit grid w-[90%] relative">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam suscipit sit amet nisi sed efficitur. Ut augue arcu, accumsan id ante at, scelerisque vehicula justo.</p>
                <p class="font-light text-custom-red right-0 absolute -bottom-6"> - Nasya Duncanson, CEO</p>
            </div>

            <div class="w-full h-fit grid grid-cols-2 gap-2">
                <div class="w-fit h-fit grid whitespace-nowrap text-[14px] text-dim-gray">
                    <p class="font-bold text-[16px]">Popular Services</p>
                    <a href="#services" class="hover:text-custom-red">Window Tinting</a>
                    <a href="#services" class="hover:text-custom-red">Paint Protection</a>
                    <a href="#services" class="hover:text-custom-red">Detailing</a>
                </div>

                <div class="w-full h-fit grid gap-4">
                    <div class="w-fit h-fit grid whitespace-nowrap text-[14px] text-dim-gray">
                        <p class="font-bold text-[16px]">Location</p>
                        <a class="hover:text-custom-red" target="_blank" href="https://www.google.com/maps/place/A+Xpert+Window+Tinting/@26.634502,-80.2303315,17z/data=!3m1!4b1!4m6!3m5!1s0x88d8d5a400000001:0x1532f07088b6dfb3!8m2!3d26.6344972!4d-80.2277566!16s%2Fg%2F1tscptbc?hl=en-US&entry=ttu">
                            3141 Fortune Way, Suite 5 <br>
                            Wellington, FL 33414</a>
                    </div>

                    <div class="w-fit h-fit grid whitespace-nowrap text-[14px] text-dim-gray">
                        <p class="font-bold text-[16px]">Contact Us</p>
                        <a class="hover:text-custom-red" href="tel:5616760798">(561) 676-0798</a>
                        <a href="mailto:nasya@axperttinting.com" class="hover:text-custom-red">nasya@axperttinting.com</a>
                    </div>
                </div>
            </div>

            <div class="w-fit h-fit grid whitespace-nowrap text-[14px] text-dim-gray">
                <p class="font-bold text-[16px]">Quick Links</p>
                <p class="hover:text-custom-red">Subscribe to Mailing List</p>
                <a href="#contact" class="hover:text-custom-red">Make an Appointment</a>
                <p class="hover:text-custom-red">Privacy Policy</p>
                <p class="hover:text-custom-red">Terms of Use</p>
            </div>  
        </div>
    </div>
</template>

<script>

export default{
    name: "Footer"
}
</script>