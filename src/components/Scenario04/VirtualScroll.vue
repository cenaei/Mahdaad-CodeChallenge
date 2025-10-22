<template>
  <div class="root" ref="root" :style="rootStyle">
    <div class="viewport px-4 py-3 " ref="viewport" :style="viewportStyle">
      <div class="spacer flex flex-col gap-y-3" ref="spacer" :style="spacerStyle">
        <div v-for="item in visibleItems" :key="item" class=" bg-sky-200 px-4 py-2 rounded-3xl mx-4 my-1">
          {{ item }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";

// ✅ detect passive scroll support
function doesBrowserSupportPassiveScroll() {
  let passiveSupported = false;
  try {
    const options = {
      get passive() {
        passiveSupported = true;
        return false;
      },
    };
    window.addEventListener("test", null, options);
    window.removeEventListener("test", null, options);
  } catch (err) {
    passiveSupported = false;
  }
  return passiveSupported;
}

// === State ===
const items = ref(Array.from({ length: 100000 }, (_, i) => `Item ${i + 1} - ${lorem}`));

const root = ref(null);
const viewport = ref(null);
const spacer = ref(null);

const rootHeight = ref(700);
const rowHeight = ref(30);
const scrollTop = ref(0);
const nodePadding = ref(20);

const lorem =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae mollitia reprehenderit tempora ipsum dolor commodi magni voluptates nihil minima sapiente. Nihil fugit quasi, enim rem quo facere recusandae pariatur excepturi.";

// === Computed ===
const itemCount = computed(() => items.value.length);

const viewportHeight = computed(() => itemCount.value * rowHeight.value);

const startIndex = computed(() => {
  let startNode =
    Math.floor(scrollTop.value / rowHeight.value) - nodePadding.value;
  return Math.max(0, startNode);
});

const visibleNodeCount = computed(() => {
  let count =
    Math.ceil(rootHeight.value / rowHeight.value) + 2 * nodePadding.value;
  return Math.min(itemCount.value - startIndex.value, count);
});

const visibleItems = computed(() =>
  items.value.slice(startIndex.value, startIndex.value + visibleNodeCount.value)
);

const offsetY = computed(() => startIndex.value * rowHeight.value);

const spacerStyle = computed(() => ({
  transform: `translateY(${offsetY.value}px)`,
}));

const viewportStyle = computed(() => ({
  overflow: "hidden",
  height: `${viewportHeight.value}px`,
  position: "relative",
}));

const rootStyle = computed(() => ({
  height: `${rootHeight.value}px`,
  overflow: "auto",
}));

// === Methods ===
function handleScroll() {
  scrollTop.value = root.value.scrollTop;
}

function calculateInitialRowHeight() {
  const children = spacer.value.children;
  let largestHeight = 0;
  for (let i = 0; i < children.length; i++) {
    largestHeight = Math.max(largestHeight, children[i].offsetHeight);
  }
  return largestHeight;
}

// === Lifecycle ===
onMounted(() => {
  root.value.addEventListener(
    "scroll",
    handleScroll,
    doesBrowserSupportPassiveScroll() ? { passive: true } : false
  );

  const largestHeight = calculateInitialRowHeight();
  rowHeight.value = largestHeight || 30;
});

onBeforeUnmount(() => {
  root.value.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
/* .root {
  border: 1px solid #ccc;
} */

.viewport {
  position: relative;
}

.spacer {
  will-change: transform;
}
</style>
