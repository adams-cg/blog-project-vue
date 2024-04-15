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
        <h1 class="font-extrabold text-center px-14 mb-4 text-[50px]"> {{ docs[choice].title }} </h1>
        <p class="font-mono text-center px-14 text-[30px]">{{ docs[choice].description }}</p>
    </div>
    <div class=" flex justify-center items-center pt-10">
        <div class="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-col-4 justify-center items-center">
            <img v-for="(src,index) in docs[choice].immagini" :key="index" :src="src" alt="loghi linguaggi front end"
                     :class="{'mx-4 w-[120px] h-[120px] object-contain opacity-45 border-2 rounded-lg px-4 hover:scale-125':true,
                                }">
         </div>
    </div>
</template>
<script>
export default {
    data: () => ({
        docs: [
            {
                "title": "Front-End Development",
                "description": "Lo sviluppo front-end riguarda la progettazione e la creazione degli elementi visibili e interattivi di un sito web o di un'applicazione. Si concentra sull'aspetto e sull'esperienza utente, utilizzando tecnologie come HTML, CSS e JavaScript per implementare layout, stili e funzionalità che gli utenti vedono e con cui interagiscono direttamente.",
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
                "description": "Lo sviluppo back-end si occupa della parte dietro le quinte di un sito web o di un'applicazione, gestendo il server, il database e la logica di business. Gli sviluppatori back-end utilizzano linguaggi come Python, Java, PHP o Node.js per creare e gestire i servizi e le funzionalità non visibili direttamente agli utenti, come l'elaborazione dei dati, l'autenticazione degli utenti e la gestione delle operazioni server-side.",
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
                "description": "L'intelligenza artificiale (AI) si riferisce alla capacità di un sistema informatico di imitare le funzioni cognitive umane, come il ragionamento, l'apprendimento e il problem solving. L'AI utilizza algoritmi complessi e dati per migliorare nel tempo le proprie prestazioni, consentendo di automatizzare compiti, prendere decisioni basate sui dati e sviluppare sistemi che possono simulare l'intelligenza umana in diversi contesti applicativi.",
                "immagini": [
                    "src/assets/logos_visual-studio-code.png",
                    "src/assets/python.png",
                    "src/assets/chatgpt.png",
                    "src/assets/midjourney.png",
                ]
            },
            {
                "title": "CMS",
                "description": "I Content Management System (CMS) sono piattaforme software che consentono la creazione, la gestione e la modifica di contenuti digitali su siti web senza richiedere conoscenze tecniche avanzate di programmazione. I CMS offrono un'interfaccia utente intuitiva per aggiungere e modificare testi, immagini, video e altri elementi. Esempi popolari di CMS includono WordPress, Joomla e Drupal, che consentono agli utenti di creare e mantenere siti web dinamici e aggiornabili in modo efficiente.",
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