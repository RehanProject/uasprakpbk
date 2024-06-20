import { createRouter, createWebHistory } from 'vue-router'
import Task1 from '../views/Task1.vue'
// Impor halaman tugas lainnya

const routes = [
  { path: '/task1', component: Task1 },
    // Tambahkan rute lainnya
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router