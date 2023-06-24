<template>
  <div class="login-user-page">
    <img src="../../public/images/logo/logo_01.png" class="img-logo" alt="" />
    <div class="login-form">0
      <h1 class="text-center">مرحبا بعودتك</h1>
      <form dir="rtl" @submit.prevent="login" class="mt-5 mb-5">
        <div class="input-container d-flex align-items-center">
          <span class="form-icon"><i class="fa-solid fa-envelope"></i></span>
          <input
            type="text"
            v-model="state.email"
            placeholder="رقم الهاتف أو البريد الالكتروني"
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
        <button class="btn">الدخول</button>
        <div class="remember-me d-flex align-items-center gap-2 px-1 mt-3">
          <input type="checkbox" name="rememberMe" />
          <label>تذكرني المرة القادمة</label>
        </div>
      </form>
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
import { computed, reactive } from "vue";

//import router and vuex

import { useStore } from "vuex";
import { useRouter } from "vue-router";

// import validations tools

import { useVuelidate } from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";

// import Notification Toaster

import Toast from "@/components/Toast.vue";
import SpinnerLoading from "@/components/SpinnerLoading.vue";

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

    // Store and router
    const store = useStore();
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
        try {
          state.loading = true;
          await store.dispatch("AdminLogin", {
            email: state.email,
            password: state.password,
          });
          router.push("/dashboard");
        } catch (err) {
          notification("error", err);
          state.loading = false;
        }
      } else {
        notification("error", "User Data Is Not Valid .. ");
      }
    };
    return { state, login, v$, toast };
  },
  components: { SpinnerLoading, Toast },
};
</script>
<style lang=""></style>
