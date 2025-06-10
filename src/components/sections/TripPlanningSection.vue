<template>
  <section class="w-full py-16 bg-[#FFFBDE]">
    <div class="max-w-6xl mx-auto px-4">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Form -->
        <div class="bg-white p-8 rounded-[16px] shadow-lg">
          <form class="space-y-6">
            <div>
              <label class="block text-base font-bold text-black mb-2">Destinasi</label>
              <input 
                type="text" 
                placeholder="Contoh: Bali, Paris, Tokyo"
                class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
            </div>
            
            <div>
              <label class="block text-base font-bold text-black mb-2">Temukan Gaya Liburan Anda</label>
              <input 
                type="text" 
                placeholder="Contoh: Petualangan, Relaksasi"
                class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
            </div>
            
            <div>
              <label class="block text-base font-bold text-black mb-2">Durasi Liburan</label>
              <select class="w-full p-3 border border-gray-300 rounded-lg bg-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>1-2 Hari</option>
                <option>3-5 Hari</option>
                <option>1 Minggu</option>
                <option>2 Minggu</option>
              </select>
            </div>
            
            <div>
              <label class="block text-base font-bold text-black mb-2">Musim Perjalanan</label>
              <input 
                type="text" 
                placeholder="Contoh: Musim Panas, Musim Dingin"
                class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
            </div>
            
            <div>
              <label class="block text-base font-bold text-black mb-2">Rencana Anggaran</label>
              <input 
                type="text" 
                placeholder="Contoh: Rp5.000.000 - Rp20.000.000"
                class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
            </div>
            
            <div>
              <label class="block text-base font-bold text-black mb-2">Informasi Tambahan</label>
              <textarea 
                placeholder="Tulis catatan atau preferensi lain di sini..."
                rows="4"
                class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              ></textarea>
            </div>
            
            <button 
              type="submit"
              class="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-bold hover:bg-blue-700 transition-colors"
            >
              Temukan Perjalanan Impian Saya →
            </button>
          </form>
        </div>
        
        <!-- Content -->
        <div class="space-y-6">
          <div>
            <h2 class="text-4xl font-bold text-black mb-4">
              Rencanakan<br>
              Perjalanan Impian<br>
              Anda
            </h2>
          </div>
          <div>
            <p class="text-gray-600 leading-relaxed">
              Temukan rencana perjalanan yang dipersonalisasi,<br>
              destinasi pilihan, dan paket eksklusif yang dirancang<br>
              khusus untuk Anda.
            </p>
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
