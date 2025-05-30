<template>
  <!-- LOGIN / REGISTER PAGES -->
  <div
    v-if="!isLoggedIn"
    class="w-full h-[100vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
    style="background-image: url('/BG-pantai.png')"
  >
    <div v-if="authStep === 'login'">
      <!-- Komponen Login -->
      <LoginKomponen @onLoginSuccess="startTransition" @goToRegister="authStep = 'register'" />
    </div>
    <div v-else>
      <!-- Komponen Register -->
      <RegisterKomponen @onRegisterSuccess="authStep = 'login'" @goToLogin="authStep = 'login'" />
    </div>
  </div>

  <!-- TRANSITION SCREEN 3 -->
  <Transition name="screen3-gentle">
    <template v-if="isLoggedIn && step === 2">
      <div key="screen-3" class="w-full h-full absolute top-0 left-0 flex items-center justify-center bg-white z-30">
        <h1 class="text-5xl font-serif italic tracking-wider text-teal-700">Safari</h1>
      </div>
    </template>
  </Transition>

  <!-- TRANSITION SCREEN 4 -->
  <Transition name="screen4-gentle">
    <template v-if="step === 3">
      <div key="screen-4" class="w-full h-full absolute top-0 left-0 bg-yellow-100 z-25"></div>
    </template>
  </Transition>

  <!-- HERO PAGE -->
  <div v-if="step === 4" class="w-screen h-screen overflow-hidden relative text-white" :style="backgroundStyle">

    <!-- Navbar kapsul atas -->
    <nav class="fixed top-0 left-0 w-full z-50 bg-transparent pointer-events-none">
      <div class="flex justify-between items-center w-full px-6 pt-4 pointer-events-auto">
        
        <!-- Kiri atas: Judul + Logout -->
        <div class="flex items-center gap-4">
          <h1 class="text-white font-bold text-3xl">Safari</h1>
          <button
            @click="logout"
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

      <!-- Baris navigasi kapsul ikon -->
    <div class="relative max-w-[320px] mx-auto bottom-9 pointer-events-auto"> 
      <!-- Bubble aktif -->
      <div
        class="absolute flex items-center gap-2 px-4 py-2 rounded-full bg-black/60 backdrop-blur-md text-white transition-all duration-300"
        :style="{ left: `${activeIndex * 80}px` }"
      >
        <i :class="navItems[activeIndex].icon" class="text-sm"></i>
        <span class="text-sm font-medium whitespace-nowrap">
          {{ navItems[activeIndex].name }}
        </span>
      </div>

      <!-- Daftar ikon -->
      <ul class="flex justify-between relative w-[320px]">
        <li
          v-for="(item, index) in navItems"
          :key="item.name"
          class="w-20 text-center cursor-pointer py-2"
          @click="activeIndex = index"
        >
          <i
            :class="[item.icon, 'transition-opacity duration-300 text-lg', activeIndex === index ? 'opacity-0' : 'text-white/70']"
          ></i>
        </li>
      </ul>
    </div>
    </nav>

    <!-- Hero Section -->
    <div class="flex flex-col items-center justify-center text-center px-4 mt-32">
      <h2 class="text-sm uppercase tracking-widest mb-2">Discover Your Next</h2>
      <h1 class="text-6xl font-extrabold mb-4">ADVENTURE</h1>
      <p class="max-w-xl text-sm">
        Rasakan keajaiban menjelajahi destinasi paling menakjubkan di dunia dengan paket perjalanan yang dirancang khusus untuk setiap petualang.
      </p>

      <!-- Search Bar -->
      <div class="flex flex-col items-start mt-10 gap-2 relative z-[75] text-black">
        <!-- Label Atas -->
        <div class="flex justify-between w-[1160px] px-2 text-md font-semibold">
          <!-- Label From dan To -->
          <div class="flex gap-4 w-[480px]">
            <!-- Label From -->
            <div class="w-[125px]">
              <span>From</span>
            </div>
            <!-- Label To -->
            <div class="w-[315px]">
              <span>To</span>
            </div>
          </div>

          <!-- Bagian label atas untuk Departure dan Return Date -->
          <div class="flex justify-endn w-[630px] gap-4">
            <!-- Label Departure Date -->
            <div class="w-[140px]">
              <span>Departure date</span>
            </div>

            <!-- Spacer agar posisi Return Date sesuai -->
            <div class="w-[px]">
              <span>Return Date</span>
            </div>
          </div>
        </div>

        <!-- Search Form -->
        <div class="flex w-[1050px] h-[57px] justify-center items-center ml-10">
          <!-- From - To -->
          <div class="w-[470px] h-full bg-[#d9d9d9] rounded-[18px] relative">
            <!-- Icon repeat di tengah -->
            <div class="absolute top-[10px] left-[218px] w-[40px] h-[38px] flex items-center justify-center text-xl text-[#444]">
              <i class="fas fa-repeat"></i>
            </div>

            <!-- Icon from -->
            <div class="absolute top-[15px] left-[18px] w-[24px] h-[24px] flex items-center justify-center text-lg">
              <i class="fas fa-plane-departure"></i>
            </div>
            <span class="absolute top-[17px] left-[57px] font-['Inter'] text-[16px] font-semibold">Jakarta [To]</span>

            <!-- Icon to -->
            <div class="absolute top-[18px] left-[267px] w-[24px] h-[24px] flex items-center justify-center text-lg">
              <i class="fas fa-plane-arrival"></i>
            </div>
            <span class="absolute top-[19px] left-[301px] font-['Inter'] text-[16px] font-semibold">Singapore</span>
          </div>

          <!-- Departure - Return -->
          <div class="w-[470px] h-full bg-[#d9d9d9] rounded-[18px] relative ml-7">
            <!-- Departure icon -->
            <div class="absolute top-[17px] left-[9px] w-[24px] h-[24px] flex items-center justify-center text-lg">
              <i class="fas fa-calendar-days"></i>
            </div>
            <span class="absolute top-[21px] left-[47px] font-['Inter'] text-[16px] font-semibold">05-27-2025</span>

            <!-- Return icon -->
            <div class="absolute top-[18px] left-[247px] w-[24px] h-[24px] flex items-center justify-center text-lg">
              <i class="fas fa-calendar-days"></i>
            </div>
            <span class="absolute top-[21px] left-[286px] font-['Inter'] text-[16px] font-semibold text-[#687176]">
              {{ returnEnabled ? '08-27-2025' : '--/--/----' }}
            </span>
          </div>

          <!-- Tombol Search -->
          <div class="w-[61px] h-full bg-[#d9d9d9] rounded-[18px] flex items-center justify-center cursor-pointer ml-7">
            <i class="fas fa-magnifying-glass text-xl text-black"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import LoginKomponen from './components/LoginKomponen.vue'
import RegisterKomponen from './components/RegisterKomponen.vue'

const step = ref(0)
const isLoggedIn = ref(false)
const authStep = ref('login') // 'login' atau 'register'
const returnEnabled = ref(true)

const startTransition = () => {
  isLoggedIn.value = true
  setTimeout(() => {
    step.value = 2
    setTimeout(() => {
      step.value = 3
      setTimeout(() => {
        step.value = 4
      }, 1000)
    }, 1200)
  }, 800)
}

const backgroundStyle = {
  backgroundImage: "url('/public/BG-gunung.png')",
  backgroundSize: 'cover',
  backgroundPosition: 'center'
}

const activeIndex = ref(0)
const navItems = [
  { name: 'Home', icon: 'fa-solid fa-house' },
  { name: 'Destination', icon: 'fa-solid fa-plane' },
  { name: 'Packages', icon: 'fa-solid fa-box' },
  { name: 'Account', icon: 'fa-solid fa-user' }
]

const logout = () => {
  localStorage.removeItem('loggedInUser')
  isLoggedIn.value = false
  step.value = 0
  authStep.value = 'login'
}

onMounted(() => {
  // Set initial active index based on the current URL path
  const login = localStorage.getItem('loggedInUser')
  if(login) startTransition()
})
</script>

<style scoped>
@import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';

/* Transition screen 3 & 4 */
.screen3-gentle-enter-active,
.screen3-gentle-leave-active,
.screen4-gentle-enter-active,
.screen4-gentle-leave-active {
  transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}
.screen3-gentle-enter-from,
.screen3-gentle-leave-to,
.screen4-gentle-enter-from,
.screen4-gentle-leave-to {
  opacity: 0;
}

html, body, #app {
  height: 100%;
  margin: 0;
}
</style>
