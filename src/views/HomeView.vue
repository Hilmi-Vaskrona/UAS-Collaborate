<template class="bg-[#FFFBDE]">
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
  <div v-if="step === 4" class="w-screen h-screen overflow-hidden relative text-white bg-[url('https://i.imgur.com/imzzYDx.png')] bg-cover">
      <!-- Navbar kapsul atas -->
      <Navbar
  :url="url"
  :navItems="navItems"
  :activeIndex="activeIndex"
  @logout="logout"
  @gantiUrl="gantiUrl"
/>
<!-- Komponen berdasarkan URL -->
<div class="w-full min-h-[90vh] flex items-center justify-center">
  <div v-if="url === 'Home'">
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
            <div class="w-[150px]">
              <span>Departure date</span>
            </div>

            <!-- Spacer agar posisi Return Date sesuai -->
            <div class="w-[318px] flex items-center justify-center gap-2">
              <input
                type="checkbox"
                v-model="returnEnabled"
                class="w-5 h-5 text-blue-600 border-[#D9D9D9] rounded focus:ring-0"
              />
              <span class="text-black font-semibold">Return Date</span>
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
  <div v-else-if="url === 'Destination'">
    <DestinasiKomponen />
  </div>
  <div v-else-if="url === 'Packages'">
    <PaketKomponen />
  </div>
  <div v-else-if="url === 'Account'">
    <AkunKomponen />
  </div>
</div>

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
              <div class="w-[150px]">
                <span>Departure date</span>
              </div>

              <!-- Spacer agar posisi Return Date sesuai -->
              <div class="w-[318px] flex items-center justify-center gap-2">
                <input
                  type="checkbox"
                  v-model="returnEnabled"
                  class="w-5 h-5 text-blue-600 border-[#D9D9D9] rounded focus:ring-0"
                />
                <span class="text-black font-semibold">Return Date</span>
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
    <div
      class="w-full h-[200px] -mt-32 relative z-10"
      style="background: linear-gradient(to bottom, transparent, #FFFBDE);"
    ></div>

  <div class="h-[1000px] w-full bg-[#FFFBDE]">
    
  </div>
</template>

<script setup>
import { onMounted, ref, computed } from 'vue'
import DestinasiKomponen from '@/components/DestinasiKomponen.vue'
import PaketKomponen from '@/components/PaketKomponen.vue'
import AkunKomponen from '@/components/AkunKomponen.vue'
import Navbar from '@/components/NavbarKomponen.vue' // Tambahkan ini

const url = ref('/')
const navItems = [
  { name: 'Home', icon: 'fa-solid fa-house' },
  { name: 'Destination', icon: 'fa-solid fa-plane' },
  { name: 'Packages', icon: 'fa-solid fa-box' },
  { name: 'Account', icon: 'fa-solid fa-user' },
]
const gantiUrl = (value) => {
  url.value = value
  console.log(url.value)
}
const activeIndex = computed(() =>
  navItems.findIndex(item => item.name === url.value)
)

onMounted(() => {
  const loggedInUser = localStorage.getItem('loggedInUser')
  if (loggedInUser) url.value = 'Home'
})


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
  overflow-x: hidden;
}
</style>
