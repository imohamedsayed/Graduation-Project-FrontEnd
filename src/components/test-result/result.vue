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
                          <router-link :to="{ name: 'home' }"
                            >الرئيسية
                          </router-link>
                        </li>
                        <li class="breadcrumb-item">
                          <router-link :to="{ name: 'home' }"
                            >منهج الفيزياء للثانويه العامه
                          </router-link>
                        </li>
                        <li class="breadcrumb-item active" aria-current="page">
                          نتيجه اختبار الوحده الاولي
                        </li>
                      </ol>
                    </nav>
                  </div>
                </div>
                <div class="titleright">
                  <a href="certification_center.html" class="blog_link">
                    الرجوع للدورة <i class="fa-solid fa-angles-left"></i
                  ></a>
                </div>
              </div>
              <div class="title126">
                <img
                  src="../../../../public/images/categories/Right.png"
                  alt=""
                />
                <h2>نتيجتك</h2>
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
  background-color: #f1f3f8;
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
.titleright .blog_link {
  color: #333;
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
</style>
