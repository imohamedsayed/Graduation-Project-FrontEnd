<template>
  <div class="students-list">
    <h4><i class="fa-solid fa-list-ul ms-3"></i>قائمة المواعيد</h4>
    <input
      type="text"
      placeholder="ابحث عن موعد معين"
      v-model="search"
      @keyup="searchStudent(search)"
    />
    <div class="list">
      <table class="ap-list">
        <tr dir="rtl">
          <th>#</th>
          <th>اسم الدرس</th>
          <th>الموعد</th>
          <th>خيارات</th>
        </tr>
        <Appointment
          v-for="appointment in displayItems"
          :key="appointment.id"
          :appointment="appointment"
        />
      </table>
      <div class="alert alert-info mt-2" v-if="!displayItems.length">
        لا توجد نتائج لعرضها !
      </div>
    </div>
  </div>
</template>

<script>
import Appointment from "./Appointment.vue";
export default {
  components: { Appointment },
  data() {
    return {
      search: "",
      items: [],
      displayItems: [],
    };
  },
  mounted() {
    this.items = [
      { id: 1, class: "فيزياء", date: "20/7/2022" },
      { id: 2, class: "فيزياء", date: "20/7/2022" },
      { id: 3, class: "عربي", date: "20/7/2022" },
    ];
    this.displayItems = this.items;
  },
  methods: {
    searchStudent(key) {
      this.displayItems = this.items.filter((item) => item.class.includes(key));
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
