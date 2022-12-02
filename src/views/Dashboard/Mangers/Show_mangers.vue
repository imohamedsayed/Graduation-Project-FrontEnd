<template>
  <Header />
  <div class="main-view">
    <AsideBar />
    <div class="ShowCources">
      <div class="cover">
        <div class="container">
          <div class="bg">
            <div class="row">
              <div class="col-lg-6 col-md-6">
                <div class=" mt-30  ">
                  <label class="head">
                    <i class="fa-solid fa-people-roof"></i>   المديرين</label
                  >
                </div>
              </div>
              <div class="col-lg-6 col-md-6">
                <div class="content-action-btns newManger ">
                  <router-link :to="{ name: 'Add_Manger' }"
                    class="btn"  >
                    <i class="fa fa-plus-circle"></i> اضافه مدير  
                </router-link>
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
                    <input v-model="search" class="form-control form-control-sm" type="text">
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="co-md-12">
                  <div class="table-responsive ">
                    <table class="table ucp-table">
                      <thead class="thead-s">
                        <tr>
                          <th class=" text-center" scope="col" >#</th>
                          <th class=" cell-ta" scope="col">الاسم</th>
                          <th class=" cell-ta" scope="col-2">الايميل</th>
                          <th class=" cell-ta" scope="col-2">مدير لفرع </th>
                          <th class=" cell-ta" scope="col-6" >الخصائص</th>
                        </tr>
                      </thead>
                      <tbody>
                        <Manger />
                        <Manger />
                        <Manger />
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
import Manger from "../../../components/Mangers/Manger.vue"
export default {
  name: "Show_mangers",
  components: { Footer, AsideBar, Header  ,Manger},
  data(){
    return{
    }
  }
};
</script>

<style lang="scss">
.ShowCources {
  margin-right: 14rem;
  @media (max-width: 991px) {
    margin-right: 0;
  }
}
.cover {
  padding: 30px 20px;
  width: 100%;

  .bg {
    background: #fff;
    padding: 30px 30px;
    border-radius: 10px;
    border: 1px solid #efefef;
    .head{
      font-size: 20px !important;
      margin: 10px 0;
    }
    label {
    font-weight: 500;
    font-size: 22px;
    margin-bottom: 10px !important;
    color: #333;
    text-align: right;
    display: block;
    i {
      color: var(--light-blue) !important;
      margin-left: 5px;
    }
  }
  }

  .left{
    select{
      width: 110px;
      margin: 0 10px;
      display: inline-block;
    }
  }
  .right{
    float: left;
    input{
      display: inline-block;
      width: 200px;
      margin: 0 10px;
    }
    @media (max-width: 767px) {
      float: right;
      margin: 20px 0 0 0;
      }
  }
  .open
  {
    @media (max-width: 767px) {
      display: none !important;
      }
  }
  .newManger
  {

    width: 25%;
    float: left;
    height: 45px !important;
    @media screen and (max-width:767px) {
        width: 90%;
        margin: 10px auto;
        }
  }
}
</style>
