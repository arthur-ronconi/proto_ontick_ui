<template>
  <div class="flex flex-col pt-4 gap-8 container mx-auto">
    <h2 class="text-3xl font-bold">
      <span class="text-primary"> < </span>
      <slot name="title"> Title </slot>
      <span class="text-primary"> /> </span>
    </h2>
    <slot name="body">body</slot>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
