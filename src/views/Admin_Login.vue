<template>
  <div class="login-user-page">
    <img src="../../public/images/logo/logo_01.png" class="img-logo" alt="" />
    <div class="login-form">
      <h1 class="text-center">مرحبا بعودتك</h1>
      <form dir="rtl" @submit.prevent="send" class="mt-5 mb-5">
        <div class="input-container d-flex align-items-center">
          <span class="form-icon"><i class="fa-solid fa-envelope"></i></span>
          <input type="text" v-model="email" placeholder="رقم الهاتف أو البريد الالكتروني" />
        </div>
        <div class="input-container d-flex align-items-center">
          <span class="form-icon" @click="passwordVisibility = !passwordVisibility"><i class="fa-solid fa-lock"
              v-if="!passwordVisibility"> </i><i class="fa-solid fa-lock-open" v-if="passwordVisibility"></i></span>
          <input :type="passwordVisibility ? 'text' : 'password'" v-model="password" placeholder="كلمة المرور" />
        </div>
        <button class="btn">الدخول</button>
        <div class="remember-me d-flex align-items-center gap-2 px-1 mt-3">
          <input type="checkbox" name="rememberMe" />
          <label>تذكرني المرة القادمة</label>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { mapActions,Store } from 'vuex';
export default {

    setup() {
    // Declaring Variables
    const state = reactive({
      email: "",
      password: "",
      passwordVisibility: false,
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
          await store.dispatch("AdminLogin", {
            email: state.email,
            password: state.password,
          });
          router.push("/dashboard");
        } catch (err) {
          notification("error",err);
          console.log(err);
        }
      } else {
        notification("error", "User Data Is Not Valid .. ");
      }
    };
    return { state, login, v$, toast };

  },

}
</script>
<style lang="">
  
</style>