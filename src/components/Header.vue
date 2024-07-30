<template>
    
    <header
        class="bg-white text-black   shadow-lg  rounded-b-[50px] fixed z-50  h-[100px] flex flex-col justify-center  items-center">
        <nav class="w-screen flex justify-between items-center px-5 lg:px-16 lg:py-5 ">
            <!-- LOGO BLOG -->
            <div>
                <RouterLink to="/">
                    <p class="pl-3 text-[25px] lg:text-[30px] font-extrabold" @click="menuArticle = false, menu = true">
                        &lt;B.log()&gt;</p>
                </RouterLink>
            </div>
            <!-- navigazione -->
            <div class="flex text-[20px] lg:gap-8 font-semibold">
                <RouterLink to="/">
                    <button class="hidden lg:block hover:underline underline-offset-8"
                        @click="menuArticle = false">Home</button>
                </RouterLink>
                <div class="flex cursor-pointer gap-10" @mouseover="bounce=true" @mouseleave="bounce=false">
                <button class="hidden lg:block" @click="articleMenu">Articoli</button>
                <button class="hidden lg:block" @click="articleMenu" 
                ><svg xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                        class="w-6 h-6 ml-[-30px] mt-[7px]"
                        :class="{ 'animate-bounce': bounce}"
                        >
                        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                </button>
                </div>
                <RouterLink to="/guide">
                    <button class="hidden lg:block hover:underline underline-offset-8"
                        @click="menuArticle = false">Guide</button>
                </RouterLink>
                <RouterLink to="/contatti">
                    <button class="hidden lg:block hover:underline underline-offset-8"
                        @click="menuArticle = false">Contatti</button>
                </RouterLink>
            </div>
            <!-- logo aziendale -->
            <div>
                <p class="hidden lg:block lg:text-[30px] font-extrabold">&lt;Adams CG/&gt;</p>
            </div>
            <div class="pr-6 lg:hidden flex items-center">
                <button class="w-7 h-7" @click="showMenu">
                    <svg v-if="menu" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path fill="#000"
                            d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
                    </svg>
                    <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                        <path fill="#000"
                            d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                    </svg>
                </button>
            </div>
        </nav>
        <!-- Menu da mobile principale -->
        <Transition name="slide-fade">
            <div v-if="!menu"
                class="bg-slate-300 bg-opacity-30 backdrop-blur-lg  mt-4 ml-[-13px] flex rounded-[30px] justify-center px-4 text-[22px]  w-[97%] top-[100px] absolute font-semibold lg:gap-8">
                <Transition name="slide-fade">
                    <div v-if="!menuSubArticle" class="text-black flex flex-col gap-3 py-10  lg:hidden">
                        <RouterLink to="/">
                            <button @click="menu = true" class="">Home</button>
                        </RouterLink>
                        <button @click="subArticleMenu" class="">Articoli<svg xmlns="http://www.w3.org/2000/svg"
                                fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                class="w-6 h-6 inline-flex ml-4 mb-[5px]">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </button>
                        <RouterLink to="/guide">
                            <button @click="menu = true" class="">Guide</button>
                        </RouterLink>
                        <RouterLink to="/contatti">
                            <button @click="menu = true" class="">Contatti</button>
                        </RouterLink>
                    </div>
                </Transition>
                <!-- sottomenu articoli  -->
                <Transition name="slide-fade">
                    <div v-if="menuSubArticle"
                        class="text-black  text-center flex flex-col gap-3 transition-0 py-10 lg:hidden">

                        <button @click="subArticleMenu" class="underline underline-offset-4"><svg
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6 absolute top-[46px] ml-[-20px]">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                            </svg>Articoli</button>
                        <RouterLink to="/frontend">
                            <button @click="menuSubArticle = false, menu = true" class="">Front End </button>
                        </RouterLink>
                        <RouterLink to="/backend">
                            <button @click="menuSubArticle = false, menu = true" class="">Back End</button>
                        </RouterLink>

                        <RouterLink to="/cms">
                            <button @click="menuSubArticle = false, menu = true" class="">CMS</button>
                        </RouterLink>
                        <RouterLink to="/ai">
                            <button @click="menuSubArticle = false, menu = true" class="">AI</button>
                        </RouterLink>
                        <RouterLink to="/articoli">
                            <button @click="menuSubArticle = false, menu = true" class="">Archivio</button>
                        </RouterLink>
                    </div>
                </Transition>
            </div>
        </Transition>

        <!-- Menu secondario da desktop di articoli -->
        <Transition name="slide-fade">
            <div v-if="menuArticle"
                class="bg-slate-300 bg-opacity-30 backdrop-blur-lg hidden lg:flex justify-center mt-[12px] rounded-[30px] text-[20px] leading-4 w-[98%] ml-[-15px] top-[100px] absolute font-semibold lg:gap-8">
                <div class="text-black flex flex-col gap-3  py-5 ml-[-26px] lg:flex-row">
                    <RouterLink to="/frontend">
                        <button @click="menuArticle = false" class="mr-2 hover:underline hover:underline-offset-4">Front
                            End</button>
                    </RouterLink>
                    <RouterLink to="/backend">
                        <button @click="menuArticle = false" class="mr-2 hover:underline hover:underline-offset-4">Back
                            End</button>
                    </RouterLink>
                    <RouterLink to="/cms">
                        <button @click="menuArticle = false"
                            class="mr-2 hover:underline hover:underline-offset-4">CMS</button>
                    </RouterLink>
                    <RouterLink to="/ai">
                        <button @click="menuArticle = false"
                            class="mr-2 hover:underline hover:underline-offset-4">AI</button>
                    </RouterLink>
                    <RouterLink to="/articoli">
                        <button @click="menuArticle = false"
                            class="mr-2 hover:underline hover:underline-offset-4">Archivio</button>
                    </RouterLink>
                </div>
            </div>
        </Transition>



    </header>


</template>

<script>
import { RouterLink } from 'vue-router';

export default {
    data() {
        return {
            menu: true,
            scrollPosition: 0,
            menuArticle: false,
            menuSubArticle: false,
            bounce: false
        }
    },
    methods: {
        showMenu() {
            this.menu = !this.menu
            if (this.menuSubArticle) {
                this.menuSubArticle = false
            }
        },
        articleMenu() {
            this.menuArticle = !this.menuArticle
        },
        subArticleMenu() {
            this.menuSubArticle = !this.menuSubArticle
        },
    }

}
</script>