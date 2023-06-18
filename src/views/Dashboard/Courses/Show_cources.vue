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
                    <i class="fas fa-list"></i> عرض الدورات</label
                  >
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <div class="left">
                  <span>بحث : </span>
                  <input
                    v-model="search"
                    @keyup="searchcourse(search)"
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
                        <th class="open cell-ta" scope="col">متاح</th>
                        <th class="open text-center" scope="col">
                          السنة الدراسية
                        </th>
                        <th class="open text-center" scope="col">
                          الترم الدراسى
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <Course
                        v-for="cours in displayItems"
                        :key="cours.id"
                        :cours="cours"
                      />
                    </tbody>
                  </table>
                  <div
                    class="alert alert-info mt-2"
                    v-if="!displayItems.length"
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
import Course from "../../../components/Courses/Course";
import axios from "axios";
export default {
  name: "ShowCources",
  components: { Footer, AsideBar, Header, Course },
  data() {
    return {
      search: "",
      items: [],
      displayItems: [],
    };
  },
  async mounted() {
    if (this.$store.state.user == null || this.$store.state.user.role_id != 3) {
      $this.$router.push("/");
    }

    await axios
      .get(
        "api_dashboard/subjects_get_by_branch_id/" +
          this.$store.state.user.exter_info.branch_id
      )
      .then((res) => {
        this.displayItems = res.data.data;
        this.items = res.data.data;
      })
      .catch((error) => {
        console.log(error);
        console.log(error.response.data.errors);
      });
  },
  methods: {
    searchcourse(key) {
      this.displayItems = this.items.filter((item) =>
        item.name.toLowerCase().includes(key.toLowerCase())
      );
    },
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
