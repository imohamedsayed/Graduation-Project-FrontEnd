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
                      <i class="fa-solid fa-bars ms-2"></i> الملاحظات
                    </label>
                  </div>
                </div>
                <div class="col-sm-12 col-md-6">
                  <div class="right">
                    <router-link
                      :to="{ name: 'add_lesson', }"
                      class="link"
                    >
                      اضافه درس جديد
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
                      @keyup="searchNote(state.search)"
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
                          <th class="" width="">الاسم</th>
                            <th class="" width="">الفصل</th>
                          <th class="" width="">الحالة</th>
                          </tr>
                      </thead>
                      <tbody>
                        <Lesson
                          v-for="lesson in state.lessons"
                          :key="lesson.id"
                          :lesson="lesson"
                            :cid="cid"
                        />
                      </tbody>
                    </table>
                    <div
                      v-if="state.lessons.length <= 0"
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
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";
import AsideBar from "@/components/AsideBar.vue";
import Lesson from "@/components/sections/Lessons/Lesson.vue";
import axios from "axios";

import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { reactive, computed, onMounted } from "vue";

export default {
  components: { Footer, AsideBar,  Header, Lesson },
  props: {
    id: String,
  },
  setup(props) {
    const store = useStore();
    const router = useRouter();
    const state = reactive({
      lessons: [],
      items: [],
      search: "",
      user: computed(() => store.state.user),
    });

    onMounted(async () => {
      if (state.user == null) {
        router.push("/dashboard/login");
      } else {
        try {
          let lessonsRes = await axios.get(
            "api_dashboard/lessons/" + props.id
          );
          if (lessonsRes.status == 200) {
            state.lessons = lessonsRes.data.data;
            console.log(state.lessons);
            state.items = lessonsRes.data.data;
          }
        } catch (err) {
          console.error(err);
        }
      }
    });

    const searchNote = (key) => {
      state.lessons = state.items.filter((item) =>
        item.description.includes(key)
      );
    };
    const cid=props.id

    return { state, searchNote,cid };
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
