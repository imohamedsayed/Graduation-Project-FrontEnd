<template>
  <tr class="app-stu" v-if="exists">
    <td>{{ student.id }}</td>
    <td>{{ student.name }}</td>
    <td>{{ student.date }}</td>
    <td>
    حضر و دفع
    </td>
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
      status:true 
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

<style lang="scss" scoped>
td i{
background-color: var(--white-color);
color:var(--darker-blue);
font-size: 20px;
font-weight: bold;
}


</style>
