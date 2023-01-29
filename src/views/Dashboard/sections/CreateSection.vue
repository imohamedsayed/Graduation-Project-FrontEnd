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
                <i class="fas fa-plus-circle"></i>
                انشاء فصل جديد
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
                              name: 'showsections', 
                              params: {}
                            })"> عرض جميع الفصول </span>
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
                            <i class="fas fa-pencil-alt"></i>اسم الدورة </label
                          >
                          <select v-model="course" class="">
                            <option selected disabled value="">
                              اختيار من القائمة
                            </option>
                            <option value="فيزياء" selected>فيزياء</option>
                            <option value="كيمياء">كيمياء</option>
                            <option value="عربي">عربي</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-lg-6 col-md-6">
                        <div class="ui mt-30 focus box search">
                          <label>
                            <i class="fa-solid fa-chalkboard-user"></i> اسم المدرس</label
                          >
                          <select v-model="tech" class="">
                            <option value="1 المدرس" selected>4 المدرس</option>
                            <option value="2 المدرس"> 3 المدرس</option>
                            <option value="3 المدرس">2 المدرس</option>
                            <option value="4 المدرس">1 المدرس</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-lg-6 col-md-6">
                        <div class="ui mt-30 focus box search">
                          <label>
                            <i class="fa-solid fa-dollar-sign"></i> السعر</label
                          >
                          <input type="number" v-model="price" name="" id="" />
                        </div>
                      </div>
                      <div class="col-lg-6 col-md-6">
                        <div class="ui mt-30 focus box search">
                          <label>
                            <i class="fa-solid fa-warehouse"></i> السعة القصوى </label
                          >
                          <input type="number" v-model="max" name="" id="" />
                        </div>
                      </div>
                      <div class="col-lg-6 col-md-6">
                        <div class="ui mt-30 focus box search">
                          <label>
                            <i class="fa fa-clipboard-question"></i>  امتحان مسبق</label
                          >
                          <select v-model="exam" class="">
                            <option value="true" selected> yes </option>
                            <option value="false">No </option>
                          </select>
                        </div>
                      </div>
                      <div class="col-lg-6 col-md-6">
                        <div class="ui mt-30 focus box search">
                          <label>
                            <i class="fa fa-calendar-days"></i> تاريخ البدء </label
                          >
                          <input type="datetime-local" v-model="start" name="" id="">
                        </div>
                      </div>
                      <div class="col-lg-6 col-md-6">
                        <div class="ui mt-30 focus box search">
                          <label>
                            <i class="fa fa-calendar-days"></i> تاريخ الانتهاء</label
                          >
                          <input type="datetime-local" v-model="end" name="" id="">
                        </div>
                      </div>
                      
                    </div>
                  </div>
                  <button
                    @click="addsection()"
                    data-direction="finish"
                    class="btn btn-default steps_btn"
                  >
                    حفظ
                  </button>
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
  name: "Create_section",
  components: { Footer,AsideBar,Header },
  data() {
    return {
      save:false,
      course: " ",
      tech: "",
      max: null,
      price: null,
      exam: null,
      start: null,
      end: null
    }
  },
  // methods: {
  //   ...mapActions(['redirectTo']),
  //   async addsection() {
  //     let section = await axios.post('http://localhost:3000/sections/',
  //       {
  //         course: this.course,
  //         tech: this.tech,
  //         max: this.max,
  //         price: this.price,
  //         exam: false,
  //         start: this.start,
  //         end: this.end, 
        
  //       })
  //     if(section.status==201)
  //     {
  //       this.save = true;
  //     }
  //   }
  // },
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
