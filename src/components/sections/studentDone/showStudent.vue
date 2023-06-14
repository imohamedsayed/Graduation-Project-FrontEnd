<template>
  <div class="students-list">
    <h4><i class="fa-solid fa-list-ul ms-3"></i>قائمة الطلاب</h4>
    <input
      type="text"
      placeholder="ابحث عن طالب معين"
      v-model="state.search"
      @keyup="searchStudent(state.search)"
    />
    <div class="list">
      <table class="stu-list">
        <tr dir="rtl">
          <th>كود الطالب</th>
          <th>الاسم</th>
          <th>تاريخ الانضمام</th>
          <th>الخصائص</th>
        </tr>
        <ApplicantStudent
          v-for="student in state.displayItems"
          :key="student.id"
          :student="student"
        />
      </table>
      <div class="alert alert-info mt-2" v-if="!state.displayItems.length">
        لا توجد نتائج لعرضها !
      </div>
    </div>
  </div>
</template>

<script>
import ApplicantStudent from "./studentTable.vue";

import { reactive, computed, onMounted } from "vue";

import { useStore } from "vuex";
import { useRouter } from "vue-router";
import axios from "axios";

export default {
  components: { ApplicantStudent },
  props: {
    room_id: String,
  },
  setup(props) {
    const store = useStore();
    const router = useRouter();
    const state = reactive({
      user: computed(() => store.state.user),
      search: "",
      items: [],
      displayItems: [],
    });
    onMounted(async () => {
      if (state.user == null) {
        router.push("/dashboard/login");
      } else {
        if (state.user.role_id != 3) {
          router.push("/dashboard");
        }
      }
      await axios
        .get(
          "api_dashboard/all-students-classroom_based_on_status/" +
            props.room_id +
            "/" +
            3
        )
        .then((res) => {
          state.items = Array.from(res.data.data.allStudent);
          state.displayItems = state.items;
        });
    });
    let searchStudent = (key) => {
      this.displayItems = this.items.filter((item) => item.full_name.includes(key));
    };
    return { state, searchStudent };
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
