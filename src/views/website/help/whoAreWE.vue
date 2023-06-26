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
                          من نحن
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
                <h2>من نحن</h2>
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
            <div class="col-lg-4">
              <div class="fcrse_3 frc123">
                <ul class="ttrm15">
                  <li @click="activeTab = 'TabA'">
                    <button href="#" class="tt_item">من نحن</button>
                  </li>
                  <li @click="activeTab = 'TabB'">
                    <button href="#" class="tt_item">سياسة الخصوصية</button>
                  </li>
                  <li @click="activeTab = 'TabC'">
                    <button href="#" class="tt_item">شروط الاستخدام</button>
                  </li>
                  <li @click="activeTab = 'TabD'">
                    <button href="#" class="tt_item">الارشادات</button>
                  </li>
                  <li @click="activeTab = 'TabE'">
                    <button href="#" class="tt_item">اتصل بنا</button>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-8 mb-5">
              <component :is="activeTab" />
            </div>
          </div>
        </div>
      </div>
      <Footer class="mt-5" />
    </div>
  </div>
</template>

<script>
import Footer from "../../../components/Footer.vue";
import Header from "../../../components/StudentHeader.vue";
import AsideBar from "../../../components/WebsiteAsideBar.vue";
import TabA from "../../../components/website/about/aboutUs.vue";
import TabB from "../../../components/website/about/PrivacyPolicy.vue";
import TabC from "../../../components/website/about/TermsOfUse.vue";
import TabD from "../../../components/website/about/instructions.vue";
import TabE from "../../../components/website/about/ContactUs.vue";
export default {
  components: { Footer, AsideBar, Header, TabA, TabB, TabC, TabD, TabE },
  data() {
    return {
      activeTab: "TabA",
    };
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
@media (max-width: 767px) {
  .content {
    display: contents;
  }
  .title125 {
    padding: 20px 0px !important;
  }
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
.frc123 {
  margin-top: 13px !important;
}
.fcrse_3 {
  background: #fff;
  width: 100%;
  float: left;
  padding: 0;
  border-radius: 10px;
  margin-bottom: 30px;
  border: 1px solid #efefef;
  transition: all 0.2s ease-in-out;
}
.ttrm15 {
  float: right;
  padding: 0;
  width: 100%;
}
.ttrm15 li {
  display: block;
  float: left;
  width: 100%;
  padding: 15px 0 !important;
  border-bottom: 1px solid #efefef;
}

.tt_item {
  float: right;
  width: 100%;
  font-size: 16px;
  color: black;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  background: #fff;
  border: none;
}
.ttrm15 li:hover {
  background: var(--blue-color);
}
.ttrm15 li:hover .tt_item {
  color: #fff !important;
  background: #8f94fb41 !important;
}
a {
  &.router-link-exact-active li {
    background: #8f94fb41 !important;
  }
  &.router-link-exact-active li {
    border-right: 6px solid var(--darker-blue);
  }
}
</style>
