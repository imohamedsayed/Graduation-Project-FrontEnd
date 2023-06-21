<template>
  <Header />
  <div class="main-view">
    <AsideBar />
    <div class="newQuestion">
      <div class="sa4d25">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <h2 class="st_title cr_course_title">
                <i class="fas fa-plus-circle"></i> اضافه بيانات سوال :
              </h2>
            </div>
            <div class="col-lg-6">
              <div v-if="state.save" class="alert alert-success" role="alert">
                تم اضافه بيانات السوال بنجاح .
                <span
                  style="
                     {
                      font-size: 18px;
                      cursor: pointer;
                      display: inline-block;
                      transition: 0.5s a;
                    }
                  "
                  @click="
                    $router.push({ name: 'showQuestions', params: { id: id } })
                  "
                >
                  عرض جميع الاسئله</span
                >
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
                              <div class="col-lg-6 col-md-12">
                                <div class="ui search focus mt-30 lbel25">
                                  <label
                                    ><i class="fas fa-pencil-alt"></i>اضافه
                                    السوال</label
                                  >
                                  <input type="text" v-model="state.question" />
                                </div>
                                <span
                                  class="text-danger fw-bold"
                                  v-if="v$.question.$error"
                                >
                                  {{ v$.question.$errors[0].$message }}
                                </span>
                              </div>
                              <div class="col-lg-6 col-md-12">
                                <div class="ui search focus mt-30 lbel25">
                                  <label
                                    ><i class="fas fa-pencil-alt"></i>اضافه درجه
                                    السوال</label
                                  >
                                  <input type="number" v-model="state.point" />
                                </div>
                                <span
                                  class="text-danger fw-bold"
                                  v-if="v$.point.$error"
                                >
                                  {{ v$.point.$errors[0].$message }}
                                </span>
                              </div>
                              <div class="col-lg-6 col-md-12">
                                <div class="ui search focus mt-30 lbel25">
                                  <label
                                    ><i class="fas fa-pencil-alt"></i> اضافه
                                    الصوره</label
                                  >
                                  <input
                                    type="file"
                                    @change="
                                      (e) => {
                                        state.image = e.target.files[0];
                                      }
                                    "
                                  />
                                </div>
                              </div>
                              <div class="col-lg-6 col-md-12">
                                <div class="ui search focus mt-30 lbel25">
                                  <label
                                    ><i class="fas fa-pencil-alt"></i>اضافه
                                    الوصف</label
                                  >
                                  <input
                                    type="text"
                                    v-model="state.explanation"
                                  />
                                </div>
                              </div>
                              <div class="col-lg-6 col-md-12">
                                <div class="ui search focus mt-30 lbel25">
                                  <label>
                                    <i class="fas fa-list"></i>اختيار
                                    النوع</label
                                  >
                                  <select v-model="state.type">
                                    <option selected disabled value="">
                                      اختيار من القائمة
                                    </option>
                                    <option value="0">الاختيار الواحد</option>
                                    <option value="1">متعدد الاختيارات</option>
                                    <option value="2">صح وغلط</option>
                                  </select>
                                </div>
                                <span
                                  class="text-danger fw-bold"
                                  v-if="v$.type.$error"
                                >
                                  {{ v$.type.$errors[0].$message }}
                                </span>
                              </div>
                            </div>
                          </div>
                          <button
                            data-direction="finish"
                            @click="Save"
                            class="btn btn-default steps_btn"
                          >
                            حفظ
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
import Footer from "../../../../components/Footer.vue";
import Header from "../../../../components/Header.vue";
import AsideBar from "../../../../components/AsideBar.vue";
import { mapActions } from "vuex";
import axios from "axios";

import Toast from "@/components/Toast.vue";
import { reactive, onMounted, computed } from "vue";
import { useStore } from "vuex";
import { useVuelidate } from "@vuelidate/core";
import { required, decimal } from "@vuelidate/validators";

export default {
  props: {
    id: String,
  },
  name: "addQuestion",
  components: { Footer, AsideBar, Header, Toast },

  setup(props) {
    const state = reactive({
      user: computed(() => store.state.user),
      question: "",
      point: "",
      image: null,
      explanation: "",
      type: "",
      save: false,
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
        question: { required },
        type: { required },
        point: { required, decimal },
      };
    });

    const v$ = useVuelidate(rules, state);

    onMounted(async () => {
      if (state.user == null || state.user.role_id != 3) {
        router.push("/dashboard/login");
      }
    });

    // add new Question

    const Save = async () => {
      v$.value.$validate();
      if (!v$.value.$error) {
        let data = {
          question: state.question,
          type: state.type,
          point: state.point,
          image: state.image,
          explanation: state.explanation,
          exam_id: props.id,
        };
        try {
          let res = await axios.post("/api_dashboard/questions/", data, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
          if (res.status == 200) {
            state.save = true;
          } else {
            notification("error", "حدث خطأ ما, عاود المحاولة لاحقا");
          }
        } catch (err) {
          notification("error", err.response.data.message);
        }
      } else {
        notification("error", "البيانات المدخلة ليست مكتملة");
      }
    };

    return { state, v$, Save, toast };
  },
  methods: {
    ...mapActions(["redirectTo"]),
  },
};
</script>
<style lang="scss" scoped>
.sa4d25 {
  direction: rtl;
  padding: 30px 20px;
  width: 100%;
}

.newQuestion {
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
  background: #fff;
  margin-top: 30px;
  padding: 0 30px;
  padding-bottom: 30px;
  border-radius: 10px;
  border: 1px solid #efefef;
}

.course_tabs_1 label {
  font-weight: 500;
  font-size: 16px;
  margin-top: 10px !important;
  color: var(--text-black);
  text-align: right;
  display: block;
}

.course_tabs_1 label i {
  margin-left: 10px;
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
.course_tabs_1 select {
  padding: 15px 15px;
  height: auto;
  border-radius: 8px;
  font-weight: 500;
  font-size: 15px;
  border: var(--border);
  width: 90%;
  margin-top: 10px;
}

.course_tabs_1 select:focus {
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
