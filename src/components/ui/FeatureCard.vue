<template>
  <article class="bg-white p-6 rounded-[15px] shadow-lg hover:shadow-xl transition-shadow">
    <div class="w-10 h-10 bg-cover bg-center rounded-[12px] mb-4" :style="{ backgroundImage: `url(${icon})` }"></div>
    <h3 class="text-lg font-semibold text-gray-800 mb-3">{{ title }}</h3>
    <p class="text-gray-600 leading-relaxed">{{ description }}</p>
  </article>
</template>

<script setup>
defineProps({
  icon: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
</style>
