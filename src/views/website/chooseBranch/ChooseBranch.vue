<template>
  <StudentHeader />
  <div class="main-view">
    <AsideBar />
    <div class="chooseBranch">
      <div class="chooseBranch-con">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-12 text-center">
              <div class="title">
                <h4 class="item_title">
                  <i class="fa-solid fa-list"></i> الفروع المتاحه
                </h4>
              </div>
            </div>
            <div class="col-md-12">
              <chooseBranch
                v-for="branch in state.branchlist"
                :key="branch.id"
                :wbranch="branch"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "../../../components/Footer.vue";
import StudentHeader from "@/components/StudentHeader.vue";
import AsideBar from "../../../components/WebsiteAsideBar.vue";
import chooseBranch from "../../../components/website/chooseBranch/chooseBranchCompnonent.vue";

import { computed, onMounted, reactive } from "vue";
import axios from "axios";
import { useStore } from "vuex";
export default {
  components: { Footer, AsideBar, StudentHeader, chooseBranch },
  setup() {
    const state = reactive({
      branchlist: [],
      student: computed(() => useStore().state.user),
    });

    onMounted(async () => {
      await axios
        .get("/api/branches")
        .then((res) => {
          state.branchlist = res.data.data;
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
  margin-right: 20rem;
  margin-left: 20rem;

  @media (max-width: 991px) {
    margin-right: 0;
    margin-left: 0rem;
  }
}

.chooseBranch-con {
  direction: rtl;
  padding: 30px 20px;
  width: 100%;
  margin-right: 20px;
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
  color: var(--light-blue);
  line-height: 1.2;
}

.chooseBranch-con .item_title i {
  color: var(--light-blue);
  margin-left: 10px;
  font-size: 22px;
}
</style>
