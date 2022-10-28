import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CreateCourse from '../views/Create_new_course.vue'
import CreateClass from '../views/CreateClass.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/new_course',
    name: 'new_course',
    component: CreateCourse
  },
  {
    path: '/new_class',
    name: 'CreateClass',
    component: CreateClass
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
