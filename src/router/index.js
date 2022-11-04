import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CreateCourse from "../views/Dashboard/Create_new_course.vue";
import CreateClass from "../views/Dashboard/classes/CreateClass.vue";
import CreateNotificationPage from "../views/Dashboard/notification/CreateNotificationPage.vue";
import ViewClasses from "../views/Dashboard/classes/ShowClasses.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/new_course",
    name: "new_course",
    component: CreateCourse,
  },
  {
    path: "/new_class",
    name: "CreateClass",
    component: CreateClass,
  },
  {
    path: "/notifications",
    name: "CreateNotificationPage",
    component: CreateNotificationPage,
  },
  {
    path: "/view_classes",
    name: "viewClasses",
    component: ViewClasses,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
