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
  <div v-else>
    {{ type }}
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
