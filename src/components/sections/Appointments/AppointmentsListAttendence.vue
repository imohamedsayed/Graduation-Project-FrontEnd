<template>
  <div class="students-list">
    <h4><i class="fa-solid fa-list-ul ms-3"></i>قائمة المواعيد</h4>
    <input
      type="text"
      placeholder="ابحث عن موعد معين"
      v-model="state.search"
      @keyup="searchAppointment(state.search)"
    />
    <div class="list">
      <table class="ap-list">
        <tr dir="rtl">
          <th>#</th>
          <th>اليوم</th>
          <th>الموعد</th>
          <th style="width: 20%">خيارات</th>
        </tr>
        <Appointment
          v-for="appointment in state.displayItems"
          :key="appointment.id"
          :appointment="{ ...appointment, cid: classId }"
        />
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
import Appointment from "./AppointmentAttendence.vue";
import { reactive, onMounted, computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import Toast from "@/components/Toast.vue";
import axios from "axios";

export default {
  components: { Appointment, Toast },
  props: {
    classId: String,
  },
  setup(props) {
    const state = reactive({
      user: computed(() => useStore().state.user),
      search: "",
      items: [],
      displayItems: [],
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

    onMounted(async (message) => {
      if (state.user == null || state.user.role_id != 3) {
        useRouter().push("/dashboard/login");
      } else {
        try {
          let appointments = await axios.get(
            "api_dashboard/appointment_get_by_classroom_id/" + props.classId
          );

          if (appointments.status == 200) {
            state.items = appointments.data.data;
            state.displayItems = appointments.data.data;
          }
        } catch (err) {
          notification("error", err.response.data.message);
        }
      }
    });

    const searchAppointment = (key) => {
      state.displayItems = state.items.filter((item) => item.day.includes(key));
    };

    return { state, searchAppointment, toast };
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
