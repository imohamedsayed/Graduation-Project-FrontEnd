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
                <i class="fas fa-plus-circle"></i> انشاء دورة جديدة
              </h2>
            </div>
            <div class="col-lg-6">
              <div v-if="save" class="alert alert-success" role="alert"> تم اضافه فصل بنجاح . <span style="{
                        font-size:18px;
                        cursor: pointer;
                        display: inline-block;
                        transition: .5s a,}
                        " @click="
                          this.redirectTo({
                            name: 'ShowCources',
                            params: {}
                          })"> عرض جميع الدورات </span>
              </div>
            </div>
          </div>
          <div class="bg">
            <div class="row">
              <div class="col-12">
                <div class="form">
                  <div class="form_content">
                    <div class="row">
                      <div class="col-lg-6 col-md-6">
                        <div class="ui mt-30 focus box search">
                          <label>
                            <i class="fas fa-pencil-alt"></i>عنوان الدورة</label>
                          <input type="text" v-model="course_title" name="" id="" />
                        </div>
                      </div>
                      <!-- <div class="col-lg-6 col-md-6">
                        <div class="course_des mt-30 box">
                          <label>
                            <i class="far fa-sticky-note"></i> وصف الدورة
                          </label>
                          <textarea
                            id=""
                            placeholder="اكتب وصف المحتوي..."
                            v-model="course_desc"
                          ></textarea>
                        </div>
                      </div> -->
                      <div class="col-lg-6 col-md-6">
                        <div class="mt-30 box">
                          <label>
                            <i class="fas fa-list"></i> السنه الدراسيه </label>
                          <select class="ui hj145 cntry152" v-model="course_year">
                            <option selected disabled value=""> اختيار من القائمة </option>
                            <option v-for="year in years_list" :key="year.id" :value="year.id">{{ year.name }} -{{
                              year.year }} </option>
                          </select>
                        </div>
                      </div>
                      <div class="col-lg-6 col-md-6">
                        <div class="box">
                          <label>
                            <i class="fas fa-list"></i> الترم الدراسي </label>
                          <select class="" v-model="course_term">
                            <option selected disabled value=""> اختيار من القائمة </option>
                            <option value="1">الاول</option>
                            <option value="2">الثاني</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-lg-6 col-md-6 ">
                        <div class="box pt-2 ">
                          <div class="status mt-30 focus box search ">
                            <div class=" statusbg  d-flex align-items-center  gap-4 px-1 mt-4 ">
                              <input type="checkbox" name="" v-model="status" />
                              <label class="pt-4"> متاح </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- <div class="view_info">
                    <div class="left">
                      <div class="view_img">
                        <img
                          src="../../../../public/images/courses/add_img.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div class="right">
                      <h4>صورة الغلاف</h4>
                      <p>
                        قم بتحميل صورة الدورة التدريبية الخاصة بك هنا. يجب أن
                        تفي بمعايير جودة صورة الدورة التدريبية لدي نا حتى يتم
                        قبولها. إرشادات مهمة: 750 × 420 بكسل ؛ .jpg ، .jpeg ،.
                        gif أو png.
                      </p>
                      <div class="upload_input">
                        <input type="file" name="" id=""  />
                      </div>
                    </div>
                  </div> -->
                  <!-- <div class="course_price ">
                    <div class="row">
                      <div class="col-lg-6">
                        <div class="box">
                          <label><i class="fas fa-dollar-sign"></i> السعر</label>
                        </div>
                      </div>
                      <div class="col-lg-9 col-md-4 col-sm-6 col-xs-6 col-6">
                        <input type="number" v-model="course_price" name="" id="" />
                      </div>
                      <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6 col-6 price">
                        <span>EGP</span>
                      </div>
                    </div>
                  </div> -->
                  <br />
                  <button @click="addCourse()" data-direction="finish" class="btn btn-default steps_btn"> حفظ </button>
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
  name: "CreateCourse",
  components: { Footer,AsideBar,Header },
  data() {
    return {
      course_title: '',
      // course_desc: '',
      course_year: '',
      course_term: '',
      course_photo: '',
      years_list: [],
      status: false,
      save:false
      // course_price: null
    };
  },
  async mounted() {
    await axios.get(
      'api_dashboard/academicYears')
      .then((res) => {
        this.years_list = res.data.data;
        console.log(this.years_list);
      })
      .catch(error => {
        console.log(error)
        console.log(error.response.data.message);
      });
  },
  methods: {
    ...mapActions(['redirectTo']),
    async addCourse() {
      let data = {
        name: this.course_title,
        academic_year_id: this.course_year,
        semester_id: this.course_term,
        status: this.status ? '1' : '0',
        // desc: this.course_desc,
        // price: this.course_title,
        // img: this.course_photo,
      }
      await axios.post('api_dashboard/subjects',data)
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

.cover {
  padding: 30px 20px;
  width: 100%;

  .st_title {
    margin-bottom: 8px;
    color: var(--text-black);
    font-size: 20px;

    i {
      color: var(--darker-blue) !important;
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
    font-size: 15px !important;
    margin-bottom: 10px !important;
    color: var(--text-black);
    text-align: right;
    display: block;

    i {
      color: var(--darker-blue) !important;
      margin-left: 10px;
    }
  }

  input,
  textarea,
  select {
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

  textarea {
    height: 150px;
  }

  .form_content {
    .box {
      margin-top: 30px;
      position: relative;
    }
  }

  .view_info {
    display: block;
    width: 100%;
    float: right;
    padding: 30px 30px 0;

    .left {
      float: left;
      width: 40%;

      .view_img {
        img {
          width: 100%;
          border-radius: 10px;
        }
      }

      @media (max-width: 991px) {
        width: 100%;
      }
    }

    .right {
      float: right;
      width: 50%;
      margin-left: 30px;

      p {
        font-size: 14px;
        font-weight: 400;
        color: #686f7a;
        line-height: 26px;
        text-align: right;
        margin-bottom: 20px;
      }

      .upload_input {
        width: 100% !important;
        padding: 10px;
      }

      @media (max-width: 991px) {
        width: 100%;
        margin-top: 30px;
      }
    }
  }

  .course_price {
    float: right;
    width: 100%;
    margin-top: 50px;
    padding: 40px 30px 0;
    border-top: 1px solid #efefef;
  }

  .price {
    >span {
      width: 100%;
      display: block;
      text-align: center;
      padding: 10px;
      background: var(--darker-blue);
      color: white;
      border-radius: 10px;
      font-size: 12pt;
      margin-top: 15px;
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
    background: var(--light-blue) !important;
    font-family: "Cairo", sans-serif !important;
    font-weight: 700 !important;

    &:hover {
      background: var(--light-blue) !important;
      color: var(--white-color);
    }
  }

  .upload_input {
    input {
      margin: 0 -50px !important;
    }
  }
}
</style>
