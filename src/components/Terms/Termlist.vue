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
        <span >بحث : </span>
        <input
          type="text"
          placeholder="ابحث عن موعد معين"
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
              <th class="cell-ta" scope="col">السنه الدراسيه</th>
              <th class="open cell-ta" scope="col">الترم الدراسي</th>
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
  mounted() {
    this.items = [
      { id: 1, academicYear: "الاول الثانوي", term: "الترم الدراسي الثاني" },
      { id: 2, academicYear: "الثاني الثانوي", term: "الترم الدراسي الثاني" },
      { id: 3, academicYear: "الثالث الثانوي", term: "الترم الدراسي الثاني" },
    ];
    this.displayItems = this.items;
  },
  methods: {
    searchTerm(key) {
      this.displayItems = this.items.filter((item) => item.academicYear.includes(key));
    },
  },
};
</script>

<style lang="scss">
.students-list {
  h4 {
    color: var(--landing-blue);
  }
  input {
    margin-top: 40px;
    width: 25%;
    height: 30px;
    border-radius: 10px;
    padding: 10px 20px;
    border: 1px solid var(--landing-blue);
    transition: all 0.3s ease;
    &:focus {
      outline: none;
      transform: scale(1.01);
    }
  }
  .ap-list {
    width: 100%;
    margin-top: 30px;
    td,
    th {
      &:first-of-type {
        width: 15%;
      }
      &:nth-of-type(2) {
        width: 40%;
      }
      &:last-of-type {
        width: 10%;
      }
      padding: 10px 8px;
      border: 1px solid rgba(119, 119, 119, 0.239);
    }
    th {
      background: var(--darker-blue);
      color: white;
    }
  }
}
</style>
