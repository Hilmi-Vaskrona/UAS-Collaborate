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

  <!-- HERO PAGE diganti DetailKomponen -->
  <div v-if="step === 4 && isLoggedIn">
    <DetailKomponen />
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import LoginKomponen from './components/LoginKomponen.vue'
import RegisterKomponen from './components/RegisterKomponen.vue'
import DetailKomponen from './components/DetailKomponen.vue'

const step = ref(0)
const isLoggedIn = ref(false)
const authStep = ref('login') // 'login' atau 'register'
const returnEnabled = ref(true)
const showDetail = ref(false) // TAMBAHKAN INI

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
  showDetail.value = false // RESET JIKA LOGOUT
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
