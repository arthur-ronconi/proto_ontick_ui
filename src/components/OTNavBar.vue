<template>
  <header class="w-full bg-ontick-gray-50 dark:bg-ontick-graphite-500">
    <div class="px-4 h-16 flex items-center justify-between">
      <slot name="left">
        <img
          :src="userStore.isDarkMode ? '/img/ontick-logo-dark-sm.svg' : '/img/ontick-logo-sm.svg'"
          alt="OnTick Logo"
        />
      </slot>
      <slot name="center">
        <p>Center</p>
      </slot>
      <slot name="right">
        <p>Right</p>
      </slot>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/userStore';

const userStore = useUserStore();
</script>

<style scoped></style>
