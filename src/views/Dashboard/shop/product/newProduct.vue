<template>
  <Header />
  <div class="main-view">
    <AsideBar />
    <div class="newProduct">
      <div class="sa4d25">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <h2 class="st_title cr_course_title">
                <i class="fas fa-plus-circle"></i> اضافه منتج جديد :
              </h2>
            </div>
            <div class="col-lg-6">
              <div v-if="state.save" class="alert alert-success" role="alert">
                تم اضافه منتج جديد.
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
                    $router.push({
                      name: 'showProducts',
                      params: { category_id: category_id },
                    })
                  "
                >
                  عرض جميع المنتجات</span
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
                                    ><i class="fas fa-pencil-alt"></i>الاسم
                                  </label>
                                  <input type="text" v-model="state.name" />
                                </div>
                                <span
                                  class="text-danger fw-bold"
                                  v-if="v$.name.$error"
                                >
                                  {{ v$.name.$errors[0].$message }}
                                </span>
                              </div>
                              <div class="col-lg-6 col-md-12">
                                <div class="ui mt-30 focus lbel25 search">
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
                              <div class="col-lg-6 col-md-12">
                                <div class="ui mt-30 focus lbel25 search">
                                  <label>
                                    <i class="fa-solid fa-chalkboard-user"></i>
                                    اسم المدرس</label
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
                              <div class="col-lg-6 col-md-12">
                                <div class="ui search focus mt-30 lbel25">
                                  <label
                                    ><i class="fas fa-pencil-alt"></i
                                    >السعر</label
                                  >
                                  <input type="number" v-model="state.price" />
                                </div>
                                <span
                                  class="text-danger fw-bold"
                                  v-if="v$.price.$error"
                                >
                                  {{ v$.price.$errors[0].$message }}
                                </span>
                              </div>
                              <div class="col-lg-6 col-md-12">
                                <div class="ui search focus mt-30 lbel25">
                                  <label
                                    ><i class="fas fa-pencil-alt"></i
                                    >الكميه</label
                                  >
                                  <input
                                    type="number"
                                    v-model="state.quentity"
                                  />
                                </div>
                                <span
                                  class="text-danger fw-bold"
                                  v-if="v$.quentity.$error"
                                >
                                  {{ v$.quentity.$errors[0].$message }}
                                </span>
                              </div>
                              <div class="col-lg-6 col-md-12">
                                <div class="ui search focus mt-30 lbel25">
                                  <label
                                    ><i class="fas fa-pencil-alt"></i>
                                    الوصف</label
                                  >
                                  <input
                                    type="text"
                                    v-model="state.explanation"
                                  />
                                  <span
                                    class="text-danger fw-bold"
                                    v-if="v$.explanation.$error"
                                  >
                                    {{ v$.explanation.$errors[0].$message }}
                                  </span>
                                </div>
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
                                  <span
                                    class="text-danger fw-bold"
                                    v-if="v$.image.$error"
                                  >
                                    {{ v$.image.$errors[0].$message }}
                                  </span>
                                </div>
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
    category_id: String,
  },
  name: "addProduct",
  components: { Footer, AsideBar, Header, Toast },

  setup(props) {
    const state = reactive({
      user: computed(() => store.state.user),
      name: "",
      price: "",
      quentity: "",
      image: "",
      explanation: "",
      save: false,
      course: "",
      tech: "",
      teachers: [],
      subjects: [],
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
        explanation: { required },
        course: { required },
        tech: { required },
        image: { required },
        quentity: { required, decimal },
        price: { required, decimal },
      };
    });

    const v$ = useVuelidate(rules, state);

    onMounted(async () => {
      if (state.user == null || state.user.role_id != 3) {
        router.push("/dashboard/login");
      }

      // get our teachers

      let res = await axios.get("/api_dashboard/teachers");

      if (res.status == 200) {
        state.teachers = res.data.data;
      } else {
      }

      // get our subjects

      let subject_res = await axios.get(
        "/api_dashboard/subjects_get_by_branch_id/" +
          state.user.branch_id_assistant
      );

      if (subject_res.status == 200) {
        state.subjects = subject_res.data.data;
      } else {
      }
    });

    const category_id = props.category_id;

    // add new

    const Save = async () => {
      v$.value.$validate();

      if (!v$.value.$error) {
        let data = {
          name: state.name,
          subject_id: state.course,
          teacher_id: state.tech,
          price: state.price,
          quantity: state.quentity,
          image: state.image,
          description: state.explanation,
          category_id: category_id,
        };
        try {
          let res = await axios.post("api_dashboard/products", data, {
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
          console.log(err.response.data.errors);
          notification("error", err.response.data.message);
        }
      } else {
        notification("error", "البيانات المدخلة ليست مكتملة");
      }
    };

    return { state, v$, Save, toast, category_id };
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

.newProduct {
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
