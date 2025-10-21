import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Scenario01View from "../views/Scenario01View.vue";
import Scenario02View from "../views/Scenario02View.vue";
import Scenario02_CheckoutView from "../views/Scenario02_CheckoutView.vue";
import Scenario02_CartView from "../views/Scenario02_CartView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/sce01",
      name: "Scenario01",
      component: Scenario01View,
    },
    {
      path: "/sce02",
      children: [
        { path: "", name:"producs", component: Scenario02View },
        { path: "checkout", name:"checkout", component: Scenario02_CheckoutView },
        { path: "cart", name:"cart", component: Scenario02_CartView },
      ],
    },
  ],
});

export default router;
