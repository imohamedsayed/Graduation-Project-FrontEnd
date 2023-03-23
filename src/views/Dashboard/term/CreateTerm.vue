<template>
  <Header />
  <div class="main-view">
    <AsideBar />
    <div class="new-term">
      <div class="content">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <h4 class="st_title cr_course_title">
                <i class="fas fa-plus-circle"></i> اضافة ترم جديد
              </h4>
            </div>
            <div class="col-lg-6">
              <div v-if="save" class="alert alert-success" role="alert"> تم اضافه ترم دراسى بنجاح . <span style="{
                      font-size:18px;
                      cursor: pointer;
                      display: inline-block;
                      transition: .5s a,}" @click="
                        this.redirectTo({
                          name: 'ShowTerm',
                          params: {}
                        })"> عرض الجميع </span>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <div class="course_tabs_1">
                <div id="add-course-tab" class="step-app">
                  <div class="step-content">
                    <div class="step-tab-panel step-tab-info active create-course-tab" id="tab_step1">
                      <div class="tab-from-content">
                        <div class="course__form">
                          <div class="general_info10">
                            <div class="row">
                              <div class="col-lg-6 col-md-6">
                                <div class="ui mt-30 focus box search">
                                  <label>
                                    <i class="fas fa-list"></i> اختيار الترم الدراسي</label>
                                  <select v-model="term_value">
                                    <option selected disabled value=""> اختيار من القائمة </option>
                                    <option value="1" selected>الترم الدراسي الاول</option>
                                    <option value="2">الترم الدراسي الثاني</option>
                                  </select>
                                </div>
                              </div>
                              <div class="col-lg-6 col-md-12">
                                <div class="mt-30 box ">
                                  <label>
                                    <i class="fas fa-list"></i> اختيار السنه الدراسيه </label>
                                  <select v-model="year_id" class="">
                                    <option selected disabled value=""> اختيار من القائمة </option>
                                    <option v-for="year in years_list" :key="year.id" :value="year.id">{{ year.name }}
                                    </option>
                                  </select>
                                </div>
                              </div>
                              <div class="col-lg-6 col-md-6">
                                <div class="status mt-30 focus box search">
                                  <div class=" statusbg  d-flex align-items-center  gap-4 px-1 mt-3">
                                    <input type="checkbox" name="" v-model="status" />
                                    <label> متاح </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <button data-direction="finish" @click="add_semester" class="btn btn-default steps_btn"> حفظ
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
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
// @ is an alias to /src
import Footer from "../../../components/Footer.vue";
import Header from "../../../components/Header.vue";
import AsideBar from "../../../components/AsideBar.vue";
import axios from 'axios';
import { mapActions } from 'vuex';

export default {
  name: "CreateTerm",
  components: { Footer,AsideBar,Header },
  data() {
    return {
      term_value: '',
      status: false,
      year_id: '',
      years_list: [],
      save: false
    }
  },
  async mounted() {
    await axios.get(
      'api_dashboard/academicYears')
      .then((res) => {
        this.years_list = res.data.data;
        console.log(res.data.data);
      })
      .catch(error => {
        console.log(error)
        console.log(error.response.data.message);
      });
  },
  methods: {
    ...mapActions(['redirectTo']),
    async add_semester() {
      let data = {
        name: this.term_value,
        status: this.status?'1':'0',
        academic_year_id: this.year_id
      }
      await axios.post('api_dashboard/semesters',data)
        .then((res) => {
          this.save = true;
          console.log(res.data)
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
.content {
  direction: rtl;
  padding: 30px 20px;
  width: 100%;
}

.new-term {
  margin-right: 14rem;

  @media (max-width: 991px) {
    margin-right: 0;
  }
}

.content .st_title {
  margin-bottom: 8px;
  font-size: 20px;
}

.content .st_title i {
  color: var(--darker-blue);
  margin-left: 10px;
  font-size: 22px;
}

.course_tabs_1 {
  background: #fff;
  margin-top: 30px;
  padding: 0 30px;
  padding-bottom: 30px;
  border-radius: 10px;
  border: 1px solid #efefef;
}

.course_tabs_1 label {
  font-weight: 500;
  font-size: 16px;
  margin-bottom: 10px !important;
  color: var(--text-black);
  text-align: right;
  display: block;
}

.course_tabs_1 label i {
  margin-left: 10px;
}

.course_tabs_1 select {
  padding: 15px 15px;
  height: auto;
  border-radius: 8px;
  font-weight: 500;
  font-size: 15px;
  border: var(--border);
  width: 100%;
  margin-top: 10px;
}

.course_tabs_1 select:focus {
  outline: none;
}

.tab-from-content {
  padding: 30px 0;
}

.course_tabs_1 .steps_btn {
  margin: 25px 25px;
  padding: 10px 50px !important;
  margin-bottom: 0;
  margin-top: 50px;
  font-size: 20px !important;
  height: auto !important;
  background: var(--blue-color) !important;
  color: white !important;
  font-family: "Cairo", sans-serif !important;
  font-weight: 700 !important;
  border-radius: 50px;
  font-weight: bold;
}

.course_tabs_1 .steps_btn:hover {
  color: white !important;
  background: var(--darker-blue) !important;
}

.status{
  .statusbg
  {
  background-color: #efefef;
  border-radius: 10px;
  // width: calc(100% - 20px);

  }
  input {
  // width: auto !important;
  height: 20px !important;
  width: 20px !important;
  margin-top: 20px !important;
  // padding:20px 10px !important;
}}
</style>
