import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import SCheduledTask from '@/views/scheduledTask.vue'
import Reminders from '@/views/Reminders.vue'
import ScheduledTask from '@/views/scheduledTask.vue'
import NoScheduleTask from '@/views/NoScheduleTask.vue'
import CompletedTask from '@/views/CompletedTask.vue'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/tasks', name: 'schedule', component: ScheduledTask },
    { path: '/reminder', name: 'reminder', component: Reminders },
    {path: '/noschedule', name: 'nosched', component:NoScheduleTask},
    {path: '/completed', name:'complete', component:CompletedTask}
  ],
})

export default router