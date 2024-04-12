<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import { RouterView } from "vue-router";

export default {
  components: {
    Header,
    Footer
  },
};
</script>

<template>
    <Header />
    <RouterView />
    <Footer />
</template>

