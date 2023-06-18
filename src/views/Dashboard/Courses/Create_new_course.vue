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
                <i class="fas fa-plus-circle"></i> انشاء دورة جديدة
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
                  @click="
                    this.redirectTo({
                      name: 'ShowCources',
                      params: {},
                    })
                  "
                >
                  عرض جميع الدورات
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
                      <div class="col-lg-6 col-md-6">
                        <div class="ui mt-30 focus box search">
                          <label>
                            <i class="fas fa-pencil-alt"></i>عنوان الدورة</label
                          >
                          <input
                            type="text"
                            v-model="state.course_title"
                            name=""
                            id=""
                          />
                        </div>
                        <span
                          class="text-danger fw-bold"
                          v-if="v$.course_title.$error"
                        >
                          {{ v$.course_title.$errors[0].$message }}
                        </span>
                      </div>
                      <div class="col-lg-6 col-md-6">
                        <div class="mt-30 box">
                          <label>
                            <i class="fas fa-list"></i> السنه الدراسيه
                          </label>
                          <select
                            class="ui hj145 cntry152"
                            v-model="state.course_year"
                          >
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
                          v-if="v$.course_year.$error"
                        >
                          {{ v$.course_year.$errors[0].$message }}
                        </span>
                      </div>
                      <div class="col-lg-6 col-md-6">
                        <div class="box">
                          <label>
                            <i class="fas fa-list"></i> الترم الدراسي
                          </label>
                          <select class="" v-model="state.course_term">
                            <option selected disabled value="">
                              اختيار من القائمة
                            </option>
                            <option value="1">الاول</option>
                            <option value="2">الثاني</option>
                          </select>
                        </div>
                        <span
                          class="text-danger fw-bold"
                          v-if="v$.course_term.$error"
                        >
                          {{ v$.course_term.$errors[0].$message }}
                        </span>
                      </div>
                      <div class="col-lg-6 col-md-6">
                        <div class="box">
                          <label id="file" for="file">اضافه صورة </label>
                          <input
                            type="file"
                            class="file"
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
                      <div class="col-lg-6 col-md-6">
                        <div class="box pt-2">
                          <div class="status mt-30 focus box search">
                            <div
                              class="statusbg d-flex align-items-center gap-4 px-1 mt-4"
                            >
                              <input
                                type="checkbox"
                                name=""
                                v-model="state.status"
                              />
                              <label class="pt-4"> متاح </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br />
                  <button
                    @click="addCourse()"
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
import { mapActions } from "vuex";

import Toast from "@/components/Toast.vue";
import { reactive, onMounted, computed } from "vue";
import { useStore } from "vuex";
import { useVuelidate } from "@vuelidate/core";
import { required, minLength } from "@vuelidate/validators";

export default {
  name: "CreateCourse",
  components: { Footer, AsideBar, Header, Toast },
  setup() {
    const state = reactive({
      user: computed(() => store.state.user),
      course_title: "",
      course_year: "",
      course_term: "",
      avatar: "",
      years_list: [],
      status: false,
      save: false,
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
          // console.log(state.years_list);
        })
        .catch((error) => {
          console.log(error);
          console.log(error.response.data.message);
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

    // validations

    const rules = computed(() => {
      return {
        course_title: { required },
        course_year: { required },
        course_term: { required },
        avatar: { required },
      };
    });

    const v$ = useVuelidate(rules, state);

    // add new course

    const addCourse = async () => {
      v$.value.$validate();
      if (!v$.value.$error) {
        let data = {
          name: state.course_title,
          academic_year_id: state.course_year,
          semester_id: state.course_term,
          image: state.avatar,
          status: state.status ? 1 : 0,
          // branch_id: state.user.exter_info.branch_id,
        };
        // Start Sending Request

        console.log(data);

        let res = await axios
          .post("/api_dashboard/subjects", data, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then()
          .catch((err) => {
            console.log(err.response.data.message);
          });

        // if(res.status == 200) {
        //   state.save = true;
        // }
      } else {
        notification("error", "Missing Data !");
      }
    };

    return { state, v$, addCourse, toast };
  },
  methods: {
    ...mapActions(["redirectTo"]),
  },
};
</script>

<style lang="scss" scoped>
.new-course {
  margin-right: 14rem;

  @media (max-width: 991px) {
    margin-right: 0;
  }
}

.cover {
  padding: 30px 20px;
  width: 100%;

  .st_title {
    margin-bottom: 8px;
    color: var(--text-black);
    font-size: 20px;

    i {
      color: var(--darker-blue) !important;
      margin-left: 10px;
    }
  }

  .bg {
    background: #fff;
    margin-top: 30px;
    padding: 0 30px;
    padding-bottom: 30px;
    border-radius: 10px;
    border: 1px solid #efefef;
  }

  label {
    font-weight: 500;
    font-size: 15px !important;
    margin-bottom: 10px !important;
    color: var(--text-black);
    text-align: right;
    display: block;

    i {
      color: var(--darker-blue) !important;
      margin-left: 10px;
    }
  }

  input,
  textarea,
  select {
    padding: 15px 15px;
    height: auto;
    border-radius: 8px;
    font-weight: 500;
    font-size: 15px;
    border: var(--border);
    width: 100%;
    margin-top: 10px;

    &:focus {
      outline: none;
    }
  }

  textarea {
    height: 150px;
  }

  .form_content {
    .box {
      margin-top: 30px;
      position: relative;
    }
  }

  .view_info {
    display: block;
    width: 100%;
    float: right;
    padding: 30px 30px 0;

    .left {
      float: left;
      width: 40%;

      .view_img {
        img {
          width: 100%;
          border-radius: 10px;
        }
      }

      @media (max-width: 991px) {
        width: 100%;
      }
    }

    .right {
      float: right;
      width: 50%;
      margin-left: 30px;

      p {
        font-size: 14px;
        font-weight: 400;
        color: #686f7a;
        line-height: 26px;
        text-align: right;
        margin-bottom: 20px;
      }

      .upload_input {
        width: 100% !important;
        padding: 10px;
      }

      @media (max-width: 991px) {
        width: 100%;
        margin-top: 30px;
      }
    }
  }

  .course_price {
    float: right;
    width: 100%;
    margin-top: 50px;
    padding: 40px 30px 0;
    border-top: 1px solid #efefef;
  }

  .price {
    > span {
      width: 100%;
      display: block;
      text-align: center;
      padding: 10px;
      background: var(--darker-blue);
      color: white;
      border-radius: 10px;
      font-size: 12pt;
      margin-top: 15px;
    }
  }

  .steps_btn {
    color: var(--white-color);
    margin: 25px 25px;
    float: right;
    padding: 10px 50px !important;
    margin-bottom: 0;
    margin-top: 50px;
    font-size: 12pt !important;
    height: auto !important;
    background: var(--light-blue) !important;
    font-family: "Cairo", sans-serif !important;
    font-weight: 700 !important;

    &:hover {
      background: var(--light-blue) !important;
      color: var(--white-color);
    }
  }

  .upload_input {
    input {
      margin: 0 -50px !important;
    }
  }
}
.status {
  .statusbg {
    background-color: #efefef;
    border-radius: 10px;
    // width: calc(100% - 20px);
  }

  input {
    // width: auto !important;
    height: 20px !important;
    width: 20px !important;
    margin-top: 20px !important;
    // padding:20px 10px !important;
  }
}
</style>
