<template>
  <Header />
  <div class="main-view">
    <AsideBar />
    <div class="settings">
      <div class="content">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="title125">
                <div class="titleleft">
                  <div class="ttl121">
                    <nav aria-label="breadcrumb">
                      <ol class="breadcrumb">
                        <li class="breadcrumb-item">
                          <router-link :to="{ name: 'home' }"
                            >الرئيسية
                          </router-link>
                        </li>
                        <li class="breadcrumb-item active" aria-current="page">
                          الاعدادات
                        </li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>
              <div class="title126">
                <img
                  src="../../../../public/images/categories/Right.png"
                  alt=""
                />
                <h2>تعديل البيانات</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="cart">
      <div class="content2">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <form class="form" @submit.prevent="addClassRoom">
                <div class="form_content">
                  <div class="row">
                    <div class="col-lg-6 col-md-6">
                      <div class="ui mt-30 focus box search">
                        <label> الاسم الاول</label>
                        <input
                          type="text"
                          v-model="state.FirstName"
                          name=""
                          id=""
                        />
                        <span class="text-danger fw-bold" v-if="v$.name.$error">
                          {{ v$.name.$errors[0].$message }}
                        </span>
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6">
                      <div class="ui mt-30 focus box search">
                        <label> الاسم الثاني</label>
                        <input
                          type="text"
                          v-model="state.SecondName"
                          name=""
                          id=""
                        />
                        <span class="text-danger fw-bold" v-if="v$.name.$error">
                          {{ v$.name.$errors[0].$message }}
                        </span>
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6">
                      <div class="ui mt-30 focus box search">
                        <label> الاسم الثالت</label>
                        <input
                          type="text"
                          v-model="state.lastName"
                          name=""
                          id=""
                        />
                        <span class="text-danger fw-bold" v-if="v$.name.$error">
                          {{ v$.name.$errors[0].$message }}
                        </span>
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6">
                      <div class="ui mt-30 focus box search">
                        <label> الايميل</label>
                        <input type="email" v-model="state.email" />
                        <span class="text-danger fw-bold" v-if="v$.name.$error">
                          {{ v$.name.$errors[0].$message }}
                        </span>
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6">
                      <div class="ui mt-30 focus box search">
                        <label> رقم التلفون</label>
                        <input type="number" v-model="state.phone" />
                        <span class="text-danger fw-bold" v-if="v$.name.$error">
                          {{ v$.name.$errors[0].$message }}
                        </span>
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6">
                      <div class="ui mt-30 focus box search">
                        <label> كلمه السر</label>
                        <input type="password" v-model="state.pass" />
                        <span class="text-danger fw-bold" v-if="v$.name.$error">
                          {{ v$.name.$errors[0].$message }}
                        </span>
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6">
                      <div class="ui mt-30 focus box search">
                        <label> تاكيد كلمه السر</label>
                        <input
                          type="password"
                          v-model="state.pass2"
                          @input="
                            (e) => {
                              e.target.value != state.pass
                                ? (state.equalpass = true)
                                : (state.equalpass = false);
                            }
                          "
                        />
                        <span class="text-danger fw-bold" v-if="v$.name.$error">
                          {{ v$.name.$errors[0].$message }}
                        </span>
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6">
                      <div class="ui mt-30 focus box search">
                        <label>الصف الدراسي</label>
                        <select class=" " v-model="state.Class">
                          <option selected disabled value="">
                            اختيار من القائمة
                          </option>
                          <option value="1">الصف الاول الثانوى</option>
                          <option value="2">الصف الثاني الثانوى</option>
                          <option value="3">الصف الثالث الثانوى</option>
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
                        <label>الشعبه</label>
                        <select class=" " v-model="state.section">
                          <option selected disabled value="">
                            اختيار من القائمة
                          </option>
                          <option value="1">عام</option>
                          <option value="2">علمى</option>
                          <option value="3">ادبى</option>
                          <option value="4">علمى رياضة</option>
                          <option value="5">علمى علوم</option>
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
                        <label>المحافظه</label>
                        <select class=" " v-model="state.Governorate">
                          <option selected disabled value="">
                            اختيار من القائمة
                          </option>
                          <option
                            v-for="govr in state.govenorate"
                            :key="govr.id"
                            :value="govr.id"
                          >
                            {{ govr.name }}
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
                    <div class="col-lg-12 col-md-6">
                      <div class="ui mt-30 focus box search">
                        <label>رقم ولي الامر</label>

                        <input
                          type="phone"
                          v-model="state.DadNumber"
                          @input="
                            (e) => {
                              e.target.value == state.phone
                                ? (state.equalphone = true)
                                : (state.equalphone = false);
                            }
                          "
                        />
                        <span class="text-danger fw-bold" v-if="v$.tech.$error">
                          {{ v$.tech.$errors[0].$message }}
                        </span>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                      <div class="ui mt-30 focus box search">
                        <label>تاريخ الميلاد : السنه</label>
                        <input
                          type="number"
                          placeholder="السنه"
                          v-model="state.year"
                        />
                        <span
                          class="text-danger fw-bold"
                          v-if="v$.price.$error"
                        >
                          {{ v$.price.$errors[0].$message }}
                        </span>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                      <div class="ui mt-30 focus box search">
                        <label style="display: hidden">الشهر</label>
                        <select name="" v-model="state.month" id="">
                          <option selected disabled value="">
                            اختيار الشهر
                          </option>
                          <option
                            v-for="(number, index) in state.month_list"
                            :key="index"
                            :value="number"
                          >
                            {{ number }}
                          </option>
                        </select>
                        <span class="text-danger fw-bold" v-if="v$.max.$error">
                          {{ v$.max.$errors[0].$message }}
                        </span>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                      <div class="ui mt-30 focus box search">
                        <label>اليوم</label>
                        <select name="" v-model="state.day" id="">
                          <option selected disabled value="">اليوم</option>
                          <option
                            v-for="(number, index) in state.day_list"
                            :key="index"
                            :value="number"
                          >
                            {{ number }}
                          </option>
                        </select>
                        <span class="text-danger fw-bold" v-if="v$.exam.$error">
                          {{ v$.exam.$errors[0].$message }}
                        </span>
                      </div>
                    </div>
                    <div class="col-lg-12 col-md-6">
                      <div class="ui mt-30 focus box search">
                        <label>
                          <i class="fa-solid fa-warehouse"></i> صوره البطاقه
                          الشخصيه او شهاده الميلاد
                        </label>
                        <input
                          type="file"
                          class="file"
                          @change="
                            (e) => {
                              state.avatar = e.target.files[0];
                            }
                          "
                        />
                        <span
                          class="text-danger fw-bold"
                          v-if="v$.min_selected.$error"
                        >
                          {{ v$.min_selected.$errors[0].$message }}
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
                  حفظ التعديل
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "../../../components/Footer.vue";
import Header from "../../../components/StudentHeader.vue";
import AsideBar from "@/components/WebsiteAsideBar";
import Toast from "@/components/Toast.vue";

import axios from "axios";
import { reactive, onMounted, computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

import { useVuelidate } from "@vuelidate/core";
import {
  required,
  email,
  minLength,
  sameAs,
  maxLength,
} from "@vuelidate/validators";
import SpinnerLoading from "../../../components/SpinnerLoading.vue";

export default {
  name: "settings",
  components: { Footer, AsideBar, Header, Toast, SpinnerLoading },
  setup() {
    const state = reactive({
      student: computed(() => store.state.student),
      save: false,
      FirstName: "",
      SecondName: "",
      lastName: "",
      email: "",
      phone: "",
      pass: "",
      pass2: "",
      Class: "",
      section: "",
      Governorate: "",
      DadNumber: "",
      year: "",
      month: "",
      day: "",
      avatar: "",
      years_list: [],
      govenorate: [],
      month_list: Array.from({ length: 12 }, (_, index) => index + 1),
      day_list: Array.from({ length: 31 }, (_, index) => index + 1),
      equalpass: false,
      equalphone: false,
      loading: false,
    });

    onMounted(async () => {
      if (state.student == null) {
        router.push("/login");
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
        name: { required },
        course: { required },
        tech: { required },
        max: { required },
        price: { required },
        exam: { required },
        start: { required },
        end: { required },
        min_selected: { required },
        min_grade: { required },
      };
    });

    const v$ = useVuelidate(rules, state);

    // add new class room

    const addClassRoom = async () => {
      v$.value.$validate();
      if (!v$.value.$error) {
        state.end = state.end.replace("T", " ");

        state.start = state.start.replace("T", " ");

        if (state.end.length != 19) {
          state.end += ":00";
        }
        if (state.start.length != 19) {
          state.start += ":00";
        }

        let data = {
          name: state.name,
          price: state.price,
          prerequisite_exam: state.exam,
          status: String(Number(state.status)),
          registration_deadline: state.end,
          start_date: state.start,
          max_capacity: state.max,
          branch_id: state.user.exter_info.branch_id,
          subject_id: state.course,
          teacher_id: state.tech,
          min_grade: state.min_grade,
          min_selected: state.min_selected,
        };
        console.log(data);

        // Start Sending Request

        let res = await axios.post("/api_dashboard/classRooms", data);

        if (res.status == 200) {
          state.save = true;
        }
      } else {
        notification("error", "Missing Data !");
      }
    };

    return { state, v$, addClassRoom, toast };
  },
};
</script>

<style lang="scss" scoped>
.settings,
.cart {
  margin-right: 14rem;

  @media (max-width: 991px) {
    margin-right: 0;
  }
}
.content {
  direction: rtl;
  padding: 30px 20px;
  width: 100%;
}
.content2 {
  background-color: #fff;
  direction: rtl;
  padding: 30px 10px;
  width: 100%;
}
.title125 {
  width: 100%;
  float: left;
}

.titleleft {
  float: right;
}

.titleright {
  float: left;
}

.ttl121 .breadcrumb {
  padding: 0 !important;
  direction: rtl;
}
.ttl121 .breadcrumb-item {
  font-size: 20px;
  font-weight: 400;
  color: #333;
  font-family: "Roboto", sans-serif;
  line-height: 24px;
}
.ttl121 .breadcrumb-item a {
  color: #333;
}
.breadcrumb-item.active {
  color: #6c757d;
}
.breadcrumb-item + .breadcrumb-item {
  padding-right: 0.5rem;
}
.breadcrumb-item + .breadcrumb-item::before {
  content: "/";
  display: inline-block;
  padding-left: 0.5em;
  color: #6c757d;
  float: right !important;
}
.title126 {
  float: left;
  width: 100%;
  padding-bottom: 20px;
  display: flex;
  align-items: center;
  margin-top: 25px !important;
}
.title126 img {
  width: 35px;
  height: 35px;
  margin: 0 0 0 20px;
}
.title126 h2 {
  font-size: 28px;
  font-weight: bold;
  font-family: "Roboto", sans-serif;
  color: #333;
  text-align: right;
  line-height: 30px;
  margin-top: 10px;
}
.rght1528 {
  position: sticky;
  top: 90px;
}
label:after {
  content: "*";
  color: red;
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
