<template>
  <div>
    <ul class="pt-20 grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
      <li v-for="(item, index) in displayedItems" :key="`${item.id}--${index}`" :item="item" class="pt-20 mt-[20px]">
        <SingleArticle :slug="item.slug.current" :autore="item.author.name" :resume="item.resume.children.text"
          :titolo="item.title" :img="item.mainImage.asset.url" />
      </li>
    </ul>
    <div class="flex justify-center item-center gap-2 pt-20">
      <button @click="previousPage()">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
        </svg>
      </button>
      <button
        class="pl-[2px]"
        type="button"
        :class="[
          'button--link button--large',
          { isActive: page === currentPage, 'font-bold text-[42px]':page=== currentPage},
        ]"
        v-for="page in pages"
        :key="page"
        @click="changePage(page)"
      >
    {{ page }}
      </button>
      <button @click="nextPage()">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
        </svg>
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
    function previousPage(){
      if(currentPage.value==1){  
        return
      }else{
        currentPage.value = currentPage.value - 1;
      }
      
    }
    function nextPage() {
      if(currentPage.value==pageCount.value){  
        return
      }else{  
        currentPage.value = currentPage.value + 1;
      }
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
      previousPage,
      nextPage
    };
  },
};
</script>
