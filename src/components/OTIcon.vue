<template>
  <span :class="Style[type]">
    {{ name }}
  </span>
</template>

<script setup lang="ts">
type OTIconType = 'rounded' | 'sharp' | 'outlined';
type OTIconColor = 'secondary' | 'default' | 'destructive';

interface OTIconProps {
  type?: OTIconType;
  color?: OTIconColor;
  name: string;
}
const props = withDefaults(defineProps<OTIconProps>(), {
  type: 'outlined',
  color: 'default',
});

const Style = {
  rounded: 'material-symbols-rounded',
  outlined: 'material-symbols-outlined',
  sharp: 'material-symbols-sharp',
} as const;
</script>

<style scoped></style>
