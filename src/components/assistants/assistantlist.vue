<template>
  <div class="row">
    <div
      style="display: flex; justify-content: space-between"
      class="col-lg-12 col-md-12"
    >
      <div class="mt-30">
        <label> <i class="fas fa-list"></i>المساعدين</label>
      </div>
      <div class="content-action-btns">
        <router-link :to="{ name: 'CreateAssistant' }"
          ><i class="fas fa-plus-circle"></i> اضافة مساعد جديد</router-link
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
          placeholder="البحث عن مساعد"
          v-model="search"
          @keyup="searchAssistant(search)"
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
                <th class=" text-center" scope="col">#</th>
                <th class=" cell-ta" scope="col">الاسم</th>
                <th class="open cell-ta" scope="col">الايميل</th>
                <th class="open text-center" scope="col">الراتب</th>
                <th class="open text-center" scope="col"> من الساعة</th>
                  <th class="open text-center" scope="col">الى الساعة </th>
            </tr>
          </thead>
          <tbody>
            <assistants
              v-for="assistant in displayItems"
              :key="assistant.id"
              :assistant="assistant"
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
import axios from 'axios';
import assistants from "./assistants.vue";
export default {
  components: { assistants },
  data() {
    return {
      search: "",
      items: [],
      displayItems: [],
    };
  },
  async mounted() {
    let Branchs = await axios.get(
      'api_dashboard/assistants')
      .then((res) => {
        this.displayItems = res.data.data;
        this.items = res.data.data;
        // console.log(res.data.data);
      })
      .catch(error => {
        console.log(error)
        console.log(error.response.data.errors);
      });
    // this.displayItems = this.items;
  },
  methods: {
    searchAssistant(key) {
      this.displayItems = this.items.filter((item) => item.name.toLowerCase().includes(key.toLowerCase()));
    },
  },
};
</script>

<style lang="scss">

</style>
