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
                <i class="fas fa-plus-circle"></i> اضافه استاذ جديد
              </h2>
            </div>
            <div class="col-lg-6">
              <div v-if="state.save" class="alert alert-success" role="alert">
                تم اضافه مدرس بنجاح .
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
                      name: 'ShowTeachers',
                      params: {},
                    })
                  "
                >
                  عرض جميع المدرسين
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
                              <div class="col-lg-6 col-md-12">
                                <div class="ui search focus mt-30 lbel25">
                                  <label
                                    ><i class="fas fa-pencil-alt"></i
                                    >اللقب</label
                                  >
                                  <input type="text" v-model="state.nickname" />
                                </div>
                                <span
                                  class="text-danger fw-bold"
                                  v-if="v$.nickname.$error"
                                >
                                  {{ v$.nickname.$errors[0].$message }}
                                </span>
                              </div>
                              <div class="col-lg-6 col-md-12">
                                <div class="ui search focus mt-30 lbel25">
                                  <label
                                    ><i class="fas fa-pencil-alt"></i>
                                    الصورة</label
                                  >
                                  <input
                                    type="file"
                                    @change="
                                      (e) => {
                                        state.avatar = e.target.files[0];
                                      }
                                    "
                                  />
                                </div>
                                <span
                                  class="text-danger fw-bold"
                                  v-if="v$.avatar.$error"
                                >
                                  {{ v$.avatar.$errors[0].$message }}
                                </span>
                              </div>
                              <div class="col-lg-6 col-md-12">
                                <div class="ui search focus mt-30 lbel25">
                                  <label
                                    ><i class="fas fa-pencil-alt"></i> رقم
                                    الهاتف</label
                                  >
                                  <input type="text" v-model="state.phone" />
                                </div>
                                <span
                                  class="text-danger fw-bold"
                                  v-if="v$.phone.$error"
                                >
                                  {{ v$.phone.$errors[0].$message }}
                                </span>
                              </div>
                            </div>
                          </div>
                          <button
                            data-direction="finish"
                            @click="addteacher"
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
import Footer from "../../../components/Footer.vue";
import Header from "../../../components/Header.vue";
import AsideBar from "../../../components/AsideBar.vue";
import axios from "axios";
import { mapActions } from "vuex";

import Toast from "@/components/Toast.vue";
import { reactive, onMounted, computed } from "vue";
import { useStore } from "vuex";
import { useVuelidate } from "@vuelidate/core";
import { required, minLength } from "@vuelidate/validators";

export default {
  name: "CreateTeachers",
  components: { Footer, AsideBar, Header, Toast },
  setup() {
    const state = reactive({
      user: computed(() => store.state.user),
      name: "",
      nickname: "",
      phone: "",
      save: false,
      avatar: "",
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
        name: { required },
        nickname: { required },
        phone: { required, minLength: minLength(11) },
        avatar: { required },
      };
    });

    const v$ = useVuelidate(rules, state);

    // add new term

    const addteacher = async () => {
      v$.value.$validate();
      if (!v$.value.$error) {
        let data = new FormData();
        data.append("avatar", state.avatar);
        data.append("name", state.name);
        data.append("nick_name", state.nickname);
        data.append("phone_number", state.phone);

        // Start Sending Request

        let res = await axios.post("/api_dashboard/teachers", data);

        if (res.status == 200) {
          state.save = true;
        }
      } else {
        console.error();
        notification("error", "Missing Data !");
      }
    };

    return { state, v$, addteacher, toast };
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
