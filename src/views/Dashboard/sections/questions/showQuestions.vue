<template>
  <Header />
  <div class="main-view">
    <AsideBar />
    <div class="ShowCources">
      <div class="cover">
        <div class="container">
          <div class="bg">
            <div class="row">
              <iv style="display: flex; justify-content: space-between"
      class="col-lg-12 col-md-12">
                <div class="mt-30">
                  <label class="head">
                    <i class="fas fa-list"></i> قائمه الاسئله</label
                  >
                </div>
                <div class="content-action-btns">
        <router-link :to="{ name: '' }"
          ><i class="fas fa-plus-circle"></i> اضافة سوال</router-link
        >
      </div>
              </iv>
            </div>
            <div class="row">
              <div class="col-12">
                <div class="left">
                  <span>بحث : </span>
                  <input
                    v-model="state.search"
                    @keyup="searchQuestion(state.search)"
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
                        <th class="cell-ta" scope="col" style="width: 40%">
                          السوال
                        </th>
                        <th class="open cell-ta" scope="col">الدرجه</th>
                        <th class="open text-center" scope="col">
                          الصوره ( ان وجدت )
                        </th>
                        <th class="open text-center" scope="col">التفسير</th>
                        <th class="open text-center" scope="col">النوع</th>
                        <th class="open text-center" scope="col">اضافه</th>
                      </tr>
                    </thead>
                    <tbody>
                      <question
                        v-for="question in state.displayItems"
                        :key="question.id"
                        :question="question"
                        :examId="id"
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
import Footer from "../../../../components/Footer.vue";
import Header from "../../../../components/Header.vue";
import AsideBar from "../../../../components/AsideBar.vue";
import question from "../../../../components/sections/questions/question.vue";
import axios from "axios";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { onMounted, reactive, computed } from "vue";
export default {
  name: "showQuestions",
  components: { Footer, AsideBar, Header, question },
  props: {
    id: String,
  },
  setup(props) {
    const store = useStore();
    const router = useRouter();

    const state = reactive({
      user: computed(() => store.state.user),
      search: "",
      items: [],
      displayItems: [],
    });

    onMounted(async () => {
      if (state.user == null || state.user.role_id != 3) {
        router.push("/dashboard/login");
      } else {
        let res = await axios.get(
          "/api_dashboard/questions_get_by_exam_id/" + props.id
        );

        if (res.status == 200) {
          state.items = res.data.data;
          state.displayItems = state.items;
        }
      }
    });

    const searchQuestion = (key) => {
      state.displayItems = state.items.filter((item) =>
        item.question.includes(key)
      );
    };

    return { state, searchQuestion };
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
