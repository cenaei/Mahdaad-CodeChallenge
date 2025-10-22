<template>
  <h1>Scenario04View</h1>
  <div>
    <!-- <header>
       <h1>Virtual List (Vue 3 + Composition API)</h1>
      <p>No Libraries Used. Fixed heights for each item.</p>
      <p>
        Keep Only a few items in DOM for a very large list. Scroll below either
        by dragging the scroll bar or by moving your mouse wheel.
      </p>
    </header> -->

    <VirtualScroll />
  </div>
</template>

<script setup>
import VirtualScroll from "@/components/Scenario04/VirtualScroll.vue";
</script>

<style scoped></style>
