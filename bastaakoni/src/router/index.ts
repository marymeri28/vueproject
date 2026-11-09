import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import SCheduledTask from '@/views/ScheduledTask.vue'
import Reminders from '@/views/Reminders.vue'
import ScheduledTask from '@/views/ScheduledTask.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/tasks', name: 'schedule', component: ScheduledTask },
    { path: '/reminder', name: 'reminder', component: Reminders },
  ],
})

export default router