<template>
  <div class="students-list">
    <h4><i class="fa-solid fa-list-ul ms-3"></i>قائمة الامتحانات</h4>
    <input
      type="text"
      placeholder="ابحث عن طالب معين"
      v-model="search"
      @keyup="searchStudent(search)"
    />
    <div class="list">
      <table class="stu-list">
        <tr dir="rtl">
          <th>الاسم</th>
          <th>الوصف</th>
          <th>تاريخ البدء</th>
          <th>تاريخ الانتهاء</th>
          <th>الحاله</th>
          <th>الاسئله</th>
        </tr>
        <Exam
          v-for="student in displayItems"
          :key="student.name"
          :student="student"
        />
      </table>
      <div class="alert alert-info mt-2" v-if="!displayItems.length">
        لا توجد نتائج لعرضها !
      </div>
    </div>
  </div>
</template>

<script>
import Exam from "./Exam.vue";
export default {
  components: { Exam },
  data() {
    return {
      search: "",
      items: [],
      displayItems: [],
    };
  },
  mounted() {
    this.items = [
      {id: 1, name: "arabic", decs: "اخر شابتر", startDate: "20/7/2022",endDate: "20/7/2022" },
      {id: 2, name: "arabic", desc: "اخر شابتر", startDate: "20/7/2022", endDate: "20/7/2022" },
      {id: 3, name: "arabic", desc: "اخر شابتر", startDate: "20/7/2022", endDate: "20/7/2022" },
    ];
    this.displayItems = this.items;
  },
  methods: {
    searchStudent(key) {
      this.displayItems = this.items.filter((item) => item.name.includes(key));
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
  .stu-list {
    width: 100%;
    margin-top: 30px;
    td,
    th {
      &:first-of-type {
        width: 30%;
      }
      &:nth-of-type(2) {
        width: 15%;
      }
      &:nth-of-type(3) {
        width: 15%;
      }
      &:nth-of-type(4) {
        width: 15%;
      }
      &:nth-of-type(5) {
        width: 10%;
      }
      &:last-of-type {
        width: 15%;
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
