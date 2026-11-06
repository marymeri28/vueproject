<template>
  <div class=" flex min-h-screen items-center justify-center bg-blue-300 p-6">
    <Card class="w-full max-w-sm border border-neutral-300 rounded-2xl">
  <CardHeader class="justify-start items-start">
    <CardTitle>My Task Manager</CardTitle>
  </CardHeader>

  <CardFooter>
    <p>Card Footer</p>
  </CardFooter>
</Card>
  </div>
</template>

<script setup lang="ts">
import CardHeader from './components/ui/card/CardHeader.vue';


</script>

<style scoped>

</style>