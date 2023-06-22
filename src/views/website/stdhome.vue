<template>
  <Header />
  <div class="main-view">
    <AsideBar />
    <div class="teacher">
      <div class="bg">
        <div class="row">
          <div class="col-12 p-2">
            <h3> فرع {{ state.bName }}</h3>
          </div>
        </div>
        <div class="year1">
          <h1><i class="fa fa-list"></i> الاساتذة</h1>
          <Suspense>
            <Chooseteacher :id="state.id" />
            <template #fallback> </template>
          </Suspense>
        </div>
        <div class="year2">
          <h1><i class="fa fa-list"></i> الدورات</h1>
          <Choosecourse :id="state.id" />
        </div>
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
import Footer from "../../components/Footer.vue";
import Header from "../../components/StudentHeader.vue";
import AsideBar from "../../components/WebsiteAsideBar.vue";
import { reactive, computed, onMounted } from "vue";
import { useStore } from "vuex";
import Chooseteacher from "@/components/website/BranchHome/GetTeacherBranchClassrooms.vue";
import Choosecourse from "@/components/website/BranchHome/GetSubjectBranchClassrooms.vue";
export default {
  components: {
    Footer,
    AsideBar,
    Header,
    Choosecourse,
    Chooseteacher,
  },
  setup() {
    const state = reactive({
      id: computed(() => useStore().state.student.branch_id),
      bName: "",
    });
    // console.log(props);

    onMounted(() => {
      state.bName = localStorage.branch_name;
    });

    return { state };
  },
};
</script>

<style lang="scss" scoped >
.teacher {
  h3 {
    color: var(--darker-blue) !important;
    text-align: center;
background-color: #F1F3F8;
padding: 10px;
  }
}
</style>
<!-- .nav-tabs .nav-link:focus, .nav-tabs .nav-link:hover {
    isolation: isolate;
    border-color: var(--bs-nav-tabs-link-hover-border-color);
} -->
