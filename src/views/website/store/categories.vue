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
            <div class="component col-md-11">
              <div class="person">
                <div class="row" v-if="state.shop_categories.length">
                  <category
                    v-for="cat in state.shop_categories"
                    :key="cat.id"
                    :category="{ ...cat, shop_id: id }"
                  />
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
import { onMounted, reactive } from "vue";
import Footer from "../../../components/Footer.vue";
import Header from "../../../components/Header.vue";
import AsideBar from "../../../components/WebsiteAsideBar.vue";
import category from "../../../components/website/store/category.vue";
import axios from "axios";
export default {
  components: { Footer, AsideBar, Header, category },
  props: { id: String },
  setup(props) {
    const state = reactive({
      shop_categories: [],
    });

    onMounted(async () => {
      let res = await axios.get("/api/get-categories-for-shop/" + props.id);

      if (res.status == 200) {
        state.shop_categories = res.data.data;
      }
    });

    return { state };
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
.component {
  margin-top: 5rem;
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
  font-size: 25px;
  font-weight: bold;
  color: var(--light-blue);
  line-height: 1.2;
}

.store-con .item_title i {
  color: var(--light-blue);
  margin-left: 10px;
  font-size: 25px !important;
}
</style>
