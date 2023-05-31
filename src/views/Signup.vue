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
              <input type="text" v-model="state.FirstName" />
              <span class="text-danger fw-bold" v-if="v$.FirstName.$error"> {{ v$.FirstName.$errors[0].$message }} </span>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="ui search focus mt-30 lbel25">
              <label> اسم الثاني</label>
              <input type="text" v-model="state.SecondName" />
              <span class="text-danger fw-bold" v-if="v$.SecondName.$error"> {{ v$.SecondName.$errors[0].$message }}
              </span>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="ui search focus mt-30 lbel25">
              <label> الاسم الاخير</label>
              <input type="text" v-model="state.lastName" />
              <span class="text-danger fw-bold" v-if="v$.lastName.$error"> {{ v$.lastName.$errors[0].$message }} </span>
            </div>
          </div>
          <div class="col-lg-6 col-md-6">
            <div class="ui search focus mt-30 lbel25">
              <label>البريد الالكتروني</label>
              <input type="email" v-model="state.email" />
              <span class="text-danger fw-bold" v-if="v$.email.$error"> {{ v$.email.$errors[0].$message }} </span>
            </div>
          </div>
          <div class="col-lg-6 col-md-6">
            <div class="ui search focus mt-30 lbel25">
              <label>رقم الهاتف المحمول</label>
              <input type="phone" v-model="state.phone" />
              <span class="text-danger fw-bold" v-if="v$.phone.$error"> {{ v$.phone.$errors[0].$message }} </span>
            </div>
          </div>
          <div class="col-lg-6 col-md-6">
            <div class="ui search focus mt-30 lbel25">
              <label>كلمه المرور</label>
              <input type="password" v-model="state.pass" />
              <span class="text-danger fw-bold" v-if="v$.pass.$error"> {{ v$.pass.$errors[0].$message }} </span>
            </div>
          </div>
          <div class="col-lg-6 col-md-6">
            <div class="ui search focus mt-30 lbel25">
              <label>تاكيد كلمه المرور</label>
              <input type="password" v-model="state.pass2"
                @input="(e)=>{
                e.target.value!=state.pass?
                  state.equalpass=true
                :
                  state.equalpass = false
              }" />
              <span class="text-danger fw-bold" v-if="v$.pass2.$error"> {{ v$.pass2.$errors[0].$message }} </span>
                <span class="text-danger fw-bold" v-if="state.equalpass">Password doesn't match</span>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="    ">
              <label>الصف الدراسي</label>
              <select class=" " v-model="state.Class">
                <option selected disabled value="">اختيار من القائمة</option>
                <option value="1">الصف الاول الثانوى</option>
                <option value="2">الصف الثاني الثانوى</option>
                <option value="3">الصف الثالث الثانوى</option>
              </select>
              <span class="text-danger fw-bold" v-if="v$.Class.$error"> {{ v$.Class.$errors[0].$message }} </span>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="    ">
              <label>الشعبه</label>
              <select class=" " v-model="state.section">
                <option selected disabled value="">اختيار من القائمة</option>
                <option value="1">عام</option>
                <option value="2">علمى</option>
                <option value="3">ادبى</option>
                <option value="4">علمى رياضة</option>
                <option value="5">علمى علوم</option>
              </select>
              <span class="text-danger fw-bold" v-if="v$.section.$error"> {{ v$.section.$errors[0].$message }} </span>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="">
              <label>المحافظه</label>
              <select class=" " v-model="state.Governorate">
                <option selected disabled value="">اختيار من القائمة</option>
                <option v-for="govr in state.govenorate" :key="govr.id" :value="govr.id"> {{ govr.name }} </option>
              </select>
              <span class="text-danger fw-bold" v-if="v$.Governorate.$error"> {{ v$.Governorate.$errors[0].$message }}
              </span>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="ui search focus mt-30 lbel25">
              <label>رقم ولي الامر</label>
              
              <input type="phone" v-model="state.DadNumber"
              @input="(e) => {
                  e.target.value == state.phone ?
                    state.equalphone = true
                    :
                    state.equalphone = false
                }" />
              <span class="text-danger fw-bold" v-if="v$.DadNumber.$error"> {{ v$.DadNumber.$errors[0].$message }} </span>
                <span class="text-danger fw-bold" v-if="state.equalphone">Guardian number mustn't  match your phone number </span>
              </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="ui search focus mt-30 lbel25">
              <label>تاريخ الميلاد : السنه</label>
              <input type="number" placeholder="السنه" v-model="state.year" />
              <span class="text-danger fw-bold" v-if="v$.year.$error"> {{ v$.year.$errors[0].$message }} </span>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="">
              <label style="display: hidden">الشهر</label>
              <select name="" v-model="state.month"  id="">
                <option selected disabled value="">اختيار الشهر</option>
                <option  v-for="(number, index) in state.month_list" :key="index" :value="number" >
                    {{ number }}
                </option>
              </select>
              <span class="text-danger fw-bold" v-if="v$.month.$error"> {{ v$.month.$errors[0].$message }} </span>
            </div>
          </div>
          <div class="col-lg-2 col-md-6">
            <div class="">
              <label>اليوم</label>
              <select name="" v-model="state.day"  id="">
                  <option selected disabled value=""> اليوم </option>
                  <option  v-for="(number, index) in state.day_list" :key="index" :value="number" >
                      {{ number }}
                  </option>
                </select>
              <span class="text-danger fw-bold" v-if="v$.day.$error"> {{ v$.day.$errors[0].$message }} </span>
            </div>
          </div>
          <div class="col-lg-12 col-md-12">
            <div class="ui search focus mt-30 lbel25">
              <input type="file" class="file" @change="(e) => {
                state.avatar = e.target.files[0];
              }
                " />
              <label id="file" for="file">صوره البطاقه او شهاده الميلاد <i
                  class="fa-solid fa-cloud-arrow-down"></i></label>
              <span class="text-danger fw-bold" v-if="v$.avatar.$error"> {{ v$.avatar.$errors[0].$message }} </span>
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
  <SpinnerLoading :loading="state.loading" />
  <teleport to="body">
    <Toast :theme="toast.theme" :showNotification="toast.showNotification">
      <p>{{ toast.notify }}</p>
    </Toast>
  </teleport>
</template>

<script>
import axios from "axios";
import { computed,onMounted,reactive } from "vue";

//import router and vuex

import { useStore } from "vuex";
import { useRouter } from "vue-router";

// import validations tools

import { useVuelidate } from "@vuelidate/core";
import { required,email,minLength ,sameAs  ,maxLength } from "@vuelidate/validators";
// import Notification Toaster

import Toast from "@/components/Toast.vue";

import SpinnerLoading from "../components/SpinnerLoading.vue";

export default {
  components: { Toast,SpinnerLoading },
  setup() {
    const state = reactive({
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
      month_list: Array.from({ length: 12 },(_,index) => index + 1),
      day_list: Array.from({ length: 31 },(_,index) => index + 1),
      equalpass:false,
      equalphone: false,
      loading: false,
    });

    const toast = reactive({
      showNotification: false,
      theme: "",
      notify: "",
    });
    const store = useStore();

    onMounted(async () => {
      if(store.state.student != null) {
        router.push("/Website/chooseBranch");
      } else {
        await axios
          .get("/api/govenorate")
          .then((res) => {
            state.govenorate = res.data.data;
          })
          .catch((error) => {
            notification("error",err.response.data.error);
          });
      }
    });

    const router = useRouter();


    const rules = computed(() => {
      return {
        FirstName: { required },
        SecondName: { required },
        lastName: { required },
        email: { email,required },
        phone: {
          required,
          minLength: minLength(11),
          maxLength: maxLength(11),
          
        },
        pass: { required,minLength: minLength(6) },
        pass2: {
          required,minLength: minLength(6),
        },
        Class: { required },
        section: { required },
        Governorate: { required },
        DadNumber: {
          required,
          minLength: minLength(11),
          maxLength: maxLength(11),          
        },
        year: {
          required,
        },
        month: {
          required,
        },
        day: { required },
        avatar: { required },
      };
    });
    const v$ = useVuelidate(rules,state);

    const notification = (theme,message) => {
      toast.theme = theme;
      toast.notify = message;
      toast.showNotification = true;
      setTimeout(() => {
        toast.showNotification = false;
      },2000);
    };


    const register = async () => {
      v$.value.$validate();
      if(!v$.value.$error) {
        state.loading = true;
        let data = new FormData();
        data.append("f_name",state.FirstName);
        data.append("m_name",state.SecondName);
        data.append("l_name",state.lastName);
        data.append("email",state.email);
        data.append("password",state.pass);
        data.append("password_confirmation",state.pass2);
        data.append("phone_number",state.phone);
        data.append("guardian_number",state.DadNumber);
        data.append("year",state.year);
        data.append("month",state.month);
        data.append("day",state.day);
        data.append("acedemic_year",state.Class);
        data.append("division",state.section);
        data.append("governorate_id",state.Governorate);
        data.append("national_id_card",state.avatar);
        try {
          await store.dispatch("studentSignup",data);
          router.push("/Website/chooseBranch");
        } catch(err) {
          notification("error",err.response.data.error);
          console.log(err);
          state.loading = false;
        }
      }
      else {
        notification("error","User Data Is Not Valid .. ");
        state.loading = false;
      }
    };

    return { state,register,v$,toast };
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
