<script>
import Header from './components/Header.vue';
import { RouterView } from "vue-router";

export default {
  components: {
    Header
  },
};
</script>

<template>
    <Header />
    <RouterView />
</template>
