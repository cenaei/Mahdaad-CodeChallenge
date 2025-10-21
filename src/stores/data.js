import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useDataStore = defineStore("data", () => {
  const customers = [
    { id: 1, name: "Ahmad", city: "Tehran" },
    { id: 2, name: "Mehran", city: "Shiraz" },
    { id: 3, name: "Ali", city: "Esfahan" },
  ];
  const products = [
    { id: 101, name: "Laptop", category: "Electronics" },
    { id: 102, name: "Mouse", category: "Electronics" },
    { id: 103, name: "Monitor", category: "Electronics" },
    { id: 104, name: "Coffee Maker", category: "Home Appliances" },
    { id: 105, name: "Blender", category: "Home Appliances" },
    { id: 106, name: "Headphones", category: "Electronics" },
  ];

  const purchases = [
    { customerId: 1, productId: 101, date: "2025-03-01" },
    { customerId: 1, productId: 102, date: "2025-02-02" },
    { customerId: 2, productId: 103, date: "2025-02-05" },
    { customerId: 2, productId: 104, date: "2025-02-06" },
    { customerId: 3, productId: 105, date: "2025-02-07" },
    { customerId: 3, productId: 106, date: "2025-02-08" },
    { customerId: 1, productId: 104, date: "2025-02-10" },
  ];

  return { customers, products, purchases };
});
