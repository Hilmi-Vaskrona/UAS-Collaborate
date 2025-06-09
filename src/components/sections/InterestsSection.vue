<template>
  <section class="w-full py-16">
    <div class="max-w-7xl mx-auto px-4">
      <header class="text-center mb-12">
        <h2 class="text-4xl font-bold text-black mb-8">Apa yang menarik minat Anda?</h2>
      </header>
      
      <!-- Tab Navigation -->
      <nav class="flex flex-wrap justify-center gap-8 mb-8">
        <button 
          v-for="tab in tabs"
          :key="tab.id"
          class="text-xl font-bold transition-colors"
          :class="tab.active ? 'text-teal-600' : 'text-black/35 hover:text-black/60'"
        >
          {{ tab.name }}
        </button>
      </nav>
      
      <!-- Active Tab Indicator -->
      <div class="w-full h-1 bg-gray-200 rounded mb-8">
        <div class="w-72 h-1 bg-teal-600 rounded"></div>
      </div>
      
      <!-- Flight Destinations Grid -->
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-6 text-center">
        <a 
          v-for="destination in flightDestinations"
          :key="destination"
          href="#"
          class="text-black font-semibold hover:text-teal-600 transition-colors"
        >
          {{ destination }}
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
const tabs = [
  { id: 1, name: 'Destinasi Terbang Terpopuler', active: true },
  { id: 2, name: 'Destinasi Hotel Terpopuler', active: false },
  { id: 3, name: 'Produk Konektivitas Terpopuler', active: false },
  { id: 4, name: 'Destinasi Wisata Terpopuler', active: false }
]

const flightDestinations = [
  'Tiket Pesawat Ke Bali',
  'Tiket Pesawat Ke Kuala Lumpur',
  'Tiket Pesawat Ke Bandung',
  'Tiket Pesawat Ke Singapore',
  'Tiket Pesawat Ke Malang',
  'Tiket Pesawat Ke Hong Kong',
  'Tiket Pesawat Ke Korea',
  'Tiket Pesawat Ke Medan',
  'Tiket Pesawat Ke Semarang',
  'Tiket Pesawat Ke Canada',
  'Tiket Pesawat Ke Jogja',
  'Tiket Pesawat Ke Tanjung Pandan',
  'Tiket Pesawat Ke Surabaya',
  'Tiket Pesawat Ke Bangkok',
  'Tiket Pesawat Ke Morocco',
  'Tiket Pesawat Ke Switzerland',
  'Tiket Pesawat Ke London',
  'Tiket Pesawat Ke Jakarta-Singapore',
  'Tiket Pesawat Ke Jakarta-Malaysia',
  'Tiket Pesawat Ke Jakarta-Tokyo',
  'Tiket Pesawat'
]
</script>

<style scoped>
</style>
