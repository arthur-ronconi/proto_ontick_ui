import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', () => {
  const dark_mode = ref(localStorage.getItem('dark') === 'true');

  const getDarkMode = computed(() => {
    return dark_mode.value;
  });

  function setDarkMode() {
    dark_mode.value = !dark_mode.value;
    localStorage.set('dark', dark_mode.value);
  }

  return { getDarkMode, setDarkMode };
});
