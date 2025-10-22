import { ref } from "vue";
import { defineStore } from "pinia";
import axios, { guardedRequest } from "@/plugins/axios";

export const useStockStore = defineStore("stock", () => {
  const data = ref([]);
  const error = ref(null);
  const isLoading = ref(false);

  const symbols = ["TSLA", "GOOGL", "BTCUSD"];

  async function fetchStockData() {
    isLoading.value = true;
    error.value = null;
    data.value = [];

    try {
      const requests = symbols.map((symbol) =>
        guardedRequest(() =>
          axios.get("/quote", {
            params: { symbol, token: import.meta.env.VITE_FINNHUB_KEY },
          })
        )
      );

      const results = await Promise.allSettled(requests);

      data.value = results.map((res, index) => ({
        symbol: symbols[index],
        price: res.status === "fulfilled" ? res.value.data.c : null,
      }));
    } catch (err) {
      error.value = err.message || "Service temporarily unavailable!";
    } finally {
      isLoading.value = false;
    }
  }

  return { data, error, isLoading, symbols, fetchStockData };
});
