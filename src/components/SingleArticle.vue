<template>
    <div class="flex justify-center items-center h-screen">
        <div>

            <!-- descrizione -->
            <div class="pl-[10px]">
                <!-- TITOLO -->
            <div class="font-bold text-[30px] mb-[-5px]">{{ titolo }}</div>

            <div class="font-semibold pb-[10px]"> <span class="font-bold text-[20px] pr-[10px]">Autore:</span>
                <span class="text-[18px]">{{ autore }}</span>
            </div>
        </div>

            <!-- box -->
            <div>


                <div class="bg-black w-[400px] h-[600px] rounded-[30px] relative">

                    <div>
                        <!-- bg image -->
                        <div @mouseover="hover" @mouseleave="nohover"
                           :id="opaci" class="w-[400px] h-[600px] rounded-[30px]  duration-700 bg-[url('./assets/imgprova.jfif')] bg-cover  flex justify-around items-center relative ">
                        </div>

                       


                        <!-- article/button -->
                        
                        <div @mouseover="hover" @mouseleave="nohover" class="flex flex-col justify-center items-centers  absolute bottom-0 p-[20px]">
                            <div @mouseover="hover" @mouseleave="nohover" class="text-white pb-[20px] text-center">{{ resume }}</div>
                            <button @mouseover="hover" @mouseleave="nohover" 
                                class="p-[10px] mb-[10px] w-[120px] bg-yellow-400 text-center m-auto rounded-2xl animate-bounce hover:animate-none hover:bg-opacity-20 hover:text-white hover:border-[1px] hover:border-yellow-400 hover:duration-700 font-semibold">Scopri
                                di più</button>
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
            opaci: 'opaciClass'
        }

    },
    props:["titolo", "autore", "resume"
],

    methods: {
        hover() {
           const opa = document.getElementById(this.opaci)
           opa.classList.add('opacity-50')
        },
        nohover() {
           const opa = document.getElementById(this.opaci)
           opa.classList.remove('opacity-50')
        }
    }
};
</script>