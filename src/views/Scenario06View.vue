<template>
  <section class="flex flex-col h-screen">
    <header class=" bg-blue-100 px-4 py-2 text-center rounded-3xl">
      <h1>Scenario06</h1>
    </header>
    <main class=" bg-blue-200 px-4 py-2 text-center rounded-3xl flex flex-col gap-2 flex-1 overflow-y-auto">
      <p class=" bg-blue-300 rounded-3xl" v-for="n in 100" :key="n">Content {{ n }}</p>
    </main>
    <footer class=" bg-blue-100 px-4 py-2 text-center rounded-3xl">Copyright by Sina</footer>
  </section>
</template>

<script setup>

</script>

<style scoped></style>
