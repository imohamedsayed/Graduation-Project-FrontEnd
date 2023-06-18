<template>
    <Header />
    <div class="main-view">
      <AsideBar />
      <div class="showCategory">
        <div class="cover">
          <div class="container">
            <div class="bg">
              <div class="row">
                <div class="col-lg-12 col-md-12">
                  <div class="mt-30">
                    <label class="head">
                      <i class="fas fa-list"></i> عرض المتاجر</label
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
                    <table class="table ucp-table" v-if="state.displayItems">
                      <thead class="thead-s">
                        <tr>
                          <th class="text-center" scope="col">#</th>
                          <th class="cell-ta" scope="col">الاسم</th>
                          <th class="open text-center" scope="col">عرض</th>
                        </tr>
                      </thead>
                      <tbody>

                        <shop
                          :shop="state.displayItems"
                        />
                      </tbody>
                    </table>
                    <div
                      class="alert alert-info mt-2"
                      v-if="!state.displayItems"
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
  import Footer from "../../../../components/Footer.vue";
  import Header from "../../../../components/Header.vue";
  import AsideBar from "../../../../components/AsideBar.vue";
  import shop from "../../../../components/shop/shop.vue";
  import axios from "axios";
  import { useStore } from "vuex";
  import { computed, reactive, onMounted } from "vue";
  export default {
    name: "Showshop",
    components: { Footer, AsideBar, Header, shop },
    props: {
      id: String,
    },
    setup(props) {
      const store = useStore();
  
      const state = reactive({
        user: computed(() => store.state.user),
        items: {},
        search: "",
        displayItems: {}
      });
      const branch_id = state.user.exter_info.branch_id;
      onMounted(async () => {
        if (state.user == null || state.user.role_id != 3) {
          router.push("/dashboard/login");
        } else {
          let res = await axios
            .get("http://127.0.0.1:8000/api_dashboard/shops/"+branch_id)
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
  