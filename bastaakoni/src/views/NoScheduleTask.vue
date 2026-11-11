<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import TaskItem from '@/components/ui/TaskItem.vue'
import { useTasks } from '@/composables/useTasks'

const { noScheduleTasks } = useTasks()
</script>


<template>
  <div class="p-4" >
    <h1 class="text-2xl font-bold mb-4">No Scheduled Task</h1>
    <p v-if="noScheduleTasks.length === 0" class="text-center text-sm text-neutral-500 mb-">
      No unscheduled tasks.
    </p>
    <TaskItem v-for="task in noScheduleTasks" :key="task.id" :task="task" class="mb-4" />
  </div>
</template>