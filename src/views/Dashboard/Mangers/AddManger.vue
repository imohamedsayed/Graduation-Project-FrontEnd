<template>
  <Header />
  <div class="main-view">
    <AsideBar />
    <div class="new-course">
      <div class="cover">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <h2 class="st_title">
                <i class="fas fa-plus-circle"></i> اضافه مدير جديد
              </h2>
            </div>
            <div class="col-lg-6">
              <div v-if="save" class="alert alert-success" role="alert"> تم اضافة المدير بنجاح . <span style="{
                    font-size:25px;
                    cursor: pointer;
                    display: inline-block;
                    transition: .5s a,}" @click="
                      this.redirectTo({
                        name: 'Show_mangers',
                        params: {}
                      })"> عرض جميع المديرين </span>
              </div>
            </div>
          </div>
          <div class="bg">
            <div class="row">
              <div class="col-12">
                <div class="form">
                  <div class="form_content">
                    <div class="row">
                      <div class="col-lg-5 col-md-12">
                        <div class="ui mt-30  focus box search">
                          <label>
                            <i class="fas fa-pencil-alt"></i> اسم المدير </label>
                          <input type="text" v-model="name" name="" id="" />
                        </div>
                      </div>
                      <div class="col-1"></div>
                      <div class="col-lg-5 col-md-12">
                        <div class="mt-30  box">
                          <label>
                            <i class="fa-regular fa-envelope"></i> الايميل </label>
                          <input type="email" v-model="email" name="" id="">
                        </div>
                      </div>
                      <div class="col-1"></div>
                      <div class="col-lg-5 col-md-12">
                        <div class="mt-30   box">
                          <label>
                            <i class="fa-sharp fa-solid fa-eye"></i> كلمة المرور </label>
                          <input type="password" v-model="password" name="" id="">
                        </div>
                      </div>
                      <div class="col-1"></div>
                      <div class="col-lg-5 col-md-12">
                        <div class="mt-30   box">
                          <label>
                            <i class="fa-sharp fa-solid fa-eye"></i> تأكيد كلمة المرور </label>
                          <input type="password" v-model="confirm_password" name="" id="">
                        </div>
                      </div>
                      <!-- 
                      <div class="col-lg-5 col-md-12">
                        <div class="mt-30 box ">
                          <label>
                            <i class="fas fa-list"></i> مدير ل 
                          </label>
                          <select class="">
                            <option selected disabled value="">
                              اختيار من القائمة
                            </option>
                            <option value="1">فرع اسيوط </option>
                            <option value="2">فرع القاهرة</option>
                            <option value="3">فرع الاسكندريه </option>
                          </select>
                        </div>
                      </div>
                      -->
                    </div>
                  </div>
                  <br />
                  <button data-direction="finish" class="btn btn-default steps_btn" @click="add_Maneger"> حفظ </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Footer from "../../../components/Footer.vue";
import Header from "../../../components/Header.vue";
import AsideBar from "../../../components/AsideBar.vue";
import axios from "axios";
import { mapActions } from 'vuex';
export default {
  name: "Add_Manger",
  components: { Footer,AsideBar,Header },
  data() {
    return {
      name: "",
      email: "",
      password: "",
      confirm_password: "",
      save: false
    }
  },
  methods: {
    ...mapActions(['redirectTo']),
    async add_Maneger() {
      console.log(this.name);
      let data = {
        name: this.name,
        email: this.email,
        password: this.password,
        password_confirmation: this.confirm_password
      };
      let maneger = await axios.post(
        'api_dashboard/head-branch'
        ,
        data,
      )
        .then((res) => {
          console.log(res.data)
          this.save = true
        })
        .catch(error => {
          console.log(error)
          console.log(error.response.data.errors);
        });
    }
  },
};
</script>

<style lang="scss">
.new-course {
  margin-right: 14rem;

  @media (max-width: 991px) {
    margin-right: 0;
  }
}

</style>
