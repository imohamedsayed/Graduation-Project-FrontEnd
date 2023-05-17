<template>
  <Header />
  <div class="main-view">
    <AsideBar />
    <div class="teacher">
      <div class="bg">
        <div class="row">
          <div class="col-12 p-2"></div>
        </div>
        <div class="year1">
          <h1><i class="fa fa-list"></i> الفصول</h1>

          <div class="row mt-5" v-if="state.classRooms.length">
            <classRoom
              v-for="classRoom in state.classRooms"
              :key="classRoom.id"
              :data="classRoom"
            />
          </div>
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
  }
}
</style>
<!-- .nav-tabs .nav-link:focus, .nav-tabs .nav-link:hover {
    isolation: isolate;
    border-color: var(--bs-nav-tabs-link-hover-border-color);
} -->
