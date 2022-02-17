import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    name: "form",
    path: "/",
    component: () => import("../views/FormPage.vue"),
  },
  {
    name: "preview",
    path: "/preview",
    component: () => import("../views/PreviewPage.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
