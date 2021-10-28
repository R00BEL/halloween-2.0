import { createRouter, createWebHistory } from "vue-router";
import Linkedin from "../components/linkedin";

const routes = [
  {
    path: "/",
    name: "Linkedin",
    component: Linkedin
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
