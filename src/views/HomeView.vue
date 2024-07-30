<template>



  <!-- img mobile -->
  <div class="md:hidden h-[60px]"></div>
  <div class="md:hidden relative bg-gradient-to-t from-[rgb(255,255,255)]  to-[#00000000] w-[100%] z-[10] h-[190px] ">
  </div>
  <img :src="urlImage" alt="" class="w-screen z-[0] absolute mt-[-190px] h-[190px] object-cover">
  <div class="md:hidden flex w-full flex-col justify-center items-center mt-[20px]">
    <p class="text-[40px] font-bold  md:text-[60px] lg:text-[80px] ">
      {{ title }}
    </p>
    <p class=" px-[40px] text-[20px] font-semibold md:text-[25px] lg:text-[30px]">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus excepturi iste obcaecati, doloremque eum
      hic modi eos voluptatibus possimus quasi qui neque quas minima error eaque voluptatem asperiores dolor quam
      nobis amet similique nihil velit magni mollitia. Voluptate repellendus quos asperiores suscipit ullam
      quibusdam maxime. Labore libero beatae quod odit.
    </p>
    <RouterLink :to="{ path: '/articoli/' + slug }" class=""><button
        class="mt-[50px] border-[2px] border-slate-400 rounded-2xl p-2 w-[160px] hover:scale-110 hover:border-black font-semibold text-[20px] mb-10 lg:mb-0">
        Scopri di più
      </button>
    </RouterLink>
  </div>



  <!-- TODO: dek sezione articolo in evidenza -->
  <section class="hidden    md:flex w-full   items-center  mb-[0px]  pt-40 justify-around flex-row         scale-75">
    <div class="flex  w-[50%] lg:w-full scale-[0.8] lg:scale-100 flex-col justify-center items-center">
      <p class=" font-bold  ] text-[70px] ">
        {{ title }}
      </p>
      <p class="md:px-10  font-semibold text-[30px]">
        {{ text }}
      </p>

      <RouterLink :to="{ path: '/articoli/' + slug }"><button
          class="mt-[50px] border-[2px] border-slate-400 rounded-2xl p-2 w-[160px] hover:scale-110 hover:border-black font-semibold text-[20px] mb-10 lg:mb-0 scale-110 lg:scale-100">
          Scopri di più
        </button>
      </RouterLink>
    </div>

    <RouterLink class="ml-[30px] lg:ml-0 mr-[-150px] xl:mr-[0px]scale-75 xl:scale-100   w-[50%] "
      :to="{ path: '/articoli/' + slug }"><img :src="urlImage"
        class="col-span-full   w-[400px] h-[400px] rounded-[30px] object-center object-cover" /></RouterLink>
  </section>



  <!-- // Dek-->
  <div class="hidden md:block w-[90%] mb-[20px]  mx-auto h-[6px] rounded-[50px] bg-[rgba(0,0,0,0.14)]"></div>

  <!-- // -->
  <div class="md:hidden w-[90%] mb-[100px] mt-[10px] mx-auto h-[4px] rounded-[50px] bg-[rgba(0,0,0,0.14)]"></div>



  <!-- Carosello Guide -->
  <h1 class="w-full text-center font-bold text-[60px]  scale-75  xl:text-[75px] mb-[40px] md:mb-[20px]">Le nostre
    guide</h1>
  <Carousel v-bind="settings" :wrap-around="true" :breakpoints="breakpoints">
    <Slide v-for="(image, index) in images" :key="index">
      <div class="flex scale-75 justify-center items-center w-[200px] h-[200px] border-2 rounded-lg">
        <img :src="image" alt="Slide Image" class="w-[150px] h-[150px] object-contain hover:scale-125"
          @mouseover="handleMouseOver(index)" @mouseleave="handleMouseLeave(index)" />
      </div>
    </Slide>

    <template #addons>
      <Navigation />
    </template>
  </Carousel>



  <!-- // Dek-->
  <div class="hidden md:block w-[90%] mb-[20px]  mx-auto h-[6px] rounded-[50px] mt-[70px] bg-[rgba(0,0,0,0.14)]">
  </div>

  <!-- // -->
  <div class="md:hidden w-[90%] mb-[100px] mt-[50px]  mx-auto h-[4px] rounded-[50px] bg-[rgba(0,0,0,0.14)]"></div>



  <!-- Altri post -->
  <h1 class="w-full text-center  font-bold text-[60px] scale-75 xl:text-[75px] mb-[70px]">Ultimi articoli</h1>
  <CarouselArticoli :articoli="content" class=" mt-[-40px]" />
  <div class=" my-[60px]">

  </div>

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
      "public/logos_html-5.png",
      "public/logos_css-3.png",
      "public/logos_javascript.png",
      "public/logos_nodejs.png",
      "public/logos_pinia.png",
      "public/logos_sanity.png",
      "public/logos_visual-studio-code.png",
      "public/logos_vue.png",
      "public/mdi_github.png",
      "public/Vector.png",
    ],
    loading: true,
    content: [],
    title: "",
    text: "",
    urlImage: "",
    slug: "",
    hoveredIndex: -1
  }),
  created() {
    this.fetchData();
  },
  mounted() {
    window.scrollTo(0, 0);
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
          this.slug = content[0].slug.current
        },
        (error) => {
          this.error = error;
        }
      );
    },
  },
  handleMouseOver(index) {
    this.hoveredIndex = index;
  },
  handleMouseLeave(index) {
    this.hoveredIndex = -1;
  }
});
</script>
