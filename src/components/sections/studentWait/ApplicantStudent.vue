<template>
  <tr class="app-stu" v-if="exists">
    <td>{{ student.id }}</td>
    <td> {{ student.f_name }}  {{ student.m_name }} {{ student.l_name }}</td>
    <td>{{ student.created_at }}</td>
    <td class="d-flex justify-content-center w-100">
      <button class="btn btn-success ms-lg-5 ms-2 approve" @click="approve()">
        قبول
      </button>
      <button class="btn btn-danger reject" @click="Delete()">رفص</button>
    </td>
  </tr>
</template>

<script>
import axios from "axios";
export default {
  props: ["student", "cid"],
  data() {
    return {
      exists: true,
    };
  },
  mounted() {
    console.log(this.student);
  },
  methods: {
    approve() {
      Swal.fire({
        title: "هل انت متاكد",
        icon: "success",
        showCancelButton: true,
        confirmButtonColor: "#363062",
        cancelButtonColor: "#d33",
        confirmButtonText: "قبول الطالب",
        cancelButtonText: "لا ، إلغاء!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const data = {
            classroom_id: this.student.room_id,
            student_id: this.student.id,
          };
          console.log(data);
          await axios
            .post("/api_dashboard/accept-all-student-classroom", data)
            .then((res) => {
              Swal.fire("تم !", "تم قبول الطالب ", "نجاح");
              this.exists = false;
            });
        }
      });
    },
    Delete() {
      Swal.fire({
        title: "هل انت متاكد",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#363062",
        cancelButtonColor: "#d33",
        confirmButtonText: "رفض",
        cancelButtonText: "لا ، إلغاء!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const data = {
            classroom_id: this.student.room_id,
            student_id: this.student.id,
          };
          console.log(data);
          await axios
            .post("/api_dashboard/accept-all-student-classroom", data)
            .then((res) => {
              Swal.fire("تم !", "تم رفض الطالب ", "نجاح");
              this.exists = false;
            });
        }
      });
    },
  },
};
</script>

<style lang="scss">
.app-stu {
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
