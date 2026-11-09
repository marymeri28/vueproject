<template>
  <div class="flex flex-1 items-center justify-center p-4">
    <Card class="w-full max-w-md border border-neutral-400">
      <CardHeader>
        <CardTitle>Scheduled Tasks</CardTitle>
      </CardHeader>
      <CardContent class="max-h-96 space-y-2 overflow-y-auto">
        <p v-if="scheduledTasks.length === 0" class="text-center text-sm text-neutral-500">
          No scheduled tasks.
        </p>
        <TaskItem v-for="task in scheduledTasks" :key="task.id" :task="task" />

      </CardContent>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'

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
