<template>
  <button
    class="flex items-center justify-start gap-2 h-10 pl-4 w-full hover:bg-primary/50 transition-none!"
    :class="selected_item_styles"
    @click="action"
  >
    <OTIcon
      :name="iconName"
      v-if="icon"
    ></OTIcon>
    <span> {{ name }} </span>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import OTIcon from '../OTIcon.vue';
import { useRoute } from 'vue-router';

interface SidebarNavItemProps {
  name: string;
  icon?: boolean;
  iconName?: string;
  action?: (args: any) => any;
}
const props = withDefaults(defineProps<SidebarNavItemProps>(), {
  icon: true,
  iconName: 'question_mark',
});

const route = useRoute();
const selected_item_styles = computed<string>(() => {
  if (route.name === props.name) {
    return 'bg-primary/25 text-ontick-green-800';
  }
  return '';
});
</script>

<style scoped></style>
