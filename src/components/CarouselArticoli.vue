<script>
import { defineComponent } from "vue";
import { Carousel, Navigation, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import SingleArticle from "../components/SingleArticle.vue";

export default defineComponent({
  name: "Breakpoints",
  components: {
    Carousel,
    Slide,
    Navigation,
    SingleArticle,
  },
  data: () => ({
    // carousel settings
    settings: {
      itemsToShow: 1,
      snapAlign: "center",
    },
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
    breakpoints: {
      430: {
        itemsToShow: 1,
        snapAlign: "center",
      },
      // 700px and up
      700: {
        itemsToShow: 1,
        snapAlign: "center",
      },
      // 800px and up
      850: {
        itemsToShow: 2,
        snapAlign: "start",
      },
      1320: {
        itemsToShow: 3,
        snapAlign: "start",
      }
    },
  }),
  props: ["articoli"],
});
</script>

<template>
  <Carousel v-bind="settings" :wrap-around="true" :breakpoints="breakpoints">
    <Slide v-for="(articolo, index) in articoli" :key="index">
      <SingleArticle :autore="articolo.author.name" :resume="articolo.resume.children.text" :titolo="articolo.title"
        :img="articolo.mainImage.asset.url" :slug="articolo.slug.current" />
    </Slide>

    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>
