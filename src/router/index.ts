import { createRouter, createWebHistory } from "vue-router";
import Page404 from "../views/404.vue";
import Home from "../views/Home.vue";
import YesPage from "../views/SaidYes.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/yes",
    name: "YesPage",
    component: YesPage,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: Page404,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
