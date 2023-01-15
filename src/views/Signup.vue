<template>
  <div class="signup">
    <img src="../../public/images/logo/logo_01.png" class="signup-logo" />
    <div class="signup-form">
      <p class="text-center">مرحبا بك في موقع (اسم الموقع)</p>
      <form dir="rtl" class="col-lg-12 col-md-12">
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
            <div class="ui search focus mt-30 lbel25">
              <label>الصف الدراسي</label>
              <input type="text" v-model="Class" />
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="ui search focus mt-30 lbel25">
              <label>الشعبه</label>
              <input type="text" v-model="section" />
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="ui search focus mt-30 lbel25">
              <label>المحافظه</label>
              <input type="text" v-model="Governorate" />
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
              <input type="text" placeholder="السنه" v-model="yaer" />
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
              <input type="file" class="file" />
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
        <button class="button">تسجيل</button>
      </form>
      <div class="text" style="text-align: center">
        <router-link :to="{ name: 'login' }">
          <small>لدي حساب بالفعل</small>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
    };
  },
};
</script>

<style lang="scss">
.signup {
  height: 100vh;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  background: url("../../public/images/landing/1.png");
  background-size: cover;
}
@media (min-width: 768px) and (max-width: 991px) {
  .signup {
    height: 115vh;
  }
}
@media (max-width: 768px) {
  .signup {
    height: 195vh;
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
  width: 800px;
  padding: 10px 10px;
  background: transparent;
  border-radius: 15px;
  border-width: 5px;
  border-style: solid;
  border-image: linear-gradient(to bottom, #aeabc7, white, #aeabc7) 1;
}
@media (max-width: 375px) {
  .signup .signup-form {
    top: 35%;
    width: 120px;
  }
}
@media (max-width: 724px) {
  .signup .signup-form {
    width: 100%;
  }
}
.signup .signup-form p {
  font-size: 1.2rem;
  font-weight: bold;
  color: white;
}
.signup .signup-form form {
  width: 100%;
}
.signup .signup-form form input[type="text"],
.signup .signup-form form input[type="email"],
.signup .signup-form form input[type="phone"],
.signup .signup-form form input[type="password"],
.signup .signup-form form input[type="date"] {
  width: 100%;
  margin: 5px 0;
  height: 35px;
  border: none;
  border-radius: 8px;
  padding-right: 15px;
  font-weight: 700;
  font-size: 1rem;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  background: #eee;
}
.signup .signup-form form input[type="text"],
.signup .signup-form form input[type="email"],
.signup .signup-form form input[type="phone"],
.signup .signup-form form input[type="password"],
.signup .signup-form form input[type="date"]:focus {
  outline: none;
  border: 2px solid var(--landing-blue);
}
.signup .signup-form form input[type="text"],
.signup .signup-form form input[type="email"],
.signup .signup-form form input[type="phone"],
.signup .signup-form form input[type="password"],
.signup .signup-form form input[type="date"]::placeholder {
  color: #999;
}

.signup .signup-form form input[type="checkbox"] {
  margin: 15px 5px;
  padding: 80px;
}
.signup .signup-form form label {
  color: #eee;
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
