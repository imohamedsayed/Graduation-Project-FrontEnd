<template>
  <Header />
  <div class="main-view">
    <AsideBar />
    <div class="EditeCourse">
      <div class="cover">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <h2 class="st_title">
                <i class="fas fa-plus-circle"></i> تعديل دورة : {{ course.name }}
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
                            <i class="fas fa-pencil-alt"></i>تغير عنوان الدورة</label>
                          <input type="text" v-model="course.name" name="" id="" />
                        </div>
                      </div>
                      <!-- <div class="col-lg-6 col-md-6">
                        <div class="course_des mt-30 box">
                          <label>
                          <i class="far fa-sticky-note"></i> تغير وصف الدورة </label>
                          <textarea id="" v-model="course.desc" placeholder="اكتب وصف المحتوي..."></textarea>
                        </div>
                        
                      </div> -->
                      <div class="col-lg-6 col-md-12">
                        <div class="mt-30 box">
                          <label>
                            <i class="fas fa-list"></i>تغير السنه الدراسيه </label>
                          <select v-model="course.academic_year_id">
                            <option selected disabled value=""> اختيار من القائمة </option>
                            <option v-for="year in years_list" :key="year.id" :value="year.id">{{ year.name }} -{{
                              year.year }} </option>
                          </select>
                        </div>
                      </div>
                      <div class="col-lg-6 col-md-12">
                        <div class="box">
                          <label>
                            <i class="fas fa-list"></i>تغير الترم الدراسي </label>
                          <select v-model="course.semester_id" class="ui hj145 cntry152">
                            <option selected disabled value=""> اختيار من القائمة </option>
                            <option value="1">الاول</option>
                            <option value="2">الثانى</option>
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
                      <h4>تغير صورة الغلاف</h4>
                      <p>
                        قم بتحميل صورة الدورة التدريبية الخاصة بك هنا. يجب أن
                        تفي بمعايير جودة صورة الدورة التدريبية لدي نا حتى يتم
                        قبولها. إرشادات مهمة: 750 × 420 بكسل ؛ .jpg ، .jpeg ،.
                        gif أو png.
                      </p>
                      <div class="upload_input">
                        <input type="file" name="" id="" />
                      </div>
                    </div>
                  </div>
                  <br />
                  <div class="course_price">
                    <div class="row">
                      <div class="col-lg-6">
                        <div class="box">
                          <label><i class="fas fa-dollar-sign"></i>تغير السعر</label>
                        </div>
                      </div>
                      <div class="col-lg-9 col-md-4 col-sm-6 col-xs-6 col-6">
                        <input type="number" v-model="course.price" name="" id="" />
                      </div>
                      <div
                        class="col-lg-3 col-md-3 col-sm-6 col-xs-6 col-6 price"
                      >
                        <span>EGP</span>
                      </div>
                    </div>
                  </div> -->
                  <button @click="SaveChanged()" data-direction="finish" class="btn btn-default steps_btn"> حفظ </button>
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
import axios from "axios"
import { mapActions } from 'vuex';


export default {
  name: "EditeCourse",
  components: { Footer,AsideBar,Header },
  props: ["id"],
  data() {
    return {
      save: false,
      course: {},
      years_list: {},
      status:false,
    }
  },
  async mounted() {
    await axios.get(
      'api_dashboard/academicYears')
      .then((res) => {
        this.years_list = res.data.data;
      })
      .catch(error => {
        console.log(error)
        console.log(error.response.data.message);
      });
    await axios.get(
      'api_dashboard/subjects/' + this.id)
      .then((res) => {
        this.course = res.data.data;
        this.status=this.course.status == "1" ? true : false
      })
      .catch(error => {
        console.log(error)
        console.log(error.response.data.message);
      });

  },
  methods: {
    ...mapActions(['redirectTo']),
    async SaveChanged()
    {
      let data = {
        name: this.course.name,
        academic_year_id: this.course.academic_year_id,
        semester_id: this.course.semester_id,
        status: this.status ? '1' : '0',
        // desc: this.course_desc,
        // price: this.course_title,
        // img: this.course_photo,
      }
      await axios.post('api_dashboard/subjects/'+this.id,data)
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
.EditeCourse {
  margin-right: 14rem;

  @media (max-width: 991px) {
    margin-right: 0;
  }
}
</style>

