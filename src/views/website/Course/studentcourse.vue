<template>
  <Header />
  <div class="main-view">
    <AsideBar />
    <div class="course">
      <div class="sec1">
        <div class="backgrund">
          <div class="back"></div>
          <div class="row">
            <div class="col-lg-3 h_150">
              <div class="image">
                <img src="../../../../public/images/intro_background.png" alt="" />
              </div>
            </div>
            <div class="col-lg-7">
              <div class="row text">
                <div class="col-12">
                  <h2>{{ state.cours.subject_name }}</h2>
                </div>
                <div class="row">
                  <!-- <div class="col-12">
                    <p>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل
                      هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من
                      الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، 
                    </p>
                  </div> -->
                </div>
                <div class="row">
                  <div class="col-12">
                    <div class="sub">
                      <i class="fa fa-users"></i> {{ state.Registered }} مشترك
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-10">
                    <div class="time" v-for="app in state.appointments" :key="app.id">
                      <i class="fa-regular fa-clock border"></i> معاد الدورة : {{ app.day }} من : {{ app.from }} : الى {{
                        app.to }}
                    </div>
                  </div>
                  <div class="col-2">
                    <div class="time">
                      <!-- <i class="fa-solid fa-comments"></i> العربية -->
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="sec2">
        <div class="tech">
          <div class="row">
            <div class="col-lg-2 col-sm-12">
              <div class="img">
                <img :src="'http://127.0.0.1:8000/' + state.teacher_avatar" alt="" />
              </div>
            </div>
            <div class="col-6">
              <h3>{{ state.cours.teacher_name }}</h3>
              <!-- <div class="std_btn">
                <router-link :to="{ name: 'teacherProfile' }">
                  <i class="fa-sharp fa-solid fa-eye"></i> الملف الشخصى </router-link>
              </div> -->
            </div>
          </div>
        </div>
      </div>
      <div class="sec3">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="course-tab" data-bs-toggle="tab" data-bs-target="#course" type="button"
              role="tab" aria-controls="course" aria-selected="true">
              <i class="fa fa-list"></i> محتوى الدورة </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="exam-tab" data-bs-toggle="tab" data-bs-target="#exam" type="button" role="tab"
              aria-controls="exam" aria-selected="true">
              <i class="fa-sharp fa-solid fa-medal"></i> الاختبارات </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="quest-tab" data-bs-toggle="tab" data-bs-target="#quest" type="button" role="tab"
              aria-controls="quest" aria-selected="false">
              <i class="fa-solid fa-question"></i> الاسئلة </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="signs-tab" data-bs-toggle="tab" data-bs-target="#signs" type="button" role="tab"
              aria-controls="signs" aria-selected="false">
              <i class="fa-solid fa-bell"></i>علامات الدورة </button>
          </li>
        </ul>
        <div class="tab-content" id="myTabContent">
          <div class="tab-pane fade show active" id="course" role="tabpanel" aria-labelledby="course-tab">
            <div class="row">
              <div class="col-lg-7 col-xl-8 col-sm-12">
                <CourseContent :id="cours_id" />
              </div>
              <div class="col-lg-5 col-xl-4 col-md-12 col-sm-12">
                <Lrftbar :id="cours_id" />
              </div>
            </div>
          </div>
          <div class="tab-pane fade show" id="exam" role="tabpanel" aria-labelledby="exam-tab">
            <div class="row">
              <div class="col-lg-7 col-xl-8 col-sm-12">
                <CourseExame :cid="id" :id="cours_id" />
              </div>
              <div class="col-lg-5 col-xl-4 col-md-12 col-sm-12">
                <Lrftbar :id="cours_id" />
              </div>
            </div>
          </div>
          <div class="tab-pane fade" id="quest" role="tabpanel" aria-labelledby="quest-tab">
            <div class="row">
              <div class="col-lg-7 col-xl-8 col-sm-12">
                <CourseQuistions :id="cours_id" />
              </div>
              <div class="col-lg-5 col-xl-4 col-md-12 col-sm-12">
                <Lrftbar :id="cours_id" />
              </div>
            </div>
          </div>
          <div class="tab-pane fade" id="signs" role="tabpanel" aria-labelledby="signs-tab">
            <div class="row">
              <div class="col-lg-7 col-xl-8 col-sm-12">
                <CourseNotifcations :id="cours_id" />
              </div>
              <div class="col-lg-5 col-xl-4 col-md-12 col-sm-12">
                <Lrftbar :id="cours_id" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  </div>
  <SpinnerLoading :loading="state.loading" />
</template>

<script>
import Footer from "../../../components/Footer.vue";
import Header from "../../../components/StudentHeader.vue";
import AsideBar from "../../../components/WebsiteAsideBar.vue";
import Lrftbar from "../../../components/website/course/Lrftbar.vue";
import CourseExame from "../../../components/website/course/CourseExame.vue";
import CourseContent from "../../../components/website/course/CourseContent.vue";
import CourseQuistions from "../../../components/website/course/CourseQuistions.vue";
import CourseNotifcations from "../../../components/website/course/CourseNotifcations.vue";
import SpinnerLoading from "@/components/SpinnerLoading.vue";
import { computed,onMounted,reactive } from "vue";
import { useStore } from "vuex";
import axios from "axios";
export default {
  name: "course",
  components: {
    Footer,
    AsideBar,
    Header,
    Lrftbar,
    CourseExame,
    CourseContent,
    CourseQuistions,
    CourseNotifcations,
    SpinnerLoading,
  },
  props: {
    id: String,
  },
  setup(props) {
    const state = reactive({
      loading: true,
      cours: {},
      appointments: [],
      std_id: computed(() => useStore().state.student.id),
      Registered: 0,
      teacher_avatar: ''
    });
    const cours_id = props.id;
    onMounted(async () => {

      // get classroom

      await axios
        .get("api/all-classroom-basedOnAuthStudent/3")
        .then((res) => {
          state.cours = res.data.data.allStudent.find(
            (element) => element.id === parseInt(cours_id)
          );
          // console.log(res.data.data.allStudent);
        })
        .catch((error) => {
          console.log(error);
          console.log(error.response.data.errors);
        });


      // get remaining students

      
      await axios
        .get("api/get-remaining-students/" + cours_id)
        .then((res) => {
          state.Registered = res.data.data.Registered
          // console.log(res.data.data);
        })
        .catch((error) => {
          console.log(error);
          console.log(error.response.data.errors);
        });


      // get classroom teacher


      await axios
        .get("api/get-teachers/" + cours_id)
        .then((res) => {
          state.teacher_avatar = res.data.data.avatar;
          // console.log(state.teacher_avatar);
        })
        .catch((error) => {
          console.log(error);
          console.log(error.response.data.errors);
        });


      // get appointments


      await axios
        .get("api/appointments/" + cours_id)
        .then((res) => {
          state.appointments = res.data.data;
          state.loading = false;
        })
        .catch((error) => {
          console.log(error);
          console.log(error.response.data.errors);
        });


    });
    return { state,cours_id };
  },
};
</script>

<style lang="scss">
.course {
  margin-right: 15rem;

  @media (max-width: 991px) {
    margin-right: 0;
  }

  .sec1 {

    // height: 320px ;
    .backgrund {
      padding: 30px;
      background: url(../../../../public/images/intro_background.png) no-repeat;
      background-size: cover;

      position: relative;
      height: 100%;

      .back {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #776fb4b7;
      }

      .h_150 {
        height: 200px;
      }

      .image {
        position: relative;
        border-radius: 12px;
        height: 100%;
        border: 5px solid #fff;

        @media (max-width: 991px) {
          height: 100%;
        }

        img {
          border-radius: 12px;
          height: 100%;
          width: 100%;

          @media (max-width: 991px) {
            height: 100%;
          }
        }
      }

      .text {
        position: relative;
        color: #fff;

        .sub {
          margin-bottom: 10px;
        }
      }
    }

    i {
      margin-left: 8px;
    }
  }

  .sec2 {
    padding: 30px;
    background: var(--gray-blue);
    font-weight: bold;

    .img {
      width: 100px;
      height: 100px;
      margin: auto;

      @media (max-width: 991px) {
        width: 30%;
        margin: auto;
      }

      img {
        border-radius: 50%;
        // width: 70%;
        width: 100%;
        height: 100%;
        margin: 0 auto;
      }
    }

    h3 {
      padding-top: 20px;
      font-size: 30px;
      font-weight: bold;
      margin: 0;
      margin-bottom: 30px;
    }
  }

  .sec3 {
    ul {
      background-color: var(--gray-blue);
    }

    .nav-tabs .nav-item.show .nav-link,
    .nav-tabs .nav-link.active {
      color: #000 !important;
      background-color: transparent;
      border: none;
      border-bottom: 2px solid var(--darker-blue);
    }

    .nav-tabs button {
      font-size: 22px;
      margin-left: 30px;
      padding: 20px 10px;
      color: #000 !important;
      border: none;
      border-bottom: none;

      i {
        margin-left: 15px;
        color: var(--darker-blue);
      }
    }
  }
}

.time {
  .border {
    padding: 2px;
    border-radius: 50%;
  }
}

.std_btn {
  width: fit-content;
  padding: 8px 20px;
  border-radius: 25px;
  transition: 0.3s all;
  background: var(--darker-blue);

  a {
    font-weight: bold;
    color: #fff;
    font-size: 20px;
    transition: 0.3s all;

    i {
      margin-left: 10px;
    }

    &:hover {
      color: rgb(221, 221, 221);
    }
  }

  &:hover {
    background: var(--landing-blue);
  }
}
</style>
