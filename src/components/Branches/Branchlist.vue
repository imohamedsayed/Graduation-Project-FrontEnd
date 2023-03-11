<template>
  <div class="row">
    <div style="display: flex; justify-content: space-between" class="col-lg-12 col-md-12">
      <div class="mt-30">
        <label> <i class="fas fa-list"></i>الفروع</label>
      </div>
      <div class="content-action-btns">
        <router-link :to="{ name: 'CreateBranch' }"><i class="fas fa-plus-circle"></i> اضافة فرع جديد</router-link>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-sm-12 col-md-6">
      <div class="left">
        <span>بحث : </span>
        <input type="text" placeholder="البحث عن فرع" v-model="search" @keyup="searchBranch(search)" />
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
            <Branches v-for="branch in displayItems" :key="branch.id" :branch="branch" />
          </tbody>
        </table>
        <div class="alert alert-info mt-2" v-if="!displayItems.length"> لا توجد نتائج لعرضها ! </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
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
  async mounted() {
    let token = "Bearer " + localStorage.getItem('manger');
    let Branchs = await axios.get(
      'http://127.0.0.1:8000/api_dashboard/branches',
      {
        headers:
        {
          'Authorization': `token ${ token }`
        }
      }
    )
      .then((res) => {
        // this.save = true;
        this.displayItems = res.data.data;
        this.items = res.data.data;
      })
      .catch(error => {
        console.log(error)
        console.log(error.response.data.errors);
      });
    // this.displayItems = this.items;
  },
  methods: {
    searchBranch(key) {
      this.displayItems = this.items.filter((item) => item.name.toLowerCase().includes(key.toLowerCase()));
    },
  },
};
</script>

<style lang="scss"></style>
