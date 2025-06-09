<template>
  <article class="bg-white rounded-[12px] overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
    <div class="relative h-48 bg-cover bg-center" :style="{ backgroundImage: `url(${season.image})` }">
      <button class="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow">
        <span class="text-gray-800 font-bold">→</span>
      </button>
    </div>
    
    <div class="p-4">
      <h3 class="text-lg font-bold text-gray-800 mb-3">{{ season.title }}</h3>
      <p class="text-gray-600 text-sm leading-relaxed">{{ season.description }}</p>
    </div>
  </article>
</template>

<script setup>
defineProps({
  season: {
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
