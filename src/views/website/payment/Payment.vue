<template>
  <Header />
  <div class="main-view">
    <AsideBar />
    <div class="payment-page">
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
                          الدفع
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
                <h2>اتمام الدفع</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="cartPayment">
      <div class="content2">
        <div class="container">
          <div class="row">
            <div class="col-lg-8">
              <div class="adress">
                <div class="adress_title">
                  <h4>العنوان</h4>
                </div>
                <div class="address_text">
                  عنوان الفرع / القاهرة مدينة الزمالك شارع 15 بجوار مطعم كنتاكي
                  <br />
                  عنوان الطالب / القاهرة مدينة المعادي شارع 10
                </div>
              </div>
              <div class="payment">
                <div class="payment_title">
                  <h4>تحديد طريقة الدفع</h4>
                </div>
                <div class="checkout-tabs">
                  <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item">
                      <button
                        class="nav-link active"
                        id="credit-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#credit"
                        type="button"
                        role="tab"
                        aria-controls="credit"
                        aria-selected="true"
                      >
                        بطاقه ائتمانيه
                      </button>
                    </li>
                    <li class="nav-item">
                      <button
                        class="nav-link"
                        id="bank-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#bank"
                        type="button"
                        role="tab"
                        aria-controls="bank"
                        aria-selected="true"
                      >
                        الدفع عند الاستلام
                      </button>
                    </li>
                  </ul>
                </div>
                <div class="tab-content" id="myTabContent">
                  <div
                    class="tab-pane fade show active"
                    id="credit"
                    role="tabpanel"
                    aria-labelledby="credit-tab"
                  >
                    <keep-alive>
                      <bank />
                    </keep-alive>
                  </div>
                </div>
                <div class="tab-content" id="myTabContent">
                  <div
                    class="tab-pane fade show"
                    id="bank"
                    role="tabpanel"
                    aria-labelledby="credit-tab"
                  >
                    <keep-alive> <Fawry /> </keep-alive>
                  </div>
                </div>
                <div class="chckout_order_dt1">
                  <div class="checkout_title">
                    <h4>عناصر الطلب</h4>
                  </div>
                  <div class="order_dt_section1">
                    <div class="order_title">
                      <h6>منهج الفيزياء | الثالث الثانوي</h6>
                      <div class="order_price">150 ج.م</div>
                    </div>
                    <div class="order_title">
                      <h6>خصم</h6>
                      <div class="order_price">50 ج.م</div>
                    </div>
                    <div class="order_title">
                      <h6>اجمالي</h6>
                      <div class="order_price">100 ج.م</div>
                    </div>
                    <button class="chckot_btn" type="submit">
                      تأكيد الدفع
                    </button>
                  </div>
                </div>
              </div>
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
                  <a href="#" class="chck-btn22">دفع مؤمن</a>
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
import bank from "../../../components/website/payment/bank.vue";
import Fawry from "../../../components/website/payment/Fawry.vue";
export default {
  components: { Footer, AsideBar, Header, bank, Fawry },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
.payment-page {
  margin-right: 13rem;
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
  background-color: #d9d9d9;
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
  background-image: url(../../../../src/assets/course/Rectangle\ 155.png);
  background-size: cover;
  width: 100%;
  height: 500px;
  float: right;
  padding: 30px;
  border-radius: 10px;
  border: 1px solid #efefef;
  transition: all 0.2s ease-in-out;
  margin-bottom: 30px;
}
.adress {
  position: relative;
  background-image: url(../../../../src/assets/course/Rectangle\ 154.png);
  background-size: cover;
  width: 100%;
  float: right;
  padding: 30px;
  border-radius: 10px;
  border: 1px solid #efefef;
  transition: all 0.2s ease-in-out;
  margin-bottom: 30px;
}
.adress::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.3);
  z-index: 0;
}
.adress_title h4 {
  font-size: 30px;
  font-weight: 500;
  font-family: "Roboto", sans-serif;
  margin-bottom: 20px !important;
  color: #000000;
  text-align: right;
  line-height: 26px;
  width: fit-content;
  height: 50px;
  border-bottom: 3px solid #f22424;
}
.address_text {
  font-size: 24px;
  font-weight: 400;
  font-family: "Roboto", sans-serif;
  color: #000000;
  float: right;
  width: 100%;
  text-align: right;
  line-height: 35px;
  margin-top: 10px;
}
.payment {
  background-image: url(../../../../src/assets/course/Rectangle\ 155.png);
  background-size: cover;
  width: 100%;
  float: right;
  padding: 30px;
  border-radius: 10px;
  border: 1px solid #efefef;
  transition: all 0.2s ease-in-out;
  margin-bottom: 30px;
}
.payment h4 {
  font-size: 30px;
  font-weight: 500;
  font-family: "Roboto", sans-serif;
  margin-bottom: 20px !important;
  color: #000000;
  text-align: right;
  line-height: 26px;
  width: fit-content;
  height: 50px;
  border-bottom: 3px solid #f22424;
}
.checkout-tabs {
  width: 100%;
  margin-top: 42px;
  margin-bottom: 20px;
  direction: rtl;
}
.checkout-tabs .nav-tabs {
  border-top: 1px solid #efefef;
  border-left: 1px solid #efefef;
  border-right: 1px solid #efefef;
  margin: 0;
  border-bottom: 0;
  background: #f7f7f7;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
.checkout-tabs .nav-tabs .nav-item {
  width: 50%;
  text-align: center;
  border-right: 1px solid #efefef;
}
.checkout-tabs .nav-tabs .nav-item .nav-link {
  width: 100%;
}
.checkout-tabs .nav-tabs .nav-item .nav-link {
  background: transparent;
  color: #686f7a;
  font-size: 19px;
  font-weight: 500;
  font-family: "Roboto", sans-serif;
  line-height: 24px;
  padding: 15px 10px !important;
  margin-right: 0;
  border: 0;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.checkout-tabs .nav-tabs .nav-item.show .nav-link,
.checkout-tabs .nav-tabs .nav-link.active {
  color: #ed2a26 !important;
  background-color: none !important;
  border-bottom: 2px solid #ed2a26 !important;
}

.checkout-tabs .nav-tabs .nav-item .nav-link:hover {
  color: #333 !important;
  background: none !important;
  border-bottom: 2px solid #efefef;
  text-decoration: none !important;
}

.checkout_title h4 {
  font-size: 18px;
  font-weight: 500;
  width: 25%;
  margin-bottom: 20px !important;
  color: black;
  text-align: right;
  line-height: 26px;
  padding-bottom: 20px;
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
  margin-bottom: 20px;
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
  margin-bottom: 20px;
}
.order_title h6 {
  font-size: 16px;
  font-weight: 500;
  color: black;
  float: right;
  width: 70%;
  text-align: right;
  line-height: 24px;
  margin-bottom: 20px;
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
  margin-bottom: 20px;
}
.order_title .order_price5 {
  font-size: 20px;
  font-weight: 600;
  color: black;
  text-align: left;
  float: left;
  width: 30%;
  margin-bottom: 20px;
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
.chckout_order_dt1 {
  margin-top: 34px;
  width: 100%;
  border-top: 1px solid #efefef;
  padding-top: 30px;
  .checkout_title h4 {
    font-size: 30px;
    font-weight: 500;
    font-family: "Roboto", sans-serif;
    margin-bottom: 10px !important;
    color: #333;
    text-align: right;
    line-height: 26px;
  }
}
.order_dt_section1 {
  float: right;
  width: 100%;
  margin-top: 7px;
  .order_title {
    float: right;
    width: 100%;
    padding: 20px 0;
    border-bottom: 1px solid #efefef;
    .order_title h6 {
      font-size: 16px;
      font-weight: 600;
      font-family: "Roboto", sans-serif;
      color: #333;
      float: right;
      margin-bottom: 0;
      line-height: 24px;
      width: 70%;
      text-align: right;
    }
    .order_title .order_price {
      font-size: 16px;
      font-weight: 500;
      font-family: "Roboto", sans-serif;
      color: #686f7a;
      text-align: left;
      float: left;
      width: 30%;
      margin-bottom: 0;
    }
  }
}
.chckot_btn {
  height: 50px;
  padding: 15px 40px;
  border: 0;
  margin-top: 30px;
  width: 100%;
  text-align: center;
  color: #fff;
  border-radius: 20px;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  background: #4e54c8;
  display: block;
}

.chckot_btn:hover {
  color: #fff !important;
  background: #333;
}
</style>
