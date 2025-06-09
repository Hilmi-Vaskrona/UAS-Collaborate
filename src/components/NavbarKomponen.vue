<template>
  <nav class="fixed top-0 left-0 w-full z-50 bg-transparent pointer-events-none">
    <div class="absolute h-[80px] w-full bg-[#D9D9D9] opacity-[12%]"></div>
    <div class="flex justify-between items-center w-full px-6 pt-4 pointer-events-auto">
      <!-- Kiri atas: Judul + Logout -->
      <div class="flex items-center gap-4">
        <h1 class="text-white font-bold text-3xl">Safari</h1>
        <button
          @click="$emit('logout')"
          class="bg-white/70 text-black px-3.5 py-1.5 rounded-full hover:bg-white shadow text-sm"
        >
          Logout
        </button>
      </div>
      <!-- Kanan atas: Plan Your Trip -->
      <div>
        <button
          class="bg-white text-black px-5 py-2 rounded-full font-medium hover:bg-gray-100 shadow"
        >
          Plan Your Trip →
        </button>
      </div>
    </div>

    <!-- Navigasi kapsul tampil hanya jika bukan halaman login/register -->
    <div class="relative max-w-[320px] mx-auto bottom-9 pointer-events-auto" v-if="props.url !== '/' && props.url !== 'register'">
      <!-- Bubble aktif -->
      <div
        class="absolute flex items-center gap-2 px-4 py-2 rounded-full bg-black/60 backdrop-blur-md text-white transition-all duration-300"
        :style="{ left: `${props.activeIndex * 80}px` }"
      >
        <i :class="props.navItems[props.activeIndex].icon" class="text-sm"></i>
        <span class="text-sm font-medium whitespace-nowrap">
          {{ props.navItems[props.activeIndex].name }}
        </span>
      </div>
      <!-- Daftar ikon -->
      <ul class="flex justify-between relative w-[320px]">
        <li
          v-for="(item, index) in props.navItems"
          :key="item.name"
          class="w-20 text-center cursor-pointer py-2"
          @click="gantiUrl(item.name)"
        >
          <i
            :class="[item.icon, 'transition-opacity duration-300 text-lg', props.activeIndex === index ? 'opacity-0' : 'text-white/70']"
          ></i>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
const props = defineProps({
  url: String,
  navItems: Array,
  activeIndex: Number,
})
const emit = defineEmits(['logout', 'gantiUrl'])

function gantiUrl(name) {
  emit('gantiUrl', name)
}
</script>