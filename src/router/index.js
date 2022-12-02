import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Dashboard/HomeView.vue";
import CreateSection from "../views/Dashboard/sections/CreateSection.vue";
import CreateCourse from "../views/Dashboard/Courses/Create_new_course.vue";
import EditeCourse from "../views/Dashboard/Courses/EditCourse.vue";
import Add_Manger from "../views/Dashboard/Mangers/AddManger.vue";
import Show_mangers from "../views/Dashboard/Mangers/Show_mangers.vue";
import ShowCources from "../views/Dashboard/Courses/Show_cources.vue";
import CreateClass from "../views/Dashboard/classes/CreateClass.vue";
import CreateNotificationPage from "../views/Dashboard/notification/CreateNotificationPage.vue";
import ViewClasses from "../views/Dashboard/classes/ShowClasses.vue";
import CreateExam from "../views/Dashboard/Exams/CreateExam.vue";
import CreateBranch from "../views/Dashboard/Branches/Create-Branch.vue";
import UpdateBranch from "../views/Dashboard/Branches/Update-Branch.vue";
import ShowBranches from "../views/Dashboard/Branches/Show-Branches.vue";
import PlatformSettings from "../views/Dashboard/platform_settings/Platform_Settings.vue";
import LandingPage from "../views/LandingPage.vue";
import Login from "../views/Login.vue";
import signup from "../views/Signup.vue";
const routes = [
  {
    path: "/",
    name: "landingPage",
    component: LandingPage,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/signup",
    name: "signup",
    component: signup,
  },
  {
    path: "/dashboard/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/dashboard/new_section",
    name: "new_Section",
    component: CreateSection,
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
    path: "/dashboard/CreateBranch",
    name: "CreateBranch",
    component: CreateBranch,
  },
  {
    path: "/dashboard/UpdateBranch",
    name: "UpdateBranch",
    component: UpdateBranch,
  },
  {
    path: "/dashboard/ShowBranches",
    name: "ShowBranches",
    component: ShowBranches,
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
  {
    path: "/dashboard/new_exam",
    name: "new_Exam",
    component: CreateExam,
  },
  {
    path: "/dashboard/ShowCources",
    name: "ShowCources",
    component: ShowCources,
  },
  {
    path: "/dashboard/EditeCourse",
    name: "EditeCourse",
    component: EditeCourse,
  },
  {
    path: "/dashboard/Add_Manger",
    name: "Add_Manger",
    component: Add_Manger,
  },
  {
    path: "/dashboard/Show_mangers",
    name: "Show_mangers",
    component: Show_mangers,
  },
  {
    path: "/dashboard/settings",
    name: "plat_settings",
    component: PlatformSettings,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
