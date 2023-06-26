<template>
  <Header />
  <div class="main-view">
    <AsideBar />
    <div class="teacher">
      <div class="bg1">

        <div class="year1">
          <h3><i class="fa fa-list"></i> الفصول الدراسيه</h3>
          <Suspense>
            <div class="row mt-3" v-if="state.classRooms.length">
              <classRoom
                v-for="classRoom in state.classRooms"
                :key="classRoom.id"
                :data="classRoom"
              />
            </div>
            <div v-else>
              <h4 class="alert alert-info my-5">
                لا يوجد مجموعات لهذه المادة حتي الان
              </h4>
            </div>
            <template #fallback
              ><div class="col-lg-3 col-md-6 col-12">
                <div class="skelton"></div>
              </div>
            </template>
          </Suspense>
        </div>
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
import Footer from "../../../components/Footer.vue";
import Header from "../../../components/StudentHeader.vue";
import AsideBar from "../../../components/WebsiteAsideBar.vue";
import classRoom from "@/components/website/ClassRooms/ClassRoom.vue";
import { reactive, computed, onMounted } from "vue";
import { useStore } from "vuex";
import axios from "axios";
export default {
  components: {
    Footer,
    AsideBar,
    Header,
    classRoom,
  },
  props: {
    id: String,
  },
  setup(props) {
    const state = reactive({
      branch_id: computed(() => useStore().state.student.branch_id),
      classRooms: [],
    });

    onMounted(async () => {
      let res = await axios.get(
        "api/classrooms-teacher/" + state.branch_id + "/" + props.id
      );
      if (res.status == 200) {
        state.classRooms = res.data.data;
      }
    });

    return { state };
  },
};
</script>

<style lang="scss">
.teacher {
  h3 {
    color: var(--darker-blue);
    text-align: center;
  }
}
.skelton {
  height: 100%;
  width: 100%;
  background: linear-gradient(to right bottom, #d1d1d19e, white);
}
</style>
<!-- .nav-tabs .nav-link:focus, .nav-tabs .nav-link:hover {
    isolation: isolate;
    border-color: var(--bs-nav-tabs-link-hover-border-color);
} -->
