<template>
    <tr class="app-stu" v-if="exists">
      <td>{{ student.id }}</td>
      <td>{{ student.name }}</td>
      <td>{{ student.date }}</td>
      <td class="d-flex justify-content-center w-100">
      <button class="btn btn-danger reject" @click="Delete()">حذف</button>
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
          // try {
          //   let res = await axios.delete(
          //     "api_dashboard/appointment/" 
          //   );
          //   //console.log(res);
          //   Swal.fire("تم !", "تم حذف الموعد ", "نجاح");
            this.exists = false;
          // } catch (err) {
          //   console.log(err);
          // }
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
  