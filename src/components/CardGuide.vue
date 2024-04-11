<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" >
    <div
      v-for="(card, index) in cards"
      :key="index"
      @mouseover="handleMouseOver(index)"
      @mouseleave="handleMouseLeave()"
      class="relative w-64 h-80 overflow-hidden cursor-pointer transition-transform duration-300"
      :style="{
        transform: hoveredIndex === index ? 'scale(1.1)' : 'scale(1)',
        zIndex: hoveredIndex === index ? 1 : 0
      }"
    >
      <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 opacity-0 hover:opacity-100">
        <div class="text-white text-center">
          <h2 class="text-2xl font-semibold">{{ card.title }}</h2>
          <p class="mt-2">{{ card.description }}</p>
        </div>
      </div>
      <img
        :src="card.imageUrl"
        alt="Card Image"
        class="absolute inset-0 w-screen h-full object-cover transition-transform duration-300 transform hover:scale-110"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          imageUrl: 'src/assets/Frontend.png',
          title: 'Front end'
        },
        {
          imageUrl: 'src/assets/Backend.png',
          title: 'Back end',
        },
        {
          imageUrl: 'src/assets/AI.png',
          title: 'AI',
        },
        {
          imageUrl: 'src/assets/CMS.png',
          title: 'CMS',
        },
      ],
      hoveredIndex: -1
    };
  },
  methods: {
    handleMouseOver(index) {
      this.hoveredIndex = index;
    },
    handleMouseLeave(index) {
      this.hoveredIndex = -1;
    }
  }
};
</script>
