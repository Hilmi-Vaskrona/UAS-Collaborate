<template>
  <section class="w-full py-16 bg-[#FFFBDE]">
    <div class="max-w-6xl mx-auto px-4">
      <header class="text-center mb-12">
        <h2 class="text-3xl font-bold text-gray-800 mb-4">
          Mitra Perjalanan Terpercaya Anda
        </h2>
        <p class="text-gray-600 max-w-4xl mx-auto">
          Di Safari, kami mewujudkan impian perjalanan Anda dengan layanan yang
          dipersonalisasi, harga yang tak tertandingi, dan pengalaman yang tak terlupakan.
        </p>
      </header>
      
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
        <!-- Left Column -->
        <div class="space-y-6">
          <FeatureCard
            icon="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/12dqK8Yz0Y.png"
            title="Paket yang Dikuratori oleh Pakar"
            description="Rencana perjalanan yang dirancang dengan cermat yang disesuaikan dengan preferensi Anda."
          />
          <FeatureCard
            icon="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/KfX2m5KvpG.png"
            title="Dukungan Pelanggan 24 Jam"
            description="Kami di sini untuk membantu Anda dalam setiap langkah perjalanan Anda, kapan pun dan di mana pun Anda membutuhkan kami."
          />
        </div>
        
        <!-- Center Image -->
        <div class="flex justify-center">
          <div class="w-80 h-60 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/z3ZeL41sfJ.png)] bg-cover bg-center rounded-[20px]"></div>
        </div>
        
        <!-- Right Column -->
        <div class="space-y-6">
          <FeatureCard
            icon="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/SBQWidLnyQ.png"
            title="Pemesanan Tanpa Ribet"
            description="Proses pemesanan yang mudah dan aman, memberikan Anda ketenangan pikiran."
          />
          <FeatureCard
            icon="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/9if46qTMA6.png"
            title="Sudah Termasuk Asuransi"
            description="Kami memprioritaskan keamanan Anda dengan cakupan yang Menyeluruh."
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import FeatureCard from '@/components/ui/FeatureCard.vue'
</script>

<style scoped>
</style>
