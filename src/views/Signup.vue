<template>
  <div class="signup">
    <img src="../../public/images/logo/logo_01.png" class="signup-logo" />
    <div class="signup-form">
      <p class="text-center">مرحبا بك في موقع (Edu Center )</p>
      <h4 class="text-center">تنبيه : <span>*</span> تعني ان الحقل مطلوب</h4>
      <form dir="rtl" @submit.prevent="register" class="col-lg-12 col-md-12">
        <div class="row">
          <div class="col-lg-4 col-md-6">
            <div class="ui search focus mt-30 lbel25">
              <label>الاسم الاول</label>
              <input type="text" v-model="FirstName" />
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="ui search focus mt-30 lbel25">
              <label> اسم الثاني</label>
              <input type="text" v-model="SecondName" />
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="ui search focus mt-30 lbel25">
              <label> الاسم الاخير</label>
              <input type="text" v-model="lastName" />
            </div>
          </div>
          <div class="col-lg-6 col-md-6">
            <div class="ui search focus mt-30 lbel25">
              <label>البريد الالكتروني</label>
              <input type="email" v-model="email" />
            </div>
          </div>
          <div class="col-lg-6 col-md-6">
            <div class="ui search focus mt-30 lbel25">
              <label>رقم الهاتف المحمول</label>
              <input type="phone" v-model="phone" />
            </div>
          </div>
          <div class="col-lg-6 col-md-6">
            <div class="ui search focus mt-30 lbel25">
              <label>كلمه المرور</label>
              <input type="password" v-model="pass" />
            </div>
          </div>
          <div class="col-lg-6 col-md-6">
            <div class="ui search focus mt-30 lbel25">
              <label>تاكيد كلمه المرور</label>
              <input type="password" v-model="pass2" />
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="    ">
              <label>الصف الدراسي</label>
              <select class=" " v-model="Class">
                <option selected disabled value="">اختيار من القائمة</option>
                <option value="1">الصف الاول الثانوى</option>
                <option value="2">الصف الثاني الثانوى</option>
                <option value="3">الصف الثالث الثانوى</option>
              </select>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="    ">
              <label>الشعبه</label>
              <select class=" " v-model="section">
                <option selected disabled value="">اختيار من القائمة</option>
                <option value="1">عام</option>
                <option value="2">علمى</option>
                <option value="3">ادبى</option>
                <option value="4">علمى رياضة</option>
                <option value="5">علمى علوم</option>
              </select>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="">
              <label>المحافظه</label>
              <select class=" " v-model="Governorate">
                <option selected disabled value="">اختيار من القائمة</option>
                <option
                  v-for="govr in govenorate"
                  :key="govr.id"
                  :value="govr.id"
                >
                  {{ govr.name }}
                </option>
              </select>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="ui search focus mt-30 lbel25">
              <label>رقم ولي الامر</label>
              <input type="phone" v-model="DadNumber" />
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="ui search focus mt-30 lbel25">
              <label>تاريخ الميلاد : السنه</label>
              <input type="number" placeholder="السنه" v-model="year" />
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="ui search focus mt-30 lbel25">
              <label style="display: hidden">الشهر</label>
              <input type="text" placeholder="الشهر" v-model="month" />
            </div>
          </div>
          <div class="col-lg-2 col-md-6">
            <div class="ui search focus mt-30 lbel25">
              <label>اليوم</label>
              <input type="text" placeholder="اليوم" v-model="day" />
            </div>
          </div>
          <div class="col-lg-12 col-md-12">
            <div class="ui search focus mt-30 lbel25">
              <input
                type="file"
                class="file"
                @change="
                  (e) => {
                    this.avatar = e.target.files[0];
                  }
                "
              />
              <label id="file" for="file"
                >صوره البطاقه او شهاده الميلاد
                <i class="fa-solid fa-cloud-arrow-down"></i
              ></label>
            </div>
          </div>
          <div class="col-lg-12 col-md-12">
            <div class="ui search focus mt-30 lbel25">
              <input type="checkbox" id="accept" name="vehicle1" value="Bike" />
              <label for="accept">اوافق علي الشروط والاحكام</label><br />
            </div>
          </div>
        </div>
        <button class="button" type="submit">تسجيل</button>
      </form>
      <div class="text" style="text-align: center">
        <router-link :to="{ name: 'login' }">
          <small>لدي حساب بالفعل</small>
        </router-link>
      </div>
    </div>
  </div>
  <SpinnerLoading :loading="loading" />
</template>

<script>
import axios from "axios";
import router from "@/router";

import SpinnerLoading from "@/components/SpinnerLoading.vue";
export default {
  components: { SpinnerLoading },
  data() {
    return {
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
      loading: false,
    };
  },
  async mounted() {
    if (this.$store.state.student != null) {
      this.$router.push("/Website/chooseBranch");
    } else {
      await axios
        .get("/api/govenorate")
        .then((res) => {
          this.govenorate = res.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
    }
  },
  methods: {
    async register() {
      this.loading = true;

      console.log(this.Class);
      console.log(this.Class);
      console.log(this.FirstName);
      let data = new FormData();
      data.append("f_name", this.FirstName);
      data.append("m_name", this.SecondName);
      data.append("l_name", this.lastName);
      data.append("email", this.email);
      data.append("password", this.pass);
      data.append("password_confirmation", this.pass2);
      data.append("phone_number", this.phone);
      data.append("guardian_number", this.DadNumber);
      data.append("year", this.year);
      data.append("month", this.month);
      data.append("day", this.day);
      data.append("acedemic_year", this.Class);
      data.append("division", this.section);
      data.append("governorate_id", 1);
      data.append("national_id_card", this.avatar);
      try {
        await this.$store.dispatch("studentSignup", data);
        this.$router.push("/Website/chooseBranch");
      } catch (err) {
        console.log(err);
        this.loading = false;
      }
    },
  },
};
</script>

<style lang="scss">
h4 {
  color: white;
}
h4 span {
  color: red;
}
.signup {
  height: 100vh;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  background: url("../../public/images/landing/1.png");
  background-size: cover;
}

@media (max-width: 768px) {
  .signup {
    height: 180vh;
  }
}

.signup .signup-logo {
  margin: 40px 50% 10px;
  width: 100px;
  transform: translateX(50%);
}

.signup .signup-form {
  position: absolute;
  margin: 0px 50%;
  transform: translate(50%);
  width: 900px;
  padding: 10px 10px;
  background: transparent;
  border-radius: 15px;
  border-width: 5px;
  border-style: solid;
  border-image: linear-gradient(to bottom, #aeabc7, white, #aeabc7) 1;
}

@media (max-width: 375px) {
  .signup {
    top: 0 !important;
    height: 180vh;
  }
  .signup .signup-form {
    width: 120px;
    height: 150vh;
  }
}

@media (max-width: 724px) {
  .signup .signup-form {
    width: 100%;
  }
}
@media (min-width: 768px) and (max-width: 991px) {
  .signup {
    height: 115vh;
  }
  .signup .signup-form {
    width: 800px;
  }
}
.signup .signup-form p {
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
}

.signup .signup-form form {
  width: 100%;
}

.signup .signup-form form input[type="text"],
.signup .signup-form form input[type="number"],
.signup .signup-form form input[type="email"],
.signup .signup-form form input[type="phone"],
.signup .signup-form form input[type="password"],
.signup .signup-form form select,
.signup .signup-form form input[type="date"] {
  width: 100%;
  margin: 5px 0;
  height: 35px;
  border: none;
  border-radius: 8px;
  padding-right: 15px;
  font-weight: 700;
  font-size: 1.3rem;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  background: #eee;
  color: var(--landing-blue);
}

.signup .signup-form form input[type="text"],
.signup .signup-form form input[type="email"],
.signup .signup-form form input[type="phone"],
.signup .signup-form form input[type="password"],
.signup .signup-form form select,
.signup .signup-form form input[type="date"]:focus {
  outline: none;
  border: 2px solid var(--landing-blue);
}

.signup .signup-form form input[type="text"],
.signup .signup-form form input[type="email"],
.signup .signup-form form input[type="phone"],
.signup .signup-form form input[type="password"],
.signup .signup-form form input[type="date"]::placeholder {
  color: var(--landing-blue);
}

.signup .signup-form form input[type="checkbox"] {
  margin: 15px 5px;
  padding: 80px;
}

.signup .signup-form form label {
  color: #eee;
  font-size: 1.3rem;
}
.signup .signup-form form label:after {
  content: "*";
  color: red;
}

.signup .signup-form form .file {
  opacity: 0;
  z-index: 1;
  width: 97%;
  height: 40px;
  position: absolute;
  left: 10px;
  cursor: pointer;
}

.signup .signup-form form #file {
  margin: 10px 0;
  display: block;
  position: relative;
  width: 100%;
  height: 40px;
  border-radius: 15px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #eee;
  font-weight: bold;
  font-size: 20px;
  cursor: pointer;
  color: rgba(0, 0, 0, 0.47);
  transition: transform 0.2s ease-out;
}

.signup .signup-form form #file i {
  margin: 0 7px;
}

.signup .signup-form form .button {
  padding: 8px 70px;
  margin: 0px 50%;
  border: none;
  transform: translate(50%);
  border-radius: 15px;
  background-image: linear-gradient(to right, #6061d7, #9296f0);
  color: #eee;
}

.signup .signup-form form .button:hover {
  background: var(--blue-color);
}

.signup .signup-form small {
  text-align: center !important;
  font-weight: bold;
  color: #eee;
}

.signup .signup-form .text small {
  cursor: pointer;
  margin: 10px 0 0;
}
</style>
