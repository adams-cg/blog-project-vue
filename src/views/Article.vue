<template>
    <ul class="grid gap-10 mt-12 lg:grid-cols-2 lg:gap-0 xl:grid-cols-3">
        <li v-for="(post, index) in postsData" class=" mb-10" :key="index">
        
            <SingleArticle :autore="post.author.name" :resume="post.resume.children.text" :titolo="post.title" :img="post.mainImage.asset.url" />
        </li>
    </ul>
</template>



<script>
import SingleArticle from "../components/SingleArticle.vue";
import axios from "axios"

export default {
    data() {
        return {
            postsData: []
        }
    },
    components: {
        SingleArticle
    },
    mounted() {
        axios.get("https://ir44xo6i.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%22post%22%5D+%7B%0A++title%2C%0A++author-%3E%7Bname%7D%2C%0A++mainImage%7B%0A++++asset-%3E%7Burl%7D%0A++%7D%2C%0A++body%5B0%5D%7Bchildren%5B0%5D%7Btext%7D%7D%2C%0A++publishedAt%2C%0A++++categories%5B0%5D-%3E%7Btitle%7D%2C%0A++++resume%5B0%5D%7Bchildren%5B0%5D%7Btext%7D%7D%0A%7D&perspective=published")
        .then(response => {
            this.postsData = response.data.result
            console.log(this.postsData)
        }).catch(error => {
            console.error(error)
        })
    }
};
</script>

<style>
body {
    background-color: #f1f1f1;
}
</style>