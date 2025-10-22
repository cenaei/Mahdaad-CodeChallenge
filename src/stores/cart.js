import { ref, computed, watch } from "vue";
import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", () => {
  const items = ref(JSON.parse(localStorage.getItem("cart") || "[]"));

  const itemCount = computed(() =>
    items.value.reduce((sum, i) => sum + i.quantity, 0).toFixed(2)
  );

  const totalPrice = computed(() =>
    items.value.reduce((sum, i) => sum + i.price * i.quantity, 0).toFixed(2)
  );

  function addItem(product) {
    const exicting = items.value.find((p) => p.id === product.id);
    if (exicting) exicting.quantity++;
    else items.value.push({ ...product, quantity: 1 });
  }

  function removeItem(id) {
    items.value = items.value.filter((p) => p.id !== id);
  }

  function updateQuantity(id, qty) {
    const item = item.value.find((p) => p.id === id);
    if (item) item.quantity = qty;
  }

  function clearCart() {
    items.value = [];
  }

  watch(
    items,
    (val) => {
      localStorage.setItem("cart", JSON.stringify(val));
    },
    { deep: true }
  );

  return {
    items,
    itemCount,
    totalPrice,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
  };
});
