<template>
  <StudentHeader />
  <div class="main-view">
    <AsideBar />
    <div class="chooseBranch">
      <div class="chooseBranch-con">
        <div class="container-fluid">
          <div class="row m-0">
            <div class="col-12 text-center">
              <div class="title">
                <h4 class="item_title">
                  <i class="fa-solid fa-list"></i> الفروع المتاحه
                </h4>
              </div>
            </div>
            <div class="col-12">
              <chooseBranch
                v-for="branch in state.branchlist"
                :key="branch.id"
                :wbranch="branch"
              />
            </div>
          </div>
        </div>
      </div>
          <Footer />
    </div>

  </div>
  <SpinnerLoading :loading="state.loading" />
</template>

<script>
import Footer from "../../../components/Footer.vue";
import StudentHeader from "@/components/StudentHeader.vue";
import AsideBar from "../../../components/WebsiteAsideBar.vue";
import chooseBranch from "../../../components/website/chooseBranch/chooseBranchCompnonent.vue";
import { computed, onMounted, reactive } from "vue";
import axios from "axios";
import { useStore } from "vuex";
import SpinnerLoading from "@/components/SpinnerLoading.vue";
export default {
  components: { Footer, AsideBar, StudentHeader, chooseBranch, SpinnerLoading },
  setup() {
    const state = reactive({
      branchlist: [],
      student: computed(() => useStore().state.user),
      loading: true,
    });

    onMounted(async () => {
      await axios
        .get("/api/branches")
        .then((res) => {
          state.branchlist = res.data.data;
          state.loading = false;
        })
        .catch((error) => {
          console.log(error);
          console.log(error.response.data.errors);
        });


        
    });
    return { state };
  },
};
</script>

<style lang="scss">
.chooseBranch {
  margin-right: 15rem;

  @media (max-width: 991px) {
    margin-right: 0;
  }
}

.chooseBranch-con {
  direction: rtl;
  padding: 30px 20px;
  width: 100%;
  // margin-right: 20px;
}

.title {
  direction: rtl;
  margin-bottom: 30px;
  float: right;
  width: 100%;
}

.chooseBranch-con .item_title {
  margin-bottom: auto;
  font-size: 20px;
  font-weight: bold;
  color: black;
  line-height: 1.2;
}

.chooseBranch-con .item_title i {
  color: var(--light-blue);
  margin-left: 10px;
  font-size: 22px;
}
</style>
