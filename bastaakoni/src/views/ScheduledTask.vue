<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold">Scheduled Tasks</h1>
    <p class="text-neutral-500">Nothing to see.</p>
  </div>
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

import { RouterLink, RouterView } from 'vue-router'

</script>
