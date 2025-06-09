<template>
  <article class="bg-white rounded-[15px] overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
    <div class="h-48 bg-cover bg-center" :style="{ backgroundImage: `url(${trip.image})` }"></div>
    
    <div class="p-5">
      <div class="flex justify-between items-start mb-3">
        <h3 class="text-lg font-semibold text-gray-800">{{ trip.name }}</h3>
        <span class="text-yellow-500 font-bold">{{ trip.rating }}</span>
      </div>
      
      <div class="text-center text-gray-800 text-sm mb-4">
        <p>{{ trip.duration }}</p>
        <p>{{ trip.includes }}</p>
        <p>Mulai dari: {{ trip.price }}</p>
      </div>
      
      <div class="flex justify-between items-center">
        <span class="text-lg font-bold text-gray-800">{{ trip.price }}</span>
        <button class="bg-black text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-800 transition-colors">
          Pesan Sekarang
        </button>
      </div>
    </div>
  </article>
</template>

<script setup>
defineProps({
  trip: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
</style>
