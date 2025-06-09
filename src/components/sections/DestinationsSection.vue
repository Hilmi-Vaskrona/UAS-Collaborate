<template>
  <section class="w-full py-20">
    <div class="max-w-7xl mx-auto px-4">
      <header class="text-center mb-8">
        <h2 class="text-4xl font-bold text-gray-800 mb-4">
          Temukan yang kamu suka di Asia hingga dunia!
        </h2>
        <p class="text-gray-600 max-w-4xl mx-auto">
          Pengalaman perjalanan pilihan ke lokasi-lokasi yang paling ikonik,
          menakjubkan, dan menarik. Pilih petualangan Anda berikutnya dan
          mulailah membuat kenangan hari ini.
        </p>
      </header>
      
      <div class="space-y-6">
        <!-- First Row -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <DestinationCard
            v-for="(destination, idx) in firstRowDestinations"
            :key="idx"
            :destination="destination"
          />
        </div>
        
        <!-- Second Row -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <DestinationCard
            v-for="(destination, idx) in secondRowDestinations"
            :key="idx"
            :destination="destination"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import DestinationCard from '@/components/ui/DestinationCard.vue'
import wisataData from '@/data/wisata.json'

const firstRowDestinations = ref(wisataData.slice(0, 4))
const secondRowDestinations = ref(wisataData.slice(4, 8))
</script>

<style scoped>
</style>
