<template>
    <div class="flex flex-col justify-center items-center pt-[40px]">
        <h1 class="font-extrabold text-center px-[40px] text-[40px] md:px-14 mb-4 md:text-[50px]"> {{ docs[choice].title }} </h1>
        <p class="font-mono px-[40px] text-center text-[18px] md:text-center md:px-14 md:text-[30px]">{{ docs[choice].description }}</p>
    </div>
    <div class=" flex justify-center items-center pt-10">
        <div class="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-col-4 justify-center items-center">
            <img v-for="(src, index) in docs[choice].immagini" :key="index" :src="src" alt="loghi dei linguaggi" :class="{
                'mx-4 w-[120px] h-[120px] object-contain opacity-45 border-2 rounded-lg px-4 hover:scale-125': true,
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
                    "/logos_visual-studio-code.png",
                    "/logos_html-5.png",
                    "/logos_css-3.png",
                    "/Vector.png",
                    "/bootstrap.png",
                    "/mdi_github.png",
                    "/logos_javascript.png",
                    "/npm.png",
                    "/logos_vue.png",
                    "/react.png",
                    "/vercel.png",
                ]
            },
            {
                "title": "Back-End Development",
                "description": "Lo sviluppo back-end si occupa della parte dietro le quinte di un sito web o di un'applicazione, gestendo il server, il database e la logica di business. Gli sviluppatori back-end utilizzano linguaggi come Python, Java, PHP o Node.js per creare e gestire i servizi e le funzionalità non visibili direttamente agli utenti, come l'elaborazione dei dati, l'autenticazione degli utenti e la gestione delle operazioni server-side.",
                "immagini": [
                    "/Database.png",
                    "/sql.png",
                    "/mongo.png",
                    "/logos_visual-studio-code.png",
                    "/logos_nodejs.png",
                    "/php.png",
                    "/mdi_github.png",
                    "/vercel.png",
                ]
            },
            {
                "title": "AI",
                "description": "L'intelligenza artificiale (AI) si riferisce alla capacità di un sistema informatico di imitare le funzioni cognitive umane, come il ragionamento, l'apprendimento e il problem solving. L'AI utilizza algoritmi complessi e dati per migliorare nel tempo le proprie prestazioni, consentendo di automatizzare compiti, prendere decisioni basate sui dati e sviluppare sistemi che possono simulare l'intelligenza umana in diversi contesti applicativi.",
                "immagini": [
                    "/logos_visual-studio-code.png",
                    "/python.png",
                    "/chatgpt.png",
                    "/midjourney.png",
                ]
            },
            {
                "title": "CMS",
                "description": "I Content Management System (CMS) sono piattaforme software che consentono la creazione, la gestione e la modifica di contenuti digitali su siti web senza richiedere conoscenze tecniche avanzate di programmazione. I CMS offrono un'interfaccia utente intuitiva per aggiungere e modificare testi, immagini, video e altri elementi. Esempi popolari di CMS includono WordPress, Joomla e Drupal, che consentono agli utenti di creare e mantenere siti web dinamici e aggiornabili in modo efficiente.",
                "immagini": [
                    "/logos_sanity.png",
                    "/wordpress.png",
                    "/drupal.png"
                ]
            },
        ]
    }),
    props: ["choice"],
}
</script>