<template>
  <div class="account-Ver-page">
    <img src="../../public/images/logo/logo_01.png" class="img-logo" alt="" />
    <div class="account-ver-form">
      <h1 class="text-center">تاكيد الايميل</h1>
      <p class="text-center">
        لقد ارسلنا رمز الي البريد الالكتروني التالي : asameh@gmail.com
      </p>
      <form dir="rtl" class="mt-5 mb-5">
        <div class="four-digits-input">
          <div class="digit-holder">
            <input
              type="number"
              maxlength="1"
              required
              v-model="num1"
              name="num1"
            />
          </div>
          <div class="digit-holder">
            <input
              type="number"
              maxlength="1"
              required
              v-model="num2"
              name="num2"
            />
          </div>
          <div class="digit-holder">
            <input
              type="number"
              maxlength="1"
              required
              v-model="num3"
              name="num3"
            />
          </div>
          <div class="digit-holder">
            <input
              type="number"
              maxlength="1"
              required
              v-model="num4"
              name="num4"
            />
          </div>
        </div>
        <router-link :to="{ name: 'newPassword' }">
          <button class="btn">المتابعه</button>
        </router-link>
      </form>
      <div class="already-have-account mt-3">
        <router-link :to="{ name: 'login' }">
          <p>لم يصلك رمز التحقق؟ <a href="#">اعاده الارسال</a></p>
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
      num1: "",
      num2: "",
      num3: "",
      num4: "",
    };
  },
};
</script>

<style lang="scss">
.account-Ver-page {
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
  .account-ver-form {
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
      .four-digits-input {
        width: 100%;
        margin-bottom: 10px;
        float: right;
      }
      .four-digits-input .digit-holder {
        width: 25%;
        float: left;
        padding: 0px 5px;
        height: 50px;
      }
      .four-digits-input input {
        width: 100%;
        height: 100%;
        border: 1px solid rgba(0, 0, 0, 0.12);
        text-align: center;
        font-size: 18pt !important;
        font-weight: bold !important;
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
