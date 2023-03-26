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
              <div v-if="state.save" class="alert alert-success" role="alert">
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
                <form class="form" @submit.prevent="addSection">
                  <div class="form_content">
                    <div class="row">
                      <div class="col-lg-6 col-md-6">
                        <div class="ui mt-30 focus box search">
                          <label>
                            <i class="fas fa-pencil-alt"></i>اسم الدورة
                          </label>
                          <select v-model="state.course" class="">
                            <option selected disabled value="">
                              اختيار من القائمة
                            </option>
                            <option value="فيزياء" selected>فيزياء</option>
                            <option value="كيمياء">كيمياء</option>
                            <option value="عربي">عربي</option>
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
                            <option value="1 المدرس" selected>4 المدرس</option>
                            <option value="2 المدرس">3 المدرس</option>
                            <option value="3 المدرس">2 المدرس</option>
                            <option value="4 المدرس">1 المدرس</option>
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
                            <option value="true" selected>yes</option>
                            <option value="false">No</option>
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
      course: "",
      tech: "",
      max: "",
      price: "",
      exam: "",
      start: "",
      end: "",
    });

    onMounted(() => {
      if (state.user == null) {
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
    const router = useRouter();

    // validations

    const rules = computed(() => {
      return {
        course: { required },
        tech: { required },
        max: { required },
        price: { required },
        exam: { required },
        start: { required },
        end: { required },
      };
    });

    const v$ = useVuelidate(rules, state);

    // add new section

    const addSection = async () => {
      v$.value.$validate();
      if (!v$.value.$error) {
        try {
          /*
            --------------
                  API CODE HERE ...
            --------------
          */
        } catch (err) {
          notification("error", err.response.statusText);
        }
      } else {
        notification("error", "Missing Data !");
      }
    };

    return { state, v$, addSection, toast };
  },
  // methods: {
  //   ...mapActions(['redirectTo']),
  //   async addsection() {
  //     let section = await axios.post('http://localhost:3000/sections/',
  //       {
  //         course: this.course,
  //         tech: this.tech,
  //         max: this.max,
  //         price: this.price,
  //         exam: false,
  //         start: this.start,
  //         end: this.end,

  //       })
  //     if(section.status==201)
  //     {
  //       this.save = true;
  //     }
  //   }
  // },
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
