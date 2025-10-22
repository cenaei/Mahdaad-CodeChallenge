<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <div class="mb-2">
      <nav class="flex flex-row justify-between items-center">
        <RouterLink
          class="bg-gray-300 px-4 py-2 rounded-2xl"
          active-class="text-blue-800 rounded-3xl transition"
          to="/"
          >Home</RouterLink
        >
        <RouterLink
          class="bg-gray-300 px-4 py-2 rounded-2xl"
          active-class="text-blue-800 rounded-3xl transition"
          to="/sce01"
          >Scenario 01</RouterLink
        >
        <RouterLink
          class="bg-gray-300 px-4 py-2 rounded-2xl"
          active-class="text-blue-800 rounded-3xl transition"
          to="/sce02"
          >Scenario 02</RouterLink
        >
        <RouterLink
          class="bg-gray-300 px-4 py-2 rounded-2xl"
          active-class="text-blue-800 rounded-3xl transition"
          to="/sce03"
          >Scenario 03</RouterLink
        >
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped></style>
