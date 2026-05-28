<template>
  <RouterView class="h-full"></RouterView>
</template>

<script setup lang="ts">
import { provide } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const nav: import('./components/types').OTSidebarNavItem[] = [
  {
    name: 'Botões',
    icon: false,
    action() {
      router.push({ name: 'Botões' });
    },
  },
  {
    name: 'Inputs',
    icon: false,
    action() {
      router.push({ name: 'Inputs' });
    },
  },
];

provide('sidebar-nav', nav);
</script>

<style scoped></style>
