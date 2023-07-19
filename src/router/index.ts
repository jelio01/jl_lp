import Home from "@/views/Home.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", name: "Start", component: Home },
  { path: "/home", name: "Home", component: Home },
  {
    path: "/impressum",
    name: "Impressum",
    component: () => import("@/views/Impressum.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@/views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.name == "Home" || to.name === "Impressum") {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            el: "#top",
            top: -10,
            behavior: "smooth",
          });
        }, 100);
      });
    } else {
      return {
        top: 0,
      };
    }
  },
});
export default router;
