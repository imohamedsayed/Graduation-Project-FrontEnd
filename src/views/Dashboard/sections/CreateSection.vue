<template>
  <Header />
  <div class="main-view">
    <AsideBar />
    <div class="new-course">
      <div class="cover">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <h2 class="st_title">
                <i class="fas fa-plus-circle"></i>
                انشاء فصل جديد
              </h2>
            </div>
            <div class="col-lg-6">
              <div
                v-if="state.save"
                class="alert alert-success"
                style="position: fixed; top: 100px; right: 10px; z-index: 1000"
                role="alert"
              >
                تم اضافه فصل بنجاح .
                <span
                  style="
                     {
                      font-size: 18px;
                      cursor: pointer;
                      display: inline-block;
                      transition: 0.5s a;
                    }
                  "
                  @click="$router.push({ name: 'showsections' })"
                >
                  عرض جميع الفصول
                </span>
              </div>
            </div>
          </div>
          <div class="bg">
            <div class="row">
              <div class="col-12">
                <form class="form" @submit.prevent="addClassRoom">
                  <div class="form_content">
                    <div class="row">
                      <div class="col-lg-6 col-md-6">
                        <div class="ui mt-30 focus box search">
                          <label> اسم الفصل</label>
                          <input
                            type="text"
                            v-model="state.name"
                            name=""
                            id=""
                          />
                          <span
                            class="text-danger fw-bold"
                            v-if="v$.name.$error"
                          >
                            {{ v$.name.$errors[0].$message }}
                          </span>
                        </div>
                      </div>
                      <div class="col-lg-6 col-md-6">
                        <div class="ui mt-30 focus box search">
                          <label>
                            <i class="fas fa-pencil-alt"></i>اسم الدورة
                          </label>
                          <select v-model="state.course" class="">
                            <option
                              v-for="sub in state.subjects"
                              :key="sub.id"
                              :value="sub.id"
                            >
                              {{ sub.name }}
                            </option>
                          </select>
                          <span
                            class="text-danger fw-bold"
                            v-if="v$.course.$error"
                          >
                            {{ v$.course.$errors[0].$message }}
                          </span>
                        </div>
                      </div>
                      <div class="col-lg-6 col-md-6">
                        <div class="ui mt-30 focus box search">
                          <label>
                            <i class="fa-solid fa-chalkboard-user"></i> اسم
                            المدرس</label
                          >
                          <select v-model="state.tech" class="">
                            <option
                              v-for="teacher in state.teachers"
                              :key="teacher.id"
                              :value="teacher.id"
                            >
                              {{ teacher.name }} - {{ teacher.id }}
                            </option>
                          </select>
                          <span
                            class="text-danger fw-bold"
                            v-if="v$.tech.$error"
                          >
                            {{ v$.tech.$errors[0].$message }}
                          </span>
                        </div>
                      </div>
                      <div class="col-lg-6 col-md-6">
                        <div class="ui mt-30 focus box search">
                          <label>
                            <i class="fa-solid fa-dollar-sign"></i> السعر</label
                          >
                          <input
                            type="number"
                            v-model="state.price"
                            name=""
                            id=""
                          />
                          <span
                            class="text-danger fw-bold"
                            v-if="v$.price.$error"
                          >
                            {{ v$.price.$errors[0].$message }}
                          </span>
                        </div>
                      </div>
                      <div class="col-lg-6 col-md-6">
                        <div class="ui mt-30 focus box search">
                          <label>
                            <i class="fa-solid fa-warehouse"></i> السعة القصوى
                          </label>
                          <input
                            type="number"
                            v-model="state.max"
                            name=""
                            id=""
                          />
                          <span
                            class="text-danger fw-bold"
                            v-if="v$.max.$error"
                          >
                            {{ v$.max.$errors[0].$message }}
                          </span>
                        </div>
                      </div>
                      <div class="col-lg-6 col-md-6">
                        <div class="ui mt-30 focus box search">
                          <label>
                            <i class="fa fa-clipboard-question"></i> امتحان
                            مسبق</label
                          >
                          <select v-model="state.exam" class="">
                            <option value="1" selected>يوجد</option>
                            <option value="0">لا يوجد</option>
                          </select>
                          <span
                            class="text-danger fw-bold"
                            v-if="v$.exam.$error"
                          >
                            {{ v$.exam.$errors[0].$message }}
                          </span>
                        </div>
                      </div>
                      <div class="col-lg-6 col-md-6">
                        <div class="ui mt-30 focus box search">
                          <label>
                            <i class="fa-solid fa-warehouse"></i> اقل سعة ممكنة
                          </label>
                          <input
                            type="number"
                            v-model="state.min_selected"
                            name=""
                            id=""
                            :disabled="state.exam != 1"
                          />
                          <span
                            class="text-danger fw-bold"
                            v-if="v$.min_selected.$error"
                          >
                            {{ v$.min_selected.$errors[0].$message }}
                          </span>
                        </div>
                      </div>
                      <div class="col-lg-6 col-md-6">
                        <div class="ui mt-30 focus box search">
                          <label>
                            <i class="fa-solid fa-warehouse"></i> الحد الادني
                            للدرجة
                          </label>
                          <input
                            type="number"
                            v-model="state.min_grade"
                            name=""
                            id=""
                            :disabled="state.exam != 1"
                          />
                          <span
                            class="text-danger fw-bold"
                            v-if="v$.min_grade.$error"
                          >
                            {{ v$.min_grade.$errors[0].$message }}
                          </span>
                        </div>
                      </div>

                      <div class="col-lg-6 col-md-6">
                        <div class="ui mt-30 focus box search">
                          <label>
                            <i class="fa fa-calendar-days"></i> تاريخ البدء
                          </label>
                          <input
                            type="datetime-local"
                            v-model="state.start"
                            name=""
                            id=""
                          />
                          <span
                            class="text-danger fw-bold"
                            v-if="v$.start.$error"
                          >
                            {{ v$.start.$errors[0].$message }}
                          </span>
                        </div>
                      </div>
                      <div class="col-lg-6 col-md-6">
                        <div class="ui mt-30 focus box search">
                          <label>
                            <i class="fa fa-calendar-days"></i> تاريخ
                            الانتهاء</label
                          >
                          <input
                            type="datetime-local"
                            v-model="state.end"
                            name=""
                            id=""
                          />
                          <span
                            class="text-danger fw-bold"
                            v-if="v$.end.$error"
                          >
                            {{ v$.end.$errors[0].$message }}
                          </span>
                        </div>
                      </div>
                      <div class="col-lg-6 col-md-6">
                        <div
                          class="ui mt-30 focus box search d-flex align-items-center gap-2"
                        >
                          <input
                            type="checkbox"
                            id="status"
                            class="mb-3"
                            v-model="state.status"
                            style="width: 30px; height: 30px"
                          />
                          <label
                            for="status"
                            style="font-size: 20px !important"
                            class="text-muted"
                          >
                            الحالة</label
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    type="submit"
                    data-direction="finish"
                    class="btn btn-default steps_btn"
                  >
                    حفظ
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  </div>
  <teleport to="body">
    <Toast :theme="toast.theme" :showNotification="toast.showNotification">
      <p>{{ toast.notify }}</p>
    </Toast>
  </teleport>
</template>

<script>
import Footer from "../../../components/Footer.vue";
import Header from "../../../components/Header.vue";
import AsideBar from "../../../components/AsideBar.vue";
import Toast from "@/components/Toast.vue";

import axios from "axios";

import { reactive, onMounted, computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";

export default {
  name: "Create_section",
  components: { Footer, AsideBar, Header, Toast },
  setup() {
    const state = reactive({
      user: computed(() => store.state.user),
      save: false,
      name: "",
      course: "",
      tech: "",
      max: "",
      price: "",
      exam: "",
      start: "",
      end: "",
      status: false,

      min_grade: 0,
      min_selected: 0,
      teachers: [],
      subjects: [],
    });

    onMounted(async () => {
      if (state.user == null) {
        router.push("/dashboard/login");
      } else {
        if (state.user.role_id != 3) {
          router.push("/dashboard");
        }
      }
      // get our teachers

      let res = await axios.get("/api_dashboard/teachers");

      if (res.status == 200) {
        state.teachers = res.data.data;
      } else {
        // error while getting data
      }

      // get our subjects

      let subject_res = await axios.get(
        "/api_dashboard/subjects_get_by_branch_id/" +
          state.user.branch_id_assistant
      );

      if (subject_res.status == 200) {
        state.subjects = subject_res.data.data;
        //console.log(subject_res.data.data);
      } else {
        // error while getting data
      }
    });

    //notification
    const toast = reactive({
      showNotification: false,
      theme: "",
      notify: "",
    });

    const notification = (theme, message) => {
      toast.theme = theme;
      toast.notify = message;
      toast.showNotification = true;
      setTimeout(() => {
        toast.showNotification = false;
      }, 2000);
    };

    // Store and router

    const store = useStore();
    const router = useRouter();

    // validations

    const rules = computed(() => {
      return {
        name: { required },
        course: { required },
        tech: { required },
        max: { required },
        price: { required },
        exam: { required },
        start: { required },
        end: { required },
        min_selected: { required },
        min_grade: { required },
      };
    });

    const v$ = useVuelidate(rules, state);

    // add new class room

    const addClassRoom = async () => {
      v$.value.$validate();
      if (!v$.value.$error) {
        state.end = state.end.replace("T", " ");

        state.start = state.start.replace("T", " ");

        if (state.end.length != 19) {
          state.end += ":00";
        }
        if (state.start.length != 19) {
          state.start += ":00";
        }

        let data = {
          name: state.name,
          price: state.price,
          prerequisite_exam: state.exam,
          status: String(Number(state.status)),
          registration_deadline: state.end,
          start_date: state.start,
          max_capacity: state.max,
          branch_id: state.user.exter_info.branch_id,
          subject_id: state.course,
          teacher_id: state.tech,
          min_grade: state.min_grade,
          min_selected: state.min_selected,
        };
        console.log(data);

        // Start Sending Request

        let res = await axios.post("/api_dashboard/classRooms", data);

        if (res.status == 200) {
          state.save = true;
        }
      } else {
        notification("error", "Missing Data !");
      }
    };

    return { state, v$, addClassRoom, toast };
  },
};
</script>

<style lang="scss" scoped>
.new-course {
  margin-right: 14rem;

  @media (max-width: 991px) {
    margin-right: 0;
  }
}

.cover {
  padding: 30px 20px;
  width: 100%;

  .st_title {
    margin-bottom: 8px;
    color: var(--text-black);
    font-size: 20px;

    i {
      color: var(--darker-blue) !important;
      margin-left: 10px;
    }
  }

  .bg {
    background: #f1f3f8;
    margin-top: 30px;
    padding: 0 30px;
    padding-bottom: 30px;
    border-radius: 10px;
    border: 1px solid #efefef;
  }

  label {
    font-weight: 500;
    font-size: 15px !important;
    margin-bottom: 10px !important;
    color: var(--text-black);
    text-align: right;
    display: block;

    i {
      color: var(--darker-blue) !important;
      margin-left: 10px;
    }
  }

  input,
  textarea,
  select {
    padding: 15px 15px;
    height: auto;
    border-radius: 8px;
    font-weight: 500;
    font-size: 15px;
    border: var(--border);
    width: 100%;
    margin-top: 10px;

    &:focus {
      outline: none;
    }
  }

  textarea {
    height: 150px;
  }

  .form_content {
    .box {
      margin-top: 30px;
      position: relative;
    }
  }

  .view_info {
    display: block;
    width: 100%;
    float: right;
    padding: 30px 30px 0;

    .left {
      float: left;
      width: 40%;

      .view_img {
        img {
          width: 100%;
          border-radius: 10px;
        }
      }

      @media (max-width: 991px) {
        width: 100%;
      }
    }

    .right {
      float: right;
      width: 50%;
      margin-left: 30px;

      p {
        font-size: 14px;
        font-weight: 400;
        color: #686f7a;
        line-height: 26px;
        text-align: right;
        margin-bottom: 20px;
      }

      .upload_input {
        width: 100% !important;
        padding: 10px;
      }

      @media (max-width: 991px) {
        width: 100%;
        margin-top: 30px;
      }
    }
  }

  .course_price {
    float: right;
    width: 100%;
    margin-top: 50px;
    padding: 40px 30px 0;
    border-top: 1px solid #efefef;
  }

  .price {
    > span {
      width: 100%;
      display: block;
      text-align: center;
      padding: 10px;
      background: var(--darker-blue);
      color: white;
      border-radius: 10px;
      font-size: 12pt;
      margin-top: 15px;
    }
  }

  .steps_btn {
    color: var(--white-color);
    margin: 25px 25px;
    float: right;
    padding: 10px 50px !important;
    margin-bottom: 0;
    margin-top: 50px;
    font-size: 12pt !important;
    height: auto !important;
    background: var(--light-blue) !important;
    font-family: "Cairo", sans-serif !important;
    font-weight: 700 !important;

    &:hover {
      background: var(--light-blue) !important;
      color: var(--white-color);
    }
  }

  .upload_input {
    input {
      margin: 0 -50px !important;
    }
  }
}
.status {
  .statusbg {
    background-color: #efefef;
    border-radius: 10px;
    // width: calc(100% - 20px);
  }

  input {
    // width: auto !important;
    height: 20px !important;
    width: 20px !important;
    margin-top: 20px !important;
    // padding:20px 10px !important;
  }
}
</style>
