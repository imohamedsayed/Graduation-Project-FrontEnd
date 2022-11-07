import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CreateCourse from "../views/Dashboard/Create_new_course.vue";
import CreateClass from "../views/Dashboard/classes/CreateClass.vue";
import CreateNotificationPage from "../views/Dashboard/notification/CreateNotificationPage.vue";
import ViewClasses from "../views/Dashboard/classes/ShowClasses.vue";
import LandingPage from "../views/LandingPage.vue";
const routes = [
  {
    path: "/",
    name: "landingPage",
    component: LandingPage,
  },
  {
    path: "/home",
    name: "home",
    component: HomeView,
  },
  {
    path: "/dashboard/new_course",
    name: "new_course",
    component: CreateCourse,
  },
  {
    path: "/dashboard/new_class",
    name: "CreateClass",
    component: CreateClass,
  },
  {
    path: "/dashboard/notifications",
    name: "CreateNotificationPage",
    component: CreateNotificationPage,
  },
  {
    path: "/dashboard/view_classes",
    name: "viewClasses",
    component: ViewClasses,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
