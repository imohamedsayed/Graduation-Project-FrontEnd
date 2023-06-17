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
                  <i class="fas fa-shopping-bag"></i> الفئات
                </h4>
              </div>
            </div>
            <div class="col-md-12">
              <div class="products d-grid gap-4">
                <category />
                <category />
                <category />
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
import Header from "../../../components/Header.vue";
import AsideBar from "../../../components/WebsiteAsideBar.vue";
import category from "../../../components/website/store/category.vue";
export default {
  components: { Footer, AsideBar, Header, category },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
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
.products button {
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.02);
  }
}
</style>
