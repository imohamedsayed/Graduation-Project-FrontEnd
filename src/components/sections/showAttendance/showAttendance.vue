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
          <th>الحاله</th>
          <!-- <th>الخصائص</th> -->
        </tr>
        <showAttendabceList
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
import axios from "axios";
import Toast from "@/components/Toast.vue";

import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { reactive,computed,onMounted,ref } from "vue";
import showAttendabceList from "./showAttendabceList.vue";
export default {
  components: { showAttendabceList,Toast },
  props: {
    appointment_id: String,
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
      attendances: {},
    });
    const room_id = props.room_id;
    const appointment_id = props.appointment_id;
    onMounted(async () => {
      if(state.user == null || state.user.role_id != 3) {
        router.push("/dashboard/login");
      } else {
        let res = await axios.get(
          "api_dashboard/all-students-classroom/" +
          room_id +
          "/" +
          appointment_id
        );
        if(res.status == 200) {
          // console.log(res.data.data.allStudent);
          state.displayItems = res.data.data.allStudent;
          state.items = state.displayItems;

        }
      }
    });

    //notification
    const toast = reactive({
      showNotification: false,
      theme: "",
      notify: "",
    });

    const notification = (theme,message) => {
      toast.theme = theme;
      toast.notify = message;
      toast.showNotification = true;
      setTimeout(() => {
        toast.showNotification = false;
      },2000);
    };

  



    const searchStudent = (key) => {
      state.displayItems = state.items.filter((item) =>
        item.full_name.includes(key)
      );
    };

    return { state,toast,searchStudent };
  },
};
</script>

<style lang="scss" scoped>
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
  .list , .app-stu-data{
    @media (max-width: 767px) {
    margin-right: -30px !important;
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
        width: 30%;
      }
      &:last-of-type {
        width: 20%;
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
