<template>
  <button
    :class="[
      'py-2 px-4 rounded-lg flex items-center justify-center hover:brightness-110 active:brightness-90 disabled:bg-disabled shadow active:shadow-none active:inset-shadow-sm inset-shadow-black/25 transition-all duration-100',
      getColor(variant),
    ]"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
type OTButtonVariants = 'default' | 'secondary' | 'outlined' | 'ghost' | 'destructive';
interface OTButtonProps {
  variant?: OTButtonVariants;
  custom_styles?: boolean;
}
const props = withDefaults(defineProps<OTButtonProps>(), {
  variant: 'default',
  custom_styles: false,
});

const colors = {
  default: 'bg-primary text-ontick-graphite-900',
  secondary: 'bg-primary text-ontick-graphite-900',
  outlined: 'bg-transparent border-2 border-ontick-steel-500 text-ontick-steel-500',
  ghost: '',
  destructive: 'bg-ontick-red-600 text-ontick-red-300',
};

function getColor(variant: OTButtonVariants) {
  return colors[variant];
}
</script>

<style scoped></style>
