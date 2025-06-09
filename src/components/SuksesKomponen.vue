<template>
  <div class="min-h-screen bg-yellow-50 flex items-center justify-center">
    <div class="bg-white shadow-xl rounded-lg p-8 max-w-md w-full text-center">
      <div class="text-green-600 text-5xl mb-4">
        ✔️
      </div>
      <h1 class="text-2xl font-bold mb-2">Pemesanan dikonfirmasi!</h1>
      <p class="text-gray-700 mb-6">
        Terima kasih atas pemesanan Anda! Kami telah mengirim email konfirmasi dengan semua detail reservasi Anda.
        Tim kami akan segera menghubungi Anda untuk mengatur semuanya.
      </p>

      <div class="bg-gray-100 rounded-md p-4 text-left text-sm mb-6">
        <p><span class="font-semibold text-blue-600">Referensi Pemesanan:</span> STNGRC-789456</p>
        <p><span class="font-semibold">Destinasi:</span> Tokyo, Japan</p>
        <p><span class="font-semibold">Tanggal:</span> 15 Jun 2023 - 22 Jun 2023 (7 malam)</p>
        <p><span class="font-semibold">Tamu:</span> 2 dewasa</p>
        <p><span class="font-semibold">Total Dibayar:</span> $3,000</p>
      </div>

      <div class="flex justify-center gap-4">
        <button
          class="border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-50 transition"
          @click="$router.push('/home')"
        >
          Kembali ke Beranda
        </button>
      </div>
    </div>
  </div>
</template>
