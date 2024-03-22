<template>
    <div>
        <p>{{ articoli.title }}</p>
        <p>{{ articoli.author.name }}</p>
        <p>{{ articoli.publishedAt }}</p>
        <p>{{ articoli.categories.title }}</p>
        <img :src="articoli.mainImage.asset.url" alt="">
    </div>
</template>

<script>
import axios from "axios"

    export default {
        data() {
            return {
                articoli: []
            }
        },
        mounted() {
            axios.get("https://ir44xo6i.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%22post%22%5D+%7B%0A++title%2C%0A++author-%3E%7Bname%7D%2C%0A++mainImage%7B%0A++++asset-%3E%7Burl%7D%0A++%7D%2C%0A++body%5B0%5D%7Bchildren%5B0%5D%7Btext%7D%7D%2C%0A++publishedAt%2C%0A++++categories%5B0%5D-%3E%7Btitle%7D%0A%7D&perspective=published")
            .then(response =>{
                this.articoli = response.data.result[0];
                console.log(this.articoli)
            }).catch(err =>{
                console.error(err)
            })
        }
    }
</script>