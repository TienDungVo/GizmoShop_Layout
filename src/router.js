import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./pages/home.vue";
import Transaction from "./pages/Transaction.vue";
import ListUser from "./components/ProductList.vue";
const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/transaction",
    component: ListUser,
  },
  {
    path: "/users",
    component: Transaction,
  },
  {
    path: "/demo",
    component: ListUser,
  },
];
const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});
export default router;
