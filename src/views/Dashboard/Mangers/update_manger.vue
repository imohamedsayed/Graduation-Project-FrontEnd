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
                <i class="fas fa-plus-circle"></i> تعديل مدير : {{ name }}
              </h2>
            </div>
            <div class="col-lg-6">
              <div v-if="save" class="alert alert-success" role="alert"> تم تعديل المدير بنجاح . <span style="{
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
                        <div class="ui mt-30 focus box search">
                          <label>
                            <i class="fas fa-pencil-alt"></i> تغير اسم المدير </label>
                          <input type="text" v-model="name" name="" id="" />
                        </div>
                      </div>
                      <div class="col-1"></div>
                      <div class="col-lg-5 col-md-12">
                        <div class="mt-30 box">
                          <label>
                            <i class="fa-regular fa-envelope"></i> تغير الايميل </label>
                          <input type="email" v-model="email" name="" id="" />
                        </div>
                      </div>
                      <div class="col-1"></div>
                      <div class="col-lg-5 col-md-12">
                        <div class="mt-30 box">
                          <label>
                            <i class="fa-sharp fa-solid fa-eye"></i> تغير كلمة المرور </label>
                          <input type="password" v-model="pass" name="" id="" />
                        </div>
                      </div>
                      <div class="col-1"></div>
                      <div class="col-lg-5 col-md-12">
                        <div class="mt-30   box">
                          <label>
                            <i class="fa-sharp fa-solid fa-eye"></i> تأكيد كلمة المرور </label>
                          <input type="password" v-model="confirm_pass" name="" id="">
                        </div>
                      </div>
                      <!-- <div class="col-lg-5 col-md-12">
                        <div class="mt-30 box">
                          <label> <i class="fas fa-list"></i> مدير ل </label>
                          <select class="">
                            <option selected disabled value="">
                              اختيار من القائمة
                            </option>
                            <option value="1">فرع اسيوط</option>
                            <option value="1">فرع القاهرة</option>
                            <option value="1">فرع الاسكندريه</option>
                          </select>
                        </div>
                      </div> -->
                    </div>
                  </div>
                  <br />
                  <button @click="update_manger" data-direction="finish" class="btn btn-default steps_btn"> حفظ </button>
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
import axios from 'axios';
import { mapActions } from 'vuex';
export default {
  name: "Update_Manger",
  components: { Footer,AsideBar,Header },
  props: ["id"],
  data() {
    return {
      name: '',
      email: '',
      pass: '',
      confirm_pass: '',
      save: false
    };
  },
  async mounted() {
    await axios.get(
      'api_dashboard/head-branch/' + this.id)
      .then((res) => {
        this.name = res.data.data.name;
        this.email = res.data.data.email;
      })
      .catch(error => {
        console.log(error)
        console.log(error.response.data.message);
        console.log(error.response.data.errors);
      });
  },
  methods: {
    ...mapActions(['redirectTo']),
    async update_manger() {
      let data = {
        name: this.name,
        email: this.email,
        password: this.pass,
        password_confirmation: this.confirm_pass,
      }
      await axios.post(
        'api_dashboard/head-branch/' + this.id, data,)
        .then((res) => {
          console.log(res.data.data)
          this.save = true
        })
        .catch(error => {
          console.log(error)
          console.log(error.response.data.message);
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

.cover {
  padding: 30px 20px;
  width: 100%;

  .st_title {
    margin-bottom: 8px;
    color: var(--text-black);
    font-size: 20px;

    i {
      color: var(--darker-blue);
      margin-left: 10px;
    }
  }

  .bg {
    background: #fff;
    margin-top: 30px;
    padding: 0 30px;
    padding-bottom: 30px;
    border-radius: 10px;
    border: 1px solid #efefef;
  }

  label {
    font-weight: 500;
    margin-bottom: 10px !important;
    color: var(--text-black);
    text-align: right;
    display: block;

    i {
      color: var(--darker-blue) !important;
      margin-left: 10px;
    }
  }

  input {
    padding: 15px 15px;
    height: auto;
    border-radius: 8px;
    font-weight: 500;
    font-size: 15px;
    border: var(--border);
    width: 100%;
    margin-top: 10px;

    &:focus {
      outline: none;
    }
  }

  .form_content {
    .box {
      margin-top: 30px;
      position: relative;
    }
  }

  .steps_btn {
    color: var(--white-color);
    margin: 25px 25px;
    float: right;
    padding: 10px 50px !important;
    margin-bottom: 0;
    margin-top: 50px;
    font-size: 12pt !important;
    height: auto !important;
    background: var(--darker-blue) !important;
    font-family: "Cairo", sans-serif !important;
    font-weight: 700 !important;
  }
}
</style>
