<script setup></script>

<template>
  <div class="bg-[#fffdbe]">
    <!-- atas CUT -->

    <!-- Hero Image -->
    <section class="relative h-[80vh] w-full">
      <img
        src="https://www.theungasan.com/wp-content/uploads/2023/07/la-plancha.jpg"
        alt="La Plancha Bali"
        class="object-cover w-full h-full"
      />
      <div class="absolute inset-0 bg-black/50 flex items-center justify-center">
        <h1 class="text-4xl md:text-6xl font-bold text-white text-center px-4">
          Bali – Surga Tropis Indonesia
        </h1>
      </div>
    </section>

    <!-- Deskripsi -->
    <section class="max-w-4xl mx-auto py-12 px-4">
      <h2 class="text-2xl font-bold mb-4">Deskripsi</h2>
      <p class="text-gray-700">
        Bali adalah destinasi wisata terkenal di Indonesia yang menawarkan keindahan pantai, budaya
        yang kaya, serta suasana tropis yang menyegarkan. Cocok untuk semua jenis pelancong, dari
        petualang hingga pasangan yang berbulan madu.
      </p>
    </section>

    <!-- Fasilitas -->
    <section class="max-w-4xl mx-auto py-8 px-4">
      <h2 class="text-2xl font-bold mb-6">Fasilitas</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div class="flex items-start space-x-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 text-yellow-600 mt-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M8 17l4 4 4-4m0-5l-4-4-4 4"
            />
          </svg>
          <p class="text-gray-700">Penginapan bintang 3 hingga 5</p>
        </div>
        <div class="flex items-start space-x-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 text-yellow-600 mt-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 10h4l3-3 4 4 5-5 3 3v6H3z"
            />
          </svg>
          <p class="text-gray-700">Transportasi lokal (mobil + sopir)</p>
        </div>
        <div class="flex items-start space-x-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 text-yellow-600 mt-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 11c0 2.21-1.79 4-4 4S4 13.21 4 11 5.79 7 8 7s4 1.79 4 4zM20 11c0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4 4 1.79 4 4z"
            />
          </svg>
          <p class="text-gray-700">Pemandu wisata profesional</p>
        </div>
        <div class="flex items-start space-x-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 text-yellow-600 mt-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 4v16m8-8H4"
            />
          </svg>
          <p class="text-gray-700">Wifi gratis di hotel</p>
        </div>
        <div class="flex items-start space-x-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 text-yellow-600 mt-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
          <p class="text-gray-700">Makan 3 kali sehari</p>
        </div>
      </div>
    </section>

    <!-- Tombol Pemesanan -->
    <section class="max-w-4xl mx-auto py-8 px-4">
      <h2 class="text-2xl font-bold mb-4">Harga Paket</h2>
      <p class="text-gray-700 text-lg mb-2">
        Mulai dari <span class="text-yellow-600 font-semibold">Rp 3.500.000</span> per orang
      </p>
      <p class="text-sm text-gray-500">
        Termasuk penginapan, transportasi, pemandu wisata, dan makan.
      </p>
    </section>

    <!-- Tombol Pemesanan -->
    <section class="text-center py-12">
      <h2 class="text-2xl font-bold mb-4">Tertarik untuk Liburan ke Bali?</h2>
      <p class="mb-6 text-gray-600">
        Klik tombol di bawah untuk melakukan pemesanan atau konsultasi dengan tim kami.
      </p>
      <a
        href="#"
        class="bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transition"
        >Pesan Sekarang</a
      >
    </section>

    <!-- BATAS CUT -->
  </div>
</template>
