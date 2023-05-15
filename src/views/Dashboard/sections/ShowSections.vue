<template>
  <Header />
  <div class="main-view">
    <AsideBar />
    <div class="show-sections">
      <div class="container">
        <div class="cover">
          <div class="container">
            <div class="bg">
              <div class="row">
                <div class="col-lg-6 col-md-6">
                  <div class="mt-30">
                    <label class="head">
                      <i class="fa-solid fa-bars ms-2"></i> الفصول
                      الدراسية</label
                    >
                  </div>
                </div>
                <div class="col-sm-12 col-md-6">
                  <div class="right">
                    <router-link :to="{ name: 'new_Section' }" class="link">
                      اضافه فصل جديد
                    </router-link>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12 col-md-6">
                  <div class="left">
                    <span>بحث : </span>
                    <input
                      v-model="state.search"
                      @keyup="searchCourse(state.search)"
                      class="form-control form-control-sm"
                      type="text"
                    />
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="co-md-12">
                  <div class="table-responsive">
                    <table class="table">
                      <thead class="thead-s">
                        <tr>
                          <th width="3%">#</th>
                          <th class="" width="50%">الدورة</th>
                          <th class="open" width="50%"></th>
                        </tr>
                      </thead>
                      <tbody>
                        <Section
                          v-for="section in state.sections"
                          :key="section.id"
                          :section="section"
                        />
                      </tbody>
                    </table>
                    <div
                      v-if="state.sections.length <= 0"
                      class="alert alert-info"
                      role="alert"
                    >
                      لا توجد نتائج لعرضها !
                    </div>
                  </div>
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
import Footer from "../../../components/Footer.vue";
import Header from "../../../components/Header.vue";
import AsideBar from "../../../components/AsideBar.vue";
import Section from "../../../components/sections/Section.vue";
import axios from "axios";

import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { reactive, computed, onMounted } from "vue";

export default {
  components: { Footer, AsideBar, Section, Header },
  setup() {
    const store = useStore();
    const router = useRouter();
    const state = reactive({
      sections: [],
      items: [],
      search: "",
      user: computed(() => store.state.user),
    });

    onMounted(async () => {
      if (state.user == null) {
        router.push("/dashboard/login");
      } else {
        let res = await axios
          .get(
            "api_dashboard/classrooms_get_by_branch_id/" +
              state.user.exter_info.branch_id
          )
          .then((res) => {
            state.sections = res.data.data;
            console.log(state.sections);
          })
          .catch((err) => console.log(err));

        state.items = state.sections;
      }
    });

    const searchCourse = (key) => {
      state.sections = state.items.filter((item) => item.name.includes(key));
    };

    return { state, searchCourse };
  },
};
</script>

<style lang="scss">
.show-sections {
  margin-right: 14rem;

  @media (max-width: 991px) {
    margin-right: 0;
  }
}



</style>
