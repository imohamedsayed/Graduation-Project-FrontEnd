<template>
  <Header />
  <div class="main-view">
    <AsideBar />
    <div class="allteacher">
      <div class="bg">
        <div class="row">
          <div class="col-12">
            <div class="title">
              <h4 class="item_title">
                  الاساتذة المتاحة
              </h4>
            </div>
          </div>
          <div class="col-12">
            <div class="row">
              <Teachers :id="this.id" />
            </div>
          </div>
        </div>
      </div>
      <FooterVue />
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import AsideBar from "@/components/WebsiteAsideBar.vue";
import FooterVue from '@/components/Footer.vue'
import product from "../../../components/website/store/products.vue";
import Teachers from '@/components/website/Teacher/Teachers.vue';

export default {
  components: { FooterVue,Header,AsideBar,product,Teachers },
  props: {
    id: String
  },
  mounted() {

  },
}
</script>


<style lang="scss">
.allteacher {
  margin-right: 15rem;

  @media (max-width: 991px) {
    margin-right: 0;
  }
  .bg{
    padding: 30px;
  }

}
</style>