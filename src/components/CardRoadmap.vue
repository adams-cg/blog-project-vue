<template>
    <!-- Front end -->
    <!-- <div v-if="docs.frontEnd" class="flex flex-col justify-center items-center my-4">
        <h1 class="font-extrabold mb-4">{{ docs.frontEnd.title }}</h1>
        <h1 class="font-mono">{{ docs.frontEnd.description }}</h1>
    </div>
    <div class="flex justify-center items-center">
        <img v-for="src in docs.frontEnd.immagini" :src="src" alt="loghi linguaggi front end" class="mx-4 w-20 h-20">
    </div> -->
    <!-- Back end -->
    <!-- <div v-if="docs.backEnd" class="flex flex-col justify-center items-center my-4">
        <h1 class="font-extrabold mb-4">{{ docs.backEnd.title }}</h1>
        <h1 class="font-mono">{{ docs.backEnd.description }}</h1>
    </div>
    <div class="flex justify-center items-center">
        <img v-for="src in docs.backEnd.immagini" :src="src" alt="loghi linguaggi back end" class="mx-4 w-20 h-20">
    </div> -->
    <!-- AI -->
    <!-- <div v-if="docs.AI" class="flex flex-col justify-center items-center my-4">
        <h1 class="font-extrabold mb-4">{{ docs.AI.title }}</h1>
        <h1 class="font-mono">{{ docs.AI.description }}</h1>
    </div>
    <div class="flex justify-center items-center">
        <img v-for="src in docs.AI.immagini" :src="src" alt="loghi linguaggi AI" class="mx-4 w-20 h-20">
    </div> -->
    <!-- CMS -->
    <!-- <div v-if="docs.CMS" class="flex flex-col justify-center items-center my-4">
        <h1 class="font-extrabold" >{{ docs.CMS.title }}</h1>
        <h1 class="font-mono">{{ docs.CMS.description }}</h1>
    </div>
    <div class="flex justify-center items-center">
        <img v-for="src in docs.CMS.immagini" :key="key" :src="src" :style="{opacity:selectedImageStyle===index ? 0.4:1}" alt="loghi linguaggi CMS" class="mx-4 w-[150px] h-[100px]">
    </div>  -->
    <div class="flex flex-col justify-center items-center pt-[80px]">
        <h1 class="font-extrabold mb-4 text-[100px]"> {{ docs[choice].title }} </h1>
        <p class="font-mono px-14 text-[35px]">{{ docs[choice].description }}</p>
    </div>
    <div class="flex justify-center items-center pt-10">
        <img v-for="src in docs[choice].immagini " :src="src" alt="loghi linguaggi front end"
            class="mx-4 w-[100px] h-[100px] object-contain hover:scale-125 ">
    </div>
</template>
<script>
export default {
    data: () => ({
        docs: [
            {
                "title": "Front-End Development",
                "description": "Learn about front-end technologies such as HTML, CSS, JavaScript, and frameworks like Vue.js.",
                "immagini": [
                    "src/assets/logos_visual-studio-code.png",
                    "src/assets/logos_html-5.png",
                    "src/assets/logos_css-3.png",
                    "src/assets/Vector.png",
                    "src/assets/bootstrap.png",
                    "src/assets/mdi_github.png",
                    "src/assets/logos_javascript.png",
                    "src/assets/npm.png",
                    "src/assets/logos_vue.png",
                    "src/assets/react.png",
                    "src/assets/vercel.png",
                ]
            },
            {
                "title": "Back-End Development",
                "description": "Explore back-end technologies like Node.js, databases, APIs, and server-side programming.",
                "immagini": [
                    "src/assets/Database.png",
                    "src/assets/sql.png",
                    "src/assets/mongo.png",
                    "src/assets/logos_visual-studio-code.png",
                    "src/assets/logos_nodejs.png",
                    "src/assets/php.png",
                    "src/assets/mdi_github.png",
                    "src/assets/vercel.png",
                ]
            },
            {
                "title": "AI",
                "description": "Learn about Intelligence Artificial",
                "immagini": [
                    "src/assets/logos_visual-studio-code.png",
                    "src/assets/python.png",
                    "src/assets/chatgpt.png",
                    "src/assets/midjourney.png",
                ]
            },
            {
                "title": "CMS",
                "description": "Learn about CMS",
                "immagini": [
                    "src/assets/logos_sanity.png",
                    "src/assets/wordpress.png",
                ]
            },
        ]
    }),
    props: ["choice"],
}
</script>