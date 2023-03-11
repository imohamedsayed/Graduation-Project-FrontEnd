<template>
  <Header />
  <div class="main-view">
    <AsideBar />
    <div class="new-branch">
      <div class="sa4d25">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <h2 class="st_title cr_course_title"><i class="fas fa-plus-circle"></i> تعديل الفرع رقم : {{ id }}</h2>
            </div>
            <div class="col-lg-6">
              <div v-if="save" class="alert alert-success" role="alert"> تم تعديل الفرع بنجاح . <span style="{
                    font-size:25px;
                    cursor: pointer;
                    display: inline-block;
                    transition: .5s a,}" @click="
                      this.redirectTo({
                        name: 'ShowBranches',
                        params: {}
                      })"> عرض جميع الفروع </span>
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
                              <div class="col-lg-6 col-md-12">
                                <div class="ui search focus mt-30 lbel25">
                                  <label><i class="fas fa-pencil-alt"></i> تعديل اسم الفرع </label>
                                  <input type="text" v-model="branch.name" />
                                </div>
                              </div>
                              <div class="col-lg-6 col-md-12">
                                <div class="ui search focus mt-30 lbel25">
                                  <label><i class="fas fa-pencil-alt"></i>تعديل العنوان </label>
                                  <input type="text" v-model="branch.address" />
                                </div>
                              </div>
                              <div class="col-lg-6 col-md-12">
                                <div class="ui search focus mt-30 lbel25">
                                  <label><i class="fas fa-pencil-alt"></i>تعديل رقم التلفون</label>
                                  <input type="text" v-model="branch.phone_number" />
                                </div>
                              </div>
                              <div class="col-lg-6 col-md-12">
                                <div class="ui search focus mt-30 lbel25">
                                  <label><i class="fas fa-pencil-alt"></i>تعديل الخط الساخن</label>
                                  <input type="number" v-model="branch.hot_line" />
                                </div>
                              </div>
                              <div class="col-lg-6 col-md-12">
                                <div class="ui search focus mt-30 lbel25">
                                  <label><i class="fas fa-pencil-alt"></i>تغديل الخريطه </label>
                                  <input type="text" v-model="branch.map_location" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <button @click="update_branch" data-direction="finish" class="btn btn-default steps_btn"> حفظ
                            التعديل</button>
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
  name: "Update-branch",
  components: { Footer,AsideBar,Header,},
  props: ["id"],
  data() {
    return {
      // name:`${this.name}`,
      // address:`${this.address}`,
      // phone:`${this.phone}`,
      // hotline:`${this.hotline}`,
      // map: `${ this.src }`,
      save: false,
      branch: {}
    }
  },
  async mounted() {
    let token = "Bearer " + localStorage.getItem('manger');
    let Branchs = await axios.get(
      'api_dashboard/branches/' + this.id)
      .then((res) => {
        this.branch = res.data.data;
      })
      .catch(error => {
        console.log(error)
        console.log(error.response.data.errors);
      });
    // this.displayItems = this.items;
  },
  methods: {
    ...mapActions(['redirectTo']),
    async update_branch() {
      let data = {
        name: this.branch.name,
        address: this.branch.address,
        phone_number: this.branch.phone_number,
        hot_line: this.branch.hot_line,
        map_location: this.branch.map_location,
        status:1,
      }
      this.branch.HeadOfBranch.id = this.maneger;
      let Branch = await axios.post(
        'api_dashboard/branches/'+this.branch.id , data)
        .then((res) => {
          this.save = true;
        })
        .catch(error => {
          console.log(error)
          console.log(error.response.data.errors);
          console.log(error.response.data.message);
        });
    }
  },
};
</script>
<style lang="scss">
.sa4d25 {
  direction: rtl;
  padding: 30px 20px;
  width: 100%;
}

.new-branch {
  margin-right: 14rem;

  @media (max-width: 991px) {
    margin-right: 0;
  }
}

.sa4d25 .st_title {
  margin-bottom: 8px;
  font-size: 20px;
}

.sa4d25 .st_title i {
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

.course_tabs_1 input {
  padding: 15px 15px;
  height: auto;
  border-radius: 8px;
  font-weight: 500;
  font-size: 15px;
  border: var(--border);
  width: 100%;
  margin-top: 10px;
}

.course_tabs_1 input:focus {
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
}</style>