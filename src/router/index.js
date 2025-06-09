import {
  createRouter,
  createWebHistory
} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import DetailKomponen from '@/components/DetailKomponen.vue'
import PemesananKomponen from '@/components/PemesananKomponen.vue'
import SuksesKomponen from '@/components/SuksesKomponen.vue'

const router = createRouter({
  history: createWebHistory(
    import.meta.env.BASE_URL),
  routes: [{
      path: '/',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: DetailKomponen,
    },
    {
      path: '/pemesanan',
      name: 'pemesanan',
      component: PemesananKomponen,
    },
    {
      path: '/sukses',
      name: 'sukses',
      component: SuksesKomponen,
    },
  ]
})

export default router
