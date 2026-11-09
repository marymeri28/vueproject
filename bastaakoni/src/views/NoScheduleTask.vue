<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import TaskItem from '@/components/ui/TaskItem.vue'
import { useTasks } from '@/composables/useTasks'

const { noScheduleTasks } = useTasks()
</script>

<template>
  <div class="flex flex-1 items-center justify-center p-4">
    <Card class="w-full max-w-md border border-neutral-400">
      <CardHeader>
        <CardTitle>No Schedule Tasks</CardTitle>
      </CardHeader>
      <CardContent class="max-h-96 space-y-2 overflow-y-auto">
        <p v-if="noScheduleTasks.length === 0" class="text-center text-sm text-neutral-500">
          No unscheduled tasks.
        </p>
        <TaskItem v-for="task in noScheduleTasks" :key="task.id" :task="task" />
      </CardContent>
    </Card>
  </div>
</template>