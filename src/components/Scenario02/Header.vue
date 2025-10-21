<template>
  <header>
    <div class="mb-2">
      <nav class="flex flex-row justify-between items-center">
        <RouterLink
          class="bg-gray-300 px-4 py-2 rounded-2xl"
          active-class="text-blue-800 rounded-3xl transition"
          to="/sce02/"
          >products</RouterLink
        >
        <RouterLink
          class="bg-gray-300 px-4 py-2 rounded-2xl"
          active-class="text-blue-800 rounded-3xl transition"
          to="/sce02/checkout"
          >Checkout</RouterLink
        >
        <RouterLink
          class="bg-gray-300 px-4 py-2 rounded-2xl"
          active-class="text-blue-800 rounded-3xl transition"
          to="/sce02/cart"
          >Cart</RouterLink
        >
      </nav>
    </div>
  </header>
</template>

<script setup>
//
</script>

<style lang="scss" scoped></style>
