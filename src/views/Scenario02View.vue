<script setup>
import Header from "@/components/Scenario02/header.vue";
import { useCartStore } from "../stores/cart";
import { useDataStore } from "../stores/data";

const cart = useCartStore();
const data = useDataStore();

const products = data.products;

const addToCart = (prod) => {
//   console.log(prod);
//   console.log(cart);
  cart.addItem(prod)
  console.log(cart);

};
</script>

<template>
  <div class="my-6">Scenario 02 - products</div>
  <Header />
  
  <section
    class="flex flex-row flex-wrap w-full gap-8 justify-center items-center py-8"
  >
    <template v-for="prod in products" key="prod.id">
      <div class="bg-teal-600/50 px-12 py-8 rounded-4xl w-[300px]">
        <p class="flex flex-col">
          <span>category: </span>
          <span class="self-end text-lg font-semibold">
            {{ prod.category }}
          </span>
        </p>
        <p class="flex flex-col">
          <span>name: </span>
          <span class="self-end text-xl font-semibold">
            {{ prod.name }}
          </span>
        </p>
        <button
          @click="addToCart(prod)"
          class="self-center w-full my-2 py-1 px-4 bg-teal-800 text-white rounded-2xl"
        >
          Add to Cart
        </button>
      </div>
    </template>
  </section>
</template>

<style lang="scss" scoped></style>
