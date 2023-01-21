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
                    <i class="fas fa-list"></i>  منتجات المتجر</label
                  >
                </div>
              </div>
              </div>
              <div class="row">
                <div class="col-sm-12 col-md-6">
                  <div class="left">
                    <div > عرض 
                      <select v-model="select" style="direction: ltr;" class="form-select" aria-label="Default select example">
                        <option value="10" selected>10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                      </select>
                      عناصر    
                  </div>
                  </div>
                </div>
                <div class="col-sm-12 col-md-6">
                  <div class="right">
                    <span>بحث : </span>
                    <input v-model="search"
                      @keyup="searchcours(search)"
                      class="form-control form-control-sm" 
                      type="text"
                    >
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
                          <th class="open cell-ta" scope="col">الصورة</th>
                          <th class="open cell-ta" scope="col">القسم</th>
                          <th class="open text-center" scope="col">الصف</th>
                          <th class="open text-center" scope="col">السعر</th>
                          <th class="open text-center" scope="col">المبيعات</th>
                        </tr>
                      </thead>
                      <tbody>
                        <Course
                          v-for="cours in courses"
                          :key="cours.id"
                          :cours="cours"
                        />
                      </tbody>
                    </table>
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
import Course  from '../../../components/Courses/Course'
export default {
  name: "ShowCources",
  components: { Footer, AsideBar, Header ,Course },
  data(){
    return{
      courses:[],
    }
  },
  mounted() {
    this.items = [
    {
        id: 1,  name:"منهج الفيزياء الثانوية العامة",  img:"../../../public/images/courses/img-2.jpg",
        part:"فيزياء",  class_num:"الثالث الثانوي	",  price:350,
        pays:234,  opened:true,  showEditForm:false,
      },
      {
        id: 2,  name:"منهج الكيمياء الثانوية العامة",  img:"../../../public/images/courses/img-2.jpg",
        part:"فيزياء",  class_num:"الثالث الثانوي	",  price:350,
        pays:234,  opened:true,  showEditForm:false,
      },
      {
        id: 3,  name:"منهج الاحياء الثانوية العامة",  img:"../../../public/images/courses/img-2.jpg",
        part:"فيزياء",  class_num:"الثالث الثانوي	",  price:350,
        pays:234,  opened:true,  showEditForm:false,
      },
    ];
    this.courses = this.items;
  },
  methods: {
    searchcours(key) {
      this.courses = this.items.filter((item) => item.name.includes(key));
    },
  },
  
  // mounted() {
  //   fetch("")
  //   .then(res=>res.json())
  //   .then(data=>this.courses=data)
  //   .catch(err=> console.log(err.message))
  // },
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
