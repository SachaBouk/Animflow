import { createRouter, createWebHistory } from 'vue-router'
import Homeview from '@/views/Homeview.vue'
import Galleryview from '@/views/Galleryview.vue'
import Toolsview from '@/views/Toolsview.vue'
import TestAPI from '@/views/TestAPI.vue'
import TestCreateAnim from '@/views/TestCreateAnim.vue'
import EditAnim from '@/views/EditAnim.vue'

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
    },
    {
      path:"/testCreate",
      name:"testCreate",
      component: TestCreateAnim
    },
    {
      path:"/edit",
      name:"Edit",
      component: EditAnim
    }


  ],
})

export default router
