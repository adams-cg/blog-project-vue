import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import GuideView from "../views/GuideView.vue";
import Page404 from "../views/Page404.vue";
import Articoli from "../views/Articoli.vue";
import Articolo from "../views/Articolo.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/articoli",
      name: "articoli",
      component: Articoli,
    },
    {
      path: "/guides",
      name: "guides",
      component: GuideView,
    },
    {
      path: "/:catchAll(.*)",
      name: "page404",
      component: Page404,
    },
    {
      path: "/articolo/:slug",
      name: "articolo",
      component: Articolo,
    }
  ],
});

export default router;
