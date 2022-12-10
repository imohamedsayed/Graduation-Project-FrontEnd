<template>
  <div class="row">
    <div
      style="display: flex; justify-content: space-between"
      class="col-lg-12 col-md-12"
    >
      <div class="mt-30">
        <label> <i class="fas fa-list"></i>الفروع</label>
      </div>
      <div class="content-action-btns">
        <router-link :to="{ name: 'CreateBranch' }"
          ><i class="fas fa-plus-circle"></i> اضافة فرع جديد</router-link
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
          placeholder="ابحث عن فرع معين"
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
              <th class="open cell-ta" scope="col">العنوان</th>
              <th class="open cell-ta" scope="col">التلفون</th>
              <th class="open text-center" scope="col">الخط الساخن</th>
              <th class="open text-center" scope="col">الخريطه</th>
            </tr>
          </thead>
          <tbody>
            <Branches
              v-for="branch in displayItems"
              :key="branch.id"
              :branch="branch"
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
import Branches from "./Branches.vue";
export default {
  components: { Branches },
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
        name: "القاهره",
        address: "القاهره مدينه الزمالك شارع 15 بجوار مطعم كنتاكي",
        phone: "01013367584",
        hotline: "4544545",
        src: "career-1.jpg",
      },
      {
        id: 2,
        name: "اسيوط",
        address: "القاهره مدينه الزمالك شارع 15 بجوار مطعم كنتاكي",
        phone: "01013367584",
        hotline: "4544545",
        src: "career-1.jpg",
      },
      {
        id: 3,
        name: "اسوان",
        address: "القاهره مدينه الزمالك شارع 15 بجوار مطعم كنتاكي",
        phone: "01013367584",
        hotline: "4544545",
        src: "career-1.jpg",
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
