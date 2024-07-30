<template>
  <div class="grid grid-cols-1 max-w-[80%] mx-auto md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    <div v-for="(card, index) in cards" :key="index" @mouseover="handleMouseOver(index)" :id="index"
      @mouseleave="handleMouseLeave()" class="overflow-hidden cursor-pointer transition-transform duration-300" :style="{
        transform: hoveredIndex === index ? 'scale(1.1)' : 'scale(1)',
        zIndex: hoveredIndex === index ? 1 : 0
      }" @click="passaggio">
      <img :src="card.imageUrl" alt="Card Image"
        class="inset-0 w-full h-full object-cover transition-transform duration-300 transform hover:scale-110" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

      cards: [
        {
          imageUrl: '/public/Frontend.png',
          title: 'Front end'
        },
        {
          imageUrl: '/public/Backend.png',
          title: 'Back end',
        },
        {
          imageUrl: '/public/AI.png',
          title: 'AI',
        },
        {
          imageUrl: '/public/CMS.png',
          title: 'CMS',
        },
      ],
      hoveredIndex: -1,

    };
  },
  props: ["passaggio"],
  methods: {
    handleMouseOver(index) {
      this.hoveredIndex = index;
    },
    handleMouseLeave(index) {
      this.hoveredIndex = -1;
    },

  }
};
</script>
