<template>
  <div class="row">
    <div
      style="display: flex; justify-content: space-between"
      class="col-lg-12 col-md-12"
    >
      <div class="mt-30">
        <label> <i class="fas fa-list"></i>الاساتذه</label>
      </div>
      <div class="content-action-btns">
        <router-link :to="{ name: 'CreateBranch' }"
          ><i class="fas fa-plus-circle"></i> اضافة استاذ جديد</router-link
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
          placeholder="ابحث عن استاذ جديد"
          v-model="search"
          @keyup="searchBranch(search)"
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
              <th class="open cell-ta" scope="col">اللقب</th>
              <th class="open cell-ta" scope="col">الايميل</th>
              <th class="open text-center" scope="col">رقم التلفون</th>
            </tr>
          </thead>
          <tbody>
            <Teacher
              v-for="teacher in displayItems"
              :key="teacher.id"
              :teacher="teacher"
            />
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
import Teacher from "./Teacher.vue";
export default {
  components: { Teacher },
  data() {
    return {
      search: "",
      items: [],
      displayItems: [],
    };
  },
  mounted() {
    this.items = [
      {
      id: 1,
      name:"احمد سامح ",
      nickname:"وحش الفيزياء",
      email:"0104@test",
      phone:"564564546",
      },
      {
      id: 2,
      name:"خيري",
      nickname:"عنتيل الكيمياء",
      email:"0104@test",
      phone:"564564546",
      },
      {
      id: 3,
      name:"محمود",
      nickname:"برنس الرياضيات",
      email:"0104@test",
      phone:"564564546",
      },
    ];
    this.displayItems = this.items;
  },
  methods: {
    searchBranch(key) {
      this.displayItems = this.items.filter((item) => item.name.includes(key));
    },
  },
};
</script>

<style lang="scss"></style>
