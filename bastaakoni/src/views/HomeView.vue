<script setup lang="ts">
import { ref, watch } from 'vue'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { CalendarClock, Trash2 } from 'lucide-vue-next'
import { Switch } from '@/components/ui/switch'
import { useTasks } from '@/composables/useTasks'
import TaskItem from '@/components/ui/TaskItem.vue'

const { tasks, addTask, removeTask} = useTasks()

const newTask = ref('')
const newdate = ref('')
const useDate = ref(false)

watch(useDate, (on) => {
    if (!on) newdate.value = ''
})

function handleAdd() {
    addTask(newTask.value, useDate.value ? newdate.value : '')
    newTask.value = ''
    newdate.value = ''
}

</script>

<template>
    <div class="flex flex-1 items-center justify-center p-4">
        <Card class="w-full max-w-md border border-neutral-400">
            <CardHeader>
                <CardTitle>My Task Manager</CardTitle>
            </CardHeader>

            <CardContent class="space-y-2">
                <Label for="task">Task:</Label>
                <div class="flex gap-2">
                    <Input id="task" v-model="newTask" class="min-w-0 flex-1" placeholder="Enter a task"
                        @keyup.enter="handleAdd" />
                    <Input v-if="useDate" v-model="newdate" type="date" class="min-w-0 flex-1" />
                    <Button @click="handleAdd">Add</Button>
                </div>
                <div class="flex gap-2">
                    <Switch id="use-date" v-model="useDate" />
                    <Label for="use-date" class="text-sm">Add due date</Label>
                </div>
                <hr class="border border-neutral-500" />
                <div>
                    <h1 class="text-center"><strong>My Tasks</strong></h1>

                    <div class="max-h-80 space-y-2 overflow-y-auto">
                        <p v-if="tasks.length === 0" class="text-center text-sm text-neutral-500">
                            No tasks yet.
                        </p>

                        <div v-for="task in tasks" :key="task.id"
                            class="flex items-center gap-3 rounded-lg border border-neutral-300 p-3">
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
                    </div>

                    <p class="text-sm text-neutral-500">
                        {{tasks.filter((t) => !t.done).length}} task(s) left
                    </p>
                </div>
            </CardContent>
        </Card>
    </div>
</template>