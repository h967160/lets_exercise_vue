// createRouter : 創建router實例對象
// createWebHistory : 創建history模式的路由
import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/views/index.vue'
import Home from '@/views/home/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // path和component對應關係的位置
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '', //默認也是/
          component: Home
        }
      ]
    }
  ]
})

export default router
