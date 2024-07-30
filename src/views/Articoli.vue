<template>
  <Pagination :items="items" :itemsPerPage="6"></Pagination>
</template>

<script>
import Pagination from "../components/Pagination.vue";
import { defineComponent } from "vue";
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
} | order(publishedAt desc)`;

export default defineComponent({
  components: {
    Pagination,
  },
  data: () => ({
    items: [],
    loading: true,
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
          this.items = content;
        },
        (error) => {
          this.error = error;
        }
      );
    },
  },
  computed: {
    rows() {
      return this.items.length;
    },
  },
});
</script>

<style>
body {
  background-color: #f1f1f1;
}
</style>
