<template>
  <section class="w-full py-8">
    <div class="max-w-6xl mx-auto px-4">
      <!-- Search Labels -->
      <div class="flex justify-between items-center mb-2 max-w-2xl mx-auto">
        <span class="text-xl font-medium text-black">From</span>
        <span class="text-xl font-medium text-black">To</span>
        <div class="w-6 h-6 bg-gray-300 rounded flex items-center justify-center">
          <div class="w-5 h-5 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/8PMmhMnnUt.png)] bg-cover"></div>
        </div>
      </div>
      
      <!-- Search Form -->
      <div class="flex flex-col lg:flex-row gap-4 items-center justify-center">
        <!-- From/To Input -->
        <div class="flex-1 max-w-md bg-gray-300 rounded-[18px] p-4 relative">
          <div class="flex items-center">
            <div class="w-6 h-6 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/tou0AWw6LR.png)] bg-cover mr-3"></div>
            <span class="font-semibold text-black">Jakarta [To]</span>
          </div>
          <div class="absolute top-1/2 right-4 transform -translate-y-1/2">
            <div class="w-6 h-6 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/vC0S1q0soT.png)] bg-cover mr-2"></div>
          </div>
          <div class="mt-2">
            <span class="font-semibold text-black ml-9">Singapore</span>
          </div>
        </div>
        
        <!-- Date Input -->
        <div class="flex-1 max-w-md bg-gray-300 rounded-[18px] p-4">
          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <div class="w-6 h-6 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/9gebiJOmEL.png)] bg-cover mr-3"></div>
              <span class="font-semibold text-black">05-27-2025</span>
            </div>
            <div class="flex items-center">
              <div class="w-6 h-6 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/svFms5Pswx.png)] bg-cover mr-2"></div>
              <span class="font-semibold text-gray-600">08-27-2025</span>
            </div>
          </div>
        </div>
        
        <!-- Search Button -->
        <button class="w-16 h-16 bg-gray-300 rounded-[18px] flex items-center justify-center hover:bg-gray-400 transition-colors">
          <div class="w-6 h-6 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/gW1QsGbbHz.png)] bg-cover"></div>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
</style>
