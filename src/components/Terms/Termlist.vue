<template>
  <div class="row">
    <div
      style="display: flex; justify-content: space-between"
      class="col-lg-12 col-md-12"
    >
      <div class="mt-30">
        <label> <i class="fas fa-list"></i>الترم</label>
      </div>
      <div class="content-action-btns">
        <router-link :to="{ name: 'CreateTerm' }"
          ><i class="fas fa-plus-circle"></i> اضافة ترم جديد</router-link
        >
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-sm-12 col-md-6">
      <div class="left">
        <span>بحث : </span>
        <input
          type="text"
          placeholder="البحث عن ترم"
          v-model="search"
          @keyup="searchTerm(search)"
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
              <th class="open cell-ta" scope="col">الترم الدراسي</th>
              <th class="cell-ta" scope="col">السنه الدراسيه</th>
              <th class="cell-ta" scope="col">متاح</th>
            </tr>
          </thead>
          <tbody>
            <Terms v-for="term in displayItems" :key="term.id" :term="term" />
          </tbody>
        </table>
        <div class="alert alert-info mt-2" v-if="!displayItems.length">
          لا توجد نتائج لعرضها !
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Terms from "./Terms.vue";
export default {
  components: { Terms },
  data() {
    return {
      search: "",
      items: [],
      displayItems: [],
    };
  },
  async mounted() {
    await axios
      .get("api_dashboard/semesters")
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
    searchTerm(key) {
      this.displayItems = this.items.filter((item) =>
        item.name.toLowerCase().includes(key.toLowerCase())
      );
    },
  },
};
</script>

<style lang="scss"></style>
