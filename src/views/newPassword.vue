<template>
  <div class="new-pass-page">
    <img src="../../public/images/logo/logo_01.png" class="img-logo" alt="" />
    <div class="new-pass-form">
      <h1 class="text-center">تعيين كلمه مرور جديده</h1>
      <form @submit.prevent="restpassword()" dir="rtl" class="mt-5 mb-5">
        <div class="input-container d-flex align-items-center">
          <span class="form-icon" @click="state.passwordVisibility3 = !state.passwordVisibility3">
            <i class="fa-solid fa-lock" v-if="!state.passwordVisibility3">
            </i>
            <i class="fa-solid fa-lock-open" v-if="state.passwordVisibility3">
            </i>
          </span>
          <input :type="state.passwordVisibility3
            ? 'text' : 'password'" placeholder="كلمه سر الحالية" v-model="state.current_password" />
        </div>
        <span class="text-danger fw-bold" v-if="v$.current_password.$error"> {{ v$.current_password.$errors[0].$message }}
        </span>
        <div class="input-container d-flex align-items-center">
          <span class="form-icon" @click="state.passwordVisibility0 = !state.passwordVisibility0">
            <i class="fa-solid fa-lock" v-if="!state.passwordVisibility0">
            </i>
            <i class="fa-solid fa-lock-open" v-if="state.passwordVisibility0">
            </i>
          </span>
          <input :type="state.passwordVisibility0
            ? 'text' : 'password'" placeholder="كلمه سر جديده" v-model="state.password" @input="(e) => {
    e.target.value == state.current_password ?
      state.equalpass = true
      :
      state.equalpass = false
  }" />
        </div>
        <span class="text-danger fw-bold" v-if="v$.password.$error"> {{ v$.password.$errors[0].$message }} </span>
        <span class="text-danger fw-bold" v-if="state.equalpass">Current Password Match The new Password</span>
        <div class="input-container d-flex align-items-center">
          <span class="form-icon" @click="state.passwordVisibility1 = !state.passwordVisibility1"><i
              class="fa-solid fa-lock" v-if="!state.passwordVisibility1"> </i><i class="fa-solid fa-lock-open"
              v-if="state.passwordVisibility1"></i></span>
          <input :type="state.passwordVisibility1 ? 'text' : 'password'" placeholder="تاكيد كلمه السر الجديده"
            v-model="state.password_confirmation" @input="(e) => {
              e.target.value != state.password ?
                state.equalconfirmpass = true
                :
                state.equalconfirmpass = false
            }" />
        </div>
        <span class="text-danger fw-bold" v-if="v$.password_confirmation.$error"> {{
          v$.password_confirmation.$errors[0].$message }} </span>
        <span class="text-danger fw-bold" v-if="state.equalconfirmpass">Password doesn't match</span>
        <button class="btn">تعيين</button>
      </form>
    </div>
    <div class="copyrights d-flex align-items-center">
      <img src="../../public/images/logo/logo_01.png" class="img-fluid" alt="" />
      <p>جميع الحقوق محفوظة <span>2023 &copy;</span></p>
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
import { reactive,onMounted,computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

import Toast from "@/components/Toast.vue";
import { useVuelidate } from "@vuelidate/core";
import {
  required,
  minLength,
} from "@vuelidate/validators";
import SpinnerLoading from "../components/SpinnerLoading.vue";
export default {
  components: { Toast,SpinnerLoading },

  setup() {
    const state = reactive({
      student: computed(() => store.state.student),
      current_password: '',
      password: '',
      password_confirmation: '',
      passwordVisibility0: false,
      passwordVisibility1: false,
      passwordVisibility3: false,
      loading: false,
      equalconfirmpass: false,
      equalpass: false,

    });

    onMounted(async () => {
      if(state.student == null) {
        router.push("/login");
      }
      else {
      }
    });

    //notification
    const toast = reactive({
      showNotification: false,
      theme: "",
      notify: "",
    });

    const notification = (theme,message) => {
      toast.theme = theme;
      toast.notify = message;
      toast.showNotification = true;
      setTimeout(() => {
        toast.showNotification = false;
      },2000);
    };

    // Store and router

    const store = useStore();
    const router = useRouter();

    // validations

    const rules = computed(() => {
      return {
        current_password: { required,minLength: minLength(6) },
        password: { required,minLength: minLength(6) },
        password_confirmation: {
          required,minLength: minLength(6),
        },
      };
    });

    const v$ = useVuelidate(rules,state);

    // Rest Password 

    const restpassword = async () => {

      v$.value.$validate();
      if(!v$.value.$error) {
        state.loading = true;
        let data = new FormData();
        data.append("current_password",state.current_password);
        data.append("password",state.password);
        data.append("password_confirmation",state.password_confirmation);

        console.log(data);
        await axios
          .post("api/password_student",data)
          .then(res => {
            if(res.data.status == 200) {
              notification("success",res.data.message);
              state.loading = false;
              router.push("/profile");
            }
            else {
              notification("error",res.data.message);
              state.loading = false
            }
            console.log(res.data);
          })
          .catch(err => {
            notification("error",err.response.data.error);
            console.log(err.response);
            state.loading = false;
          })
      }
      else {
        notification("error","User Data Is Not Valid .. ");
        state.loading = false;
      }
    };

    return { state,v$,restpassword,toast };
  },
};
</script>

<style lang="scss">
.new-pass-page {
  height: 100vh;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background: url("../../public/images/landing/1.png");
  background-size: cover;

  .img-logo {
    position: fixed;
    top: 15%;
    left: 50%;
    width: 320px;
    transform: translate(-50%, -50%);

    @media (max-width: 375px) {
      top: 4%;
      width: 120px;
    }
  }

  .new-pass-form {
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 720px;
    margin: 100px auto;
    padding: 25px 40px;
    background: #ffffff80;
    border-radius: 15px;

    @media (max-width: 375px) {
      top: 35%;
      width: 120px;
    }

    @media (max-width: 724px) {
      width: 100%;
    }

    form {
      width: 100%;
      box-sizing: border-box;

      .Forget {
        color: var(--bs-link-color);
        font-size: 1.2rem;
        font-weight: 600;

        &:hover {
          opacity: 0.7;
        }
      }

      .form-icon {
        display: grid;
        place-content: center;
        width: 40px;
        background: var(--landing-blue);
        height: 45px;
        color: #fff;
        font-size: 1.3rem;
        cursor: pointer;
      }

      input[type="text"],
      input[type="password"] {
        width: 100%;
        margin: 10px 0;
        height: 45px;
        border: none;
        border-bottom-left-radius: 8px;
        border-top-left-radius: 8px;
        padding-right: 15px;
        font-weight: 700;
        font-size: 1.2rem;
        transition: all 0.3s ease;
        border: 2px solid transparent;

        &:focus {
          outline: none;
          border: 2px solid var(--landing-blue);
        }

        &::placeholder {
          color: #999;
        }
      }

      button {
        width: 100%;
        color: #ffff;
        text-align: center;
        background: var(--landing-blue);
        font-size: 1.3rem;
        margin-top: 20px;
        transition: all 0.3s ease;

        &:hover {
          opacity: 0.9;
        }
      }

      .remember-me {
        input {
          height: 30px;
          width: 30px;
        }

        label {
          font-weight: 500;
          font-size: 18px;
        }
      }
    }
  }

  .copyrights {
    position: fixed;
    bottom: 3%;
    width: 100%;
    justify-content: center;
    gap: 10px;
    align-items: center;

    @media (max-width: 375px) {
      bottom: 0%;

      p {
        font-size: 14px !important;
      }

      img {
        width: 60px;
      }
    }

    p {
      margin: 0;
      font-weight: 600;
      font-size: 20px;
      color: #fff;
    }

    img {
      width: 60px;
    }
  }
}
</style>
