<template>
  <Header />
  <div class="main-view">
    <AsideBar />
    <div class="teacher">
      <div class="bg">
        <div class="row">
          <div class="col-12 p-2 ">
            <h3> محتوى فرع {{ state.name }} </h3>
          </div>
        </div>
        <div class="year1">
          <h1><i class="fa fa-list"></i>  الاساتذة  </h1>
          <Chooseteacher :id="state.id" />
        </div>
        <div class="year2">
          <h1><i class="fa fa-list"></i> الدورات   </h1>
          <Choosecourse :id="state.id" />
        </div>
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
import Footer from "../../components/Footer.vue";
import Header from "../../components/Header.vue";
import AsideBar from "../../components/WebsiteAsideBar.vue";
import { reactive } from 'vue';
import Choosecourse from '@/components/website/chooseBranch/choosecourse.vue';
import Chooseteacher from '@/components/website/chooseBranch/chooseteacher.vue';
export default {
  components: {
    Footer,AsideBar,Header
    ,Choosecourse,  Chooseteacher
  },
  props: {
    id: String,
    name: String,
  },
  setup(props) {
    const state = reactive({
      name: props.name,
      id: props.id
    });
    // console.log(props);
    return { state };
  },



}
</script >


<style lang="scss">

.teacher{
  h3{
    color: var(--darker-blue);
  }
}
</style>
<!-- .nav-tabs .nav-link:focus, .nav-tabs .nav-link:hover {
    isolation: isolate;
    border-color: var(--bs-nav-tabs-link-hover-border-color);
} -->