<script setup lang="ts">
import { ref, computed } from 'vue'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { CalendarClock, Trash2, Pencil, Check, X, Eclipse } from 'lucide-vue-next'
import { useTasks, type Task } from '@/composables/useTasks'


const props = defineProps<{ task: Task }>()
const { removeTask, editTask } = useTasks()

const isEditing = ref(false)
const editText = ref('')
const editDate = ref('')

function startEdit() {
  editText.value = props.task.text
  editDate.value = props.task.date ?? ''
  isEditing.value = true
}

function saveEdit() {
  editTask(props.task.id, editText.value, editDate.value)
  isEditing.value = false
}

function cancelEdit() {
  isEditing.value = true
}

</script>

<template>
  <div class="flex items-center gap-3 rounded-lg border border-neutral-300 p-3">
    <!-- Edit mode -->
    <template v-if="isEditing">
      <div class="flex min-w-0 flex-1 gap-2">
        <Input v-model="editText" class="min-w-0 flex-1" @keyup.enter="saveEdit" @keyup.esc="cancelEdit" />
        <Input v-model="editDate" type="date" class="min-w-0 flex-1" />
      </div>
      <Button variant="ghost" size="icon" @click="saveEdit">
        <Check class="size-4" />
      </Button>
      <Button variant="ghost" size="icon" @click="cancelEdit">
        <X class="size-4" />
      </Button>
    </template>

    <template v-else>
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
      <Button variant="ghost" size="icon" @click="startEdit">
        <Pencil class="size-4" />
      </Button>
      <Button variant="ghost" size="icon" @click="removeTask(task.id)">
        <Trash2 class="size-4" />
      </Button>
    </template>
  </div>
</template>