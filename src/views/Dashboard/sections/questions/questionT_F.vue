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
                <i class="fas fa-plus-circle"></i> اضافه اختيارات للسوال الصح
                والغلط
              </h2>
              <h5 class="text-danger fw-bold">
                رجاء ملاحظه انه بمجرد اضافة الاختيارات لا يمكن تعديلها لاحقا ***
              </h5>
              <h6 class="text-muted">
                في حالة وجود خطأ يتوجب حذف السؤال ثم اضافته مرة اخري ثم معاودة
                ادخال الاختيارات
              </h6>
            </div>
            <div class="col-lg-6">
              <div v-if="state.save" class="alert alert-success" role="alert">
                تم اضافه الاختيارات للسوال بنجاح<span
                  style="
                     {
                      font-size: 18px;
                      cursor: pointer;
                      display: inline-block;
                      transition: 0.5s a;
                    }
                  "
                  @click="
                    this.redirectTo({
                      name: '',
                      params: {},
                    })
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
                              <div class="col-lg-12 col-md-12">
                                <div class="ui search focus mt-30 lbel25">
                                  <label
                                    ><i class="fas fa-pencil-alt"></i>الاختيار
                                    الاول</label
                                  >
                                  <input
                                    type="text"
                                    disabled
                                    v-model="state.option1"
                                  />
                                  <label class="radio-button">
                                    <input
                                      value="1"
                                      name="example-radio"
                                      type="radio"
                                      v-model="state.is_correct"
                                    />
                                    <span class="radio"></span>
                                  </label>
                                </div>
                                <span
                                  class="text-danger fw-bold"
                                  v-if="v$.option1.$error"
                                >
                                  {{ v$.option1.$errors[0].$message }}
                                </span>
                              </div>
                              <div class="col-lg-12 col-md-12">
                                <div class="ui search focus mt-30 lbel25">
                                  <label
                                    ><i class="fas fa-pencil-alt"></i>الاختيار
                                    الثان</label
                                  >
                                  <input
                                    type="text"
                                    disabled
                                    v-model="state.option2"
                                  />
                                  <label class="radio-button">
                                    <input
                                      value="2"
                                      name="example-radio"
                                      type="radio"
                                      v-model="state.is_correct"
                                    />
                                    <span class="radio"></span>
                                  </label>
                                </div>
                                <span
                                  class="text-danger fw-bold"
                                  v-if="v$.option2.$error"
                                >
                                  {{ v$.option2.$errors[0].$message }}
                                </span>
                              </div>
                            </div>
                          </div>
                          <button
                            data-direction="finish"
                            @click="SaveChanged"
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
import { required, minLength } from "@vuelidate/validators";

export default {
  props: {
    id: String,
    eid: String,
  },
  name: "questionT_F",
  components: { Footer, AsideBar, Header, Toast },

  setup(props) {
    const state = reactive({
      user: computed(() => store.state.user),
      option1: "ًصح",
      option2: "خطأ",
      save: false,
      is_correct: 0,
    });

    onMounted(async () => {
      if (state.user == null) {
        router.push("/dashboard/login");
      } else {
        if (state.user.role_id != 3) {
          router.push("/dashboard");
        }
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
        option1: { required },
        option2: { required },
      };
    });

    const v$ = useVuelidate(rules, state);

    // add new term

    const SaveChanged = async () => {
      v$.value.$validate();
      if (!v$.value.$error && state.is_correct != 0) {
        const data = {
          exam_id: props.eid,
          question_id: props.id,
          option: {
            1: state.option1,
            2: state.option2,
          },
          is_correct: {
            1: state.is_correct == 1 ? 1 : 0,
            2: state.is_correct == 2 ? 1 : 0,
          },
        };

        console.log(data);
        try {
          let res = await axios.post(
            "/api_dashboard/options/" + props.id,
            data
          );

          if (res.status == 200) {
            notification("success", "تم اضافة الاختيارات");
          } else {
            notification("error", "حدث خطأ ما, عاود المحاولة لاحقا");
          }
        } catch (err) {
          notification("error", err.response.data.message);
        }
      } else {
        notification("error", "Missing Data !");
      }
    };

    return { state, v$, SaveChanged, toast };
  },
  methods: {
    ...mapActions(["redirectTo"]),
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
  margin-bottom: 10px !important;
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
  width: 95% !important;
  margin-top: 10px;
}
@media (max-width: 991px) {
  .course_tabs_1 input {
    width: 80% !important;
  }
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
.radio-button {
  display: flex;
  gap: 10px;
  justify-content: center;
  margin: 10px;
  position: relative;
  align-items: center;
  display: inline !important;
}

.radio-button input[type="radio"] {
  position: absolute;
  opacity: 0;
}

.radio {
  position: relative;
  display: inline-block;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 2px solid #ccc;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  transform: translateZ(-25px);
  transition: all 0.3s ease-in-out;
}

.radio::before {
  position: absolute;
  content: "";
  width: 10px;
  height: 10px;
  top: 5px;
  left: 5px;
  border-radius: 50%;
  background-color: var(--darker-blue) !important;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: all 0.3s ease-in-out;
}

.radio-button input[type="radio"]:checked + .radio {
  border-color: var(--blue-color) !important;
  transform: translateZ(0px);
  background-color: #fff;
}

.radio-button input[type="radio"]:checked + .radio::before {
  opacity: 1;
}
</style>
