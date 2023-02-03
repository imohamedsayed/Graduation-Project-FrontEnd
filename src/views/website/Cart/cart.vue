<template>
  <Header />
  <div class="main-view">
    <AsideBar />
    <div class="cart">
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
                          <router-link :to="{name : 'home'}">الرئيسية </router-link>
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
          <div class="row">
            <div class="col-lg-8">
            <Cartproduct />
            <Cartproduct />
            <Cartproduct />
            <Cartproduct />
            <Cartproduct />
            <Cartproduct />
            <Cartproduct />
            <Cartproduct />
            <Cartproduct />
            <Cartproduct />
            <Cartproduct />
            <Cartproduct />
            </div>
            <div class="col-lg-4">
              <div class="membership_chk_bg rght1528">
                <div class="checkout_title">
                  <h4>الاجمالي</h4>
                </div>
                <div class="order_dt_section">
                  <div class="order_title">
                    <h4>السعر الأصلي</h4>
                    <div class="order_price">150 جنيه</div>
                  </div>
                  <div class="order_title">
                    <h6>خصومات</h6>
                    <div class="order_price">5 جنيه</div>
                  </div>
                  <div class="order_title">
                    <h2>الاجمالي</h2>
                    <div class="order_price5">145 جنيه</div>
                  </div>
                  <a href="#" class="chck-btn22">المتابعة الي الشراء</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "../../../components/Footer.vue";
import Header from "../../../components/Header.vue";
import AsideBar from "../../../components/WebsiteAsideBar.vue";
import Cartproduct from "../../../components/website/CartWebsite/Cart.vue";
export default {
  components: { Footer, AsideBar, Header, Cartproduct },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
.cart {
  margin-right: 13rem;
  @media (max-width: 991px) {
    margin-right: 0;
  }
}
.content {
  background-color: #d9d9d9;
  direction: rtl;
  padding: 30px 20px;
  width: 100%;
}
.content2 {
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
  padding-bottom: 20px;
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
  padding: 20px 0;
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
  margin-top: 30px;
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
