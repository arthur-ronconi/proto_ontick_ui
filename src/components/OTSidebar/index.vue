<template>
  <div class="bg-ontick-gray-50 min-w-64 h-full flex flex-col">
    <nav>
      <ul>
        <li
          v-for="item in nav"
          :key="item.name"
        >
          <SidebarNavItem v-bind="item" />
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">
import SidebarNavItem from './SidebarNavItem.vue';

interface OTSidebarProps {
  nav: import('../types.ts').OTSidebarNavItem[];
}
const props = defineProps<OTSidebarProps>();

const sidebar_items = [
  {
    name: 'Route',
  },
  {
    name: 'Route',
  },
  {
    name: 'Route',
  },
  {
    name: 'Route',
  },
  {
    name: 'Route',
  },
];
</script>

<style scoped></style>
