<script>
import { defineComponent } from 'vue'
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import axios from 'axios'
import SingleArticle from '../components/SingleArticle.vue'

export default defineComponent({
    name: 'Breakpoints',
    components: {
        Carousel,
        Slide,
        Navigation,
        SingleArticle
    },
    data: () => ({
        // carousel settings
        settings: {
            itemsToShow: 1,
            snapAlign: 'center',
        },
        // breakpoints are mobile first
        // any settings not specified will fallback to the carousel settings
        breakpoints: {
            // 700px and up
            700: {
                itemsToShow: 1,
                snapAlign: 'start',
            },
            // 800px and up
            850: {
                itemsToShow: 2,
                snapAlign: 'start',
            },
            // 1024 and up
            1024: {
                itemsToShow: 3,
                snapAlign: 'start',
            },
        },
        articoli: []
    }),
    mounted() {
        axios.get("https://ir44xo6i.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%22post%22%5D+%7B%0A++title%2C%0A++author-%3E%7Bname%7D%2C%0A++mainImage%7B%0A++++asset-%3E%7Burl%7D%0A++%7D%2C%0A++body%5B0%5D%7Bchildren%5B0%5D%7Btext%7D%7D%2C%0A++publishedAt%2C%0A++++categories%5B0%5D-%3E%7Btitle%7D%2C%0A++++resume%5B0%5D%7Bchildren%5B0%5D%7Btext%7D%7D%2C%0A++id%0A%7D")
            .then(response => {
                this.articoli = response.data.result;
                this.articoli.sort((a, b) => a.id - b.id)
            }).catch(error => {
                console.error("Errore durante la chiamata:", error)
            })
    },
})
</script>


<template>
    <Carousel v-bind="settings" :wrap-around="true" :breakpoints="breakpoints">
        <Slide v-for="(articolo, index) in articoli" :key="index">
            <SingleArticle :autore="articolo.author.name" :resume="articolo.resume.children.text"
                :titolo="articolo.title" :img="articolo.mainImage.asset.url" />
        </Slide>

        <template #addons>
            <Navigation />
        </template>
    </Carousel>



</template>
