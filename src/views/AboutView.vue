<template>
    <div class="flex flex-col ml-3 lg:pt-40 lg:mx-52">
        <div>
            <h1 class="mt-[150px] text-[65px] md:text-center xl:text-start md:mt-[100px] font-extrabold">Contatti</h1>
        </div>
        <ul class="grid md:grid-cols-2 md:gap-2 lg:gap-40 xl:grid-cols-3 xl:grid-rows-2 gap-10 xl:gap-40">
            <AboutCard nome="Andrea" cognome="Mancin" linkedin="https://www.linkedin.com/in/andreamancin/"
                github="https://github.com/andrea-mancin" nostraEmail="andrea.mancin@outlook.com"
                img="public/AndreaMancin.png" />
            <AboutCard nome="Davide" cognome="Genovese"
                linkedin="https://www.linkedin.com/in/davide-genovese-68b9201b8/"
                github="https://github.com/DavideGenovese" nostraEmail="davide.genovese1395@gmail.com"
                img="public/FotoNuova.jpg" />
            <AboutCard nome="Davide" cognome="Rinna" linkedin="https://www.linkedin.com/in/davide-rinna/"
                img="public/DavideRinna.jpeg" github="https://github.com/diseasedavide"
                nostraEmail="rinna.davide@gmail.com" />
            <AboutCard nome="Antonino" cognome="Palma Esposito"
                linkedin="https://www.linkedin.com/in/antonino-palma-esposito-6a9b382b8/"
                github="https://github.com/AntoninoPalmaEsposito" nostraEmail="antonypalmaesposito@hotmail.com"
                img="public/Antonino Palma Esposito.png" />
            <AboutCard nome="Claudio" cognome="Marotta"
                linkedin="https://www.linkedin.com/in/claudio-marotta-1a652a1a1/"
                github="https://github.com/claudiosm10" nostraEmail="claudiosm10@outlook.it" 
                img="public/Claudio Marotta.png"/>
            <AboutCard nome="Giuseppe" cognome="Raineri" linkedin="https://www.linkedin.com/in/giuseppe-raineri1/"
                github="https://github.com/giuserai99" nostraEmail="giusepperaineri68@gmail.com"
                img="public/Giuseppe Ranieri.jpeg" />
        </ul>
    </div>
</template>

<script>
import AboutCard from '../components/AboutCard.vue';

export default {
    components: {
        AboutCard
    },
    mounted() {
        window.scrollTo(0, 0);
    },
};

</script>