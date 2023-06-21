<template>
  <Header />
  <div class="main-view">
    <AsideBar />
    <div class="new-branch">
      <div class="sa4d25">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <h2 class="st_title cr_course_title">
                <i class="fas fa-plus-circle"></i>اضافة امتحان
              </h2>
            </div>
            <div class="col-lg-6">
              <div v-if="state.save" class="alert alert-success" role="alert">
                تم تعديل الامتحان بنجاح .
                <span
                  style="
                     {
                      font-size: 18px;
                      cursor: pointer;
                      display: inline-block;
                      transition: 0.5s a;
                    }
                  "
                >
                  عرض جميع الامتحانات
                </span>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <div class="course_tabs_1">
                <div id="add-course-tab" class="step-app">
                  <div class="step-content">
                    <div
                      class="step-tab-panel step-tab-info active create-course-tab"
                      id="tab_step1"
                    >
                      <div class="tab-from-content">
                        <div class="course__form">
                          <div class="general_info10">
                            <div class="row">
                              <div class="col-lg-6 col-md-12 mb-2">
                                <div class="ui search focus mt-30 lbel25">
                                  <label
                                    ><i class="fas fa-pencil-alt"></i>
                                    الاسم</label
                                  >
                                  <input type="text" v-model="state.name" />
                                </div>
                                <span
                                  class="text-danger fw-bold"
                                  v-if="v$.name.$error"
                                >
                                  {{ v$.name.$errors[0].$message }}
                                </span>
                              </div>
                              <div class="col-lg-6 col-md-12 mb-2">
                                <div class="ui search focus mt-30 lbel25">
                                  <label
                                    ><i class="fas fa-pencil-alt"></i>
                                    الوصف</label
                                  >
                                  <input
                                    type="text"
                                    v-model="state.description"
                                  />
                                </div>
                                <span
                                  class="text-danger fw-bold"
                                  v-if="v$.description.$error"
                                >
                                  {{ v$.description.$errors[0].$message }}
                                </span>
                              </div>
                              <div class="col-lg-6 col-md-12 mb-2">
                                <div class="ui search focus mt-30 lbel25">
                                  <label
                                    ><i class="fas fa-pencil-alt"></i> تاريخ
                                    البدء</label
                                  >
                                  <input
                                    type="datetime-local"
                                    v-model="state.start_at"
                                  />
                                </div>
                                <span
                                  class="text-danger fw-bold"
                                  v-if="v$.start_at.$error"
                                >
                                  {{ v$.start_at.$errors[0].$message }}
                                </span>
                              </div>
                              <div class="col-lg-6 col-md-12 mb-2">
                                <div class="ui search focus mt-30 lbel25">
                                  <label
                                    ><i class="fas fa-pencil-alt"></i> تاريخ
                                    الانتهاء</label
                                  >
                                  <input
                                    type="datetime-local"
                                    v-model="state.end_at"
                                  />
                                </div>
                                <span
                                  class="text-danger fw-bold"
                                  v-if="v$.end_at.$error"
                                >
                                  {{ v$.end_at.$errors[0].$message }}
                                </span>
                              </div>

                              <div class="col-lg-6 col-md-12 mb-2">
                                <div class="ui search focus mt-30 lbel25">
                                  <label>
                                    <i class="fas fa-list"></i>النوع</label
                                  >
                                  <select v-model="state.type">
                                    <option value="0">امتحان عادي</option>
                                    <option value="1">امتحان مسبق</option>
                                  </select>
                                </div>
                                <span
                                  class="text-danger fw-bold"
                                  v-if="v$.type.$error"
                                >
                                  {{ v$.type.$errors[0].$message }}
                                </span>
                              </div>
                              <div class="col-lg-6 col-md-12 mb-2">
                                <div class="ui search focus mt-30 lbel25">
                                  <label>
                                    <i class="fas fa-list"></i>الحالة</label
                                  >
                                  <select v-model="state.status">
                                    <option value="1">تم النشر</option>
                                    <option value="0">لم يتم النشر</option>
                                  </select>
                                </div>
                                <span
                                  class="text-danger fw-bold"
                                  v-if="v$.status.$error"
                                >
                                  {{ v$.status.$errors[0].$message }}
                                </span>
                              </div>
                            </div>
                          </div>
                          <button
                            data-direction="finish"
                            @click="addExam"
                            class="btn btn-default steps_btn"
                          >
                            اضافة
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
// @ is an alias to /src
import Footer from "../../../components/Footer.vue";
import Header from "../../../components/Header.vue";
import AsideBar from "../../../components/AsideBar.vue";
import axios from "axios";
import Toast from "@/components/Toast.vue";
import { reactive, onMounted, computed } from "vue";
import { useStore } from "vuex";
import { useVuelidate } from "@vuelidate/core";
import { required, minLength } from "@vuelidate/validators";

export default {
  components: { Footer, AsideBar, Header, Toast },
  props: {
    id: String,
  },
  setup(props) {
    const state = reactive({
      user: computed(() => store.state.user),
      save: false,
      name: "",
      description: "",
      start_at: "",
      end_at: "",
      status: 0,
      type: 0,
    });

    onMounted(async () => {
      if (state.user == null || state.user.role_id != 3) {
        router.push("/dashboard/login");
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

    // validations

    const rules = computed(() => {
      return {
        name: { required },
        description: { required },
        start_at: { required },
        end_at: { required },
        status: { required },
        type: { required },
      };
    });

    const v$ = useVuelidate(rules, state);

    // add new term

    const addExam = async () => {
      v$.value.$validate();
      if (!v$.value.$error) {
        state.end_at = state.end_at.replace("T", " ");

        state.start_at = state.start_at.replace("T", " ");

        const data = {
          name: state.name,
          description: state.description,
          start_at: state.start_at,
          end_at: state.end_at,
          status: state.status,
          type: state.type,
          class_room_id: props.id,
        };
        console.log(data);
        try {
          let res = await axios.post("api_dashboard/exams", data);
          if (res.status == 200) {
            notification("success", "تم اضافة الامتحان");
          } else {
            notification("error", "حدث خطأ ما, عاود المحاولة لاحقا");
          }
        } catch (err) {
          notification("error", err.response.data.message);
        }
      } else {
        notification("error", "البيانات غير صحيحة");
      }
    };

    return { state, v$, addExam, toast };
  },
};
</script>
<style lang="scss">
.sa4d25 {
  direction: rtl;
  padding: 30px 20px;
  width: 100%;
}

.new-branch {
  margin-right: 14rem;

  @media (max-width: 991px) {
    margin-right: 0;
  }
}

.sa4d25 .st_title {
  margin-bottom: 8px;
  font-size: 20px;
}

.sa4d25 .st_title i {
  color: var(--darker-blue);
  margin-left: 10px;
  font-size: 22px;
}

.course_tabs_1 {
  background: #f1f3f8;
  margin-top: 30px;
  padding: 0 30px;
  padding-bottom: 30px;
  border-radius: 10px;
  border: 1px solid #efefef;
}

.course_tabs_1 label {
  font-weight: 500;
  font-size: 16px;
  margin-bottom: 10px !important;
  color: var(--text-black);
  text-align: right;
  display: block;
}

.course_tabs_1 label i {
  margin-left: 10px;
}
.course_tabs_1 select {
  padding: 15px 15px;
  height: auto;
  border-radius: 8px;
  font-weight: 500;
  font-size: 15px;
  border: var(--border);
  width: 100%;
  margin-top: 10px;
}

.course_tabs_1 select:focus {
  outline: none;
}
.course_tabs_1 input {
  padding: 15px 15px;
  height: auto;
  border-radius: 8px;
  font-weight: 500;
  font-size: 15px;
  border: var(--border);
  width: 100%;
  margin-top: 10px;
}

.course_tabs_1 input:focus {
  outline: none;
}

.tab-from-content {
  padding: 30px 0;
}

.course_tabs_1 .steps_btn {
  margin: 25px 25px;
  padding: 10px 50px !important;
  margin-bottom: 0;
  margin-top: 50px;
  font-size: 20px !important;
  height: auto !important;
  background: var(--blue-color) !important;
  color: white !important;
  font-family: "Cairo", sans-serif !important;
  font-weight: 700 !important;
  border-radius: 50px;
  font-weight: bold;
}

.course_tabs_1 .steps_btn:hover {
  color: white !important;
  background: var(--darker-blue) !important;
}
</style>
