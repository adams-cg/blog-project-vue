<template>
  <div class="flex justify-center items-center">
    <div>
      <!-- descrizione -->
      <div class="pl-[10px]">
        <!-- TITOLO -->
        <div class="font-semibold md:font-bold text-[30px] mb-[-5px]">{{ titolo }}</div>

        <div class="font-semibold pb-[10px]">
          <span class="font-semibold md:font-bold text-[20px] pr-[10px]">Autore:</span>
          <span class="text-[18px]">{{ autore }}</span>
        </div>
      </div>

      <!-- box -->
      <div>
        <!-- bg image -->
        <div class="w-[300px] h-[450px] md:w-[400px] md:h-[600px] rounded-[30px] bg-center bg-cover"
          :style="{ 'background-image': 'url(' + img + ')' }">
          <!-- article/button -->
          <div
            class="hover:bg-gradient-to-b from-transparent to-gray-950/50 transition delay-1000 h-full w-full rounded-[30px]">
            <div class="flex flex-col justify-center items-center h-full w-full p-[20px]">
              <div class="text-white pb-[20px] h-full flex items-end text-center">
                {{ resume }}
              </div>
              <RouterLink :to="{ path: '/articoli/' + slug }"><button
                  class="p-[10px] mb-[10px] w-[120px] bg-yellow-400 text-center rounded-2xl animate-bounce hover:animate-none hover:bg-opacity-20 hover:text-white hover:border-[1px] hover:border-yellow-400 hover:duration-700 font-semibold">
                  Scopri di più
                </button></RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isVisible: false,
    };
  },
  props: ["titolo", "autore", "resume", "img", "slug"],

  methods: {},
};
</script>
