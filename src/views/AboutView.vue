<template>
    <div class="mt-20 mx-52">
        <div>
            <h1 class="text-[65px] font-extrabold">About Us</h1>
        </div>
        <ul class="grid grid-cols-4 grid-rows-2 gap-10">
            <AboutCard nome="Andrea" cognome="Mancin" linkedin="https://www.linkedin.com/in/andreamancin/" github="https://github.com/andrea-mancin" />
            <AboutCard nome="Davide" cognome="Genovese" linkedin="https://www.linkedin.com/in/davide-genovese-68b9201b8/" github="https://github.com/DavideGenovese" />
            <AboutCard nome="Davide" cognome="Rinna" linkedin="https://www.linkedin.com/in/davide-rinna/" github="https://github.com/diseasedavide"/>
            <AboutCard nome="Antonio" cognome="Licitra" linkedin="https://www.linkedin.com/in/antonio-licitra-9811b8198/" github="https://github.com/AntonioLicitra" />
            <AboutCard nome="Antonino" cognome="Palma Esposito" linkedin="https://www.linkedin.com/in/antonino-palma-esposito-6a9b382b8/" github="https://github.com/AntoninoPalmaEsposito" />
            <AboutCard nome="Marcello Andrea" cognome="Licciardello" linkedin="https://www.linkedin.com/in/kyradev-lma/" github="https://github.com/KyraelDev" />
            <AboutCard nome="Claudio" cognome="Marotta" linkedin="https://www.linkedin.com/in/claudio-marotta-1a652a1a1/" github="https://github.com/claudiosm10" />
            <AboutCard nome="Giuseppe" cognome="Raineri" linkedin="https://www.linkedin.com/in/giuseppe-raineri-0944261a7/" github="https://github.com/giuserai99" />
            <AboutCard nome="Simone" cognome="Di Meglio" linkedin="https://www.linkedin.com/in/simonedimeglio/" github="https://github.com/simonedimeglio" />
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