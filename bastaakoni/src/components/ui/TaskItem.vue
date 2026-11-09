<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { CalendarClock, Trash2 } from 'lucide-vue-next'
import { useTasks, type Task } from '@/composables/useTasks'

defineProps<{ task: Task }>()
const { removeTask } = useTasks()
</script>

<template>
  <div class="flex items-center gap-3 rounded-lg border border-neutral-300 p-3">
    <Checkbox v-model="task.done" />

    <div class="min-w-0 flex-1">
      <p class="truncate" :class="{ 'line-through text-neutral-400': task.done }">
        {{ task.text }}
      </p>
      <p v-if="task.date" class="flex items-center gap-1 text-xs text-neutral-500">
        <CalendarClock class="size-3" />
        {{ task.date }}
      </p>
    </div>

    <Button variant="ghost" size="icon" @click="removeTask(task.id)">
      <Trash2 class="size-4" />
    </Button>
  </div>
</template>