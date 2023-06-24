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
                <i class="fas fa-plus-circle"></i> تعديل بيانات المساعد :
                {{ state.name }}
              </h2>
            </div>
            <div class="col-lg-6">
              <div
                v-if="state.save"
                class="alert alert-success"
                style="position: fixed; top: 100px; right: 10px; z-index: 1000"
                role="alert"
              >
                تم اضافة مساعد بنجاح .
                <span
                  style="
                     {
                      font-size: 25px;
                      cursor: pointer;
                      display: inline-block;
                      transition: 0.5s a;
                    }
                  "
                  @click="$router.push({ name: 'ShowAssistants' })"
                >
                  عرض جميع المساعدين
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
                                    الاسم</label
                                  >
                                  <input type="text" v-model="state.name" />
                                  <span
                                    class="text-danger fw-bold"
                                    v-if="v$.name.$error"
                                  >
                                    {{ v$.name.$errors[0].$message }}
                                  </span>
                                </div>
                              </div>
                              <div class="col-lg-6 col-md-12">
                                <div class="ui search focus mt-30 lbel25">
                                  <label
                                    ><i class="fas fa-pencil-alt"></i>تعديل
                                    الايميل</label
                                  >
                                  <input type="email" v-model="state.email" />
                                  <span
                                    class="text-danger fw-bold"
                                    v-if="v$.email.$error"
                                  >
                                    {{ v$.email.$errors[0].$message }}
                                  </span>
                                </div>
                              </div>
                              <div class="col-lg-6 col-md-12">
                                <div class="ui search focus mt-30 lbel25">
                                  <label
                                    ><i class="fas fa-pencil-alt"></i> تعديل
                                    الراتب</label
                                  >
                                  <input type="text" v-model="state.salary" />
                                  <span
                                    class="text-danger fw-bold"
                                    v-if="v$.salary.$error"
                                  >
                                    {{ v$.salary.$errors[0].$message }}
                                  </span>
                                </div>
                              </div>
                              <div class="col-lg-6 col-md-12">
                                <div class="ui search focus mt-30 lbel25">
                                  <label
                                    ><i class="fas fa-pencil-alt"></i> تعديل رقم
                                    السر</label
                                  >
                                  <input
                                    type="password"
                                    v-model="state.password"
                                  />
                                  <span
                                    class="text-danger fw-bold"
                                    v-if="v$.password.$error"
                                  >
                                    {{ v$.password.$errors[0].$message }}
                                  </span>
                                </div>
                              </div>
                              <div class="col-lg-6 col-md-12">
                                <div class="ui search focus mt-30 lbel25">
                                  <label
                                    ><i class="fas fa-pencil-alt"></i> تأكيد رقم
                                    السر</label
                                  >
                                  <input
                                    type="password"
                                    v-model="state.confirm_password"
                                  />
                                  <span
                                    class="text-danger fw-bold"
                                    v-if="v$.confirm_password.$error"
                                  >
                                    {{
                                      v$.confirm_password.$errors[0].$message
                                    }}
                                  </span>
                                </div>
                              </div>
                              <div class="col-lg-6 col-md-12">
                                <div class="ui search focus mt-30 lbel25">
                                  <label
                                    ><i class="fas fa-pencil-alt"></i> وقت العمل
                                    من</label
                                  >
                                  <input type="time" v-model="state.from" />
                                  <span
                                    class="text-danger fw-bold"
                                    v-if="v$.from.$error"
                                  >
                                    {{ v$.from.$errors[0].$message }}
                                  </span>
                                </div>
                              </div>
                              <div class="col-lg-6 col-md-12">
                                <div class="ui search focus mt-30 lbel25">
                                  <label
                                    ><i class="fas fa-pencil-alt"></i> وقت العمل
                                    الى</label
                                  >
                                  <input type="time" v-model="state.to" />
                                  <span
                                    class="text-danger fw-bold"
                                    v-if="v$.to.$error"
                                  >
                                    {{ v$.to.$errors[0].$message }}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <button
                            data-direction="finish"
                            class="btn btn-default steps_btn"
                            @click="update_assistant"
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

import { reactive, computed, onMounted } from "vue";

import { useStore } from "vuex";
import { useRouter } from "vue-router";

import { useVuelidate } from "@vuelidate/core";
import { required, email, sameAs } from "@vuelidate/validators";

import Toast from "@/components/Toast.vue";

export default {
  props: {
    id: String,
  },
  name: "Update-assistant",
  components: { Footer, AsideBar, Header, Toast },
  setup(props) {
    const store = useStore(),
      router = useRouter();

    const state = reactive({
      user: computed(() => store.state.user),
      name: "",
      email: "",
      password: "",
      salary: "",
      from: "",
      to: "",
      confirm_password: "",
      save: false,
    });

    onMounted(async () => {
      if (state.user == null) {
        router.push("/dashboard/login");
      } else {
        if (state.user.role_id != 2) {
          router.push("/dashboard");
        }
      }

      await axios
        .get("api_dashboard/assistants/" + props.id)
        .then((res) => {
          state.name = res.data.data.name;
          state.email = res.data.data.email;
          state.salary = res.data.data.exter_info.salary;
          state.from = res.data.data.exter_info.from;
          state.to = res.data.data.exter_info.to;
        })
        .catch((error) => {
          notification("error", error.response.statusText);
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

    const rules = computed(() => {
      return {
        name: { required },
        email: { required, email },
        password: { required },
        salary: { required },
        from: { required },
        to: { required },
        confirm_password: { required, sameAs: sameAs(state.password) },
      };
    });

    const v$ = useVuelidate(rules, state);

    // EDIT Assistant

    const update_assistant = async () => {
      v$.value.$validate();
      if (!v$.value.$error) {
        let data = {
          name: state.name,
          email: state.email,
          password: state.password,
          password_confirmation: state.confirm_password,
          salary: state.salary,
          from: state.from,
          to: state.to,
        };

        let res = await axios
          .post("api_dashboard/assistants/" + props.id, data)
          .then((res) => {
            state.save = true;
          })
          .catch((error) => {
            notification("error", error.response.statusText);
          });
      } else {
        notification("error", "Missing Data !");
      }
    };

    return { state, toast, v$, update_assistant };
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
