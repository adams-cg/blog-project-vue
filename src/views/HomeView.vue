<template>
  <Carousel v-bind="settings" :wrap-around="true" :breakpoints="breakpoints">
    <Slide v-for="(image, index) in images" :key="index">
      <div class="flex justify-center items-center w-[200px] h-[200px] border-2 rounded-lg">
        <img :src=image alt="Slide Image" class="w-[150px] h-[150px] object-contain">
      </div>
    </Slide>

    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Navigation, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
  name: 'Breakpoints',
  components: {
    Carousel,
    Slide,
    Navigation,
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
      850:{  
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
    ]
    
  }),
})
</script>
