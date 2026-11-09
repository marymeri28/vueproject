import { ref, computed } from 'vue'

export interface Task {
  id: number
  text: string
  date: string | null
  done: boolean
}


const tasks = ref<Task[]>([])

export function useTasks() {
  function addTask(text: string, date: string | null) {
    if (!text.trim()) return
    tasks.value.push({
      id: Date.now(),
      text,
      date: date || null,
      done: false,
    })
  }

  function removeTask(id: number) {
    tasks.value = tasks.value.filter((t) => t.id !== id)
  }


  const scheduledTasks = computed(() =>
    tasks.value
      .filter((t) => t.date)
      .sort((a, b) => a.date!.localeCompare(b.date!)),
  )


  const noScheduleTasks = computed(() => tasks.value.filter((t) => !t.date))

  return { tasks, addTask, removeTask, scheduledTasks, noScheduleTasks }
}