<template>
  <main class="px-[24px]">
    <!-- TODO: sezione articolo in evidenza -->
    <section
      class="flex w-full flex-col justify-center items-center mb-[200px] pt-40 md:justify-around md:flex-row"
    >
      <div>
        <p class="text-[50px] font-bold md:text-[60px] lg:text-[80px] ">
          {{ title }}
        </p>
        <p class=" text-[20px] font-semibold md:text-[25px] lg:text-[30px]">
          {{ text }}
        </p>

        <RouterLink :to="{ path: '/articolo/' + slug }"><button
          class="mt-[50px] border-[2px] border-black rounded-2xl p-2 w-[160px] font-semibold text-[20px] mb-10 lg:mb-0"
        >
          Scopri di più
        </button></RouterLink>
      </div>

      <img :src="urlImage" class="col-span-full w-[300px] h-[300px]" />
    </section>

    <Carousel
      v-bind="settings"
      :wrap-around="true"
      :breakpoints="breakpoints"
      class="mb-[200px]"
    >
      <Slide v-for="(image, index) in images" :key="index">
        <div
          class="flex justify-center items-center w-[200px] h-[200px] border-2 rounded-lg"
        >
          <img
            :src="image"
            alt="Slide Image"
            class="w-[150px] h-[150px] object-contain"
          />
        </div>
      </Slide>

      <template #addons>
        <Navigation />
      </template>
    </Carousel>

    <CarouselArticoli :articoli="content" />
  </main>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Navigation, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import CarouselArticoli from "../components/CarouselArticoli.vue";
import sanity from "../../sanity.js";
const query = `*[_type == "post"]{
  title,
  slug{current},
  author->{name},
  mainImage{
    asset->{url}
  },
  body[0]{children[0]{text}},
  publishedAt,
  categories[0]->{title},
  resume[0]{children[0]{text}},
} | order(publishedAt desc) [0...5]`;

export default defineComponent({
  name: "Breakpoints",
  components: {
    Carousel,
    Slide,
    Navigation,
    CarouselArticoli,
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
      // 700px and up
      700: {
        itemsToShow: 2,
        snapAlign: "start",
      },
      // 800px and up
      850: {
        itemsToShow: 3,
        snapAlign: "start",
      },
      // 1024 and up
      1024: {
        itemsToShow: 4,
        snapAlign: "start",
      },
      1320: {
        itemsToShow: 5,
        snapAlign: "start",
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
      "src/assets/Vector.png",
    ],
    loading: true,
    content: [],
    title: "",
    text: "",
    urlImage: "",
    slug:""
  }),
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.error = this.post = null;
      this.loading = true;
      sanity.fetch(query).then(
        (content) => {
          this.loading = false;
          this.content = content;
          this.title = content[0].title;
          this.text = content[0].resume.children.text;
          this.urlImage = content[0].mainImage.asset.url;
          this.slug=content[0].slug.current
        },
        (error) => {
          this.error = error;
        }
      );
    },
  },
});
</script>
