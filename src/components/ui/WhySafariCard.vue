<template>
  <article class="bg-gray-300 p-6 rounded-[16px] border border-black/25 hover:shadow-lg transition-shadow">
    <div class="flex items-start space-x-4">
      <div class="w-16 h-16 bg-cover bg-center flex-shrink-0" :style="{ backgroundImage: `url(${feature.icon})` }"></div>
      <div class="flex-1">
        <h3 class="text-xl font-bold text-black mb-3 text-center">{{ feature.title }}</h3>
        <p class="text-black leading-relaxed text-center">{{ feature.description }}</p>
      </div>
    </div>
  </article>
</template>

<script setup>
defineProps({
  feature: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
</style>
