<template>

  <div
    class="min-h-screen flex flex-col md:flex-row justify-center pt-[180px] md:pt-[100px] lg:pt-[150px] md:ml-[-30px] w-screen">



    <div class="flex justify-center md:block">
      <img :src="urlImage" alt=""
        class="hidden md:block w-[400px] h-[600px] xl:mt-[25px] rounded-[30px] object-cover md:scale-75 lg:scale-90 xl:scale-95">

      <!-- mobile img -->
      <div class="relative md:hidden w-screen mt-[-80px]">
        <img :src="urlImage" alt="" class="w-screen h-[190px] object-cover">
        <div class="absolute top-0 bg-gradient-to-t from-[rgb(255,255,255)]  to-[#0000003c] w-screen h-[190px] "></div>

      </div>
    </div>

    <div
      class="mt-[10px] w-screen px-[8%] md:px-0 lg:ml-[50px] xl:ml-[100px] md:mt-[55px] lg:mt-0 xl:mt-0 2xl:mt-0 md:w-[45%]">
      <h1
        class="text-[40px] mb-[20px] md:mb-0 text-center md:text-left md:text-[35px] lg:text-[45px] xl:text-[50px] font-bold">
        {{ title }}</h1>
      <p class="text-[18px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[23px]">{{ text }}</p>
    </div>
  </div>


  <div class="flex justify-end items-center mt-[80px] md:mt-0 mb-[100px] mr-[50px]">
    <h1 class="text-[17px] lg:mr-[15px] lg:text-[20px] font-semibold">{{ author }}</h1>
    <p class="md:text-[14px] ml-[10px] lg:text-[17px] lg:mt-[4px]">{{ publishedAt }}</p>
  </div>

</template>

<script>
import { defineComponent } from "vue";
import sanity from "../../sanity.js";
import imageUrlBuilder from "@sanity/image-url";
const builder = imageUrlBuilder(sanity);
export default defineComponent({
  data: () => ({
    loading: true,
    content: [],
    title: "",
    text: "",
    urlImage: "",
    publishedAt: "",
    author: "",
    query: "",
    options: {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  }),
  created() {
    this.fetchData();
  },
  mounted() {
    window.scrollTo(0, 0);
  },
  methods: {
    urlFor(source) {
      return builder.image(source);
    },
    fetchData() {
      this.error = this.post = null;
      this.loading = true;
      this.query = `*[_type=="post" && slug.current=="${this.$route.params.slug}"]{
    author->{name},
    title,
    mainImage,
    publishedAt,
    body[0]{children[0]{text}}
}`;
      sanity.fetch(this.query).then(
        (content) => {
          this.loading = false;
          this.content = content;
          this.title = content[0].title;
          this.text = content[0].body.children.text;
          this.author = content[0].author.name;
          this.urlImage = this.urlFor(content[0].mainImage.asset._ref);
          this.publishedAt = new Date(content[0].publishedAt).toLocaleDateString("it-IT", this.options);
        },
        (error) => {
          this.error = error;
        }
      );
    },
  },
});
</script>
