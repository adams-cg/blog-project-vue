<script>
export default {
  name: "CardContent",
  data() {
    return {
      cards: [
        {
          id: 1,
          bgColor: 'bg-gray-100',
          title: 'HTML',
          description: 'HTML is the standard markup language for creating Web pages.',
          completed: false
        },
        {
          id: 2,
          bgColor: 'bg-gray-100',
          title: 'CSS',
          description: 'CSS describes how HTML elements should be displayed.',
          completed: false
        },
        {
          id: 3,
          bgColor: 'bg-gray-100',
          title: 'JavaScript',
          description: 'JavaScript is a language for programming web pages.',
          completed: false
        },
        {
          id: 4,
          bgColor: 'bg-gray-100',
          title: 'SEO',
          description: 'SEO aims to increase website visibility in search engines.',
          completed: false
        },
        {
          id: 5,
          bgColor: 'bg-gray-100',
          title: 'React',
          description: 'React is a JS library for building user interfaces.',
          completed: false
        },
        {
          id: 6,
          bgColor: 'bg-gray-100',
          title: 'Vue.js',
          description: 'Vue.js is a framework for building user interfaces.',
          completed: false
        },
        {
          id: 7,
          bgColor: 'bg-gray-100',
          title: 'Angular',
          description: 'Angular is a platform for building web applications.',
          completed: false
        },
      ],
      showOverlay: false,
      activeCard: {}
    };
  },
  methods: {
    toggleComplete(card) {
      card.completed = !card.completed; // Mark card as completed or not.
    },
    closeOverlay() {
      this.showOverlay = false;
    },
    completedCount() {
      return this.cards.filter(card => card.completed).length;
    }
  }
}
</script>

<template>
<div class="layout grid" style="grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 16px; margin: 120px 16px 0;">
  <div v-if="showOverlay" class="overlay" @click.self="closeOverlay" style="z-index: 9999;">
    <div class="overlay-content">
      <h3>{{ activeCard.title }}</h3>
      <p>
        Placeholder for links related to <strong>{{ activeCard.title }}</strong>.
      </p>
      <ul>
        <li><a href="#" style="color: black;">Link 1</a></li>
        <li><a href="#" style="color: black;">Link 2</a></li>
        <li><a href="#" style="color: black;">Link 3</a></li>
      </ul>
    </div>
  </div>
  <div v-for="card in cards" :key="card.id" class="card" :class="[card.bgColor, card.completed ? 'bg-gray-400' : '']"
       @click.right.prevent="toggleComplete(card)"
       @click.left="showOverlay = true; activeCard = card"
       :style="{transform: `scale(${card.completed ? 1 : 1.1})`, transition: 'transform 0.3s'}">
    <h3>{{ card.title }}</h3>
    <p>{{ card.description }}</p>
  </div>
</div>
<div class="progress-container">
  <div :style="{width: `${(completedCount() / cards.length) * 100}%`, transition: 'width 0.5s ease'}"></div>
</div>
</template>

<style>
.layout {
  @apply flex flex-wrap justify-center items-center min-h-screen;
}
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999; /* Ensure overlay is above all other elements. */
}
.overlay-content {
  padding: 20px;
  background: white;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
.overlay-content h3, .overlay-content p, .overlay-content ul {
  color: black;
}
.progress-container {
  width: 100vw;
  height: 20px; /* Increased height for better visibility */
  position: fixed;
  bottom: 0; /* Changed to bottom to place it at the bottom */
  left: 0;
  background: gray; /* Set the background color */
  z-index: 10; /* Adjusted z-index */
}
.progress-container > div {
  height: 100%; /* Use full container height */
  background: #42b983; /* Visible progress indicator */
  transition: width 0.5s ease; /* Smooth transition for width changes */
}
.card {
  @apply p-4 border-2 border-black rounded shadow-lg !important;
  width: 200px;
  height: 200px;
  cursor: pointer;
  transition: transform 0.3s;
}
.card.completed {
  @apply bg-gray-400 !important;
}
.card h3 {
  @apply font-bold;
}
.card p {
  @apply my-1 text-sm;
}
</style>