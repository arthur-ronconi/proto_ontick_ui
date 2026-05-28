<template>
  <ComponentPageLayout>
    <template #title>Botões</template>
    <template #body>
      <div class="flex gap-4">
        <div
          v-for="(variant, index) in button_variants"
          :key="index"
          class="flex flex-col gap-4"
        >
          <h2>{{ capitalize(variant) }}</h2>
          <OTButton
            @click="router.push({ name: capitalize(variant) })"
            icon="arrow_forward"
            :variant="variant"
          >
            Go to Dashboard
          </OTButton>
          <OTButton
            @click="router.push({ name: capitalize(variant) })"
            icon="arrow_forward"
            disabled
            :variant="variant"
          >
            Go to Dashboard
          </OTButton>
        </div>
      </div>
    </template>
  </ComponentPageLayout>
</template>

<script setup lang="ts">
import { capitalize } from 'vue';
import { useRouter } from 'vue-router';
import OTButton from '@/components/OTButton.vue';
import type { ColorVariants } from '@/components/types';
import ComponentPageLayout from '@/layouts/ComponentPageLayout.vue';

const router = useRouter();
const button_variants: ColorVariants[] = [
  'default',
  'secondary',
  'outlined',
  'ghost',
  'destructive',
];
</script>

<style scoped></style>
