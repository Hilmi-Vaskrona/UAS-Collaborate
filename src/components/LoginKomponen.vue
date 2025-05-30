<script setup>
import { ref, reactive, defineEmits } from 'vue'

const emit = defineEmits(['goToLogin', 'goToRegister', 'onLoginSuccess'])

const activeTab = ref('login') // atau 'register'

const form = reactive({
  email: '',
  password: '',
})

const login = () => {
  if (!form.email || !form.password) {
    alert('Email dan password tidak boleh kosong');
    return;
  }

  const user = JSON.parse(localStorage.getItem('user')) || [];

  const foundUser = user.find(user => user.email === form.email && user.password === form.password);

  if (foundUser) {
    alert('Login berhasil');
    localStorage.setItem('loggedInUser', JSON.stringify(foundUser));
    emit('onLoginSuccess', true);
  } else {
    alert('Email atau password salah');
  }

  form.email = '';
  form.password = '';
}
</script>


<template>
  <div class="w-[400px] bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden">
    <div class="bg-teal-700 text-white text-center py-6">
      <h2 class="text-3xl font-bold">Safari</h2>
      <p class="text-sm mt-1">Masuk untuk mengakses semua fitur eksklusif</p>
    </div>
    <div class="px-8 py-6">
      <div class="relative flex justify-center mb-4">
        <!-- Indicator -->
        <div
          class="absolute bottom-0 h-0.5 bg-blue-700 transition-all duration-300"
          :style="activeTab === 'login' ? 'left: 0; width: 50%;' : 'left: 50%; width: 50%;'"
        ></div>

  <button
    @click="activeTab = 'login'; $emit('goToLogin')"
    :class="activeTab === 'login' ? 'text-blue-700' : 'text-gray-500'"
    class="relative w-1/2 text-center py-2 font-medium"
  >
    Masuk
  </button>
  <button
    @click="activeTab = 'register'; $emit('goToRegister')"
    :class="activeTab === 'register' ? 'text-blue-700' : 'text-gray-500'"
    class="relative w-1/2 text-center py-2 font-medium"
  >
    Daftar
  </button>
</div>
      <form @submit.prevent="login" class="space-y-4">
        <div>
          <label class="text-sm font-medium">Email</label>
          <div class="relative">
            <input type="email" class="w-full px-4 py-2 rounded-lg border focus:outline-none" placeholder="email@contoh.com" v-model="form.email"/>
            <i class="fa-solid fa-envelope absolute right-3 top-3 text-gray-400"></i>
          </div>
        </div>
        <div>
          <label class="text-sm font-medium">Password</label>
          <div class="relative">
            <input type="password" class="w-full px-4 py-2 rounded-lg border focus:outline-none" placeholder="Masukkan password" v-model="form.password"/>
            <i class="fa-solid fa-lock absolute right-3 top-3 text-gray-400"></i>
          </div>
          <div class="text-right mt-1">
            <a href="#" class="text-sm text-blue-600 hover:underline">Lupa password?</a>
          </div>
        </div>
        <button type="submit" class="w-full bg-teal-600 hover:bg-teal-700 text-white py-2 rounded-lg font-semibold flex items-center justify-center gap-2">
          <i class="fa-solid fa-right-to-bracket"></i> Masuk
        </button>
        <div class="text-center text-gray-400 my-2">atau masuk dengan</div>
        <button class="w-full bg-white border py-2 rounded-lg font-semibold flex items-center justify-center gap-2 shadow">
          <i class="fa-brands fa-google text-red-500"></i> Lanjutkan dengan Google
        </button>
      </form>
    </div>
  </div>
</template>

<style scoped>
@import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
</style>