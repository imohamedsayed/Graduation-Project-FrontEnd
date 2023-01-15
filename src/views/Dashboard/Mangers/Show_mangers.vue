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
                <div class="mt-30">
                  <label class="head">
                    <i class="fa-solid fa-people-roof"></i> المديرين</label
                  >
                </div>
              </div>
              <div class="col-sm-12 col-md-6">
                <div class="right">
                  <router-link :to="{ name: 'Add_Manger' }" class="link">
                    اضافه مدير جديد
                  </router-link>
                </div>
              </div>
            </div>


            <div class="row">
              <div class="co-md-12">
                <div class="table-responsive">
                  <Manger />
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
import Manger from "../../../components/Mangers/Manger.vue";
export default {
  name: "Show_mangers",
  components: { Footer, AsideBar, Header, Manger },
  data() {

    return {};
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

.link {

      display: block;
      color: #fff !important;
      padding: 10px 15px;
      border-radius: 25px;
      background-color: var(--darker-blue) !important;
    }

</style>
