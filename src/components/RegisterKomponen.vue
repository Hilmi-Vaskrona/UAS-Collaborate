<script setup>
import { ref, reactive, defineEmits } from 'vue'

const emit = defineEmits(['goToLogin', 'goToRegister', 'onRegisterSuccess'])

const activeTab = ref('register') // atau 'register'

const form = reactive({
  name: '',
  email: '',
  password: '',
})

const register = () => {
  if (!form.name || !form.email || !form.password) {
    alert('Nama, email, dan password tidak boleh kosong');
    return;
  }

  const user = JSON.parse(localStorage.getItem('user')) || [];

  user.push({
    name: form.name,
    email: form.email,
    password: form.password,
  });

  localStorage.setItem('user', JSON.stringify(user));

  alert('Registrasi berhasil');
  emit('onRegisterSuccess', true);

  form.name = '';
  form.email = '';
  form.password = '';
}
</script>

<template>
  <div class="w-[400px] bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden">
    <div class="bg-teal-700 text-white text-center py-6">
      <h2 class="text-3xl font-bold">Daftar Akun Baru</h2>
      <p class="text-sm mt-1">Bergabunglah dengan Safari</p>
    </div>
    <div class="px-8 py-6 space-y-4">
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
    <form @submit.prevent="register" class="space-y-4">
      <div>
        <label class="text-sm font-medium">Nama Lengkap</label>
        <div class="relative">
          <input type="text" class="w-full px-4 py-2 rounded-lg border focus:outline-none" placeholder="Nama anda" v-model="form.name"
          />
          <i class="fa-solid fa-user absolute right-3 top-3 text-gray-400"></i>
        </div>
      </div>
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
          <input type="password" class="w-full px-4 py-2 rounded-lg border focus:outline-none" placeholder="Minimal 8 karakter" v-model="form.password"/>
          <i class="fa-solid fa-lock absolute right-3 top-3 text-gray-400"></i>
        </div>
      </div>
      <div>
        <label class="text-sm font-medium">Konfirmasi Password</label>
        <div class="relative">
          <input type="password" class="w-full px-4 py-2 rounded-lg border focus:outline-none" placeholder="Ketik ulang password" />
          <i class="fa-solid fa-lock absolute right-3 top-3 text-gray-400"></i>
        </div>
      </div>
      <button type="submit"
        class="w-full bg-teal-600 hover:bg-teal-700 text-white py-2 rounded-lg font-semibold flex items-center justify-center gap-2"
      >
        <i class="fa-solid fa-user-plus"></i> Daftar Sekarang
      </button>
      <div class="text-center text-gray-400 my-2">atau daftar dengan</div>
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
