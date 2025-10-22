<script setup>
import Header from "@/components/Scenario02/header.vue";
import { useCartStore } from "../stores/cart";
import { useDataStore } from "../stores/data";

const { purchasedByCustomer } = useCartStore();
const data = useDataStore();

const products = data.products;
</script>

<template>
  <div class="my-6">Scenario 02 - Analysis</div>
  <Header />

  <section
    class="flex flex-row flex-wrap w-full gap-8 justify-center items-center py-8"
  >
    <bdo> purchasedByCustomer: {{ purchasedByCustomer }} </bdo>
  </section>
</template>

<style lang="scss" scoped></style>
