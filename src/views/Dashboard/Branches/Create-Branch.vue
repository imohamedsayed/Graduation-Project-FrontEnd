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
                <i class="fas fa-plus-circle"></i> اضافة فرع جديد
              </h2>
            </div>
            <div class="col-lg-6">
              <div v-if="state.save" class="alert alert-success" role="alert">
                تم اضافه فرع بنجاح .
                <span
                  style="
                     {
                      font-size: 18px;
                      cursor: pointer;
                      display: inline-block;
                      transition: 0.5s a;
                    }
                  "
                  @click="$router.push({ name: 'ShowBranches' })"
                >
                  عرض جميع الفروع
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
                                    ><i class="fas fa-pencil-alt"></i> اسم
                                    الفرع</label
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
                                    ><i class="fas fa-pencil-alt"></i> العنوان
                                    بالتفصيل</label
                                  >
                                  <input type="text" v-model="state.address" />
                                  <span
                                    class="text-danger fw-bold"
                                    v-if="v$.address.$error"
                                  >
                                    {{ v$.address.$errors[0].$message }}
                                  </span>
                                </div>
                              </div>
                              <div class="col-lg-6 col-md-12">
                                <div class="ui search focus mt-30 lbel25">
                                  <label
                                    ><i class="fas fa-pencil-alt"></i> رقم
                                    التلفون</label
                                  >
                                  <input type="text" v-model="state.phone" />
                                  <span
                                    class="text-danger fw-bold"
                                    v-if="v$.phone.$error"
                                  >
                                    {{ v$.phone.$errors[0].$message }}
                                  </span>
                                </div>
                              </div>
                              <div class="col-lg-6 col-md-12">
                                <div class="ui search focus mt-30 lbel25">
                                  <label
                                    ><i class="fas fa-pencil-alt"></i> الخط
                                    الساخن</label
                                  >
                                  <input
                                    type="number"
                                    v-model="state.hotline"
                                  />
                                  <span
                                    class="text-danger fw-bold"
                                    v-if="v$.hotline.$error"
                                  >
                                    {{ v$.hotline.$errors[0].$message }}
                                  </span>
                                </div>
                              </div>
                                <div class="col-lg-6 col-md-12">
                                  <div class="mt-30 box">
                                    <label>
                                      <i class="fas fa-list"></i> المدير
                                    </label>
                                    <select v-model="state.maneger" class="">
                                      <option selected disabled value="">
                                        اختيار من القائمة
                                      </option>
                                      <option
                                        v-for="maneger in state.manegers_list"
                                        :key="maneger.id"
                                        :value="maneger.id"
                                      >
                                        {{ maneger.name }}
                                      </option>
                                    </select>
                                    <span
                                      class="text-danger fw-bold"
                                      v-if="v$.maneger.$error"
                                    >
                                      {{ v$.maneger.$errors[0].$message }}
                                    </span>
                                  </div>
                                </div>
                              <div class="col-lg-12 col-md-12">
                                    <div class="ui search focus mt-30 lbel25 map">
                                      <label
                                        ><i class="fas fa-pencil-alt"></i
                                        >الخريطه</label
                                      >
                                    
                                      <input type="text" v-model="state.map" @change="onInputChange" />
                                      <br><br>
                                      <span
                                        class="text-danger fw-bold"
                                        v-if="v$.map.$error"
                                      >
                                        {{ v$.map.$errors[0].$message }}
                                      </span>
                                    </div>
                                  </div>

                            </div>
                          </div>
                          <button
                            @click="add_Branch"
                            data-direction="finish"
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

import { reactive, computed, onMounted } from "vue";

import { useStore } from "vuex";
import { useRouter } from "vue-router";

import { useVuelidate } from "@vuelidate/core";
import { required, email, sameAs } from "@vuelidate/validators";
import Toast from "@/components/Toast.vue";

export default {
  name: "Create-Branch",
  components: { Footer, AsideBar, Header, Toast },
  setup() {
    const store = useStore();
    const router = useRouter();
    const state = reactive({
      user: computed(() => store.state.user),
      name: "",
      address: "",
      phone: "",
      hotline: "",
      map: "",
      maneger: "",
      manegers_list: {},
      save: false,
    });

    onMounted(async () => {
      if (state.user == null) {
        router.push("/dashboard/login");
      } else {
        if (state.user.role_id != 1) {
          router.push("/dashboard");
        }
      }

      let manegers = await axios
        .get("api_dashboard/head-branch")
        .then((res) => {
          state.manegers_list = res.data.data;
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

    // Validations
    const rules = computed(() => {
      return {
        name: { required },
        address: { required },
        phone: { required },
        hotline: { required },
        map: { required },
        maneger: { required },
      };
    });

    const v$ = useVuelidate(rules, state);

    // Add Branch

    const add_Branch = async () => {
      v$.value.$validate();
      if (!v$.value.$error) {
        let data = {
          name: state.name,
          address: state.address,
          phone_number: state.phone,
          hot_line: state.hotline,
          map_location: state.map,
          user_id: state.maneger,
          status: 1,
        };

        let Branch = await axios
          .post("api_dashboard/branches", data)
          .then((res) => {
            console.log(res.data);
            state.save = true;
          })
          .catch((error) => {
            notification("error", error.response.statusText);
          });
      } else {
        notification("error", "Missing Data !");
      }
    };
    const onInputChange = (e) => {
      let map = document.querySelector(".map")

      map.innerHTML += state.map
      let frame = document.querySelector('iframe');
      frame.width = `100%`
      console.log(frame)
    }
    return { state, v$, toast, add_Branch,onInputChange };
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

