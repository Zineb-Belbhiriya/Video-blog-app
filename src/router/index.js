// import Vue from "vue";
import { createWebHistory, createRouter } from "vue-router";
import AllVideo from "../pages/AllVideo.vue";
import Home from "../pages/Home.vue";

const routes = [



  {
    path: "/home",
    name: "home",
    component: Home,
  },
  {
    path: "/video",
    name: "allVideo",
    component: AllVideo,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
