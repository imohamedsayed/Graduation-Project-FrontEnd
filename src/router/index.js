import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Dashboard/HomeView.vue";
import CreateSection from "../views/Dashboard/sections/CreateSection.vue";
import CreateCourse from "../views/Dashboard/Courses/Create_new_course.vue";
import CreateTerm from "../views/Dashboard/term/CreateTerm.vue";
import UpdateTerm from "../views/Dashboard/term/UpdateTerm.vue";
import ShowTerm from "../views/Dashboard/term/ShowTerm.vue";
import EditeCourse from "../views/Dashboard/Courses/EditCourse.vue";
import Add_Manger from "../views/Dashboard/Mangers/AddManger.vue";
import Show_mangers from "../views/Dashboard/Mangers/Show_mangers.vue";
import ShowCources from "../views/Dashboard/Courses/Show_cources.vue";
import Update_Manger from "../views/Dashboard/Mangers/update_manger.vue";
import CreateClass from "../views/Dashboard/classes/CreateClass.vue";
import CreateNotificationPage from "../views/Dashboard/notification/CreateNotificationPage.vue";
import ViewClasses from "../views/Dashboard/classes/ShowClasses.vue";
import CreateExam from "../views/Dashboard/Exams/CreateExam.vue";
import showExams from "../views/Dashboard/Exams/showExams.vue";
import editExam from "../views/Dashboard/Exams/EditExam.vue";
import showQuestions from "../views/Dashboard/sections/questions/showQuestions.vue";
import editQuestion from "../views/Dashboard/sections/questions/EditQuestion.vue";
import addQuestion from "../views/Dashboard/sections/questions/addQuestion.vue";
import questionOptions from "../views/Dashboard/sections/questions/questionOptions.vue";
import questionMultiOptions from "../views/Dashboard/sections/questions/questionMultiOptions.vue";
import questionT_F from "../views/Dashboard/sections/questions/questionT_F.vue";
import CreateBranch from "../views/Dashboard/Branches/Create-Branch.vue";
import UpdateBranch from "../views/Dashboard/Branches/Update-Branch.vue";
import ShowBranches from "../views/Dashboard/Branches/Show-Branches.vue";
import CreateAssistant from "../views/Dashboard/assistant/Create-assistant.vue";
import UpdateAssistant from "../views/Dashboard/assistant/Update-assistant.vue";
import ShowAssistants from "../views/Dashboard/assistant/Show-assistants.vue";
import CreateTeacher from "../views/Dashboard/Teacher/CreateTeacher.vue";
import UpdateTeacher from "../views/Dashboard/Teacher/UpdateTeacher.vue";
import ShowTeachers from "../views/Dashboard/Teacher/ShowTeachers.vue";
import PlatformSettings from "../views/Dashboard/platform_settings/Platform_Settings.vue";
import AppStudents from "../views/Dashboard/sections/ShowAppStudents.vue";
import showStudent from "../views/Dashboard/sections/showStudent.vue";
import studentAttendance from "../views/Dashboard/sections/studentAttendance.vue";
import showStudentAttendance from "../views/Dashboard/sections/showStudentAttendance.vue";
import AddAppointment from "../views/Dashboard/sections/Appointments/AddApointment.vue";
import EditAppointment from "../views/Dashboard/sections/Appointments/EditAppointment.vue";
import ShowAppointments from "../views/Dashboard/sections/Appointments/ShowAppointments.vue";
import Showsections from "../views/Dashboard/sections/ShowSections.vue";
import classRoom from "../views/Dashboard/sections/classRoom.vue";
import Editesection from "../views/Dashboard/sections/Editesection.vue";
import LandingPage from "../views/LandingPage.vue";
import Login from "../views/Login.vue";
import ForgetPassword from "../views/ForgetPassword.vue";
import Verification from "../views/accountVerification.vue";
import newPassword from "../views/newPassword.vue";
import signup from "../views/Signup.vue";
import stuProfile from "../views/website/student/Profile.vue";
import studentcourse from "../views/website/Course/studentcourse.vue";
import StdMatrial from "../views/website/Course/StdMatrial/StdMatrial.vue";
import TeacherProfile from "../views/website/Profile teacher/TeacherProfile.vue";
import websiteStore from "../views/website/store/websiteStore.vue";
import Favourite from "../views/website/Favourite/FavoritePage.vue";
import superior from "../views/website/superiorStudent/superior.vue";
import cart from "../views/website/Cart/cart.vue";
import video from "../views/website/Video/video.vue";
import test from "../views/website/test/test.vue";
import payment from "../views/website/payment/Payment.vue";
import testResult from "../views/website/test-result/result.vue";
import WebsiteNotificationPage from "../views/website/Websitenotification/WebsiteNotificationPage.vue";
import Admin_Login from "../views/Admin_Login.vue";
import allTeacters from "@/views/website/Profile teacher/allTeacters.vue";
import ChooseBranch from "@/views/website/chooseBranch/ChooseBranch.vue";
import ShowNotes from "@/views/Dashboard/sections/notes/ShowNotes.vue";
import AddNote from "@/views/Dashboard/sections/notes/AddNote.vue";
import EditNote from "@/views/Dashboard/sections/notes/EditNote.vue";
import AddAttachment from "@/views/Dashboard/sections/attachment/AddAttachment.vue";
import ShowAttachments from "@/views/Dashboard/sections/attachment/ShowAttachments.vue";
import EditAttachments from "@/views/Dashboard/sections/attachment/EditAttachment.vue";
import Home from "@/views/website/stdhome";
import TeacherClasses from "@/views/website/ClassRooms/TeacherClassRooms.vue";
import CourseClasses from "@/views/website/ClassRooms/CourseClassRooms.vue";
import AppointmentsToAttendence from "@/views/Dashboard/sections/AppointmentsToGetAttendence.vue";
const routes = [
  {
    path: "/dashboard/login",
    name: "Admin_Login",
    component: Admin_Login,
  },
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
    path: "/ForgetPassword",
    name: "ForgetPassword",
    component: ForgetPassword,
  },
  {
    path: "/Verification",
    name: "Verification",
    component: Verification,
  },
  {
    path: "/newPassword",
    name: "newPassword",
    component: newPassword,
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
    path: "/dashboard/showsections",
    name: "showsections",
    component: Showsections,
  },
  {
    path: "/dashboard/classRoom/:id",
    name: "classRoom",
    component: classRoom,
    props: true,
  },
  {
    path: "/dashboard/Editesection/:id",
    name: "Editesection",
    component: Editesection,
    props: true,
  },
  {
    path: "/dashboard/new_course",
    name: "new_course",
    component: CreateCourse,
  },
  {
    path: "/dashboard/CreateTerm",
    name: "CreateTerm",
    component: CreateTerm,
  },
  {
    path: "/dashboard/UpdateTerm/:id",
    name: "UpdateTerm",
    component: UpdateTerm,
    props: true,
  },
  {
    path: "/dashboard/ShowTerm/",
    name: "ShowTerm",
    component: ShowTerm,
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
    path: "/dashboard/UpdateBranch/:id",
    name: "UpdateBranch",
    component: UpdateBranch,
    props: true,
  },
  {
    path: "/dashboard/ShowBranches",
    name: "ShowBranches",
    component: ShowBranches,
  },
  {
    path: "/dashboard/CreateAssistant",
    name: "CreateAssistant",
    component: CreateAssistant,
  },
  {
    path: "/dashboard/UpdateAssistant/:id",
    name: "UpdateAssistant",
    component: UpdateAssistant,
    props: true,
  },
  {
    path: "/dashboard/ShowAssistants",
    name: "ShowAssistants",
    component: ShowAssistants,
  },
  {
    path: "/dashboard/CreateTeacher",
    name: "CreateTeacher",
    component: CreateTeacher,
  },
  {
    path: "/dashboard/UpdateTeacher/:id",
    name: "UpdateTeacher",
    component: UpdateTeacher,
    props: true,
  },
  {
    path: "/dashboard/ShowTeachers",
    name: "ShowTeachers",
    component: ShowTeachers,
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
    path: "/dashboard/classRoom/:id/new_Exam",
    name: "new_Exam",
    props: true,
    component: CreateExam,
  },
  {
    path: "/dashboard/classRoom/:id/exams",
    name: "showExams",
    props: true,
    component: showExams,
  },
  {
    path: "/dashboard/editExam/:id",
    name: "editExam",
    props: true,
    component: editExam,
  },
  {
    path: "/dashboard/exam/editQuestion/:id",
    name: "editQuestion",
    props: true,
    component: editQuestion,
  },
  {
    path: "/dashboard/exam/:id/addQuestion",
    name: "addQuestion",
    props: true,
    component: addQuestion,
  },
  {
    path: "/dashboard/ShowCources",
    name: "ShowCources",
    component: ShowCources,
  },
  {
    path: "/dashboard/EditeCourse/:id",
    name: "EditeCourse",
    component: EditeCourse,
    props: true,
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
    path: "/dashboard/Update_Manger/:id",
    name: "Update_Manger",
    component: Update_Manger,
    props: true,
  },
  {
    path: "/dashboard/settings",
    name: "plat_settings",
    component: PlatformSettings,
  },
  {
    path: "/dashboard/classRoom/:id/add_appointment",
    name: "add_appointment",
    component: AddAppointment,
    props: true,
  },
  {
    path: "/dashboard/edit_appointment/:id",
    name: "edit_appointment",
    component: EditAppointment,
    props: true,
  },
  {
    path: "/dashboard/classRoom/:id/appointments",
    name: "appointments",
    component: ShowAppointments,
    props: true,
  },
  {
    path: "/dashboard/settings",
    name: "plat_settings",
    component: PlatformSettings,
  },
  {
    path: "/dashboard/classRoom/:id/app_students",
    name: "applicant_students",
    component: AppStudents,
    props: true,
  },
  {
    path: "/dashboard/exam/:id/questions",
    name: "showQuestions",
    component: showQuestions,
    props: true,
  },
  {
    path: "/dashboard/exam/:eid/question/:id/addMCQ",
    name: "questionMCQ",
    component: questionOptions,
    props: true,
  },
  {
    path: "/dashboard/exam/:eid/question/:id/add_Multi_MCQ",
    name: "question_Multi_MCQ",
    component: questionMultiOptions,
    props: true,
  },
  {
    path: "/dashboard/exam/:eid/question/:id/add_TF_MCQ",
    name: "questionT_F",
    component: questionT_F,
    props: true,
  },
  {
    path: "/dashboard/classRoom/:id/showStudent",
    name: "showStudent",
    component: showStudent,
    props: true,
  },
  {
    path: "/dashboard/classRoom/:id/showAppointments",
    name: "showAppointmentsForAttendance",
    component: AppointmentsToAttendence,
    props: true,
  },
  {
    path: "/dashboard/classRoom/:id/studentAttendance/:AId",
    name: "studentAttendance",
    component: studentAttendance,
    props: true,
  },
  {
    path: "/dashboard/classRoom/:id/showStudentAttendance",
    name: "showStudentAttendance",
    component: showStudentAttendance,
    props: true,
  },
  {
    path: "/dashboard/classRoom/:id/classroom_notes",
    name: "classroom_notes",
    component: ShowNotes,
    props: true,
  },
  {
    path: "/dashboard/classRoom/:id/add_note",
    name: "add_note",
    component: AddNote,
    props: true,
  },
  {
    path: "/dashboard/edit_note/:id",
    name: "edit_note",
    component: EditNote,
    props: true,
  },
  {
    path: "/dashboard/classRoom/:id/classroom_attachments",
    name: "classroom_attachments",
    component: ShowAttachments,
    props: true,
  },
  {
    path: "/dashboard/classRoom/:id/add_attachment",
    name: "add_attachment",
    component: AddAttachment,
    props: true,
  },
  {
    path: "/dashboard/edit_attachment/:id",
    name: "edit_attachment",
    component: EditAttachments,
    props: true,
  },
  /*
  
    ----- > STUDENT PAGES
  
  */
  {
    path: "/profile",
    name: "profile",
    component: stuProfile,
  },
  {
    path: "/matrial",
    name: "matrial",
    component: StdMatrial,
  },
  {
    path: "/course",
    name: "course",
    component: studentcourse,
  },
  {
    path: "/Website/allTeacters",
    name: "allTeacters",
    component: allTeacters,
  },
  {
    path: "/teacherProfile",
    name: "teacherProfile",
    component: TeacherProfile,
  },

  {
    path: "/Website/notifications",
    name: "WebsiteNotificationPage",
    component: WebsiteNotificationPage,
  },
  {
    path: "/Website/Store",
    name: "websiteStore",
    component: websiteStore,
  },
  {
    path: "/Website/Favourite",
    name: "Favourite",
    component: Favourite,
  },
  {
    path: "/Website/cart",
    name: "cart",
    component: cart,
  },
  {
    path: "/Website/video",
    name: "video",
    component: video,
  },
  {
    path: "/Website/test",
    name: "test",
    component: test,
  },
  {
    path: "/Website/superior",
    name: "superior",
    component: superior,
  },
  {
    path: "/student_home",
    name: "student_home",
    component: Home,
  },
  {
    path: "/Website/chooseBranch",
    name: "chooseBranch ",
    component: ChooseBranch,
  },
  {
    path: "/Website/payment",
    name: "payment",
    component: payment,
  },
  {
    path: "/Website/testResult",
    name: "testResult",
    component: testResult,
  },

  // Class Rooms

  {
    path: "/website/teacher/:id/classes",
    name: "teacher_classes",
    component: TeacherClasses,
    props: true,
  },

  {
    path: "/website/course/:id/classes",
    name: "course_classes",
    component: CourseClasses,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
