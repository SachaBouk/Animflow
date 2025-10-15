import { createRouter, createWebHistory } from 'vue-router'
import Homeview from '@/views/Homeview.vue'
import Galleryview from '@/views/Galleryview.vue'
import Toolsview from '@/views/Toolsview.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:"/",
      name:"home",
      component: Homeview
    },
    {
      path:"/Gallery",
      name:"gallery",
      component: Galleryview
    },
    {
      path:"/Tools",
      name:"tools",
      component: Toolsview
    }


  ],
})

export default router
