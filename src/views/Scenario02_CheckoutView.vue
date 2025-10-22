<template>
  <div class="my-6">Scenario 02 - Checkout</div>
  <Header />
  <!-- items.length: {{ items.length }} -->
  <div v-if="!items.length" class="bg-purple-50 px-4 py-32 rounded-2xl my-3 flex justify-center items-center">Cart is empty</div>
  <div v-else>
    <section class="bg-purple-50 p-4 rounded-2xl my-3">
      <h6 class="text-xl mb-4 ms-6">Cart Items:</h6>
      <div class="flex flex-row flex-wrap gap-4 justify-center">
        <template v-for="item in items" :key="item.id">
          <div
            class="bg-blue-800 text-white px-8 py-6 rounded-4xl flex flex-col gap-y-3 w-1/3"
          >
            <p>category: {{ item.category }}</p>
            <p>name: {{ item.name }}</p>
            <p>
              quantity: {{ item.quantity }}
              <button
                @click="updateQuantity(item.id, item.quantity)"
                class="ms-4 bg-purple-400 p-2 rounded-full cursor-pointer"
              >
                +
              </button>
            </p>
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
    <!-- cartCategories: {{ cartCategories }} -->
    <section class="bg-purple-50 p-4 rounded-2xl my-3">
      <h6 class="text-xl mb-4 ms-6">Similar Products:</h6>
      <div
        class="flex flex-row flex-wrap w-full gap-8 justify-center items-center py-8"
      >
        <!-- prod.category === cart_item.category -->
        <template v-for="prod in similarProducts" key="prod.id">
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
      </div>
    </section>
  </div>
</template>
<script setup>
import Header from "@/components/Scenario02/header.vue";
import { useCartStore } from "../stores/cart";
import { useDataStore } from "../stores/data";

const data = useDataStore();
const products = data.products;

const { items, removeItem, updateQuantity } = useCartStore();

const cartCategories = new Set(items.map((item) => item.category));

const similarProducts = products.filter(prod => cartCategories.has(prod.category))
</script>

<style lang="scss" scoped></style>
