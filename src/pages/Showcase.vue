<template>
  <div class="flex flex-col w-full max-w-screen overflow-hidden">
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
      <template #right>
        <div class="flex items-center gap-4">
          <div class="flex items-center">
            <OTIcon name="dark_mode" />
            <OTInput
              :type="'switch'"
              name="Modo noturno"
            />
          </div>
        </div>
      </template>
    </OTNavBar>
    <div class="flex h-full">
      <OTSidebar :nav="sidebar_nav"></OTSidebar>
      <div class="p-4 w-full overflow-auto">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import OTIcon from '@/components/OTIcon.vue';
import OTInput from '@/components/OTInput.vue';
import OTNavBar from '@/components/OTNavBar.vue';
import OTSidebar from '@/components/OTSidebar/index.vue';
import { useUserStore } from '@/stores/userStore';
import { inject } from 'vue';

const sidebar_nav = inject('sidebar-nav') as import('@/components/types').OTSidebarNavItem[];

const userStore = useUserStore();
</script>

<style scoped></style>
