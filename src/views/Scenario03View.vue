<template>
  <button
    @click="fetchStockData"
    class="px-4 py-2 bg-blue-500 text-white rounded-xl my-4"
  >
    Load Stocks
  </button>
  <div class="px-4 py-2 bg-green-700 text-white rounded-xl my-4" v-if="StockStore.isLoading">Loading...</div>
  <div class="px-4 py-2 bg-red-700 text-white rounded-xl my-4" v-if="StockStore.error">error: {{ error }}</div>

  <ul v-else class=" bg-emerald-100 px-6 py-4 rounded-4xl flex flex-row gap-3">
    <li v-for="stock in StockStore.data" :key="stock.symbol" class="bg-emerald-400 px-6 py-4 rounded-3xl">
      {{ stock.symbol }}: {{ stock.price ?? "N/A" }}
    </li>
  </ul>

  <!-- <pre>isLoading: {{ StockStore.isLoading }}</pre>
  <pre>error: {{ StockStore.error }}</pre>
  <pre>data: {{ StockStore.data }}</pre> -->
</template>

<script setup>
import { useStockStore } from "@/stores/stock";
const StockStore = useStockStore();
const { data, error, isLoading, symbols, fetchStockData } = StockStore;
</script>

<style scoped></style>
