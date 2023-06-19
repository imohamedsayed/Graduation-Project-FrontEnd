<template>
  <Header />
  <div class="main-view">
    <AsideBar />
    <div class="stu-profile">
      <div class="stu-pic">
        <div class="student-name">
          <h1 class="text-center pt-2 text-light"> {{ state.student.full_name }} </h1>
        </div>
        <div class="profile-picture">
          <img :src="'http://127.0.0.1:8000/' + state.student.national_id_card" alt="profile picture" class="img-fluid" />
        </div>
      </div>
      <div class="container">
        <div class="details">
          <!--1-->
          <p>
            <button class="btn" type="button" data-bs-toggle="collapse" data-bs-target="#user-details"
              aria-expanded="false" aria-controls="user-details"> تفاصيل المستخدم </button>
          </p>
          <div class="collapse" id="user-details">
            <div class="card card-body">
              <studentData />
            </div>
          </div>
          <!--2-->
          <p>
            <button class="btn" type="button" data-bs-toggle="collapse" data-bs-target="#courses-details"
              aria-expanded="false" aria-controls="courses-details"> تفاصيل المقررات الدراسية </button>
          </p>
          <div class="collapse" id="courses-details">
            <div class="card card-body">
              <CourseData />
            </div>
          </div>
          <!--3-->
          <!--4-->
          <p>
            <button class="btn" type="button" data-bs-toggle="collapse" data-bs-target="#reports" aria-expanded="false"
              aria-controls="reports"> التقارير </button>
          </p>
          <div class="collapse" id="reports">
            <div class="card card-body">
              <reportsData />
            </div>
          </div>
          <!--5-->
          <p>
            <button class="btn" type="button" data-bs-toggle="collapse" data-bs-target="#log-details"
              aria-expanded="false" aria-controls="log-details"> نشاط تسجيل الدخول </button>
          </p>
          <div class="collapse" id="log-details">
            <div class="card card-body">
              <activityData />
            </div>
          </div>
        </div>
        <div class="last-visited">
          <h3>اخر المقررات التي قمت بزيارتها</h3>
          <div class="courses">
            <LastVisitedCourses />
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
  <SpinnerLoading :loading="state.loading" />
  <teleport to="body">
    <Toast :theme="toast.theme" :showNotification="toast.showNotification">
      <p>{{ toast.notify }}</p>
    </Toast>
  </teleport>
</template>

<script>
import Footer from "../../../components/Footer.vue";
import Header from "../../../components/StudentHeader.vue";
import AsideBar from "../../../components/WebsiteAsideBar.vue";
import LastVisitedCourses from "@/components/website/profile/LastVisitedCourses.vue";
import StudentData from '@/components/website/profile/studentData.vue';
import CourseData from '@/components/website/profile/courseData.vue';
import Toast from "@/components/Toast.vue";
import SpinnerLoading from "@/components/SpinnerLoading.vue";
import { reactive,onMounted,computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import axios from "axios";
import ReportsData from '@/components/website/profile/reportsData.vue';
import ActivityData from '@/components/website/profile/activityData.vue';

export default {
  components: {
    Footer,AsideBar
    ,Header,LastVisitedCourses,
    StudentData,Toast,SpinnerLoading,CourseData,
    ReportsData,
    ActivityData
  },

  setup(props) {
    const store = useStore();
    const router = useRouter();
    const toast = reactive({
      showNotification: false,
      theme: "",
      notify: "",
    });
    const notification = (theme,message) => {
      toast.theme = theme;
      toast.notify = message;
      toast.showNotification = true;
      setTimeout(() => {
        toast.showNotification = false;
      },2000);
    };

    const state = reactive({
      student: computed((_) => store.state.student),
      loading: false,
    });

    onMounted(async () => {

      if(!state.student) {
        router.push("/");
      }
      state.loading = true;
      // let res = await axios.get("/api/view-exam/" + props.cid + "/" + props.id);



      state.loading = false;
    });


    return { state,toast };
  },
};
</script>

<style lang="scss">
.stu-profile {
  margin-right: 15rem;

  @media (max-width: 991px) {
    margin-right: 0;
  }

  margin-bottom: 50px;
  padding-top: 0px;

  .stu-pic {
    width: 100%;
    height: 140px;
    margin-bottom: 100px;
    background: var(--gray-blue);
    position: relative;

    .profile-picture {
      width: 140px;
      height: 140px;
      position: absolute;
      left: 50%;
      bottom: -50%;
      border-radius: 50%;
      padding: 4px;
      background: #fff;
      transform: translate(-50%, 0);
      box-shadow: 1px 1px 1px 1px rgb(0 0 0/20%);

      img {
        border-radius: 50%;
        width: 100%;
        height: 100%;
      }
    }
  }

  .details {
    margin-top: 150px;

    p {
      margin-top: 20px;
    }

    button {
      width: 100%;
      text-align: right;
      font-size: 1.2rem;
      font-weight: 700;
      position: relative;
      padding: 15px;

      &:hover {
        background: var(--gray-blue);
      }

      &::after {
        font-family: "Font Awesome 6 Free";
        content: "\f0dd";
        position: absolute;
        width: 20px;
        height: 20px;
        left: 1%;
        top: 50%;
        transform: translate(-1%, -50%);
        display: block;
      }
    }
  }

  .last-visited {
    margin-top: 100px;
  }
}
</style>
