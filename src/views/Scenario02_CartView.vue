<template>
  <div class="my-6">Scenario 02 - Cart</div>
  <Header />
  <!-- items.length: {{ items.length }} -->
  <div v-if="!items.length">Cart is empty</div>
  <div v-else>
    <section class="bg-purple-50 p-4 rounded-2xl my-3">
      <h6 class="text-xl mb-4 ms-6">Cart Functions:</h6>

      <div class="flex flex-row gap-x-2">
        <button
          @click="clearCart"
          class="block bg-purple-200 px-4 py-2 my-1 rounded-2xl cursor-pointer"
        >
          Clear Cart
        </button>

        <div class="bg-purple-200 px-4 py-2 my-1 rounded-2xl">
          itemCount: {{ itemCount }}
        </div>
      </div>
    </section>
    <section class="bg-purple-50 p-4 rounded-2xl my-3">
      <h6 class="text-xl mb-4 ms-6">Cart Items:</h6>
      <div class="flex flex-row flex-wrap gap-4 justify-center">
        <template v-for="item in items" :key="item.id">
          <div class="bg-blue-800 text-white px-8 py-6 rounded-4xl flex flex-col gap-y-3 w-1/3">
            <p>category: {{ item.category }}</p>
            <p>name: {{ item.name }}</p>
            <p>quantity: {{ item.quantity }} <button @click="updateQuantity(item.id, item.quantity)" class="ms-4 bg-purple-400 p-2 rounded-full cursor-pointer">+</button></p>
            <button
              @click="removeItem(item.id)"
              class="block bg-purple-400 px-4 py-2 my-1 rounded-2xl cursor-pointer w-fit"
            >
              Delete Item
            </button>
          </div>
        </template>
      </div>
    </section>
  </div>
</template>
<script setup>
import Header from "@/components/Scenario02/header.vue";
import { useCartStore } from "../stores/cart";
const { items, itemCount, clearCart, removeItem, updateQuantity } =
  useCartStore();
</script>

<style lang="scss" scoped></style>
