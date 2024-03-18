<template>
    <header class="bg-[#213546] text-[#f1f1f1] border-b-8 border-[#42b983]">
        <nav class="flex justify-between items-center px-16 py-5 ">
            <!-- LOGO BLOG -->
            <div>
                <p class="text-[30px] font-extrabold">&lt;B.log()&gt;</p>
            </div>
            <!-- navigazione -->
            <div class="flex text-[20px] gap-8 font-semibold">
                <RouterLink to="home">Home</RouterLink>
                <button>Articoli</button>
                <button>Guide</button>
                <RouterLink to="frontend">Frontend</RouterLink>
                <button>Backend</button>
                <button>Dev.map()</button>
            </div>
            <!-- logo aziendale -->
            <div>
                <p class="text-[30px] font-extrabold">&lt;Adams CG/&gt;</p>
            </div>
        </nav>
    </header>
</template>

<script>
import { RouterLink } from 'vue-router';

    export default {
        
    }
</script>