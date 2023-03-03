<template>
  <Header />
  <div class="main-view">
    <AsideBar />
    <div class="result">
      <div class="result-content">
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
                          <router-link :to="{ name: 'course' }">
                            {{ subject }}
                          </router-link>
                        </li>
                        <li class="breadcrumb-item active" aria-current="page">
                          {{ semester }}
                        </li>
                      </ol>
                    </nav>
                  </div>
                </div>
                <div class="titleright">
                  <router-link :to="{ name: 'course' }" class="blog_link">
                    الرجوع للدورة <i class="fa-solid fa-angles-left"></i
                  ></router-link>
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
      <resultComponent />
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "../../../components/Footer.vue";
import Header from "../../../components/Header.vue";
import AsideBar from "../../../components/WebsiteAsideBar.vue";
import resultComponent from "../../../components/website/test-result/resultComponent.vue";
export default {
  name: "result",
  components: { Footer, AsideBar, Header, resultComponent },
  data() {
    return {
      subject: "منهج الفيزياء للثانويه العامه",
      semester: "نتيجه اختبار الوحده الاولي",
    };
  },
};
</script>

<style lang="scss">
.result {
  margin-right: 13rem;
  @media (max-width: 991px) {
    margin-right: 0;
  }
}
.result-content {
  background-color: #d9d9d9;
  direction: rtl;
  padding: 30px 20px;
  width: 100%;
}

.result-content .title125 {
  width: 100%;
  float: left;
}

.result-content .titleleft {
  float: right;
}

.result-content .titleright {
  float: left;
}
.result-content .titleright .blog_link {
  color: #333;
}
.result-content .ttl121 .breadcrumb {
  padding: 0 !important;
  direction: rtl;
}
.result-content .ttl121 .breadcrumb-item {
  font-size: 20px;
  font-weight: 400;
  color: #333;
  font-family: "Roboto", sans-serif;
  line-height: 24px;
}
.result-content .ttl121 .breadcrumb-item a {
  color: #333;
}
.result-content .breadcrumb-item.active {
  color: #6c757d;
}
.result-content .breadcrumb-item + .breadcrumb-item {
  padding-right: 0.5rem;
}
.result-content .breadcrumb-item + .breadcrumb-item::before {
  content: "/";
  display: inline-block;
  padding-left: 0.5em;
  color: #6c757d;
}
.result-content .title126 {
  float: left;
  width: 100%;
  padding-bottom: 20px;
  display: flex;
  align-items: center;
  margin-top: 25px !important;
}
.result-content .title126 img {
  width: 35px;
  height: 35px;
  margin: 0 0 0 20px;
}
.result-content .title126 h2 {
  font-size: 28px;
  font-weight: bold;
  font-family: "Roboto", sans-serif;
  color: #333;
  text-align: right;
  line-height: 30px;
  margin-top: 10px;
}
.result-content .rght1528 {
  position: sticky;
  top: 90px;
}
</style>
