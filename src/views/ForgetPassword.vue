<template>
  <div class="Forget-pass-page">
    <img src="../../public/images/logo/logo_01.png" class="img-logo" alt="" />
    <div class="Forget-pass-form">
      <h1 class="text-center">نسيت كلمه السر ؟</h1>
      <p class="text-center">
        أدخل بريدك الالكتروني للحصول علي رابط لاعداد كلمه مرور جديده
      </p>
      <form dir="rtl" class="mt-5 mb-5">
        <div class="input-container d-flex align-items-center">
          <span class="form-icon"><i class="fa-solid fa-envelope"></i></span>
          <input
            type="email"
            placeholder="رقم الهاتف أو البريد الالكتروني"
            v-model="ConEmail"
            name="Con-email"
          />
        </div>
        <router-link :to="{ name: 'Verification' }">
          <button class="btn">ارسل لي الرابط</button>
        </router-link>
      </form>
      <div class="already-have-account mt-3">
        <router-link :to="{ name: 'login' }">
          <p>الرجوع الي <a href="#">تسجيل الدخول</a></p>
        </router-link>
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
export default {
  data() {
    return {
      ConEmail: "",
    };
  },
};
</script>

<style lang="scss">
.Forget-pass-page {
  height: 100vh;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background: url("../../public/images/about/wave-haikei.png");
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
  .Forget-pass-form {
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
      input[type="email"] {
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
