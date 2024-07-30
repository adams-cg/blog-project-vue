import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import GuideView from "../views/GuideView.vue";
import Page404 from "../views/Page404.vue";
import Articoli from "../views/Articoli.vue";
import Articolo from "../views/Articolo.vue";
import FrontEnd from "../views/FrontEnd.vue";
import AI from "../views/AI.vue";
import Backend from "../views/BackEnd.vue";
import CMS from "../views/Cms.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/contatti",
      name: "contatti",
      component: AboutView,
    },
    {
      path: "/articoli",
      name: "articoli",
      component: Articoli,
    },
    {
      path: "/guide",
      name: "guide",
      component: GuideView,
    },
    {
      path: "/:catchAll(.*)",
      name: "page404",
      component: Page404,
    },
    {
      path: "/articoli/:slug",
      name: "articolo",
      component: Articolo,
    },
    {
      path: "/frontend",
      name: "frontEnd",
      component: FrontEnd,
    },
    {
      path: "/backend",
      name: "backEnd",
      component: Backend,
    },
    {
      path: "/cms",
      name: "CMS",
      component: CMS,
    },
    {
      path: "/ai",
      name: "AI",
      component: AI,
    },
  ],
});

export default router;
