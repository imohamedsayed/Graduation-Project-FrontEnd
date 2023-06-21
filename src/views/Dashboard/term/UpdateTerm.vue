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
                <i class="fas fa-plus-circle"></i> تعديل الترم رقم : {{ id }}
              </h2>
            </div>
            <div class="col-lg-6">
              <div v-if="state.save" class="alert alert-success" role="alert">
                تم اضافه ترم دراسى بنجاح .
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
                    this.redirectTo({
                      name: 'ShowTerm',
                      params: {},
                    })
                  "
                >
                  عرض الجميع
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
                              <div class="col-lg-6 col-md-12">
                                <div class="ui search focus mt-30 lbel25">
                                  <label
                                    ><i class="fas fa-pencil-alt"></i>تعديل
                                    السنه الدراسيه :</label
                                  >
                                  <select v-model="state.term_value">
                                    <option selected disabled value="">
                                      اختيار من القائمة
                                    </option>
                                    <option value="1" selected>
                                      الترم الدراسي الاول
                                    </option>
                                    <option value="2">
                                      الترم الدراسي الثاني
                                    </option>
                                  </select>
                                </div>
                                <span
                                  class="text-danger fw-bold"
                                  v-if="v$.term_value.$error"
                                >
                                  {{ v$.term_value.$errors[0].$message }}
                                </span>
                              </div>
                              <div class="col-lg-6 col-md-12">
                                <div class="ui search focus mt-30 lbel25">
                                  <label
                                    ><i class="fas fa-pencil-alt"></i>تعديل
                                    الترم الدراسي</label
                                  >
                                  <select v-model="state.year_id" class="">
                                    <option selected disabled value="">
                                      اختيار من القائمة
                                    </option>
                                    <option
                                      v-for="year in state.years_list"
                                      :key="year.id"
                                      :value="year.id"
                                    >
                                      {{ year.year_name }}
                                    </option>
                                  </select>
                                </div>
                                <span
                                  class="text-danger fw-bold"
                                  v-if="v$.year_id.$error"
                                >
                                  {{ v$.year_id.$errors[0].$message }}
                                </span>
                              </div>
                              <div class="col-lg-1 col-md-3">
                                  <div
                                  class="ui mt-3 focus box search d-flex align-items-center just gap-2"
                                  >
                                    <input
                                      type="checkbox"
                                      id="status" class="mb-3" style="width: 30px; height: 30px;"
                                      name=""
                                      v-model="state.status"
                                    />
                                    <label for="status" class="text-muted" style="font-size: 22px;"> متاح </label>
                                </div>
                              </div>
                            </div>
                          </div>
                          <button
                            data-direction="finish"
                            @click="update_semester"
                            class="btn btn-default steps_btn"
                          >
                            حفظ التعديل
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
import { mapActions } from "vuex";

import Toast from "@/components/Toast.vue";
import { reactive, onMounted, computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";

export default {
  props: ["id"],
  name: "UpdateTeachers",
  components: { Footer, AsideBar, Header, Toast },

  setup(props) {
    const state = reactive({
      user: computed(() => store.state.user),
      term_value: "",
      year_id: "",
      years_list: [],
      status: false,
      save: false,
      term: {},
    });

    onMounted(async () => {
      if (state.user == null) {
        router.push("/dashboard/login");
      } else {
        if (state.user.role_id != 3) {
          router.push("/dashboard");
        }
      }

      // get our academicYears
      await axios
        .get("api_dashboard/academicYears")
        .then((res) => {
          state.years_list = res.data.data;
        })
        .catch((error) => {
          console.log(error);
          console.log(error.response.data.message);
        });

      // get  semesters
      await axios
        .get("api_dashboard/semesters/" + props.id)
        .then((res) => {
          state.term = res.data.data;
          state.term_value = state.term.name === "الفصل الدراسى الثانى" ? 2 : 1;
          state.status = state.term.status === 1 ? false : true;
          //console.log(this.term);
        })
        .catch((error) => {
          console.log(error);
          console.log(error.response.data.errors);
        });
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
        term_value: { required },
        status: { required },
        year_id: { required },
      };
    });

    const v$ = useVuelidate(rules, state);

    // add new term

    const update_semester = async () => {
      v$.value.$validate();
      if (!v$.value.$error) {
        let data = {
          name: state.name,
          name: state.term_value,
          status: state.status ? "1" : "0",
          academic_year_id: state.year_id,
        };

        // Start Sending Request

        let res = await axios.post(
          "/api_dashboard/semesters/" + props.id,
          data
        );
        if (res.status == 200) {
          state.save = true;
        }
      } else {
        notification("error", "Missing Data !");
      }
    };

    return { state, v$, update_semester, toast };
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
