<template>
  <Header />
  <div class="main-view">
    <AsideBar />
    <div class="ShowCources">
      <div class="cover">
        <div class="container">
          <div class="bg">
            <div class="row">
              <div class="col-lg-12 col-md-12">
                <div class="mt-30">
                  <label class="head">
                    <i class="fas fa-list"></i> قائمه الامتحانات</label
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
                    @keyup="searchExam(state.search)"
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
                        <th class="open cell-ta" scope="col">الوصف</th>
                        <th class="open text-center" scope="col">
                          تاريخ البدء
                        </th>
                        <th class="open text-center" scope="col">
                          تاريخ الانتهاء
                        </th>
                        <th class="open text-center" scope="col">الحاله</th>
                        <th class="open text-center" scope="col">النوع</th>
                        <th class="open text-center" scope="col">الاسئله</th>
                      </tr>
                    </thead>
                    <tbody>
                      <Exam
                        v-for="exam in state.displayItems"
                        :key="exam.id"
                        :exam="exam"
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
import Exam from "../../../components/Exams/Exam.vue";
import axios from "axios";
import { useStore } from "vuex";
import { computed, reactive, onMounted } from "vue";
export default {
  name: "ShowCources",
  components: { Footer, AsideBar, Header, Exam },
  props: {
    id: String,
  },
  setup(props) {
    const store = useStore();

    const state = reactive({
      user: computed(() => store.state.user),
      items: [],
      search: "",
      displayItems: [],
    });

    onMounted(async () => {
      if (state.user == null || state.user.role_id != 3) {
        router.push("/dashboard/login");
      } else {
        let res = await axios
          .get("api_dashboard/exams_get_by_classroom_id/" + props.id)
          .then((res) => {
            console.log(res.data.data);
            state.items = res.data.data;
            state.displayItems = state.items;
          })
          .catch((err) => console.log(err));
      }
    });

    const searchExam = () => {};
    return { state, searchExam };
  },
};
</script>

<style lang="scss">
.ShowCources {
  margin-right: 14rem;

  @media (max-width: 991px) {
    margin-right: 0;
  }
}
</style>
