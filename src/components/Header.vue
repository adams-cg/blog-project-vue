<template>
    <header class="bg-[#213546] text-[#f1f1f1] border-b-8 border-[#42b983] h-[100px] w-screen flex items-center">
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
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path fill="#ffffff"
                            d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
                    </svg>
                </button>
                <div v-show="menu" class="flex flex-col">
                    <button class="">Home</button>
                    <button class="">Articoli</button>
                    <button class="">Guide</button>
                    <button class="">Zona Marcello</button>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    data() {
        return {
            menu: false
        }
    },
    methods: {
        showMenu() {
            this.menu = !this.menu
        }
    }
}
</script>