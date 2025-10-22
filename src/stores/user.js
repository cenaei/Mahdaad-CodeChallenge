import { ref, reactive } from "vue";
import { defineStore } from "pinia";
import axios, { guardedRequest } from "@/plugins/axios";

export const useUserStore = defineStore("user", () => {
  const cache = reactive({});
  const data = ref(null);
  const controller = ref(null);
  const userId = ref(null);

  const fetchUser = async (id) => {
    userId.value = id;

    if (cache[id]) {
      data.value = cache[id];
      return;
    }

    if (controller.value) controller.value.abort()
      controller.value = new AbortController()

    try {
      const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`, {
        signal: controller.value.signal
      })
      cache[id] = res.data
      data.value = res.data
    } catch (err) {
      if (err.name === 'CanceledError' || err.message === 'canceled') {
        console.log('Previous request cancelled');
      } else {
        console.log('Request failed:', err);
      }
    }
  };

  return { cache, data, controller, userId, fetchUser };
});
