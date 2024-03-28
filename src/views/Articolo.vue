<template>
  <div class="flex flex-col justify-start items-star px-[24px]">
  <div><h1 class="text-[25px] text-black mt-[100px] font-bold">{{ title }}</h1></div>
  <div><h1 class="text-[20px]">{{ author }}</h1></div>
  <img :src="urlImage" alt="" class="w-[100px] h-[100px]">
   <div><p class="text-[18px]">{{ text }}</p></div>
  <div><p class="text-[18px]">{{ publishedAt }}</p></div>
  </div>  
</template>

<script>
import { defineComponent } from "vue";
import sanity from "../../sanity.js";
import imageUrlBuilder from "@sanity/image-url";
const builder = imageUrlBuilder(sanity);
const query= `*[_type=="post" && slug.current=="quarto-post"]{
    author->{name},
    title,
    mainImage,
    publishedAt,
    body[0]{children[0]{text}}
}`;
export default defineComponent({  
    data:()=>({  
        loading:true,
        content:[],
        title:"",
        text:"",
        urlImage:"",
        publishedAt:"",
        author:""
    }),
created() {
    this.fetchData();
  },
  methods: {
    urlFor(source) {
      return builder.image(source);
    },
    fetchData() {
      this.error = this.post = null;
      this.loading = true;
      sanity.fetch(query).then(
        (content) => {
          this.loading = false;
          this.content = content;
          this.title=content[0].title
          this.text=content[0].body.children.text
          this.author=content[0].author.name
          this.urlImage=this.urlFor(content[0].mainImage.asset._ref)
          this.publishedAt=content[0].publishedAt
        },
        (error) => {
          this.error = error;
        }
      );
    },
  },
})
</script>