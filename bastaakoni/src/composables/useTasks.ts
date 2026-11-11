
import { ref, computed, watch } from 'vue'
import { searchQuery } from '@/composables/useSearch'

export interface Task {
  id: number
  text: string
  date: string | null
  done: boolean
}

const STORAGE_KEY = 'my-tasks'

function load(): Task[] {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved ? JSON.parse(saved) : []
  } catch {
    return []
  }
}

const tasks = ref<Task[]>(load())

watch(
  tasks,
  (value) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(value))
  },
  { deep: true },
)

export function useTasks() {
  function addTask(text: string, date: string | null) {
    if (!text.trim()) return
    tasks.value.push({
      id: Date.now(),
      text: text.trim(),
      date: date || null,
      done: false,
    })
  }

  function removeTask(id: number) {
    tasks.value = tasks.value.filter((t) => t.id !== id)
  }

  function editTask(id: number, text: string, date: string | null) {
    if (!text.trim()) return
    const task = tasks.value.find((t) => t.id === id)
    if (!task) return
    task.text = text.trim()
    task.date = date || null
  }

  const scheduledTasks = computed(() =>
    tasks.value
      .filter((t) => t.date && !t.done)
      .sort((a, b) => a.date!.localeCompare(b.date!)),
  )

  const noScheduleTasks = computed(() => tasks.value.filter((t) => !t.date && !t.done))

  const CompletedTask = computed(() => tasks.value.filter((t) => t.done))

  const filteredTask = computed(() => {
    const q = searchQuery.value.trim().toLowerCase()
    if (!q) return tasks.value
    return tasks.value.filter(t => t.text.toLowerCase().includes(q))
  })

  return { tasks, addTask, removeTask, editTask, scheduledTasks, noScheduleTasks, CompletedTask }
}