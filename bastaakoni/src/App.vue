<template>
  <SidebarProvider>
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg">
              <div
                class="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                <GalleryVerticalEnd class="size-4" />
              </div>
              <div class="grid flex-1 text-left text-sm leading-tight">
                <span class="truncate font-semibold">Management</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Platform</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>

              <SidebarMenuItem>
                <SidebarMenuButton as-child>
                  <a href="#">
                    <Home />
                    <span>Home</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>


              <SidebarMenuItem>
                <SidebarMenuButton as-child>
                  <a href="#">
                    <Calendar-clock />
                    <span>Scheduled Tasks</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton as-child>
                  <a href="#">
                    <Bell-ring />
                    <span>Reminders</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>


            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter />
      <SidebarRail />
    </Sidebar>

    <SidebarInset>
      <header
        class="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
        <div class="flex items-center gap-2 px-4">
          <SidebarTrigger class="ml-1" />
        </div>
      </header>


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

    </SidebarInset>
  </SidebarProvider>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
} from '@/components/ui/sidebar'

import {
  CalendarClock,
  GalleryVerticalEnd,
  Home,
  BellRing
} from 'lucide-vue-next'
</script>
