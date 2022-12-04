<template>
  <tr>
    <td class="check" @click="openProparties()" >{{id}}  
      <i v-if="opened"  class="fa fa-circle-plus plus "></i>
      <i v-else class="fa-solid fa-circle-minus minus"></i>
    </td>
    <td >{{name}}</td>
    <td class="open">{{email}}</td>
    <td class="open">{{password}}</td>
    <td class="open">{{salary}}</td>
    <td class="open">{{worktime}}</td>
  </tr>
  <tr class="close" v-if="!opened" >
    <td colspan="7">
      <ul>
      <li>الايميل
        <div>{{email}}</div>  
      </li>
      <li>الباسورد
        <div>{{password}}</div>
      </li>
      <li>الراتب
        <div>{{salary}}</div>
      </li>
      <li>مواعيد العمل
        <div>{{worktime}}</div>
      </li>
    </ul>
    </td>
  </tr>
  <tr v-if="!opened">
    <td colspan="7" >
      <div class="close"  >
          <ul>
            <div>الخصائص</div>
            <router-link  :to="{ name: 'UpdateAssistant' }"> <li>  <i  class="fa fa-pen-to-square"></i>   تعديل </li></router-link>
            <li  @click="Delete()">  <i class="fa fa-trash"></i>   حذف</li>
          </ul>
      </div>
    </td>
  </tr>
</template>

<script>
export default {
  name: "assistant",
  data(){
    return{
      id: 1,
      name:"ahmed",
      email:"a@test",
      password:"313131",
      salary:"2000$",
      worktime:"8 - 2",
      opened:true,
      }
  },
  methods:
  {
    openProparties()
    {
      if(this.opened)
      {
        this.opened=false
      }
      else
      {
        this.opened=true
      }
    },
    Delete(){
  Swal.fire({
  title: 'هل انت متاكد',
  text: "لن تتمكن من التراجع عن هذا!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#363062',
  cancelButtonColor: '#d33',
  confirmButtonText: 'نعم ، احذفها!',
  cancelButtonText: 'لا ، إلغاء!',
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire(
      'تم الحذف!',
      'تم حذف الفرع',
      'نجاح'
    )
  }
})
    }
  }
  
}
</script>

<style lang="scss">
tr{

  li
  {
    display: flex;
    justify-content: flex-start;
    gap: 20px;
    padding: 10px;
    border-bottom:1px solid #efefef;
    width: 100% !important;
    
  }
  
  div.close
  {
    display: flex;
    ul
    {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      @media (min-width:767px) {
        flex-direction: row;
      }
      li 
      {
        width: fit-content !important;
        border: none !important;
        background-color: var(--blue-color);
        border-radius: 5px;
        color: white !important;
        display: flex;
        justify-content: start;
        gap: 5px !important;
        align-items: center;
        cursor: pointer;
      }
      li:hover{
          background-color: var(--darker-blue) ;
        }
    }
  }
}
tr.close
{
  @media (min-width:767px) {
    display: none!important;
  }
}

td {
  width: fit-content !important;
  border-left: 1px solid #efefef !important;
  font-weight: 500;
  vertical-align : middle;
  .plus ,.minus{
    margin-right: 5px;
      color: var(--darker-blue);
      padding: 2px;
      background-color: #f7f7f7;
      border: var(--border);
      border-radius: 50%;
    }
  .minus
  {
    color: red;
    // display: none;
  }
}
td.check
{
  cursor: pointer;
}
.edit-class-form {
  label {
    margin: 5px 0 !important;
  }
  input {
    padding: 5px 15px !important;
    font-size: 1rem !important;
  }
}
</style>