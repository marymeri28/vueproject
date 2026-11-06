<script setup>
import { ref, computed, watch } from 'vue'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
 } from '@/components/ui/card'

const task = ref(JSON.parse(localStorage.getItem('tasks') || '[]'))

watch(
  task,
  (newTasks) => {
    localStorage.setItem('task', JSON.stringify(newTasks))
  },
  { deep: true }
)

const dateTask = ref('')
const tasks = ref([])
const error = ref('')
const taskInput = ref(null)

const count = computed(() => tasks.value.length)

const greeting = computed(() => {
  const hour = new Date().getHours()
  if (hour < 12) return '🌅 Good Morning! What are we doing today? 🌅'
  if (hour < 18) return '☀️ Good Afternoon! Stay focused ☀️'
  return '🌙 Good Evening! Wrapping up? 🌙'
})

function formatDate(dateValue) {
  if (dateValue === 'none') return 'No Date'
  const today = new Date().toLocaleDateString('en-CA')
  const tomorrow = new Date(Date.now() + 86400000).toLocaleDateString('en-CA')
  if (dateValue === today) return 'Today'
  if (dateValue === tomorrow) return 'Tomorrow'
  return new Date(dateValue + 'T00:00').toLocaleDateString('en-US', {
    weekday: 'short',
    year: '2-digit',
    month: '2-digit',
    day: '2-digit',
  })
}

const groups = computed(() => {
  const map = {}
  for (const t of tasks.value) {
    const key = t.date || 'none'
    ;(map[key] ||= []).push(t)
  }
  return Object.keys(map)
    .sort((a, b) => {
      if (a === 'none') return 1
      if (b === 'none') return -1
      return a.localeCompare(b)
    })
    .map(key => ({ key, label: formatDate(key), items: map[key] }))
})

function addTask() {
  const text = task.value.trim()
  if (text === '') {
    error.value = 'Please enter a task'
    return
  }
  error.value = ''
  tasks.value.push({ id: Date.now(), text, date: dateTask.value, done: false })
  task.value = ''
  dateTask.value = ''
  taskInput.value?.$el?.focus() // $el is the real <input> inside the Input component
}

function toggleDone(t) {
  t.done = !t.done
}

function removeTask(id) {
  tasks.value = tasks.value.filter(t => t.id !== id)
}
</script>

<template>
  <div class="min-h-screen bg-[antiquewhite]">
    <header
      class="grid h-32 place-items-center bg-[rosybrown] px-4 text-center text-2xl font-bold sm:h-48 sm:text-3xl"
    >
      <h1>{{ greeting }}</h1>
    </header>

    <main class="mx-auto flex max-w-xl flex-col gap-6 p-4 sm:p-10">
      <!-- Add task form -->
      <Card>
        <CardHeader>
          <CardTitle class="text-center text-2xl">Any tasks today?</CardTitle>
        </CardHeader>

        <CardContent>
          <form class="flex flex-col gap-4" @submit.prevent="addTask">
            <div class="flex flex-col gap-2">
              <Label for="task">Task</Label>
              <Input
                id="task"
                ref="taskInput"
                v-model="task"
                placeholder="Enter a task"
                :class="error && 'border-destructive'"
              />
            </div>

            <div class="flex flex-col gap-2">
              <Label for="date-task">Due date</Label>
              <Input id="date-task" type="date" v-model="dateTask" />
            </div>

            <p class="min-h-5 text-sm text-destructive text-[crimson]">{{ error }}</p>

            <Button type="submit" class="self-center bg-[pink] hover:bg-gray border-1px">Add Task</Button>
          </form>
        </CardContent>

        <CardFooter class="justify-center gap-2 text-sm">
          Total task:
          <Badge variant="secondary">{{ count }}</Badge>
        </CardFooter>
      </Card>

      <!-- Task list -->
      <Card>
        <CardHeader>
          <CardTitle class="text-center">My Tasks</CardTitle>
        </CardHeader>

        <CardContent>
          <p
            v-if="groups.length === 0"
            class="text-center text-sm text-muted-foreground"
          >
            No tasks yet
          </p>

          <div v-else class="flex flex-col gap-6">
            <section v-for="g in groups" :key="g.key">
              <h3 class="mb-2 border-b pb-1 text-sm font-semibold">
                {{ g.label }}
              </h3>

              <ul class="flex flex-col gap-2">
                <li
                  v-for="t in g.items"
                  :key="t.id"
                  class="flex flex-col gap-2 rounded-md border p-2 sm:flex-row sm:items-center"
                >
                  <span
                    class="flex-1 wrap-break-words"
                    :class="{ 'line-through opacity-60': t.done }"
                  >
                    {{ t.text }}
                  </span>

                  <div class="flex gap-2">
                    <Button class="bg-[skyblue]" size="sm" variant="outline" @click="toggleDone(t)">
                      {{ t.done ? 'Undo' : 'Complete' }}
                    </Button>
                    <Button class="bg-[red]"
                      size="sm"
                      variant="outline"
                      @click="removeTask(t.id)"
                    >
                      Delete
                    </Button>
                  </div>
                </li>
              </ul>
            </section>
          </div>
        </CardContent>
      </Card>
    </main>
  </div>
</template>