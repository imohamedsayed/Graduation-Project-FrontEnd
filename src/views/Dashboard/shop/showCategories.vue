<template>
    <Header />
    <div class="main-view">
      <AsideBar />
      <div class="showCategory">
        <div class="cover">
          <div class="container">
            <div class="bg">
              <div class="row">
                <div
                    style="display: flex; justify-content: space-between"
                    class="col-lg-12 col-md-12"
                  >
                    <div class="mt-30">
                      <label class="head">
                        <i class="fas fa-list"></i> قائمه الفئات</label
                      >
                    </div>
                    <div class="content-action-btns">
                      <router-link :to="{ name: 'newCategory', params:{ shop_id: this.shop_id} }"
                        ><i class="fas fa-plus-circle"></i>ا ضافة فئة جديدة</router-link
                      >
                    </div>
                  </div>
              </div>
              <div class="row">
                <div class="col-12">
                  <div class="left">
                    <span>بحث : </span>
                    <input
                      v-model="state.search"
                      @keyup="searchCategory(state.search)"
                      class="form-control form-control-sm"
                      type="text"
                    />
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
                          <th class="cell-ta" scope="col">الاسم</th>
                          <th class="open text-center" scope="col">الحاله</th>
                          <th class="open text-center" scope="col">عرض</th>
                        </tr>
                      </thead>
                      <tbody>
                        <category
                          v-for="category in state.displayItems"
                          :key="category.id"
                          :category="category"
                        />
                      </tbody>
                    </table>
                    <div
                      class="alert alert-info mt-2"
                      v-if="!state.displayItems.length"
                    >
                      لا توجد نتائج لعرضها !
                    </div>
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
  import category from "../../../components/shop/category.vue";
  import axios from "axios";
  import { useStore } from "vuex";
  import { computed, reactive, onMounted } from "vue";
  export default {
    name: "ShowCategory",
    components: { Footer, AsideBar, Header, category },
    props: {
      shop_id: String,
    },
    setup(props) {
      const store = useStore();
  
      const state = reactive({
        user: computed(() => store.state.user),
        items: [],
        search: "",
        displayItems: []
      });
  
      onMounted(async () => {
        if (state.user == null || state.user.role_id != 3) {
          router.push("/dashboard/login");
        } else {
          let res = await axios
            .get("api_dashboard/categories/" + props.shop_id)
            .then((res) => {
              // console.log(res.data.data);
              state.items = res.data.data;
              state.displayItems = state.items;
            })
            .catch((err) => console.log(err));
        }
      });
  
      const searchCategory = () => {};
      return { state, searchCategory };
    },
  };
  </script>
  
  <style lang="scss" >
  .showCategory {
  margin-right: 14rem;

  @media (max-width: 991px) {
    margin-right: 0;
  }

  padding-top: 10px;

  .classes {
    background: #fff;
    margin: 60px 0;
    padding: 30px 20px;

    .header {
      color: var(--text-black);
      font-size: 1.4rem;
      margin-block: 30px;
    }

    .class-list {
      width: 100%;

      td,
      th {
        &:first-of-type {
          width: 10%;
        }

        &:nth-of-type(2) {
          width: 30%;
        }

        &:last-of-type {
          width: 40%;
        }

        padding: 10px 8px;
        border: 1px solid rgba(119, 119, 119, 0.239);
      }

      th {
        background: var(--darker-blue);
        color: white;
      }
    }
  }
}
  </style>
  