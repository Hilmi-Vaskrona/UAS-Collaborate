<template>
  <a href="#" class="flex items-center space-x-3 text-white/65 hover:text-white transition-colors">
    <div v-if="icon" class="w-6 h-6 bg-cover" :style="{ backgroundImage: `url(${icon})` }"></div>
    <div v-else class="w-6 h-6 bg-gray-600 rounded"></div>
    <span class="text-sm">{{ name }}</span>
  </a>
</template>

<script setup>
defineProps({
  icon: {
    type: String,
    default: ''
  },
  name: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
</style>
