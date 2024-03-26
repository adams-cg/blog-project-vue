<template>
    <header class="bg-white text-black shadow-lg fixed z-50  h-[100px] w-full flex flex-col justify-center items-center">
        <nav class="w-full flex justify-between items-center px-5 lg:px-16 lg:py-5 ">
            <!-- LOGO BLOG -->
            <div>
                <p class="text-[25px] lg:text-[30px] font-extrabold">&lt;B.log()&gt;</p>
            </div>
            <!-- navigazione -->
            <div class="flex text-[20px] lg:gap-8 font-semibold">
                <button class="hidden lg:block">Home</button>
                <button class="hidden lg:block">Articoli</button>
                <button class="hidden lg:block">Guide</button>
                <button class="hidden lg:block">Zona Marcello</button>
            </div>
            <!-- logo aziendale -->
            <div>
                <p class="hidden lg:block lg:text-[30px] font-extrabold">&lt;Adams CG/&gt;</p>
            </div>
            <div class="lg:hidden flex items-center">
                <button class="w-6 h-6" @click="showMenu">
                    <svg v-if="menu" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path fill="#ffffff"
                            d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
                    </svg>
                    <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                        <path fill="#ffffff"
                            d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                    </svg>
                </button>
            </div>
        </nav>
        <Transition name="slide-fade">
            <div v-if="!menu"
                class="bg-purple-400 flex justify-center text-[20px] leading-4 w-full top-[100px] absolute font-semibold lg:gap-8">

                <div  class="text-black flex flex-col gap-3 py-5">
                    <button class="">Home</button>
                    <button class="">Articoli</button>
                    <button class="">Guide</button>
                    <button class="">Zona Marcello</button>
                </div>

            </div>
        </Transition>
    </header>

    
</template>

<script>
export default {
    data() {
        return {
            menu: true,
            scrollPosition: 0,
        }
    },
    methods: {
        showMenu() {
            this.menu = !this.menu
        }
       

        
    }
   
}
</script>