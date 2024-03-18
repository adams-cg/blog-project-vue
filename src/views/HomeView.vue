<template>
  <Carousel v-bind="settings" :wrap-around="true" :breakpoints="breakpoints">
    <Slide v-for="(image, index) in images" :key="index">
      <div class="bg-red-500 w-[200px] h-[200px]">
        <img :src=image alt="Slide Image">
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
        itemsToShow: 3.5,
        snapAlign: 'center',
      },
      // 1024 and up
      1024: {
        itemsToShow: 5,
        snapAlign: 'start',
      },
    },
    images: [
       "/src/assets/logos_html-5.png",
      '/src/assets/logos_css-3.png',
      '/src/assets/logos_html-5.png',
      // Add more image paths as needed
    ],
  }),
})
</script>
