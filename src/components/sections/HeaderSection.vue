<template>
  <header class="w-full h-[133px] bg-[rgba(217,217,217,0.12)] rounded-br-[18px] rounded-bl-[18px] relative">
    <div class="max-w-7xl mx-auto px-4 h-full relative">
      <!-- Logo -->
      <h1 class="absolute top-[42px] left-4 text-2xl font-bold text-white font-['Segoe_UI']">
        Safari
      </h1>
      
      <!-- Navigation -->
      <nav class="absolute top-[37px] left-1/2 transform -translate-x-1/2">
        <div class="flex items-center bg-[rgba(169,169,169,0.1)] rounded-[50px] px-6 py-3">
          <div class="flex items-center bg-[rgba(217,217,217,0.25)] rounded-[50px] px-4 py-2 mr-4">
            <div class="w-4 h-4 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/xY0aGw3agS.png)] bg-cover mr-2"></div>
            <span class="text-white font-semibold">Home</span>
          </div>
          <div class="flex space-x-4">
            <div class="w-5 h-5 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/shNjPfwoTQ.png)] bg-cover"></div>
            <div class="w-5 h-5 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/1j6Czk2rqC.png)] bg-cover"></div>
            <div class="w-5 h-5 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/UyfyuJLj80.png)] bg-cover"></div>
          </div>
        </div>
      </nav>
      
      <!-- CTA Button -->
      <div class="absolute top-[34px] right-4">
        <button class="bg-white text-black font-bold px-5 py-2 rounded-[25px] hover:bg-gray-100 transition-colors">
          Plan Your Trip →
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
</script>

<style scoped>
header {
  position: relative;
  z-index: 10;
}
</style>
