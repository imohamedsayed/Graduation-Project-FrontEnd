<template>
  <div class="btnDI" >
    <a 
    @click="updated" 
    class="btn">
    تعديل</a>
    <a  class="btn" @click="Delete"> حذف</a>
  </div>
  
</template>
<script>
import axios from 'axios';
import { mapActions } from 'vuex';

export default {
  // props:['id'],
  data(){
    return {
      open,
      // id:this.id
    }
  },
  methods: {
    ...mapActions(['redirectTo']),
    updated() {
      this.redirectTo({
    name: "Update_Manger"
        ,params: {
          id: this.id,
        }
      })
      console.log(this.id)
    },
      Delete() {
      Swal.fire({
        title: 'هل انت متاكد',
        text: "لن تتمكن من التراجع عن هذا!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#363062',
        cancelButtonColor: '#d33',
        confirmButtonText: 'نعم ، احذفها!',
        cancelButtonText: 'لا ، إلغاء!',
      }).then(async (result) => {
        if(result.isConfirmed) {
          Swal.fire(
            'تم الحذف!',
            'تم حذف الفرع',
            'نجاح'
          );
          let deletemanger = await axios.delete(
            'api_dashboard/head-branch/' + this.id )
            .then((res) => {
              console.log(res.data)
              setTimeout(() => {
                location.reload();
              },1500)
              
            })
            .catch(error => {
              console.log(error)
              console.log(error.response.data.errors);
              console.log(error.response.data.message);
            });
        }
      })
    }
    
  },
  setup(props)
    {
      const id=props.params.data.id;
    const name = props.params.data.Name;
    
      return { id,name };
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