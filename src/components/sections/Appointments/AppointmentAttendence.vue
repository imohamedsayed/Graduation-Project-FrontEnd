<template>
  <tr class="app-ap" v-if="exists">
    <td>{{ state.appointment.id }}</td>
    <td>{{ state.appointment.day }}</td>
    <td>{{ state.appointment.from }} : {{ state.appointment.to }}</td>
    <td class="d-flex justify-content-center  gap-5 w-100">
      <button
        @click="
          $router.push({
            name: 'studentAttendance',
            params: { id: state.appointment.cid, AId: state.appointment.id },
          })
        "
      >
        تسجيل الحضور 
      </button>
      <button
          @click="
            $router.push({
              name: 'showStudentAttendance',
              params: { id: state.appointment.cid, AId: state.appointment.id },
            })
            "
        >
          عرض الطلاب
        </button>
    </td>
  </tr>
</template>

<script>
import { reactive, onMounted, computed } from "vue";
import axios from "axios";

export default {
  props: ["appointment"],
  setup(props) {
    const state = reactive({
      appointment: props.appointment,
    });

    return { state };
  },
  data() {
    return {
      exists: true,
    };
  },
  methods: {
    Delete() {
      Swal.fire({
        title: "هل انت متاكد",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#363062",
        cancelButtonColor: "#d33",
        confirmButtonText: "حذف",
        cancelButtonText: "لا ، إلغاء!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          try {
            let res = await axios.delete(
              "api_dashboard/appointment/" + this.appointment.id
            );
            //console.log(res);
            Swal.fire("تم !", "تم حذف الموعد ", "نجاح");
            this.exists = false;
          } catch (err) {
            console.log(err);
          }
        }
      });
    },
  },
};
</script>

<style lang="scss">
.app-ap {
  transition: all 0.3s ease;
  &:hover {
    background: rgba($color: #000000, $alpha: 0.1);
  }
  button {
    &.approve {
      background: #4caf50 !important;
    }
    &.reject {
      background: #e91e63 !important;
    }
  }
}
</style>
