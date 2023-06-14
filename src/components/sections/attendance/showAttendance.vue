<template>
  <div class="students-list">
    <div class="row">
      <div class="col-10">
        <h4><i class="fa-solid fa-list-ul ms-3"></i>قائمة الطلاب</h4>
        <input
          type="text"
          placeholder="ابحث عن طالب معين"
          v-model="state.search"
          @keyup="searchStudent(state.search)"
          class="search2"
        />
      </div>
      <div class="col-2 mt-3">
        <div class="save-btn text-center" @click="Savedata()">Save</div>
      </div>
    </div>
    <div class="list">
      <table class="stu-list">
        <tr dir="rtl">
          <th>كود الطالب</th>
          <th>الاسم</th>
          <th>تاريخ الانضمام</th>
          <th>الحضور</th>
        </tr>
        <tr
          class="app-stu"
          v-for="student in state.displayItems"
          :key="student.id"
        >
          <td>{{ student.id }}</td>
          <td>{{ student.full_name }}</td>
          <td>{{ student.created_at }}</td>
          <td v-if="student.attendances">
            <select
              class="form-control"
              ref="mySelect"
              v-model="state.attendances[student.id]"
              @change="attendance(student.id, state.attendances[student.id])"
            >
              <option value="5" disabled>اختر من القائمة</option>
              <option
                value="2"
                :selected="student.attendances.status[0] == '2'"
              >
                حضر ودفع
              </option>
              <option
                value="1"
                :selected="student.attendances.status[0] == '1'"
              >
                حضر ولم يدفع
              </option>
              <option
                value="0"
                :selected="student.attendances.status[0] == '0'"
              >
                غاب
              </option>
            </select>
          </td>
          <td v-else>
            <select
              class="form-control"
              ref="mySelect"
              v-model="state.attendances[student.id]"
              @change="attendance(student.id, state.attendances[student.id])"
            >
              <option value="5" disabled selected>اختر من القائمة</option>
              <option value="2">حضر ودفع</option>
              <option value="1">حضر ولم يدفع</option>
              <option value="0">غاب</option>
            </select>
          </td>
        </tr>
      </table>
      <div class="alert alert-info mt-2" v-if="!state.displayItems.length">
        لا توجد نتائج لعرضها !
      </div>
    </div>
  </div>
  <teleport to="body">
    <Toast :theme="toast.theme" :showNotification="toast.showNotification">
      <p>{{ toast.notify }}</p>
    </Toast>
  </teleport>
</template>

<script>
import ApplicantStudent from "./attendabceList.vue";
import axios from "axios";
import Toast from "@/components/Toast.vue";

import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { reactive, computed, onMounted, ref } from "vue";
export default {
  components: { ApplicantStudent, Toast },
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
    const data = reactive({
      class_room_id: room_id,
      appointment_id: appointment_id,
      attendances: {},
    });
    onMounted(async () => {
      if (state.user == null || state.user.role_id != 3) {
        router.push("/dashboard/login");
      } else {
        let res = await axios.get(
          "api_dashboard/all-students-classroom/" +
            room_id +
            "/" +
            props.appointment_id
        );
        if (res.status == 200) {
          console.log(res.data.data.allStudent);
          state.displayItems = res.data.data.allStudent;
          state.items = state.displayItems;

          // get attendances
        }
      }
    });

    //notification
    const toast = reactive({
      showNotification: false,
      theme: "",
      notify: "",
    });

    const notification = (theme, message) => {
      toast.theme = theme;
      toast.notify = message;
      toast.showNotification = true;
      setTimeout(() => {
        toast.showNotification = false;
      }, 2000);
    };

    // Take Student Attendanc
    const attendance = (std_id, value) => {
      data.attendances[std_id] = value;
    };

    // Save  Students Attendanc
    const Savedata = async () => {
      await axios
        .post("api_dashboard/attendance", data)
        .then((res) => {
          notification("success", "Data Saved Successfully");
          console.log(res);
        })
        .catch((err) => {
          notification("error", err.response.data.errors);
          console.log(err);
        });
    };

    const searchStudent = (key) => {
      state.displayItems = state.items.filter((item) =>
        item.full_name.includes(key)
      );
    };

    return { attendance, state, toast, searchStudent, Savedata };
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

.save-btn {
  cursor: pointer;
  padding: 5px 15px;
  background: var(--darker-blue);
  color: white !important;
  margin: 5px 0;
  border-radius: 15px;
}

.search2 {
  width: 35% !important;
}
</style>
