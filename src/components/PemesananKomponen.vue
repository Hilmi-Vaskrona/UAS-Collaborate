<script setup></script>
<template>
  <div class="bg-[#fffdbe] min-h-screen">
  <section class="max-w-2xl mx-auto py-12 px-4">
    <h1 class="text-3xl font-bold text-center mb-8">Form Pemesanan Travel Wisata</h1>

    <form @submit.prevent="handleSubmit" class="bg-white p-6 rounded-lg shadow-md space-y-4">
      <div v-if="step === 1" class="flex flex-col gap-4">
        <div>
          <label for="nama" class="block text-sm font-medium text-gray-700">Nama Lengkap</label>
          <input v-model="form.nama" type="text" id="nama" name="nama" class="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-yellow-400 focus:border-yellow-400" required>
        </div>

        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
          <input v-model="form.email" type="email" id="email" name="email" class="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-yellow-400 focus:border-yellow-400" required>
        </div>

        <div>
          <label for="telepon" class="block text-sm font-medium text-gray-700">Nomor Telepon</label>
          <input v-model="form.telepon" type="tel" id="telepon" name="telepon" class="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-yellow-400 focus:border-yellow-400" required>
        </div>

        <div>
          <label for="jumlah" class="block text-sm font-medium text-gray-700">Jumlah Orang</label>
          <input v-model="form.jumlah" type="number" id="jumlah" name="jumlah" min="1" class="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-yellow-400 focus:border-yellow-400" required>
        </div>

        <div>
          <label for="tanggal" class="block text-sm font-medium text-gray-700">Tanggal Keberangkatan</label>
          <input v-model="form.tanggal" type="date" id="tanggal" name="tanggal" class="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-yellow-400 focus:border-yellow-400" required>
        </div>

        <button type="button" @click="step++" class="w-full bg-yellow-400 text-black py-3 px-6 rounded-md font-semibold hover:bg-yellow-300 transition">Next</button>
      </div>

      <div v-else-if="step === 2">
        <h2 class="text-xl font-semibold mb-4">Metode Pembayaran</h2>
        <div class="space-y-4">
          <div class="border p-4 rounded-lg hover:shadow cursor-pointer" @click="form.pembayaran = 'Transfer Bank - Bank A'">
            <label class="flex items-center space-x-4 cursor-pointer">
              <input type="radio" v-model="form.pembayaran" value="Bank BCA" class="form-radio">
              <img src="https://i.pinimg.com/564x/00/cb/4f/00cb4f7ad2d81f39afffe610fc1d07fd.jpg" alt="Bank A" class="h-8 w-auto">
              <span>Bank BCA</span>
            </label>
          </div>

          <div class="border p-4 rounded-lg hover:shadow cursor-pointer" @click="form.pembayaran = 'Transfer Bank - Bank A'">
            <label class="flex items-center space-x-4 cursor-pointer">
              <input type="radio" v-model="form.pembayaran" value="Bank MANDIRI" class="form-radio">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Bank_Mandiri_logo_2016.svg/2560px-Bank_Mandiri_logo_2016.svg.png" alt="Bank A" class="h-8 w-auto">
              <span>Bank MANDIRI</span>
            </label>
          </div>

          <div class="border p-4 rounded-lg hover:shadow cursor-pointer" @click="form.pembayaran = 'Transfer Bank - Bank A'">
            <label class="flex items-center space-x-4 cursor-pointer">
              <input type="radio" v-model="form.pembayaran" value="Bank BSI" class="form-radio">
              <img src="https://images.seeklogo.com/logo-png/40/1/bank-syariah-indonesia-logo-png_seeklogo-400980.png" alt="Bank A" class="h-8 w-auto">
              <span>Bank BSI</span>
            </label>
          </div>

          <div class="border p-4 rounded-lg hover:shadow cursor-pointer" @click="form.pembayaran = 'E-Wallet'">
            <label class="flex items-center space-x-4 cursor-pointer">
              <input type="radio" v-model="form.pembayaran" value="E-Wallet" class="form-radio">
              <img src="https://img.freepik.com/premium-vector/e-wallet-modern-pay-logo-icon-vector-illustration-template-design_658089-5733.jpg" alt="E-Wallet" class="h-8 w-auto">
              <span>E-Wallet</span>
            </label>
          </div>

          <div class="border p-4 rounded-lg hover:shadow cursor-pointer" @click="form.pembayaran = 'Kartu Kredit'">
            <label class="flex items-center space-x-4 cursor-pointer">
              <input type="radio" v-model="form.pembayaran" value="Kartu Kredit" class="form-radio">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Visa.svg/2560px-Visa.svg.png" alt="Kartu Kredit" class="h-8 w-auto">
              <span>Kartu Kredit</span>
            </label>
          </div>
        </div>

        <button type="submit" class="mt-6 w-full bg-yellow-400 text-black py-3 px-6 rounded-md font-semibold hover:bg-yellow-300 transition">Simpan</button>
      </div>
    </form>
  </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const step = ref(1)

const form = ref({
  nama: '',
  email: '',
  telepon: '',
  jumlah: 1,
  tanggal: '',
  pembayaran: ''
})

function handleSubmit() {
  console.log('Form submitted:', form.value)
  alert('Pemesanan berhasil disimpan!')
}
</script>
