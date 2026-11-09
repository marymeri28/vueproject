<template>
    <div class="flex flex-1 items-center justify-center p-4">
        <Card class="w-full max-w-md border border-neutral-400">
            <CardHeader>
                <CardTitle>My Task Manager</CardTitle>
            </CardHeader>

            <CardContent class="space-y-2">
                <Label for="task">Task:</Label>
                <div class="flex gap-2">
                    <Input id="task" class="min-w-0 flex-1" placeholder="Enter a task" />
                    <Input type="date" class="min-w-0 flex-1" />
                    <Button>Add</Button>
                </div>
                <div class="flex items-center gap-2">
                    <Checkbox class="rounded-2xl border border-neutral-500" />
                    <CalendarClock class="h-4" />
                </div>
            </CardContent>
        </Card>
    </div>
</template>