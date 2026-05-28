<template>
  <div
    class="flex flex-col gap-1 text-sm w-full"
    v-if="is_text_based"
  >
    <label
      :for="name"
      class=""
    >
      {{ label }}
    </label>
    <div class="relative w-full">
      <input
        v-model="model"
        :type="derived_type"
        :id="name"
        :name="name"
        :placeholder="placeholder"
        class="h-10 px-2 bg-ontick-graphite-200 rounded-lg placeholder:text-ontick-graphite-400 w-full"
        v-maska="mask"
      />
      <button
        v-if="type === 'password' || type === 'search'"
        class="flex items-center justify-center absolute top-1/2 -translate-y-1/2 right-0 h-10 w-10 bg-ontick-graphite-200 rounded-r-lg hover:brightness-100! active:brightness-100! group"
        @click="handleClick(type)"
      >
        <OTIcon
          v-if="type === 'password'"
          :name="password_is_visible ? 'visibility' : 'visibility_off'"
        />
        <OTIcon
          v-else
          name="search"
        />
      </button>
    </div>
  </div>
  <div
    v-else
    class="flex items-center gap-2 relative"
  >
    <input
      :type="derived_type"
      :class="nonTextStyles[type as NonTextInputType]"
      :name="name"
      :id="name"
      :value="value"
      v-model="model"
    />
    <svg
      v-if="type === 'checkbox'"
      class="absolute h-4 w-4 text-white opacity-0 peer-checked:opacity-100 transition-opacity duration-200 pointer-events-none left-1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="4"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
    <span
      v-if="type === 'switch'"
      class="absolute top-1/2 -translate-y-1/2 h-6 w-6 rounded-full bg-ontick-graphite-50 pointer-events-none left-0 peer-checked:left-6 transition-all ring-2 ring-inset ring-ontick-graphite-200 peer-checked:ring-primary"
    ></span>
    <span
      v-if="type === 'radio'"
      class="absolute top-1/2 -translate-y-1/2 left-1.5 h-3 w-3 rounded-full peer-checked:bg-ontick-graphite-50 pointer-events-none transition-all"
    ></span>
    <label
      :for="name"
      class="text-sm"
    >
      {{ label }}
    </label>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import OTIcon from './OTIcon.vue';
import { vMaska } from 'maska/vue';

export type TextLikeInputType = 'text' | 'number' | 'password' | 'email' | 'tel' | 'search';
export type NonTextInputType = 'checkbox' | 'radio' | 'switch';
type OTInputType = TextLikeInputType | NonTextInputType;
interface OTInputProps {
  type?: OTInputType;
  placeholder?: string;
  maxlength?: number;
  minlength?: number;
  pattern?: RegExp;
  autocomplete?: string;
  name?: string;
  label?: string;
  mask?: string;
  value?: string | string[] | number | number[];
}

const props = withDefaults(defineProps<OTInputProps>(), {
  type: 'text',
  placeholder: 'Escreva aqui',
});
const emit = defineEmits(['search']);
const model = defineModel();

const is_text_based = ['text', 'number', 'password', 'email', 'tel', 'search'].includes(props.type);
const password_is_visible = ref<boolean>(false);
const derived_type = computed<OTInputType>(() => {
  let result = props.type;

  if (props.type === 'password' && !password_is_visible.value) {
    result = 'password';
  } else if (props.type === 'password') {
    result = 'text';
  } else if (props.type === 'switch') {
    result = 'checkbox';
  }

  return result;
});

const nonTextStyles: {
  [K in NonTextInputType]: string;
} = {
  checkbox: 'appearance-none h-6 w-6 rounded bg-ontick-graphite-200 checked:bg-primary peer',
  switch: 'appearance-none w-12 h-6 rounded-full bg-ontick-graphite-200 checked:bg-primary peer',
  radio: 'appearance-none h-6 w-6 rounded-full bg-ontick-graphite-200 checked:bg-primary peer',
} as const;

function handleClick(type: 'password' | 'search') {
  if (type === 'password') {
    password_is_visible.value = !password_is_visible.value;
    return;
  }

  emit('search');
  return;
}
</script>

<style scoped></style>
