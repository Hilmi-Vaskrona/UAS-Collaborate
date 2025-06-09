<template>
  <section class="w-full py-16">
    <div class="max-w-7xl mx-auto px-4">
      <header class="text-center mb-12">
        <h2 class="text-3xl font-bold text-gray-800 mb-4">
          Temukan Perjalanan Sempurna Anda
        </h2>
        <p class="text-gray-800 max-w-5xl mx-auto">
          Mulai dari liburan di pantai yang tenang hingga petualangan kota yang
          mendebarkan, kami menawarkan berbagai paket perjalanan yang dipilih oleh
          para ahli yang disesuaikan dengan preferensi dan anggaran Anda.
        </p>
      </header>
      
      <!-- Filter Tags -->
      <div class="flex flex-wrap gap-3 mb-8 justify-center">
        <FilterTag
          v-for="tag in filterTags"
          :key="tag.name"
          :tag="tag"
          :active="tag.active"
        />
      </div>
      
      <!-- Trip Cards -->
      <div class="space-y-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <TripCard
            v-for="trip in firstRowTrips"
            :key="trip.id"
            :trip="trip"
          />
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <TripCard
            v-for="trip in secondRowTrips"
            :key="trip.id"
            :trip="trip"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import FilterTag from '@/components/ui/FilterTag.vue'
import TripCard from '@/components/ui/TripCard.vue'
import wisataData from '@/data/wisata.json'

const filterTags = [
  { name: 'All Locations', active: true },
  { name: 'London', active: false },
  { name: 'Spain', active: false },
  { name: 'Paris', active: false },
  { name: 'New York', active: false },
  { name: 'Dubai', active: false },
  { name: 'Sydney', active: false },
  { name: 'Istanbul', active: false },
  { name: 'Bangkok', active: false },
  { name: 'Bali', active: false }
]

// Ambil 6 data pertama dari wisataData, lalu bagi jadi 2 baris
const firstRowTrips = ref(
  wisataData.slice(0, 3).map((item, idx) => ({
    id: idx + 1,
    name: `${item.name}, ${item.location}`,
    rating: item.rating,
    duration: item.duration,
    includes: item.includes.join(' + '),
    price: `Rp${item.price.toLocaleString('id-ID')}`,
    image: item.image
  }))
)

const secondRowTrips = ref(
  wisataData.slice(3, 6).map((item, idx) => ({
    id: idx + 4,
    name: `${item.name}, ${item.location}`,
    rating: item.rating,
    duration: item.duration,
    includes: item.includes.join(' + '),
    price: `Rp${item.price.toLocaleString('id-ID')}`,
    image: item.image
  }))
)
</script>

<style scoped>
</style>
