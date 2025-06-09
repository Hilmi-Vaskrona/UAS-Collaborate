<template>
  <section class="w-full py-16">
    <div class="max-w-7xl mx-auto px-4">
      <header class="text-center mb-12">
        <h2 class="text-4xl font-bold text-black mb-8">Kenapa di Safari?</h2>
      </header>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <WhySafariCard
          v-for="feature in features"
          :key="feature.id"
          :feature="feature"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import WhySafariCard from '@/components/ui/WhySafariCard.vue'

const features = [
  {
    id: 1,
    title: 'Semua keperluanmu di satu tempat',
    description: 'Dari tiket pesawat, penginapan, sampai aktivitas, Safari punya produk lengkap dan Panduan Wisata yang pas.',
    icon: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/YUMEOgJx7v.png'
  },
  {
    id: 2,
    title: 'Easy Reschedule & Refund',
    description: 'Perlu jaga-jaga buat yang tak terduga? Tenang, ada Easy Reschedule & Refund.',
    icon: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/0OLUhfCQBS.png'
  },
  {
    id: 3,
    title: 'Pembayaran aman dan nyaman',
    description: 'Nikmati transaksi dengan keamanan berlapis, serta beragam opsi pembayaran global & nasional.',
    icon: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/JB7Cjg1zpG.png'
  }
]
</script>

<style scoped>
</style>
