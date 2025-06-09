<template>
  <button 
    class="px-4 py-2 rounded-full text-sm font-normal transition-colors"
    :class="active ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'"
  >
    {{ tag.name }}
  </button>
</template>

<script setup>
defineProps({
  tag: {
    type: Object,
    required: true
  },
  active: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped>
</style>
