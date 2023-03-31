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
                <i class="fas fa-plus-circle"></i> اضافه مدير جديد
              </h2>
            </div>
            <div class="col-lg-6">
              <div v-if="state.save" class="alert alert-success" role="alert">
                تم اضافة المدير بنجاح .
                <span
                  style="
                     {
                      font-size: 25px;
                      cursor: pointer;
                      display: inline-block;
                      transition: 0.5s a;
                    }
                  "
                  @click="$router.push({ name: 'Show_mangers' })"
                >
                  عرض جميع المديرين
                </span>
              </div>
            </div>
          </div>
          <div class="bg">
            <div class="row">
              <div class="col-12">
                <div class="form">
                  <div class="form_content">
                    <div class="row">
                      <div class="col-lg-5 col-md-12">
                        <div class="ui mt-30 focus box search">
                          <label>
                            <i class="fas fa-pencil-alt"></i> اسم المدير
                          </label>
                          <input type="text" v-model="state.name" name="" />
                          <span
                            class="text-danger fw-bold"
                            v-if="v$.name.$error"
                          >
                            {{ v$.name.$errors[0].$message }}
                          </span>
                        </div>
                      </div>
                      <div class="col-1"></div>
                      <div class="col-lg-5 col-md-12">
                        <div class="mt-30 box">
                          <label>
                            <i class="fa-regular fa-envelope"></i> الايميل
                          </label>
                          <input type="email" v-model="state.email" name="" />
                          <span
                            class="text-danger fw-bold"
                            v-if="v$.email.$error"
                          >
                            {{ v$.email.$errors[0].$message }}
                          </span>
                        </div>
                      </div>
                      <div class="col-1"></div>
                      <div class="col-lg-5 col-md-12">
                        <div class="mt-30 box">
                          <label>
                            <i class="fa-sharp fa-solid fa-eye"></i> كلمة المرور
                          </label>
                          <input
                            type="password"
                            v-model="state.password"
                            name=""
                          />
                          <span
                            class="text-danger fw-bold"
                            v-if="v$.password.$error"
                          >
                            {{ v$.password.$errors[0].$message }}
                          </span>
                        </div>
                      </div>
                      <div class="col-1"></div>
                      <div class="col-lg-5 col-md-12">
                        <div class="mt-30 box">
                          <label>
                            <i class="fa-sharp fa-solid fa-eye"></i> تأكيد كلمة
                            المرور
                          </label>
                          <input
                            type="password"
                            v-model="state.confirm_password"
                            name=""
                          />
                          <span
                            class="text-danger fw-bold"
                            v-if="v$.confirm_password.$error"
                          >
                            {{ v$.confirm_password.$errors[0].$message }}
                          </span>
                        </div>
                      </div>
                      <!-- 
                      <div class="col-lg-5 col-md-12">
                        <div class="mt-30 box ">
                          <label>
                            <i class="fas fa-list"></i> مدير ل 
                          </label>
                          <select class="">
                            <option selected disabled value="">
                              اختيار من القائمة
                            </option>
                            <option value="1">فرع اسيوط </option>
                            <option value="2">فرع القاهرة</option>
                            <option value="3">فرع الاسكندريه </option>
                          </select>
                        </div>
                      </div>
                      -->
                    </div>
                  </div>
                  <br />
                  <button
                    data-direction="finish"
                    class="btn btn-default steps_btn"
                    @click="add_Manager"
                  >
                    حفظ
                  </button>
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
  name: "Add_Manger",
  components: { Footer, AsideBar, Header, Toast },
  setup() {
    const store = useStore();
    const router = useRouter();
    const state = reactive({
      user: computed(() => store.state.user),
      name: "",
      email: "",
      password: "",
      confirm_password: "",
      save: false,
    });
    onMounted(() => {
      if (state.user == null) {
        router.push("/dashboard/login");
      } else {
        if (state.user.role_id != 1) {
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

    const rules = computed(() => {
      return {
        name: { required },
        email: { required, email },
        password: { required },
        confirm_password: { required, sameAs: sameAs(state.password) },
      };
    });

    const v$ = useVuelidate(rules, state);

    const add_Manager = async () => {
      v$.value.$validate();
      if (!v$.value.$error) {
        let data = {
          name: state.name,
          email: state.email,
          password: state.password,
          password_confirmation: state.confirm_password,
        };

        let res = await axios
          .post("api_dashboard/head-branch", data)
          .then((res) => {
            console.log(res.data);
            state.save = true;
          })
          .catch((error) => {
            notification("error", error.response.data.errors);
          });
      } else {
        notification("error", "Missing Data !");
      }
    };

    return { state, toast, v$, add_Manager };
  },
};
</script>

<style lang="scss">
.new-course {
  margin-right: 14rem;

  @media (max-width: 991px) {
    margin-right: 0;
  }
}
</style>
