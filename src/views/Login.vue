<template>
  <div class="login-user-page">
    <img src="../../public/images/logo/logo_01.png" class="img-logo" alt="" />
    <div class="login-form">
      <h1 class="text-center">مرحبا بعودتك</h1>
      <p class="text-center">تابع رحلة التعلم من خلال تسجيل الدخول الي حسابك</p>
      <form @submit.prevent="login" dir="rtl" class="mt-5 mb-5">
        <div class="input-container d-flex align-items-center">
          <span class="form-icon"><i class="fa-solid fa-envelope"></i></span>
          <input
            type="text"
            placeholder=" البريد الالكتروني"
            v-model="state.email"
          />
        </div>
        <span class="text-danger fw-bold" v-if="v$.email.$error">
          {{ v$.email.$errors[0].$message }}
        </span>
        <div class="input-container d-flex align-items-center">
          <span
            class="form-icon"
            @click="state.passwordVisibility = !state.passwordVisibility"
            ><i class="fa-solid fa-lock" v-if="!state.passwordVisibility"> </i
            ><i
              class="fa-solid fa-lock-open"
              v-if="state.passwordVisibility"
            ></i
          ></span>
          <input
            :type="state.passwordVisibility ? 'text' : 'password'"
            v-model="state.password"
            placeholder="كلمة المرور"
          />
        </div>
        <span class="text-danger fw-bold" v-if="v$.password.$error">
          {{ v$.password.$errors[0].$message }}
        </span>
        <router-link :to="{ name: 'ForgetPassword' }">
          <span class="Forget d-md-block d-none"> نسيت كلمه السر ? </span>
        </router-link>
        <button class="btn">الدخول</button>
        <div class="remember-me d-flex align-items-center gap-2 px-1 mt-3">
          <input type="checkbox" name="rememberMe" />
          <label>تذكرني المرة القادمة</label>
        </div>
      </form>
      <div class="already-have-account mt-3">
        <p>
          ليس لديك حساب ؟
          <router-link to="signup" href="#">انشاء حساب</router-link>
        </p>
      </div>
    </div>
    <div class="copyrights d-flex align-items-center">
      <img
        src="../../public/images/logo/logo_01.png"
        class="img-fluid"
        alt=""
      />
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
import { computed, onMounted, reactive } from "vue";

//import router and vuex

import { useStore } from "vuex";
import { useRouter } from "vue-router";

// import validations tools

import { useVuelidate } from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";

// import Notification Toaster

import Toast from "@/components/Toast.vue";

import SpinnerLoading from "../components/SpinnerLoading.vue";

export default {
  setup() {
    // Declaring Variables
    const state = reactive({
      email: "",
      password: "",
      passwordVisibility: false,
      loading: false,
    });

    const toast = reactive({
      showNotification: false,
      theme: "",
      notify: "",
    });
    const store = useStore();

    onMounted(() => {
      if (store.state.student != null) {
        this.$router.push("/Website/chooseBranch");
      }
    });

    // Store and router
    const router = useRouter();
    // Handle login
    // validations
    const rules = computed(() => {
      return {
        email: { email, required },
        password: { required, minLength: minLength(6) },
      };
    });
    const v$ = useVuelidate(rules, state);

    // notify

    const notification = (theme, message) => {
      toast.theme = theme;
      toast.notify = message;
      toast.showNotification = true;
      setTimeout(() => {
        toast.showNotification = false;
      }, 2000);
    };

    // login action

    const login = async () => {
      v$.value.$validate();
      if (!v$.value.$error) {
        state.loading = true;
        try {
          await store.dispatch("StudentLogin", {
            email: state.email,
            password: state.password,
          });
          router.push("/Website/chooseBranch/");
        } catch (err) {
          notification("error", err.response.data.error);
          state.loading = false;
        }
      } else {
        notification("error", "User Data Is Not Valid .. ");
        state.loading = false;
      }
    };
    return { state, login, v$, toast };
  },
  components: { Toast, SpinnerLoading },
};
</script>

<style lang="scss">
.login-user-page {
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

  .login-form {
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

    p {
      font-size: 1.2rem;
      font-weight: 600;
      color: #333;
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
