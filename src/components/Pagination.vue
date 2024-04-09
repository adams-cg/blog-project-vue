<template>
  <div>
    <ul class="pt-20 grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
      <li v-for="(item, index) in displayedItems" :key="`${item.id}--${index}`" :item="item" class="pt-20 mt-[20px]">
        <SingleArticle :slug="item.slug.current" :autore="item.author.name" :resume="item.resume.children.text"
          :titolo="item.title" :img="item.mainImage.asset.url" />
      </li>
    </ul>
    <div class="flex justify-center item-center gap-2 text-2xl pt-20">
      <button class="text-sm scale-150 pl-[2px]" type="button" :class="[
        'button--link button--large',
        { isActive: page === currentPage, 'font-bold text-[24px]': page === currentPage },
      ]" v-for="page in pages" :key="page" @click="changePage(page)">
        {{ page }}
      </button>
    </div>
  </div>
</template>
<script>
import { ref, computed, watch } from "vue";
import SingleArticle from "./SingleArticle.vue";

export default {
  components: {
    SingleArticle,
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
    itemsPerPage: {
      type: Number,
      default: 10,
    },
  },
  setup(props) {
    const currentPage = ref(1);

    const pageCount = computed(() =>
      Math.ceil(props.items.length / props.itemsPerPage)
    );

    const pages = computed(() => {
      return Array.from({ length: pageCount.value }, (_, i) => i + 1);
    });

    const displayedItems = computed(() => {
      console.log(props.items);
      const startIndex = (currentPage.value - 1) * props.itemsPerPage;
      const endIndex = startIndex + props.itemsPerPage;

      return props.items.slice(startIndex, endIndex);
    });

    function changePage(pageNumber) {
      currentPage.value = pageNumber;
    }

    // watch(currentPage, () => {
    //   //If you want the window to scroll up on page change
    //   //window.scrollTo({
    //   //     top: 0,
    //   //     behavior: 'smooth'
    //   // });
    // });

    return {
      currentPage,
      pageCount,
      pages,
      displayedItems,
      changePage,
    };
  },
};
</script>
