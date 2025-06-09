<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import wisataData from '@/data/wisata.json'

const route = useRoute()
const id = computed(() => Number(route.params.id))

// Asumsikan urutan di JSON, id = index + 1
const destination = computed(() => wisataData[id.value - 1] || wisataData[0])
</script>

<template>
  <div class="bg-[#fffdbe]">
    <!-- Hero Image -->
    <section class="relative h-[80vh] w-full">
      <img
        :src="destination.image"
        :alt="destination.name"
        class="object-cover w-full h-full"
      />
      <div class="absolute inset-0 bg-black/50 flex items-center justify-center">
        <h1 class="text-4xl md:text-6xl font-bold text-white text-center px-4">
          {{ destination.name }} – {{ destination.location }}
        </h1>
      </div>
    </section>

    <!-- Deskripsi -->
    <section class="max-w-4xl mx-auto py-12 px-4">
      <h2 class="text-2xl font-bold mb-4">Deskripsi</h2>
      <p class="text-gray-700">
        {{ destination.description }}
      </p>
    </section>

    <!-- Fasilitas -->
    <section class="max-w-4xl mx-auto py-8 px-4">
      <h2 class="text-2xl font-bold mb-6">Fasilitas</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div
          v-for="(item, idx) in destination.includes"
          :key="idx"
          class="flex items-start space-x-4"
        >
          <!-- Ganti SVG sesuai kebutuhan, atau pakai satu ikon saja -->
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
          <p class="text-gray-700">{{ item }}</p>
        </div>
      </div>
    </section>

    <!-- Harga Paket -->
    <section class="max-w-4xl mx-auto py-8 px-4">
      <h2 class="text-2xl font-bold mb-4">Harga Paket</h2>
      <p class="text-gray-700 text-lg mb-2">
        Mulai dari
        <span class="text-yellow-600 font-semibold">
          Rp {{ destination.price.toLocaleString('id-ID') }}
        </span>
        per orang
      </p>
      <p class="text-sm text-gray-500">
        Termasuk penginapan, transportasi, pemandu wisata, dan makan.
      </p>
    </section>

    <!-- Tombol Pemesanan -->
    <section class="text-center py-12">
      <h2 class="text-2xl font-bold mb-4">Tertarik untuk Liburan ke {{ destination.name }}?</h2>
      <p class="mb-6 text-gray-600">
        Klik tombol di bawah untuk melakukan pemesanan atau konsultasi dengan tim kami.
      </p>
      <a
        href="/pemesanan"
        class="bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transition"
        >Pesan Sekarang</a
      >
    </section>
  </div>
</template>
