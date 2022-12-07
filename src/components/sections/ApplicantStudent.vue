<template>
  <tr class="app-stu" v-if="exists">
    <td>{{ student.id }}</td>
    <td>{{ student.name }}</td>
    <td>{{ student.date }}</td>
    <td class="d-flex justify-content-center w-100">
      <button class="btn btn-success ms-lg-5 ms-2 approve" @click="approve()">
        قبول
      </button>
      <button class="btn btn-danger reject" @click="Delete()">رفص</button>
    </td>
  </tr>
</template>

<script>
export default {
  props: ["student"],
  data() {
    return {
      exists: true,
    };
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
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("تم !", "تم قبول الطالب ", "نجاح");
          this.exists = false;
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
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("تم !", "تم رفض الطالب ", "نجاح");
          this.exists = false;
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
