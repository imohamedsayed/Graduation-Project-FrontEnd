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
                  <i class="fas fa-shopping-bag"></i> المنتجات
                </h4>
              </div>
            </div>
            <div class="col-md-12">
              <div class="products">
                <div class="row" v-if="state.products.length">
                  <div
                    class="col-lg-3 col-md-4"
                    v-for="product in state.products"
                    :key="product.id"
                  >
                    <product :product="product" />
                  </div>
                </div>
                <div v-else>
                  <p class="alert alert-warning">
                    لم يتم اضافة منتجات لهذه الفئة بعد
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
import Footer from "../../../components/Footer.vue";
import Header from "../../../components/StudentHeader.vue";
import AsideBar from "../../../components/WebsiteAsideBar.vue";
import product from "../../../components/website/Products/StoreProduct.vue";
import { reactive, onMounted } from "vue";
import axios from "axios";
export default {
  components: { Footer, AsideBar, Header, product },
  props: {
    id: String,
    sid: String,
  },
  setup(props) {
    const state = reactive({
      products: [],
    });

    onMounted(async () => {
      let res = await axios.get("/api/get-products-for-category/" + props.id);
      if (res.status == 200) {
        state.products = res.data.data;
      }
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
