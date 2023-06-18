<template>
  <Header />
  <div class="main-view">
    <AsideBar />
    <div class="showProducts">
      <div class="cover">
        <div class="container">
          <div class="bg">
            <div class="row">
              <div style="display: flex; justify-content: space-between" class="col-lg-12 col-md-12">
                <div class="mt-30">
                  <label class="head">
                    <i class="fas fa-list"></i> قائمه المنتجات</label>
                </div>
                <!-- <div class="content-action-btns">
                  <router-link :to="{ name: 'newProduct', params: { category_id: category_id } }"><i
                      class="fas fa-plus-circle"></i> اضافة منتج جديد</router-link>
                </div> -->
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <div class="left">
                  <span>بحث : </span>
                  <input v-model="state.search" @keyup="searchProducts(state.search)" class="form-control form-control-sm"
                    type="text" />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="co-md-12">
                <div class="table-responsive">
                  <table class="table ucp-table">
                    <thead class="thead-s">
                      <tr>
                        <th class="text-center" scope="col">#</th>
                        <th class="cell-ta" scope="col" > رقم الطالب </th>
                        <th class="open cell-ta" scope="col">الحاله</th>
                        <th class="open text-center" scope="col">الخصم</th>
                        <th class="open text-center" scope="col">السعر </th>
                        <th class="open text-center" scope="col">السعر الكلى</th>
                      </tr>
                    </thead>
                    <tbody>
                      <order v-for="order in state.displayItems"
                      :key="order.id"
                      :order="order"
                      />
                    </tbody>
                  </table>
                  <div class="alert alert-info mt-2" v-if="!state.displayItems.length"> لا توجد نتائج لعرضها ! </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  </div>
</template>
  
<script>
import Footer from "../../../components/Footer.vue";
import Header from "../../../components/Header.vue";
import AsideBar from "../../../components/AsideBar.vue";
import order from "../../../components/shop/order.vue";
import axios from "axios";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { onMounted,reactive,computed } from "vue";
export default {
  name: "showProducts",
  components: { Footer,AsideBar,Header,order },
  props: {
    category_id: String,
  },
  setup(props) {
    const store = useStore();
    const router = useRouter();

    const state = reactive({
      user: computed(() => store.state.user),
      search: "",
      items: [],
      displayItems: []
    });
    onMounted(async () => {
      if(state.user == null || state.user.role_id != 3) {
        router.push("/dashboard/login");
      } else {
        let res = await axios.get(
          "api_dashboard/orders"
        );

        if(res.status == 200) {
          // console.log(res.data.data);
          state.items = res.data.data;
          state.displayItems = state.items;
        }
      }
    });

    const searchProducts = (key) => {
      state.displayItems = state.items.filter((item) =>
        item.product.includes(key)
      );
    };

    return { state,searchProducts,};
  },
};
</script>
  
<style lang="scss">
.showProducts {
  margin-right: 14rem;

  @media (max-width: 991px) {
    margin-right: 0;
  }
}
</style>
  