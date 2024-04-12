<template>
    <Pagination :items="content" :itemsPerPage="6"></Pagination>
  </template>

<script>
import Pagination from "../components/Pagination.vue";
import SingleArticle from "../components/SingleArticle.vue";
import { defineComponent } from "vue";
import sanity from "../../sanity.js";
const query= `*[_type == "post" && categories[]->title match "Back End"]{
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
} | order(publishedAt desc)`;
export default defineComponent({
  components: {
    SingleArticle,
    Pagination
  },
  data: () => ({
    loading: true,
    content: [],
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
        },
        (error) => {
          this.error = error;
        }
      );
    },
  },
});
</script>

<style>
body {
  background-color: #f1f1f1;
}
</style>