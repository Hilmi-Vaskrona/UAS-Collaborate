<template>
  <footer class="w-full bg-gray-800 text-white">
    <div class="max-w-7xl mx-auto px-4 py-12">
      <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <!-- Company Info -->
        <div class="space-y-6">
          <div>
            <h2 class="text-5xl font-normal text-white mb-4" style="font-family: 'Pacifico', cursive;">Safari</h2>
            <div class="flex space-x-4">
              <div class="w-14 h-9 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/4h1fRJ0hD2.png)] bg-cover"></div>
              <div class="w-11 h-9 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/9J8zHwFXxV.png)] bg-cover"></div>
              <div class="w-17 h-9 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/hVaYgNNR2W.png)] bg-cover"></div>
            </div>
          </div>
          
          <div>
            <button class="bg-gray-700 text-white px-6 py-3 rounded-lg flex items-center space-x-3 hover:bg-gray-600 transition-colors">
              <div class="w-6 h-6 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/pQfV6YK6ob.png)] bg-cover"></div>
              <span>Jadi Partner Safari</span>
            </button>
          </div>
          
          <!-- Payment Partners -->
          <div>
            <h3 class="font-bold mb-3">Partner Pembayaran</h3>
            <img src="https://i.imgur.com/PuXHrWE.png" alt="pembayaran">
          </div>
        </div>
        
        <!-- About Safari -->
        <div>
          <h3 class="font-bold mb-4">Tentang Safari</h3>
          <nav class="space-y-3">
            <a href="#" class="block text-white/65 hover:text-white transition-colors">Cara Pesan</a>
            <a href="#" class="block text-white/65 hover:text-white transition-colors">Hubungi Kami</a>
            <a href="#" class="block text-white/65 hover:text-white transition-colors">Pusat Bantuan</a>
            <a href="#" class="block text-white/65 hover:text-white transition-colors">Karier</a>
            <a href="#" class="block text-white/65 hover:text-white transition-colors">Cicilan</a>
            <a href="#" class="block text-white/65 hover:text-white transition-colors">Tentang Kami</a>
            <a href="#" class="block text-white/65 hover:text-white transition-colors">Rilisan Fitur Terbaru</a>
          </nav>
          
          <div class="mt-8">
            <h4 class="font-bold mb-4">Follow kami di</h4>
            <div class="space-y-3">
              <SocialLink icon="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/0go2SkVfuW.png" name="Facebook" />
              <SocialLink icon="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/A9GGWW53ny.png" name="Instagram" />
              <SocialLink icon="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/ALzX6Ry4X1.png" name="TikTok" />
              <SocialLink icon="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/xgjbfHYWeV.png" name="Youtube" />
              <SocialLink icon="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/VXZpr5cFXT.png" name="Twitter" />
              <SocialLink icon="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/V5Cytchqdy.png" name="Telegram" />
              <SocialLink name="WhatsApp" />
            </div>
          </div>
        </div>
        
        <!-- Products -->
        <div>
          <h3 class="font-bold mb-4">Produk</h3>
          <nav class="space-y-3">
            <a href="#" class="block text-white/65 hover:text-white transition-colors">Hotel</a>
            <a href="#" class="block text-white/65 hover:text-white transition-colors">Tiket Pesawat</a>
            <a href="#" class="block text-white/65 hover:text-white transition-colors">Tiket Kereta Api</a>
            <a href="#" class="block text-white/65 hover:text-white transition-colors">Tiket Bus & Travel</a>
            <a href="#" class="block text-white/65 hover:text-white transition-colors">Antar Jemput Bandara</a>
            <a href="#" class="block text-white/65 hover:text-white transition-colors">Rental Mobil</a>
            <a href="#" class="block text-white/65 hover:text-white transition-colors">JR Pass</a>
            <a href="#" class="block text-white/65 hover:text-white transition-colors">Taksi</a>
            <a href="#" class="block text-white/65 hover:text-white transition-colors">Xperience</a>
            <a href="#" class="block text-white/65 hover:text-white transition-colors">Cruises</a>
            <a href="#" class="block text-white/65 hover:text-white transition-colors">Vila</a>
            <a href="#" class="block text-white/65 hover:text-white transition-colors">Apartemen</a>
            <a href="#" class="block text-white/65 hover:text-white transition-colors">Asuransi</a>
            <a href="#" class="block text-white/65 hover:text-white transition-colors">Internet Luar Negeri</a>
            <a href="#" class="block text-white/65 hover:text-white transition-colors">TPayLater</a>
            <a href="#" class="block text-white/65 hover:text-white transition-colors">Gift Voucher</a>
          </nav>
        </div>
        
        <!-- Others -->
        <div>
          <h3 class="font-bold mb-4">Lainnya</h3>
          <nav class="space-y-3">
            <a href="#" class="block text-white/65 hover:text-white transition-colors">Safari for Corporates</a>
            <a href="#" class="block text-white/65 hover:text-white transition-colors">Safari Affiliate</a>
            <a href="#" class="block text-white/65 hover:text-white transition-colors">Blog Safari</a>
            <a href="#" class="block text-white/65 hover:text-white transition-colors">Pemberitahuan Privasi</a>
            <a href="#" class="block text-white/65 hover:text-white transition-colors">Syarat & Ketentuan</a>
            <a href="#" class="block text-white/65 hover:text-white transition-colors">Daftarkan Akomodasi Anda</a>
            <a href="#" class="block text-white/65 hover:text-white transition-colors">Daftarkan Bisnis Aktivitas Anda</a>
            <a href="#" class="block text-white/65 hover:text-white transition-colors">Safari Press Room</a>
            <a href="#" class="block text-white/65 hover:text-white transition-colors">Safari Ads</a>
            <a href="#" class="block text-white/65 hover:text-white transition-colors">Vulnerability Disclosure Program</a>
            <a href="#" class="block text-white/65 hover:text-white transition-colors">APAC Travel Insights</a>
          </nav>
          
          <div class="mt-8">
            <h4 class="font-bold mb-4">Download Safari App</h4>
            <div class="space-y-2">
              <div class="w-34 h-10 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/QOvFV3QseT.png)] bg-cover opacity-65 cursor-pointer hover:opacity-100 transition-opacity"></div>
              <div class="w-34 h-10 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/nkYbFp6bjy.png)] bg-cover opacity-65 cursor-pointer hover:opacity-100 transition-opacity"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Copyright -->
    <div class="border-t border-gray-600 py-6">
      <div class="max-w-7xl mx-auto px-4 text-center">
        <p class="text-white text-sm">Copyright © 2025 Safari.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import SocialLink from '@/components/ui/SocialLink.vue';
</script>

<style scoped>
</style>
