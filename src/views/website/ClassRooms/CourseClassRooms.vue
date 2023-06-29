<template>
  <Header />
  <div class="main-view">
    <AsideBar />
    <div class="teacher">
      <div class="bg1">
        <div class="year1">
          <h3 class="mt-5"><i class="fa fa-list"></i> الفصول الدراسيه</h3>

          <div class="row mt-4" v-if="state.classRooms.length">
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
      student: computed(() => useStore().state.student),
      classRooms: [],
    });

    onMounted(async () => {
      let res = await axios.get(
        "api/classrooms-subject/" + state.student.branch_id + "/" + props.id
      );
      if (res.status == 200) {
        state.classRooms = res.data.data;
      }
    });

    return { state };
  },
};
</script>

<style lang="scss" scoped>
.teacher {
  h3 {
    color: var(--darker-blue);
   text-align: center;
   margin-top: 10px !important;
  }
}
</style>
<!-- .nav-tabs .nav-link:focus, .nav-tabs .nav-link:hover {
    isolation: isolate;
    border-color: var(--bs-nav-tabs-link-hover-border-color);
} -->
