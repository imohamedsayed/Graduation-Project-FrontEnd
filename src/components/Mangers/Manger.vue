<template>
  <tr >
    <td>{{id}}  
    </td>
    <td >{{name}}</td>
    <td >{{eamil}}</td>
    <td >{{branch}}</td>
    <td ><ul>
      <li class="btn">
        <router-link :to="{name: 'EditeCourse'}">
          <i class="fa fa-trash"></i>   تعديل
        </router-link> 
      </li>
      <li class="btn"  @click="Delete()"> 
          <i class="fa fa-trash"></i>  
          حذف</li>
    </ul></td>
  </tr>


</template>

<script>
export default {
  name: "Manger",
  data(){
    return{
      id: 1,
      name:"",
      eamil:"abc@gmail.com",
      branch:"اسيوط",
      }
  },
  methods:
  {
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
  }
}
</script>

<style lang="scss">
tr{
  ul
  {
    display: flex !important;
    flex-wrap: wrap;
    justify-content: center;
    gap: 8px;
    @media (min-width:767px) {
      flex-direction: row;
    }
    li {
      width: -moz-fit-content !important;
      width: fit-content !important;
      border: none !important;
      background-color: var(--darker-blue) !important;
      border-radius: 5px;
      display: flex;
      justify-content: start;
      gap: 5px !important;
      align-items: center;
      cursor: pointer;
      color: white !important;
      a{
      color: white !important;
      }
    }
    
  } 
}
td {
  width: fit-content !important;
  border-left: 1px solid #efefef !important;
  font-weight: 500;
  .plus ,.minus{
    margin-right: 5px;
      color: var(--light-blue) !important;
      padding: 2px;
      background-color: #f7f7f7;
      border: var(--border);
      border-radius: 50%;
    }
  .minus
  {
    color: red  !important;
  }
}

</style>