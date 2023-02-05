<template>
  <Header />
  <div class="main-view">
    <AsideBar />
    <div class="superior">
      <div class="superior-con">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-12">
              <div class="title">
                <h4 class="item_title">
                  <i class="fa-solid fa-trophy text-warning"></i> المتفوقين
                </h4>
              </div>
            </div>
            <div class="col-md-12">
              <div class="person">
                <div class="row">
                <superior />
                <superior />
                <superior />
                <superior />
                <superior />
                <superior />
                <superior />
                <superior />
                <superior />
                <superior />
                <superior />
                <superior />
                <superior />
                <superior />
                <superior />
                <superior />
                <superior />
                <superior />
                <superior />
                <superior />
                <superior />
                <superior />
                <superior />
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
import superior from "../../../components/website/superior/superior.vue";
export default {
  components: { Footer, AsideBar, Header, superior },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
.superior {
  margin-right: 13rem;
  @media (max-width: 991px) {
    margin-right: 0;
  }
}

.superior-con {
  direction: rtl;
  padding: 30px 20px;
  width: 100%;
  margin-right: 20px;
}
  @media (max-width: 767px) {
    .superior-con{
    margin-right: 0px;
    }
  }
.title {
  direction: rtl;
  margin-bottom: 30px;
  float: right;
  width: 100%;
}

.superior-con .item_title {
  margin-bottom: auto;
  font-size: 20px;
  font-weight: bold;
  color: var(--light-blue);
  line-height: 1.2;
}
.superior-con .item_title i {
  color: var(--light-blue);
  margin-left: 10px;
  font-size: 22px;
}
.person {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  vertical-align: baseline;
  background: none !important;
}
</style>
