<template>
  <div class="flex flex-col">
    <OTNavBar>
      <template #left>
        <div class="flex items-end gap-2">
          <img
            src="/img/ontick-logo-sm.svg"
            alt="OnTick"
          />
          <div class="bg-primary px-1.5 rounded">
            <h1 class="text-2xl font-semibold text-ontick-gray-50">
              <span class="sr-only">OnTick</span>
              UI
            </h1>
          </div>
        </div>
      </template>
    </OTNavBar>
    <div class="flex h-full">
      <OTSidebar :nav="sidebar_nav"></OTSidebar>
      <div class="px-4 w-full">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import OTNavBar from '@/components/OTNavBar.vue';
import OTSidebar from '@/components/OTSidebar/index.vue';
import { inject } from 'vue';

const sidebar_nav = inject('sidebar-nav') as import('@/components/types').OTSidebarNavItem[];
</script>

<style scoped></style>
