<template>
    <div class="mt-20 mx-52">
        <div>
            <h1 class="text-[65px] font-extrabold">About Us</h1>
        </div>
        <ul class="grid grid-cols-4 grid-rows-2 gap-10">
            <AboutCard nome="Andrea" cognome="Mancin" linkedin="https://www.linkedin.com/in/andreamancin/"
                github="https://github.com/andrea-mancin" nostraEmail="rinna.davide@gmail.com" />
            <AboutCard nome="Davide" cognome="Genovese"
                linkedin="https://www.linkedin.com/in/davide-genovese-68b9201b8/"
                github="https://github.com/DavideGenovese" nostraEmail="davide.genovese1395@gmail.com" />
            <AboutCard nome="Davide" cognome="Rinna" linkedin="https://www.linkedin.com/in/davide-rinna/"
                github="https://github.com/diseasedavide" nostraEmail="rinna.davide@gmail.com" />
            <AboutCard nome="Antonio" cognome="Licitra" linkedin="https://www.linkedin.com/in/antonio-licitra/"
                github="https://github.com/AntonioLicitra" nostraEmail="antolici@outlook.com" />
            <AboutCard nome="Antonino" cognome="Palma Esposito"
                linkedin="https://www.linkedin.com/in/antonino-palma-esposito-6a9b382b8/"
                github="https://github.com/AntoninoPalmaEsposito" nostraEmail="antonypalmaesposito@hotmail.com" />
            <AboutCard nome="Marcello Andrea" cognome="Licciardello" linkedin="https://www.linkedin.com/in/kyradev-lma/"
                github="https://github.com/KyraelDev" nostraEmail="kyrael.dev@gmail.com" />
            <AboutCard nome="Claudio" cognome="Marotta"
                linkedin="https://www.linkedin.com/in/claudio-marotta-1a652a1a1/"
                github="https://github.com/claudiosm10" nostraEmail="claudiosm10@outlook.it" />
            <AboutCard nome="Giuseppe" cognome="Raineri" linkedin="https://www.linkedin.com/in/giuseppe-raineri1/"
                github="https://github.com/giuserai99" nostraEmail="giusepperaineri68@gmail.com" />
            <AboutCard nome="Simone" cognome="Di Meglio" linkedin="https://www.linkedin.com/in/simonedimeglio/"
                github="https://github.com/simonedimeglio" nostraEmail="rinna.davide@gmail.com" />
        </ul>
    </div>
</template>

<script>
import AboutCard from '../components/AboutCard.vue';

export default {
    components: {
        AboutCard
    },
};

</script>