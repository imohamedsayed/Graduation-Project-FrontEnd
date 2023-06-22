<template>
  <Header />
  <div class="main-view">
    <AsideBar />
    <div class="cartShopping">
      <div class="content">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="title125">
                <div class="titleleft">
                  <div class="ttl121">
                    <nav aria-label="breadcrumb">
                      <ol class="breadcrumb">
                        <li class="breadcrumb-item">
                          <router-link :to="{ name: 'home' }"
                            >الرئيسية
                          </router-link>
                        </li>
                        <li class="breadcrumb-item active" aria-current="page">
                          سلة الشراء
                        </li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>
              <div class="title126">
                <img
                  src="../../../../public/images/categories/Right.png"
                  alt=""
                />
                <h2>سلة الشراء</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="cart">
      <div class="content2">
        <div class="container">
          <div class="row" v-if="state.student && state.products.length">
            <div class="col-lg-8">
              <Cartproduct
                v-for="product in state.products"
                :key="product.id"
                :product="product"
              />
            </div>
            <div class="col-lg-4 mb-5">
              <div class="membership_chk_bg rght1528">
                <div class="checkout_title">
                  <h4>الاجمالي</h4>
                </div>
                <div class="order_dt_section">
                  <div class="order_title p-0">
                    <h4>السعر الأصلي</h4>
                    <div class="order_price">{{ state.sub_total }} جنيه</div>
                  </div>
                  <div class="order_title p-0">
                    <h6>الشحن</h6>
                    <div class="order_price">{{ state.shipping }} جنيه</div>
                  </div>
                  <div class="order_title p-0">
                    <h6>الضرائب</h6>
                    <div class="order_price">{{ state.tax }} جنيه</div>
                  </div>
                  <div class="order_title p-0">
                    <h6>خصومات</h6>
                    <div class="order_price">{{ state.discount }} جنيه</div>
                  </div>
                  <div class="order_title p-3">
                    <h2>الاجمالي</h2>
                    <div class="order_price5">{{ state.total }} جنيه</div>
                  </div>
                  <router-link :to="{ name: 'payment' }" class="chck-btn22"
                    >المتابعة الي الشراء</router-link
                  >
                </div>
              </div>
            </div>
          </div>
          <div
            v-if="!state.student"
            class="text-center"
            style="background: white"
          >
            <img
              src="../../../../public/images/cart.jpg"
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
              src="../../../../public/images/empty-cart.png"
              class="img-fluid"
              style="height: 500px; width: 600px"
              alt=""
            />
            <h5 class="alert alert-info mt-2">
              <span class="spinner-grow spinner-grow-sm ms-2"></span>
              السلة فارغة, اضف منتجات الي سلتك
            </h5>
          </div>
        </div>
      </div>
      <Footer class="mt-5" />
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from "vue";
import Footer from "../../../components/Footer.vue";
import Header from "../../../components/StudentHeader.vue";
import AsideBar from "../../../components/WebsiteAsideBar.vue";
import Cartproduct from "../../../components/website/CartWebsite/Cart.vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import axios from "axios";
export default {
  components: { Footer, AsideBar, Header, Cartproduct },
  setup() {
    const store = useStore();
    const router = useRouter();

    const state = reactive({
      student: computed(() => store.state.student),
      products: [],
      total: "",
      discount: "",
      shipping: "",
      sub_total: "",
      tax: "",
    });

    onMounted(async () => {
      let res = await axios.get("/api/show-cart");

      if (res.status == 200) {
        state.total = res.data.total;
        state.sub_total = res.data.sub_total;
        state.discount = res.data.discount;
        state.shipping = res.data.shipping;
        state.tax = res.data.tax;
        state.products = res.data.data;
      }
    });

    return { state };
  },
};
</script>

<style lang="scss">
.cartShopping,
.cart {
  margin-right: 14rem;
  @media (max-width: 991px) {
    margin-right: 0;
  }
}
.content {
  direction: rtl;
  padding: 30px 20px;
  width: 100%;
}
.content2 {
  background-color: #d8d8d8 !important;
  direction: rtl;
  padding: 30px 10px;
  width: 100%;
}
.title125 {
  width: 100%;
  float: left;
}

.titleleft {
  float: right;
}

.titleright {
  float: left;
}

.ttl121 .breadcrumb {
  padding: 0 !important;
  direction: rtl;
}
.ttl121 .breadcrumb-item {
  font-size: 20px;
  font-weight: 400;
  color: #333;
  font-family: "Roboto", sans-serif;
  line-height: 24px;
}
.ttl121 .breadcrumb-item a {
  color: #333;
}
.breadcrumb-item.active {
  color: #6c757d;
}
.breadcrumb-item + .breadcrumb-item {
  padding-right: 0.5rem;
}
.breadcrumb-item + .breadcrumb-item::before {
  content: "/";
  display: inline-block;
  padding-left: 0.5em;
  color: #6c757d;
  float: right !important;
}
.title126 {
  float: left;
  width: 100%;
  padding-bottom: 20px;
  display: flex;
  align-items: center;
  margin-top: 25px !important;
}
.title126 img {
  width: 35px;
  height: 35px;
  margin: 0 0 0 20px;
}
.title126 h2 {
  font-size: 28px;
  font-weight: bold;
  font-family: "Roboto", sans-serif;
  color: #333;
  text-align: right;
  line-height: 30px;
  margin-top: 10px;
}
.rght1528 {
  position: sticky;
  top: 90px;
}
.membership_chk_bg {
  background-image: url(../../../../public/images/categories/cart.jfif);
  background-size: cover;
  width: 100%;
  float: right;
  padding: 30px;
  border-radius: 10px;
  border: 1px solid #efefef;
  transition: all 0.2s ease-in-out;
  margin-bottom: 30px;
}

.checkout_title h4 {
  font-size: 18px;
  font-weight: 500;
  width: 25%;
  margin-bottom: 10px !important;
  color: black;
  text-align: right;
  line-height: 26px;
  border-bottom: 3px solid #f22424;
}
.order_dt_section {
  float: right;
  width: 100%;
  margin-top: 7px;
}
.order_title {
  float: right;
  width: 100%;
  border-bottom: 1px solid #efefef;
}
.order_title h4 {
  font-size: 16px;
  font-weight: 600;
  color: black;
  float: right;
  margin-bottom: 0;
  line-height: 24px;
  width: 70%;
  text-align: right;
}
.order_title .order_price {
  font-size: 16px;
  font-weight: 500;
  color: black;
  text-align: left;
  float: left;
  width: 30%;
  margin-bottom: 0;
}
.order_title h6 {
  font-size: 16px;
  font-weight: 500;
  color: black;
  float: right;
  width: 70%;
  text-align: right;
  line-height: 24px;
  margin-bottom: 0;
}
.order_title h2 {
  width: auto;
}
.order_title h2 {
  font-size: 20px;
  font-weight: 600;
  color: black;
  float: right;
  width: 70%;
  text-align: right;
  line-height: 24px;
  margin-bottom: 0;
}
.order_title .order_price5 {
  font-size: 20px;
  font-weight: 600;
  color: black;
  text-align: left;
  float: left;
  width: 30%;
  margin-bottom: 0;
}
.chck-btn22 {
  font-size: 15px;
  font-weight: 600;
  color: #fff !important;
  background-color: var(--blue-color) !important ;
  border-radius: 20px;
  text-align: center;
  border: 0;
  width: 100%;
  float: left;
  height: 40px;
  padding: 10px 0;
}
.chck-btn22:hover {
  color: white !important;
  background: var(--darker-blue) !important;
}
</style>
