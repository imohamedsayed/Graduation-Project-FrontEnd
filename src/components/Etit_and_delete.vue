<template>
  <div class="btnDI">
    <router-link :to="{name: 'Update_Manger'}" class="btn">تعديل</router-link>
    <a  class="btn" @click="Delete()"> حذف</a>
  </div>
  
</template>
<script>

export default{
  data(){
    return open
  },
  setup(props)
    {
      const {value}=props.params;
      function Delete(){
        Swal.fire({
          title: 'هل انت متاكد',
          text: "لن تتمكن من التراجع عن هذا!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#363062',
          cancelButtonColor: '#d33',
          confirmButtonText: 'نعم ، احذفها!',
          cancelButtonText: 'لا ، إلغاء!',
      }).then((result) =>
      {
        if (result.isConfirmed) {
          Swal.fire(
            'تم الحذف!',
            'تم حذف الفرع',
            'نجاح'
          )
        }
      })
    }
      return {value,Delete };
    }

}

</script>

<style>
.btnDI
{
  width: 100%;
  display: flex;
  margin-top: 5px;
  direction: rtl;
  gap: 5px;
  justify-content: center;
  align-items: center;
}
.btnDI a
{
  background-color: var(--darker-blue) !important;
  padding: 0px 10px !important;
  color: white !important;
  /* margin-left: 5px; */
}
</style>