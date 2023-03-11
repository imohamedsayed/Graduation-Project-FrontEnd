<template>
  <div class="login-user-page">
    <img src="../../public/images/logo/logo_01.png" class="img-logo" alt="" />
    <div class="login-form">
      <h1 class="text-center">مرحبا بعودتك</h1>
      <form dir="rtl" @submit.prevent=" send" class="mt-5 mb-5">
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
import { mapActions } from 'vuex';
export default {
  data() {
    return {
      passwordVisibility: false,
      email: '',
      password:''
    }
  },
  methods: {
    ...mapActions(['redirectTo','user']),
    async send() {
    await axios.post('api_dashboard/auth/login',
        {
          email: this.email,
          password:this.password
        }
      )
      .then((res) => {
          console.log(res.data.user);
          localStorage.setItem('manger',res.data.access_token);
          this.redirectTo(({
            name: 'home',
            params: {}
          })
          );
          this.$store.dispatch('user',res.data.user)
        })
        .catch(error => {
          console.log(error)
          console.log(error.response.data.errors);
        });
    }
  },
}
</script>
<style lang="">
  
</style>