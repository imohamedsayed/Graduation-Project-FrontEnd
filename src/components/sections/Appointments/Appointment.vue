<template>
  <tr class="app-ap" v-if="exists">
    <td>{{ appointment.id }}</td>
    <td>{{ appointment.class }}</td>
    <td>{{ appointment.date }}</td>
    <td class="d-flex justify-content-center w-100">
      <button
        class="btn btn-primary ms-lg-5 ms-2 approve"
        @click="
          $router.push({
            name: 'edit_appointment',
            params: { id: appointment.id },
          })
        "
      >
        تعديل
      </button>
      <button class="btn btn-danger reject" @click="Delete()">حذف</button>
    </td>
  </tr>
</template>

<script>
export default {
  props: ["appointment"],
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
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("تم !", "تم حذف الموعد ", "نجاح");
          this.exists = false;
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
