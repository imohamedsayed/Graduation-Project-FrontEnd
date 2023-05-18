<template>
  <Header />
  <div class="main-view">
    <AsideBar />
    <div class="ShowCources">
      <div class="cover">
        <div class="container">
          <div class="bg">
            <div class="row">
              <div class="col-lg-12 col-md-12">
                <div class=" mt-30  ">
                  <label class="head">
                    <i class="fas fa-list"></i> قائمه الامتحانات</label>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <div class="left">
                  <span>بحث : </span>
                  <input v-model="search" @keyup="searchcourse(search)" class="form-control form-control-sm" type="text">
                </div>
              </div>
            </div>
            <div class="row">
              <div class="co-md-12">
                <div class="table-responsive ">
                  <table class="table ucp-table">
                    <thead class="thead-s">
                      <tr>
                        <th class=" text-center" scope="col">#</th>
                        <th class=" cell-ta" scope="col">الاسم</th>
                        <th class="open cell-ta" scope="col">الوصف</th>
                        <th class="open text-center" scope="col">تاريخ البدء</th>
                        <th class="open text-center" scope="col">تاريخ الانتهاء</th>
                        <th class="open text-center" scope="col">الحاله</th>
                        <th class="open text-center" scope="col">النوع</th>
                        <th class="open text-center" scope="col">الاسئله</th>
                      </tr>
                    </thead>
                    <tbody>
                      <Exam v-for="cours in displayItems" :key="cours.id" :cours="cours" />
                    </tbody>
                  </table>
                  <div class="alert alert-info mt-2" v-if="!displayItems.length"> لا توجد نتائج لعرضها ! </div>
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
import Exam from '../../../components/Exams/Exam.vue'
import axios from "axios"
export default {
  name: "ShowCources",
  components: { Footer,AsideBar,Header,Exam },
  data() {
    return {
      search: "",
      items: [],
      displayItems: [],
    };
  },
  async mounted() {
    await axios.get(
      'api_dashboard/subjects')
      .then((res) => {
        this.displayItems = res.data.data;
        this.items = res.data.data;
      })
      .catch(error => {
        console.log(error)
        console.log(error.response.data.errors);
      });
  },
  methods: {
    searchcourse(key) {
      this.displayItems = this.items.filter((item) => item.name.toLowerCase().includes(key.toLowerCase()));
    },
  },


};
</script>

<style lang="scss">
.ShowCources {
  margin-right: 14rem;

  @media (max-width: 991px) {
    margin-right: 0;
  }
}

</style>
