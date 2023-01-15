<template>
  <div class="btnDI" >
    <a 
    @click="
    $router.push({
                name: edit,
                params: { 
                  id: id,
                  name:name,
                  },
              })"
    class="btn">
    تعديل</a>
    <a  class="btn" @click="Delete()"> حذف</a>
  </div>
  
</template>
<script>

export default{
  data(){
    return {open,
    }
  },
  methods: {

  },
  setup(props)
    {
      const {value}=props.params;
      const {edit}=props.params;
      const id=props.params.data.ID;
      const name=props.params.data.Name;
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
          );

        }
      })
    }
      return {value,Delete ,edit,id,name};
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