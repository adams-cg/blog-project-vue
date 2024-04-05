<template>
<div class="pt-40 flex justify-center items-center"><h1 class="border-4 border-black border-dotted rounded-lg px-8 py-[4px] text-[20px]">Nuova aggiunta</h1></div>
    <div class="flex flex-col justify-center items-center font-extrabold text-[30px] md:text-[35px] lg:text-[40px]">
        <h1 class="from-black via-zinc-700 to-slate-500 bg-clip-text text-transparent bg-gradient-to-b">Documentazioni</h1>
    </div>
    <div class="flex justify-center items-center "><p class="mt-4 italic px-[80px] md:px-[150px] lg:px-[200px] text-justify text-[18px] md:text-[21px] lg:text-[23px]">La nostra documentazione completa sui linguaggi di programmazione offre un'approfondita guida per sviluppatori di ogni livello. Inoltre, forniamo roadmap specifiche per le diverse branche della programmazione, inclusi il <span class="font-bold">front-end</span>, il <span class="font-bold">back-end</span>, <span class="font-bold">l'intelligenza artificiale</span> e altro ancora. Queste roadmap delineano i percorsi consigliati per acquisire competenze e conoscenze cruciali in ciascuna area, aiutando gli sviluppatori a pianificare il loro percorso di apprendimento in modo mirato e progressivo. Indipendentemente dall'ambito di interesse, la nostra documentazione offre un prezioso supporto per chiunque voglia approfondire le proprie competenze e rimanere aggiornato sulle ultime tecnologie e best practice nel mondo della programmazione.</p></div>
    <hr class="mt-4">
    <!-- Grid delle roadmap -->
    <div v-for="{nome,img} in guide" class="mt-4 flex justify-center items-center">
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <p>{{nome}}</p>
        <img :src="img" alt="Loghi linguaggi" class="w-[200px] h-auto">
    </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    data: ()=>({  
        guide:[{  
            "id":0,
            "nome":"Front End",
            "img":"src/assets/_cd3790e9-4c98-4271-84bc-5e04fff6bcf1.jpeg"
        },
        {  
            "id":1,
            "nome":"Back End",
            "img":"src/assets/_2e510d09-29d3-4b03-8c21-4b8750691387.jpeg"
        },
        {  
            "id":2,
            "nome":"AI",
            "img":"src/assets/_672b971a-a124-454c-8bb2-2a4bf0dd9cc5.jpeg"
        },
        {  
            "id":3,
            "nome":"CMS",
            "img":"src/assets/_337e7828-859d-4a09-adca-d7f0673a46eb.jpeg"
        },
    ]
    }),
})
</script>