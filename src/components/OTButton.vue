<template>
  <button
    :class="[
      'transition-all rounded-lg justify-center',
      size === 'icon' ? 'px-2' : 'py-2 px-4',
      getColor(variant),
    ]"
  >
    <OTIcon
      v-if="icon && iconPosition === 'left'"
      :name="icon"
    />
    <slot v-if="size !== 'icon'" />
    <OTIcon
      v-if="icon && iconPosition === 'right'"
      :name="icon"
    />
  </button>
</template>

<script setup lang="ts">
import OTIcon from './OTIcon.vue';
import type { ColorVariants } from './types.ts';
type OTButtonVariants = ColorVariants;
type OTButtonSizes = 'default' | 'icon';
interface OTButtonProps {
  variant?: OTButtonVariants;
  customStyles?: boolean;
  size?: OTButtonSizes;
  icon?: string;
  iconPosition?: 'left' | 'right';
}
const props = withDefaults(defineProps<OTButtonProps>(), {
  variant: 'default',
  customStyles: false,
  iconPosition: 'left',
});

const colors = {
  default: 'bg-primary text-ontick-green-200',
  secondary: 'bg-secondary text-ontick-blue-200',
  outlined: 'bg-transparent ring-2 ring-inset ring-ontick-steel-500 text-ontick-steel-500',
  ghost: '',
  destructive: 'bg-ontick-red-600 text-ontick-red-200',
};

function getColor(variant: OTButtonVariants) {
  return colors[variant];
}

function iconPadding(size: OTButtonSizes): string {
  if (size === 'icon') {
    return 'p-2';
  }
  return 'py-2 px-4';
}
</script>

<style scoped></style>
