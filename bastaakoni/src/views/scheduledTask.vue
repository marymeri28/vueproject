<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-4">Scheduled Task</h1>
    <p v-if="scheduledTasks.length === 0" class="text-center text-sm text-neutral-500">
      No scheduled tasks.
    </p>
    <TaskItem v-for="task in scheduledTasks" :key="task.id" :task="task" />
  </div>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import TaskItem from '@/components/ui/TaskItem.vue'

import {
  CalendarClock,
  GalleryVerticalEnd,
  Home,
  BellRing
} from 'lucide-vue-next'

import { RouterLink, RouterView } from 'vue-router'
import { useTasks } from '@/composables/useTasks'

const { scheduledTasks } = useTasks()
</script>
