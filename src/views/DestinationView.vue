<!-- <template>
   <Navbar
  :url="url"
  :navItems="navItems"
  :activeIndex="activeIndex"
  @logout="logout"
  @gantiUrl="gantiUrl"
/>
  <div class="akun-komponen">
    <h2>Akun Komponen</h2>
    <p>Ini adalah komponen akun yang dapat digunakan untuk mengelola informasi akun.</p>
  </div>
</template>

<script setup>

import {ref, computed } from 'vue'
import Navbar from '@/components/NavbarKomponen.vue' // Tambahkan ini

const url = ref('/')
const navItems = [
  { name: 'Home', icon: 'fa-solid fa-house' },
  { name: 'Destination', icon: 'fa-solid fa-plane' },
  { name: 'Packages', icon: 'fa-solid fa-box' },
  { name: 'Account', icon: 'fa-solid fa-user' },
]
const activeIndex = computed(() =>
  navItems.findIndex(item => item.name === url.value)
)
const gantiUrl = (value) => {
  url.value = value
  console.log(url.value)
}
const logout = () => {
  localStorage.removeItem('loggedInUser')
}
</script> -->