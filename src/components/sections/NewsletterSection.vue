<template>
  <section class="w-full h-[578px] bg-gray-400 relative overflow-hidden">
    <!-- Background Images -->
    <div class="absolute inset-0">
      <div class="w-full h-full bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/bZskyq9MsG.png)] bg-cover bg-center"></div>
      <div class="absolute top-0 left-0 w-2/5 h-full bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/uFZsduKZzA.png)] bg-cover bg-center"></div>
      <div class="absolute bottom-0 left-32 w-96 h-96 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/KZR90u4hFu.png)] bg-cover bg-center"></div>
    </div>
    
    <div class="relative z-10 max-w-7xl mx-auto px-4 h-full flex items-center">
      <div class="w-full lg:w-1/2 lg:ml-auto space-y-8">
        <!-- Newsletter Signup -->
        <div>
          <h2 class="text-5xl font-bold text-white mb-8 leading-tight">
            Dapatkan info terbaru seputar tips perjalanan, rekomendasi, serta promo.
          </h2>
          
          <div class="flex flex-col sm:flex-row gap-4">
            <input 
              type="email"
              placeholder="Alamat email mu"
              class="flex-1 px-6 py-4 rounded-lg text-xl text-black/50 font-bold focus:outline-none focus:ring-2 focus:ring-white"
            >
            <button class="bg-teal-600 text-white px-8 py-4 rounded-lg text-xl font-bold hover:bg-teal-700 transition-colors">
              Berlangganan Newsletter
            </button>
          </div>
        </div>
        
        <!-- App Download -->
        <div>
          <h3 class="text-3xl font-bold text-white mb-6">
            Semua pesanan dalam genggaman, selalu siap jalan-jalan. Pakai Safari App.
          </h3>
          
          <div class="flex items-center space-x-4">
            <div class="w-24 h-24 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/7eKrc8GoVb.png)] bg-cover"></div>
            <div class="space-y-2">
              <div class="w-48 h-14 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/HFNS2SvKpH.png)] bg-cover cursor-pointer hover:opacity-80 transition-opacity"></div>
              <div class="w-48 h-14 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/9K9HO45xmU.png)] bg-cover cursor-pointer hover:opacity-80 transition-opacity"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
</style>
