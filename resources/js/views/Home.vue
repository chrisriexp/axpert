<template>
    <div class="w-full h-fit min-h-screen grid gap-24 relative">
        <!-- Header -->
        <div class="w-full h-fit flow-root gap-8 px-12 py-4">
            <img src="../../assets/images/new_logo.png" alt="Logo" class="h-[75px] float-left">

            <div class="w-fit h-[75px] flex items-center float-right">
                <!-- Call to action -->
                <a href="#contact" class="flex items-center gap-2 bg-custom-red px-4 py-[5px] text-[18px] text-white rounded-[4px]">
                    <Icon icon="solar:calendar-line-duotone" height="24px" />
                    <span>Make an Appointment</span>
                </a>
            </div>
        </div>

        <!-- Hero Section -->
        <div class="w-full h-fit grid grid-cols-2 gap-8 px-12">
            <div class=" w-[80%] h-fit grid gap-2">
                <h1 class="text-dim-gray text-[36px] font-medium">Wellington's <span class="text-custom-red">#1</span> Tint Shop!</h1>
                <p class="font-light">Curabitur eu velit at velit egestas egestas. Praesent elit sapien, dictum sed dolor sed, commodo gravida ipsum. Ut ante elit, ornare quis odio non, volutpat rutrum dui. Cras vel erat quis nunc faucibus bibendum. Sed purus libero, pharetra vel ullamcorper sed, lobortis eu eros. Quisque accumsan dui et consectetur aliquet. Donec eu nulla in nibh dapibus ornare eget quis mauris.</p>
            
                <div class="w-full h-fit mt-8 grid grid-cols-2 gap-8 font-bold whitespace-nowrap">
                    <button class="h-[48px] text-custom-red border-custom-red border-[1px] rounded-[4px]">Pricing</button>

                    <a href="#contact" class="w-full grid items-center justify-items-center h-[48px] text-white bg-custom-red rounded-[4px] border-[1px] border-transparent">Schedule Appointment</a>
                </div>
            </div>

            <div class="w-fit h-fit grid">
                <img src="../../assets/images/hero.png" alt="Hero Image" class="m-auto max-w-[700px]">
            </div>
        </div>

        <!-- Our Partners -->
        <div class="w-full h-fit grid justify-items-center gap-12 px-12">
            <div class="w-full h-fit grid grid-cols-3 justify-items-center items-center over">
                <img src="../../assets/images/3m-authorized.png" alt="3M Authorized Dealer" class="h-[75px]">
                <img src="../../assets/images/women-owned.png" alt="Women Owned" class="h-[75px]">
                <img src="../../assets/images/3m-logo.png" alt="3M Certified Applicator" class="h-[75px]">
            </div>
        </div>

        <!-- Customer Gallery -->
        <div class="w-full h-fit grid justify-items-center gap-12 px-12">
            <p class="text-center text-[32px] text-dim-gray">Customer Gallery</p>

            <div class="w-full h-fit grid grid-cols-3 gap-2 relative">
                <div class="w-full h-[500px] grid relative">
                    <img src="../../assets/images/cars/1.jpg" alt="Car" class="object-cover w-full h-full rounded-[4px]">
                </div>

                <div class="col-span-2 w-full h-[500px] grid grid-cols-2 gap-2 relative overflow-clip">
                    <img src="../../assets/images/cars/2.jpg" alt="Car" class="object-cover w-full h-[246px] rounded-[4px]">
                    <img src="../../assets/images/cars/3.jpg" alt="Car" class="object-cover w-full h-[246px] rounded-[4px]">
                    <img src="../../assets/images/cars/4.jpg" alt="Car" class="object-cover w-full h-[246px] rounded-[4px]">
                    <img src="../../assets/images/cars/5.jpg" alt="Car" class="object-cover w-full h-[246px] rounded-[4px]">
                </div>
            </div>
        </div>

        <!-- Popular Services -->
        <div id="services" class="w-full h-fit grid justify-items-center gap-12 px-12">
            <p class="text-center text-[32px] text-dim-gray">Popular Services</p>

            <div class="w-full h-fit grid grid-cols-3 gap-4 justify-items-center items-center over">
                <!-- Window Tinting -->
                <div class="w-[380px] mx-auto h-full px-6 py-12 grid bg-sidebar-bg  rounded-[4px]">
                    <div class="w-full h-fit grid gap-4">
                        <img src="../../assets/images/window.png" alt="Window Tinting" class="h-[50px]  mx-auto">

                        <p class="text-[20px] font-light text-center w-fit mx-auto">Window Tinting</p>

                        <p class="text-center">Curabitur eu velit at velit egestas egestas. Praesent elit sapien, dictum sed dolor sed, commodo gravida ipsum. Ut ante elit, ornare quis odio non, volutpat rutrum dui. Cras vel erat quis nunc faucibus bibendum. Sed purus libero, pharetra vel ullamcorper sed, lobortis eu eros. Quisque accumsan dui et consectetur aliquet. Donec eu nulla in nibh dapibus ornare eget quis mauris.</p>
                    </div>
                </div>

                <!-- Paint Protection -->
                <div class="w-[380px] mx-auto h-full px-6 py-12 grid bg-sidebar-bg  rounded-[4px]">
                    <div class="w-full h-fit grid gap-4">
                        <img src="../../assets/images/wrap.png" alt="Paint Protection" class="h-[50px]  mx-auto">

                        <p class="text-[20px] font-light text-center w-fit mx-auto">Paint Protection</p>

                        <p class="text-center">Curabitur eu velit at velit egestas egestas. Praesent elit sapien, dictum sed dolor sed, commodo gravida ipsum. Ut ante elit, ornare quis odio non, volutpat rutrum dui. Cras vel erat quis nunc faucibus bibendum. Sed purus libero, pharetra vel ullamcorper sed, lobortis eu eros. Quisque accumsan dui et consectetur aliquet. Donec eu nulla in nibh dapibus ornare eget quis mauris.</p>
                    </div>
                </div>

                <!-- Detailing -->
                <div class="w-[380px] mx-auto h-full px-6 py-12 grid bg-sidebar-bg  rounded-[4px]">
                    <div class="w-full h-fit grid gap-4">
                        <img src="../../assets/images/detail.png" alt="Detailing" class="h-[50px]  mx-auto">

                        <p class="text-[20px] font-light text-center w-fit mx-auto">Detailing</p>

                        <p class="text-center">Ut ante elit, ornare quis odio non, volutpat rutrum dui. Cras vel erat quis nunc faucibus bibendum. Sed purus libero, pharetra vel ullamcorper sed, lobortis eu eros. Quisque accumsan dui et consectetur aliquet. Donec eu nulla in nibh dapibus ornare eget quis mauris.</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Mailing List CTA -->
        <div class="w-full h-fit grid px-12">
            <div class="w-full h-fit flex items-center gap-8 py-4 px-12 bg-custom-red rounded-[10px] text-white relative">
                <Icon icon="line-md:email-twotone" height="64px" />

                <div class="w-fit h-fit grid whitespace-nowrap">
                    <p class="font-medium text-[24px]">Stay up to date with all upcoming promotions</p>
                    <p class="font-light">Join our mailing list and get amazing discounts to keep your car looking good</p>
                </div>

                <button class="text-[20px] absolute right-12 bg-white px-4 py-[4px] text-custom-red font-bold rounded-full">Subscribe Now</button>
            </div>
        </div>

        <div class="w-full h-fit grid justify-items-center gap-12 px-12">
            <p class="text-center text-[32px] text-dim-gray">Our Customers</p>

            <div class="w-full h-fit grid grid-cols-4 gap-4 text-[14px]">
                <a target="_blank" href="https://g.co/kgs/zLU3nS" class="w-full h-[225px] p-4 grid gap-2 bg-ghost-white rounded-[4px] overflow-ellipsis relative border-[1px] border-custom-black border-opacity-10">
                    <div class="w-full h-fit grid gap-2">
                        <div class="w-fit h-fit flex items-center gap-4">
                            <img src="../../assets/images/reviews/steven.png" alt="Steven" class="h-[40px]">
                            <p class="truncate font-medium">Steven Thomas Thorne</p>
                        </div>

                        <div class="w-fit h-fit flex items-center gap-[4px]">
                            <Icon v-for="(e, i) in 5" icon="tabler:star-filled" height="24px" class="text-gold" />
                        </div>

                        <p class="text-dim-gray text-[12px]">Excellent customer service. Owner is very knowledgeable, friendly, and reasonable priced. They did a fantastic job on tinting my windows on my classic Benz. I could not be more pleased and highly recommend them. Best window tinting in Wellington!</p>
                    </div>
                </a>

                <a target="_blank" href="https://g.co/kgs/q9ACB6" class="w-full h-[225px] p-4 grid gap-2 bg-ghost-white rounded-[4px] overflow-ellipsis relative border-[1px] border-custom-black border-opacity-10">
                    <div class="w-full h-fit grid gap-2">
                        <div class="w-fit h-fit flex items-center gap-4">
                            <img src="../../assets/images/reviews/patrice.png" alt="Patrice" class="h-[40px]">
                            <p class="truncate font-medium">Patrice Gingras</p>
                        </div>

                        <div class="w-fit h-fit flex items-center gap-[4px]">
                            <Icon v-for="(e, i) in 5" icon="tabler:star-filled" height="24px" class="text-gold" />
                        </div>

                        <p class="text-dim-gray text-[12px]">I took my 2017 Grand Cherokee to have my window tinting reasonable on the price. awesome service very knowledge in 3M products I would recommend  A Xpert window tinting had a nice service waiting area with TV to help the time go by I would definitely recommend them to friends and family.</p>
                    </div>
                </a>

                <a target="_blank" href="https://g.co/kgs/KPy9uG" class="w-full h-[225px] p-4 grid gap-2 bg-ghost-white rounded-[4px] overflow-ellipsis relative border-[1px] border-custom-black border-opacity-10">
                    <div class="w-full h-fit grid gap-2">
                        <div class="w-fit h-fit flex items-center gap-4">
                            <div class="h-[40px] w-[40px] grid bg-custom-black rounded-full text-white font-medium "><p class="m-auto text-[26px]">A</p></div>
                            <p class="truncate font-medium">Andrew Villafane</p>
                        </div>

                        <div class="w-fit h-fit flex items-center gap-[4px]">
                            <Icon v-for="(e, i) in 5" icon="tabler:star-filled" height="24px" class="text-gold" />
                        </div>

                        <p class="text-dim-gray text-[12px]">I work in the unit next to these guys, I walked over and asked him to quote tinting the windows on my truck.  He was able to do it right then and there and did a phenomenal job!  Great people,  great price, and great work!  I will be coming back again</p>
                    </div>
                </a>

                <a target="_blank" href="https://g.co/kgs/nnvQMV" class="w-full h-[225px] p-4 grid bg-ghost-white rounded-[4px] overflow-ellipsis relative border-[1px] border-custom-black border-opacity-10">
                    <div class="w-full h-fit grid gap-2">
                        <div class="w-fit h-fit flex items-center gap-4">
                            <img src="../../assets/images/reviews/randy.png" alt="Randy" class="h-[40px]">
                            <p class="truncate font-medium">Randy Williams</p>
                        </div>

                        <div class="w-fit h-fit flex items-center gap-[4px]">
                            <Icon v-for="(e, i) in 5" icon="tabler:star-filled" height="24px" class="text-gold" />
                        </div>

                        <p class="text-dim-gray text-[12px]">A Xpert tinted both of my vehicles and have done an amazing job each time! Patrick was very tidy and professional when handling my cars and that is much appreciated. I highly recommend them.</p>
                    </div>
                </a>
            </div>
        </div>

        <!-- Our Partners -->
        <div id="contact" class="w-full h-fit grid justify-items-center gap-12 px-12">
            <p class="text-center text-[32px] text-dim-gray">Get in Touch</p>

            <div class="w-full h-fit grid grid-cols-2 gap-2 relative">
                <div class="w-fit h-fit grid grid-cols-2 gap-4 pr-24">
                    <p class="col-span-2 text-[14px] opacity-60">Reach out to our team using the phone number and email below or by using the form to the right; our team is eager to meet you and someone will reach out shortly!</p>

                    <p class="font-medium text-[18px] col-span-2">Business Hours</p>
                    <p>Monday - Friday <br>9:30am to 4:30pm</p>
                    <p><a href="tel:5616760798" class="hover:text-custom-red">(561) 676-0798</a> <br><a href="mailto:nasya@axperttinting" class="hover:text-custom-red">nasya@axperttinting.com</a></p>

                    <hr class="col-span-2">

                    <p class="font-medium text-[18px] col-span-2">Location</p>
                    <div class="w-full h-[300px]">
                        <img src="../../assets/images/maps.png" alt="Google Maps" class="w-full h-full object-cover rounded-[5px]">
                    </div>

                    <a class="hover:text-custom-red w-fit h-fit" target="_blank" href="https://www.google.com/maps/place/A+Xpert+Window+Tinting/@26.634502,-80.2303315,17z/data=!3m1!4b1!4m6!3m5!1s0x88d8d5a400000001:0x1532f07088b6dfb3!8m2!3d26.6344972!4d-80.2277566!16s%2Fg%2F1tscptbc?hl=en-US&entry=ttu">
                            3125 Fortune Way, Suite 5 <br>
                            Wellington, FL 33414</a>
                </div>

                <form action="" class="w-full h-fit grid grid-cols-2 gap-4 bg-sidebar-bg p-8 rounded-[10px] shadow-newdrop">
                    <!-- <p class="mb-4 col-span-2">Enter your information below to receive a call back from our team.</p> -->

                    <input type="text" placeholder="Name" class="h-fit">
                    <input type="tel" placeholder="Phone Number" class="h-fit">
                    <input type="email" placeholder="Email" class="col-span-2 h-fit"> 

                    <textarea rows="5" placeholder="Information about your car and the services you are interested in.." class="col-span-2 rounded-[4px] resize-none focus:ring-0 focus:border-custom-black border-custom-black focus:border-opacity-10 border-opacity-10"></textarea>
                    
                    <p class="col-span-2 text-[12px] text-dim-gray mt-8">By clicking “Submit” below, you agree to the <a href="" class="underline text-custom-red">Terms of Service</a> and acknowledge the <a href="" class="underline text-custom-red">Privacy Policy</a>.</p>
                    <input type="submit" class="col-span-2 h-[48px]">
                </form>
            </div>
        </div>


        <!-- Footer -->
        <Footer />
    </div>
</template>

<script>
import { Icon } from '@iconify/vue';
import Footer from '../components/footer.vue';

export default {
    name: "Home Page",
    components: {
        Icon,
        Footer
    }
}
</script>