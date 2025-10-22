<template>
  <h1>Scenario05</h1>
  <section class="bg-indigo-200 px-8 py-4 rounded-4xl my-4">
    <div>
      <input
        type="number"
        v-model="id"
        placeholder="Enter user ID"
        class="border-black border px-4 py-2 rounded-4xl mx-3"
      />
      <button
        @click="fetchUser(id)"
        class="bg-indigo-800 text-white px-4 py-2 rounded-4xl cursor-pointer"
      >
        Fetch User
      </button>
    </div>
    <div v-if="userStore.data" class="bg-indigo-400 px-8 py-8 my-4 rounded-4xl flex flex-col gap-y-8">
      <h6>
        <span class="bg-indigo-500 px-2 py-1 mx-1 rounded-4xl"> name: </span>
        <span class="bg-indigo-900 text-white px-2 py-1 mx-1 rounded-4xl">

          {{ userStore.data.name }}
        </span>
      </h6>
      <p>
        <span class="bg-indigo-500 px-2 py-1 mx-1 rounded-4xl"> email: </span>
        <span class="bg-indigo-900 text-white px-2 py-1 mx-1 rounded-4xl">

          {{ userStore.data.email }}
        </span>
      </p>
      <p>
        <span class="bg-indigo-500 px-2 py-1 mx-1 rounded-4xl"> phone: </span>
        <span class="bg-indigo-900 text-white px-2 py-1 mx-1 rounded-4xl">

          {{ userStore.data.phone }}
        </span>
      </p>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { useUserStore } from "@/stores/user";

const userStore = useUserStore();
const id = ref("");

const fetchUser = (userId) => {
  userStore.fetchUser(userId);
};
</script>

<style scoped></style>
