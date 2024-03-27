import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import Article from "../views/Article.vue";
import GuideView from "../views/GuideView.vue";
import Page404 from "../views/Page404.vue";

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
      path: "/article",
      name: "article",
      component: Article,
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
  ],
});

export default router;
