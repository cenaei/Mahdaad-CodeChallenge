<script setup>
import { computed } from "vue";
import { usePrefrencesStore } from "../stores/prefrences";

const store = usePrefrencesStore();
const theme = computed(() => store.theme);

const fontSize = computed(() => {
  return {
    small: "text-sm",
    meduim: "text-lg",
    large: "text-2xl",
  }[store.fontSize];
});

const toggleTheme = () => {
  store.setTheme(store.theme === "light" ? "dark" : "light");
};
</script>

<template>
  <div
    :class="[theme == 'dark' ? 'dark:bg-black dark:text-white' : '', fontSize]"
    class="min-h-screen p-8 transition bg-green-100 rounded-3xl"
  >
    <h1 class="text-3xl my-4">Scenario 01</h1>

    <section class="flex flex-row justify-center items-center gap-8">
      <!-- Theme Toggle -->
      <div
        class="bg-green-200 px-12 py-8 rounded-3xl"
        :class="theme == 'dark' ? 'dark:dark:bg-green-950 dark:text-white' : ''"
      >
        <label>Theme: </label>
        <button
          @click="toggleTheme"
          class="bg-green-600 cursor-pointer px-4 py-2 rounded-3xl"
        >
          Toggle Theme
        </button>
        <p
          class="bg-green-50 my-4 px-4 py-1 rounded-2xl"
          :class="
            theme == 'dark' ? 'dark:dark:bg-green-700 dark:text-white' : ''
          "
        >
          current theme: {{ theme }}
        </p>
      </div>

      <!-- Custom FontSize -->
      <div
        class="bg-green-200 px-12 py-8 rounded-3xl gap-1"
        :class="theme == 'dark' ? 'dark:dark:bg-green-950 dark:text-white' : ''"
      >
        <label>Font Size: </label>
        <select
          v-model="store.fontSize"
          @change="store.setFontSize(store.fontSize)"
          class="bg-green-600 cursor-pointer px-4 py-2 rounded-3xl"
        >
          <option value="small">Small</option>
          <option value="meduim">Meduim</option>
          <option value="large">Large</option>
        </select>

        <p
          class="bg-green-50 my-4 px-4 py-1 rounded-2xl"
          :class="
            theme == 'dark' ? 'dark:dark:bg-green-700 dark:text-white' : ''
          "
        >
          current FontSize: {{ fontSize }}
        </p>
      </div>
    </section>
  </div>
</template>

<style>
@media (min-width: 1024px) {
}
</style>
