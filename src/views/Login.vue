<template>
  <div class="login-user-page">
    <img src="../../public/images/logo/logo_01.png" class="img-logo" alt="" />
    <div class="login-form">
      <h1 class="text-center">مرحبا بعودتك</h1>
      <p class="text-center">تابع رحلة التعلم من خلال تسجيل الدخول الي حسابك</p>
      <form @submit.prevent="login" dir="rtl" class="mt-5 mb-5">
        <div class="input-container d-flex align-items-center">
          <span class="form-icon"><i class="fa-solid fa-envelope"></i></span>
          <input type="text" placeholder=" البريد الالكتروني"
            v-model="state.mail"
           />
        </div>
        <div class="input-container d-flex align-items-center">
          <span
            class="form-icon"
            @click="state.passwordVisibility = !state.passwordVisibility"
            ><i class="fa-solid fa-lock" v-if="!passwordVisibility"> </i
            ><i class="fa-solid fa-lock-open" v-if="passwordVisibility"></i
          ></span>
          <input
            :type="state.passwordVisibility ? 'text' : 'password'"
            v-model="state.pass"
            placeholder="كلمة المرور"
          />
        </div>
        <router-link :to="{ name: 'ForgetPassword' }">
          <span class="Forget d-md-block d-none">
             نسيت كلمه السر ?
          </span>
        </router-link>
        <button class="btn" >الدخول</button>
        <div class="remember-me d-flex align-items-center gap-2 px-1 mt-3">
          <input type="checkbox" name="rememberMe" />
          <label>تذكرني المرة القادمة</label>
        </div>
      </form>
      <div class="already-have-account mt-3">
        <p>ليس لديك حساب ؟ <a href="#">انشاء حساب</a></p>
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
</template>

<script>
import axios from 'axios';
import {  useRouter } from 'vue-router';
import { reactive } from 'vue';
export default {
  setup() {
    const state = reactive({
      passwordVisibility: false,
      mail: '',
      pass: '',

    });
    const router = useRouter();
    async function login() {
      let data = new FormData;
      data.append('email',state.mail);
      data.append('password',state.pass);
      await axios.post('api/login',data
      )
        .then((res) => {
          console.log(res.data)
          router.push("/Website/chooseBranch/" + res.data.user.id+'/'+res.data.user.name);
        })
        .catch(error => {
          console.log(error)
          console.log(error.response.data.errors);
        });
    };
    return { state,login };
  },
  data() {
    return {
      
      
    };
  },
  methods: {
    // async login() {
    //   let data = new FormData;
    //   data.append('email',this.mail);
    //   data.append('password',this.pass);      
    //   await axios.post('api/login',data
    //   )
    //     .then((res) => {
    //       console.log(res.data)
    //       router.push("/chooseBranch/2");
    //     })
    //     .catch(error => {
    //       console.log(error)
    //       console.log(error.response.data.errors);
    //     });
    // }
  }
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
      .Forget{
      color: var(--bs-link-color);
      font-size: 1.2rem;
      font-weight: 600;
      &:hover{
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
