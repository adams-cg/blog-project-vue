<template>

  <!-- TODO: sezione articolo in evidenza -->

  <p class=" text-[200px]"> {{ articolo.title }}</p>



  <Carousel v-bind="settings" :wrap-around="true" :breakpoints="breakpoints">
    <Slide v-for="(image, index) in images" :key="index">
      <div class="flex justify-center items-center w-[200px] h-[200px] border-2 rounded-lg mb-[100px]">
        <img :src=image alt="Slide Image" class="w-[150px] h-[150px] object-contain">
      </div>
    </Slide>

    <template #addons>
      <Navigation />
    </template>
  </Carousel>


  <CarouselArticoli />


</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import axios from 'axios'
import CarouselArticoli from '../components/CarouselArticoli.vue'

export default defineComponent({
  name: 'Breakpoints',
  components: {
    Carousel,
    Slide,
    Navigation,
    CarouselArticoli
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
        itemsToShow: 2,
        snapAlign: 'start',
      },
      // 800px and up
      850: {
        itemsToShow: 3,
        snapAlign: 'start',
      },
      // 1024 and up
      1024: {
        itemsToShow: 5,
        snapAlign: 'start',
      },
    },
    images: [
      "src/assets/logos_html-5.png",
      "src/assets/logos_css-3.png",
      "src/assets/logos_javascript.png",
      "src/assets/logos_nodejs.png",
      "src/assets/logos_pinia.png",
      "src/assets/logos_sanity.png",
      "src/assets/logos_visual-studio-code.png",
      "src/assets/logos_vue.png",
      "src/assets/mdi_github.png",
      "src/assets/Vector.png"
    ],
    articoli:[],
    articolo:{}
  }),
  mounted() {
        axios.get("https://ir44xo6i.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%22post%22%5D+%7B%0A++title%2C%0A++author-%3E%7Bname%7D%2C%0A++mainImage%7B%0A++++asset-%3E%7Burl%7D%0A++%7D%2C%0A++body%5B0%5D%7Bchildren%5B0%5D%7Btext%7D%7D%2C%0A++publishedAt%2C%0A++++categories%5B0%5D-%3E%7Btitle%7D%2C%0A++++resume%5B0%5D%7Bchildren%5B0%5D%7Btext%7D%7D%2C%0A++id%0A%7D")
        .then(response => {
            
            this.articoli = response.data.result
            this.articoli.sort((a,b) => a.id - b.id )
            this.articolo = this.articoli[this.articoli.length - 1]
          
            
            
            
        }).catch(error => {
            console.error(error)
        });
}})
</script>
