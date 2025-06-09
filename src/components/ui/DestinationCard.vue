<template>
  <article class="relative bg-cover bg-center rounded-[15px] h-[400px] overflow-hidden group cursor-pointer"
           :style="{ backgroundImage: `url(${destination.image})` }">
    <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
    
    <div class="absolute bottom-0 left-0 right-0 p-5 text-white">
      <h3 class="text-lg font-semibold mb-2 text-center">{{ destination.name }}</h3>
      <p class="text-sm text-gray-200 text-center leading-relaxed">{{ destination.description }}</p>
    </div>
    
    <button class="absolute top-4 right-4 w-9 h-9 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors">
      <span class="text-black font-bold">→</span>
    </button>
  </article>
</template>

<script setup>
defineProps({
  destination: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
article:hover {
  transform: translateY(-2px);
  transition: transform 0.3s ease;
}
</style>
