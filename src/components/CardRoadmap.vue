<template>
    <!-- Front end -->
    <div v-if="docs.frontEnd" class="flex flex-col justify-center items-center my-4">
        <h1 class="font-extrabold mb-4">{{ docs.frontEnd.title }}</h1>
        <h1 class="font-mono">{{ docs.frontEnd.description }}</h1>
    </div>
    <div class="flex justify-center items-center">
        <img v-for="src in docs.frontEnd.immagini" :src="src" alt="loghi linguaggi front end" class="mx-4 w-20 h-20">
    </div>
      <!-- Back end -->
    <div v-if="docs.backEnd" class="flex flex-col justify-center items-center my-4">
        <h1 class="font-extrabold mb-4">{{ docs.backEnd.title }}</h1>
        <h1 class="font-mono">{{ docs.backEnd.description }}</h1>
    </div>
    <div class="flex justify-center items-center">
        <img v-for="src in docs.backEnd.immagini" :src="src" alt="loghi linguaggi back end" class="mx-4 w-20 h-20">
    </div>
    <!-- AI -->
    <div v-if="docs.AI" class="flex flex-col justify-center items-center my-4">
        <h1 class="font-extrabold mb-4">{{ docs.AI.title }}</h1>
        <h1 class="font-mono">{{ docs.AI.description }}</h1>
    </div>
    <div class="flex justify-center items-center">
        <img v-for="src in docs.AI.immagini" :src="src" alt="loghi linguaggi AI" class="mx-4 w-20 h-20">
    </div>
    <!-- CMS -->
    <div v-if="docs.CMS" class="flex flex-col justify-center items-center my-4">
        <h1 class="font-extrabold" >{{ docs.CMS.title }}</h1>
        <h1 class="font-mono">{{ docs.CMS.description }}</h1>
    </div>
    <div class="flex justify-center items-center">
        <img v-for="src in docs.CMS.immagini" :key="key" :src="src" :style="{opacity:selectedImageStyle===index ? 0.4:1}" alt="loghi linguaggi CMS" class="mx-4 w-[150px] h-[100px]">
    </div>
</template>
<script>
export default{  
    data:()=> ({
        docs:{
        frontEnd:{  
            "title": "Front-End Development",
            "description": "Learn about front-end technologies such as HTML, CSS, JavaScript, and frameworks like Vue.js.",
            "immagini" : {
            "vsCode": "src/assets/logos_visual-studio-code.png",
            "html":"src/assets/logos_html-5.png",
            "css":"src/assets/logos_css-3.png",
            "tailwind":"src/assets/Vector.png",
            "bootstrap":"src/assets/bootstrap.png",
            "git":"src/assets/mdi_github.png",
            "js":"src/assets/logos_javascript.png",
            "npm":"src/assets/npm.png",
            "vue":"src/assets/logos_vue.png",
            "react":"src/assets/react.png",
            "vercel":"src/assets/vercel.png",
        }},
        backEnd:{  
            "title": "Back-End Development",
            "description": "Explore back-end technologies like Node.js, databases, APIs, and server-side programming.",
            "immagini":{
            "database":"src/assets/Database.png",
            "sql":"src/assets/sql.png",
            "mongodb":"src/assets/mongo.png",
            "vsCode": "src/assets/logos_visual-studio-code.png",
            "node":"src/assets/logos_nodejs.png",
            "php":"src/assets/php.png",
            "git":"src/assets/mdi_github.png",
            "vercel":"src/assets/vercel.png",
        }},
        AI:{  
            "title": "AI",
            "description": "Learn about Intelligence Artificial",
            "immagini":{
            "vsCode": "src/assets/logos_visual-studio-code.png",
            "python":"src/assets/python.png",
            "chatgpt":"src/assets/chatgpt.png",
            "midjourney":"src/assets/midjourney.png",
        }},
        CMS:{  
            "title": "CMS",
            "description": "Learn about CMS",
            "immagini":{
            "sanity": "src/assets/logos_sanity.png",
            "wordpress":"src/assets/wordpress.png",
            }
        },
        selectedImageStyle:0
    }})
    }
</script>