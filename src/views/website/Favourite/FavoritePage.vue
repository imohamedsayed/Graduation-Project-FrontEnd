<template>
  <Header />
  <div class="main-view">
    <AsideBar />
    <div class="store">
      <div class="store-con">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-12">
              <div class="title">
                <h4 class="item_title">
                  <i class="fa-brands fa-gratipay"></i> المفضله
                </h4>
              </div>
            </div>
            <div class="col-md-12">
              <div
                class="products"
                v-if="state.student && state.products.length"
              >
                <div class="row">
                  <div
                    class="col-lg-3 col-md-4"
                    v-for="product in state.products"
                    :key="product.id"
                  >
                    <product :product="product" />
                  </div>
                </div>
              </div>
              <div
                v-if="!state.student"
                class="text-center"
                style="background: white"
              >
                <img
                  src="../../../../public/images/wishlist.jpg"
                  class="img-fluid"
                  style="height: 500px; width: 600px"
                  alt=""
                />
                <h5 class="alert alert-danger mt-2">
                  <span class="spinner-grow spinner-grow-sm ms-2"></span>
                  يجب عليك تسجيل الدخول للمتابعة
                </h5>
              </div>
              <div
                v-if="!state.products.length && state.student"
                class="text-center"
                style="background: white"
              >
                <img
                  src="../../../../public/images/wishlist.jpg"
                  class="img-fluid"
                  style="height: 500px; width: 600px"
                  alt=""
                />
                <h5 class="alert alert-info mt-2">
                  <span class="spinner-grow spinner-grow-sm ms-2"></span>
                  القائمة فارغة, اضف منتجات الي المفضلة
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  </div>
  <SpinnerLoading :loading="state.loading" />
</template>

<script>
import Footer from "../../../components/Footer.vue";
import Header from "../../../components/StudentHeader.vue";
import AsideBar from "../../../components/WebsiteAsideBar.vue";
import product from "../../../components/website/Favourite/product_favourite.vue";
import { computed, onMounted, reactive } from "vue";
import { useStore } from "vuex";
import axios from "axios";
import SpinnerLoading from "@/components/SpinnerLoading.vue";

export default {
  components: { Footer, AsideBar, Header, product, SpinnerLoading },
  setup() {
    const store = useStore();
    const state = reactive({
      student: computed(() => store.state.student),
      products: [],
      loading: false,
    });

    onMounted(async () => {
      state.loading = true;
      let res = await axios.get("/api/show-wish-list");

      if (res.status == 200) {
        state.products = res.data.data;
      }
      state.loading = false;
    });

    return { state };
  },
};
</script>

<style lang="scss">
.store {
  margin-right: 13rem;
  @media (max-width: 991px) {
    margin-right: 0;
  }
}
.store-con {
  direction: rtl;
  padding: 30px 20px;
  width: 100%;
  margin-right: 20px;
}
.title {
  direction: rtl;
  margin-bottom: 30px;
  float: right;
  width: 100%;
}

.store-con .item_title {
  margin-bottom: auto;
  font-size: 20px;
  font-weight: bold;
  color: var(--light-blue);
  line-height: 1.2;
}
.store-con .item_title i {
  color: var(--light-blue);
  margin-left: 10px;
  font-size: 22px;
}
.products {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  vertical-align: baseline;
}
</style>
