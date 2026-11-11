<template>
  <div class="select-none">
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
                    <RouterLink to="/">
                      <Home />
                      <span>Home</span>
                    </RouterLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>


                <SidebarMenuItem>
                  <SidebarMenuButton as-child>
                    <RouterLink to="/tasks">
                      <Calendar-clock />
                      <span>Scheduled Tasks</span>
                    </RouterLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>


                <SidebarMenuItem>
                  <SidebarMenuButton as-child>
                    <RouterLink to="/noschedule">
                      <Calendar-off />
                      <span>No schedule tasks</span>
                    </RouterLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>

                <SidebarMenuItem>
                  <SidebarMenuButton as-child>
                    <RouterLink to="/completed">
                      <Check-Check />
                      <span>Completed Task</span>
                    </RouterLink>
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
            <Button variant="ghost" size="icon" class="ml-auto mr-4" @click="toggleDark()">
              <Eclipse class="size-4" />
            </Button>
            <Input v-model="searchQuery" type="text" placeholder="Search tasks..." class="max-w-sm" />
          </div>
        </header>

        <RouterView />

      </SidebarInset>
    </SidebarProvider>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
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
  BellRing,
  CalendarOff,
  CalendarCheck,
  CalendarX,
  CheckCheck,
  Eclipse
} from 'lucide-vue-next'

import { searchQuery } from '@/composables/useSearch'
import { useTasks } from '@/composables/useTasks'
import { RouterLink, RouterView } from 'vue-router'

import { useDark, useToggle } from '@vueuse/core'
const isDark = useDark({ initialValue: 'light' })
const toggleDark = useToggle(isDark)

</script>
