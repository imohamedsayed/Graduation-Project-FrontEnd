<template>
  <Header />
  <div class="main-view">
    <AsideBar />
    <div class="class-room">
      <div class="container">
        <div class="cover">
          <div class="container">
            <div class="bg">
              <div class="row">
                <div class="col-lg-6 col-md-6">
                  <div class="mt-30">
                    <label class="name"
                      >{{ state.section.subject_name }}
                    </label>
                    <label class="date">2021 / 2022</label>
                    <label class="number-st"
                      ><span> عدد الطلاب :</span>30</label
                    >
                  </div>
                </div>
                <div class="col-sm-12 col-md-6">
                  <div class="mt-30">
                    <label class="teacher-class"
                      ><span> الاستاذ : </span> {{ state.section.teacher_name }}
                    </label>
                    <label class="teacher-class"
                      ><span> تاريخ البدء : </span>
                      {{ state.section.start_date }}</label
                    >
                    <label class="teacher-class"
                      ><span> تاريخ الانتهاء : </span>
                      {{ state.section.registration_deadline }}</label
                    >
                    <label class="teacher-class"
                      ><span> السعر : </span> {{ state.section.price }}$</label
                    >
                    <label class="number-st"
                      ><span> السعه :</span
                      >{{ state.section.max_capacity }}</label
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="sections">
          <div class="container">
            <div class="bgs">
              <div class="row">
                <div class="col-lg-4 col-md-4">
                  <div class="mt-30">
                    <div class="card h-100">
                      <img
                        src="../../../../public/images/categories/img_read.jpg"
                        class="card-img-top"
                        alt="..."
                      />
                      <div class="card-body">
                        <h5 class="card-title">الامتحانات</h5>
                        <router-link :to="{ name: 'showExams' }">
                          <a class="btn"> عرض الامتحانات</a></router-link
                        >
                        <router-link :to="{ name: 'new_Exam' }">
                          <a class="btn"> اضافه امتحان</a></router-link
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-4">
                  <div class="mt-30 mb-30">
                    <div class="card h-100">
                      <img
                        src="../../../../public/images/categories/img_read.jpg"
                        class="card-img-top"
                        alt="..."
                      />
                      <div class="card-body">
                        <h5 class="card-title">المواعيد</h5>
                        <router-link
                          :to="{ name: 'appointments', id: state.section.id }"
                        >
                          <a class="btn"> عرض المواعيد</a></router-link
                        >
                        <router-link :to="{ name: 'add_appointment',id:state.section.id  }">
                          <a class="btn"> اضافه مواعيد</a></router-link
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-4">
                  <div class="mt-30">
                    <div class="card h-100">
                      <img
                        src="../../../../public/images/categories/img_read.jpg"
                        class="card-img-top"
                        alt="..."
                      />
                      <div class="card-body">
                        <h5 class="card-title">الطلاب</h5>
                        <router-link :to="{ name: 'showStudent' }">
                          <a class="btn"> عرض الطلاب </a></router-link
                        >
                        <router-link :to="{ name: 'applicant_students' }">
                          <a class="btn"> قبول الطلاب</a></router-link
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-4">
                  <div class="mt-30">
                    <div class="card h-100">
                      <img
                        src="../../../../public/images/categories/img_read.jpg"
                        class="card-img-top"
                        alt="..."
                      />
                      <div class="card-body">
                        <h5 class="card-title">الملاحظات</h5>
                        <router-link
                          :to="{
                            name: 'classroom_notes',
                            id: state.section.id,
                          }"
                        >
                          <a class="btn"> عرض الملاحظات</a></router-link
                        >
                        <router-link
                          :to="{ name: 'add_note', id: state.section.id }"
                        >
                          <a class="btn">اضافه ملاحظات</a></router-link
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-4">
                  <div class="mt-30">
                    <div class="card h-100">
                      <img
                        src="../../../../public/images/categories/img_read.jpg"
                        class="card-img-top"
                        alt="..."
                      />
                      <div class="card-body">
                        <h5 class="card-title">الملحقات</h5>
                        <router-link :to="{ name: 'classroom_attachments',id:state.section.id  }">
                          <a class="btn"> عرض الملحقات</a></router-link
                        >
                        <router-link :to="{ name: 'add_attachment',id:state.section.id  }">
                          <a class="btn"> اضافه ملحق</a></router-link
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-4">
                  <div class="mt-30">
                    <div class="card h-100">
                      <img
                        src="../../../../public/images/categories/img_read.jpg"
                        class="card-img-top"
                        alt="..."
                      />
                      <div class="card-body">
                        <h5 class="card-title">حضور و غياب</h5>
                        <router-link :to="{ name: 'showStudentAttendance' }">
                          <a class="btn"> عرض الحضور والغياب</a></router-link
                        >
                        <router-link :to="{ name: 'studentAttendance' }">
                          <a class="btn"> تسجيل حضور</a></router-link
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-12 col-md-6">
                  <div class="mt-30"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Footer from "../../../components/Footer.vue";
import Header from "../../../components/Header.vue";
import AsideBar from "../../../components/AsideBar.vue";
import Section from "../../../components/sections/Section.vue";
import axios from "axios";

import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { reactive, computed, onMounted } from "vue";

export default {
  components: { Footer, AsideBar, Section, Header },
  props: {
    id: String,
  },
  setup(props) {
    const store = useStore();
    const router = useRouter();
    const state = reactive({
      user: computed(() => store.state.user),
      section: "",
    });

    onMounted(async () => {
      if (state.user == null || state.user.role_id != 3) {
        router.push("/dashboard/login");
      } else {
        let res = await axios
          .get("api_dashboard/classRooms/" + props.id)
          .then((res) => {
            state.section = res.data.data;
          })
          .catch((err) => console.log(err));
      }
    });
    return { state };
  },
};
</script>

<style lang="scss" scoped>
.class-room {
  margin-right: 14rem;

  @media (max-width: 991px) {
    margin-right: 0;
  }
}
.cover .bg {
  background-image: url("../../../../public/images/categories/img_read.jpg") !important;
  background-repeat: no-repeat;
  background-size: cover;
}

.class-room .cover .bg .name,
.class-room .cover .bg .date,
.class-room .cover .bg .teacher-class,
.class-room .cover .bg .number-st {
  color: white !important;
}
.class-room .cover .bg .name {
  font-size: 3rem !important;
  line-height: 20px;
  font-family: Roboto, Helvetica, Arial, sans-serif;
  margin-top: 10px !important;
}
.class-room .cover .bg .date {
  font-size: 1.3rem !important;
  line-height: 20px !important;
  font-family: Roboto, Helvetica, Arial, sans-serif;
  margin-top: 30px !important;
}

.class-room .cover .bg .teacher-class span {
  margin-left: 20px;
}
.class-room .cover .bg .number-st span {
  margin-left: 20px;
}
.sections {
  padding: 20px;
}
.card-title {
  font-size: 1.5rem !important;
  line-height: 20px !important;
  font-family: Roboto, Helvetica, Arial, sans-serif;
  margin-top: 10px !important;
  margin-bottom: 20px !important;
}
.btn {
  padding: 5px 10px !important;
  color: white !important;
  background: var(--blue-color) !important;
  margin-right: 5px;

  &:hover {
    background: var(--darker-blue) !important;
    color: #fff !important;
  }
}
.card {
  margin-top: 30px;
}
</style>
