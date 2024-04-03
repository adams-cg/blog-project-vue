<template>
  <ul class="pt-20 grid  gap-8 lg:grid-cols-2 xl:grid-cols-3">
    <li v-for="post in content" class="pt-20 mt-[20px]">
      <SingleArticle
        :slug="post.slug.current"
        :autore="post.author.name"
        :resume="post.resume.children.text"
        :titolo="post.title"
        :img="post.mainImage.asset.url"
      />
    </li>
  </ul>
</template>

<script>
import SingleArticle from "../components/SingleArticle.vue";
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
    SingleArticle,
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
