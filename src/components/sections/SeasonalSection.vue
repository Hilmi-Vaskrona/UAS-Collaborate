<template>
  <section class="w-full py-16">
    <div class="max-w-7xl mx-auto px-4">
      <!-- Header with Background Text -->
      <div class="relative text-center mb-16">
        <h2 class="text-6xl font-bold text-gray-300 opacity-20 absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4">
          SEASONAL
        </h2>
        <h2 class="text-4xl font-bold text-gray-800 relative z-10 pt-8">
          Liburan Musiman Terbaik
        </h2>
        <p class="text-gray-600 mt-4 max-w-2xl mx-auto">
          Jelajahi destinasi tak terlupakan, dirancang sempurna untuk menangkap keindahan
          unik dan pengalaman yang ditawarkan setiap musim.
        </p>
      </div>
      
      <!-- Seasonal Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <SeasonalCard
          v-for="season in seasons"
          :key="season.id"
          :season="season"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import SeasonalCard from '@/components/ui/SeasonalCard.vue'

const seasons = [
  {
    id: 1,
    title: 'Keajaiban Musim Dingin',
    description: 'Rasakan sensasi ski, kabin pegunungan bersalju, dan cahaya utara yang menakjubkan.',
    image: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/OMA35s2rtq.png'
  },
  {
    id: 2,
    title: 'Petualangan Musim Gugur',
    description: 'Bersantai di dedaunan berwarna, jelajahi acara musim gugur, dan nikmati makanan musiman.',
    image: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/LbK0Pvc9cX.png'
  },
  {
    id: 3,
    title: 'Mekarnya Musim Semi',
    description: 'Nikmati bunga mekar yang indah dan festival musim semi yang ceria.',
    image: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/gjbNCHKE8H.png'
  },
  {
    id: 4,
    title: 'Liburan Musim Panas',
    description: 'Nikmati pantai tropis, festival musim panas yang meriah, dan rasa unik dari musim ini.',
    image: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/YFUxJQaKYA.png'
  }
]
</script>

<style scoped>
</style>
