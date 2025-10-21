<template>
  <div class="my-6">Scenario 02 - Cart</div>
  <Header />
  <bdo dir="">
    {{ cart }}
  </bdo>
</template>
<script setup>
import Header from "@/components/Scenario02/header.vue";
import { useCartStore } from "../stores/cart";
const cart = useCartStore();
</script>

<style lang="scss" scoped></style>
