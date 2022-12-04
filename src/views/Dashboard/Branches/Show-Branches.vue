<template>
  <Header />
  <div class="main-view">
    <AsideBar />
    <div class="ShowCources">
      <div class="cover">
        <div class="container">
          <div class="bg">
            <div class="row">
              <div style="display:flex; justify-content:space-between" class="col-lg-12 col-md-12">
                <div class=" mt-30  ">
                  <label>
                    <i class="fas fa-list"></i>  الفروع</label
                  >
                </div>
                <div class="content-action-btns">
											<router-link :to="{ name: 'CreateBranch' }"><i class="fas fa-plus-circle"></i> اضافة فرع جديد</router-link>
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
                          <th class=" text-center" scope="col">#</th>
                          <th class=" cell-ta" scope="col">الاسم</th>
                          <th class="open cell-ta" scope="col">العنوان</th>
                          <th class="open cell-ta" scope="col">التلفون</th>
                          <th class="open text-center" scope="col">الخط الساخن</th>
                          <th class="open text-center" scope="col">الخريطه</th>
                        </tr>
                      </thead>
                      <tbody>
                        <branch/>
                        <branch/>
                        <branch/>
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
import branch  from '../../../components/Branches/Branches.vue'
export default {
  name: "ShowBranches",
  components: { Footer, AsideBar, Header ,branch },
  data(){
    return{
      search:'',
      select:10,
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
    label {
    font-weight: 500;
    font-size: 22px;
    margin-bottom: 10px !important;
    color: #333;
    text-align: right;
    display: block;
    i {
      color: var(--darker-blue);
      margin-left: 5px;
    }
  }
  }
  .content-action-btns{
  padding:5px 15px;
  background: var(--darker-blue);
  color: white !important;
  margin: 5px 0;
  border-radius: 15px;
  }
  .content-action-btns a{
  color: white !important;
  }
  .content-action-btns:hover{
      background: var(--blue-color);
  }
  .left{
    select{
      padding: .375rem .75rem .375rem 1.75rem;
      margin: 0 10px;
      font-weight: 400;
      display: inline-block;
      vertical-align: middle;
      border: 1px solid var(--darker-blue);
      border-radius:0.25rem ;
      appearance: none;
      background: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e") no-repeat left .75rem center/8px 10px; 
    }
  }
  .right{
    float: left;
    input{
      display: inline-block;
      width: auto;
      height: calc(1.8125rem + 2px);
      padding: .25rem .5rem;
      margin: 0 10px;
      border-radius:0.2rem ;
      border: 1px solid var(--darker-blue);

    }
    @media(max-width: 767px) {
      float:right;
      margin:20px 0 0 0;
      }
  }
  .open
  {
    @media (max-width: 767px) {
      display: none !important;
      }
  }
}
.row th{
    border-right: 1px solid white;
    border-left: 1px solid white;
}
</style>