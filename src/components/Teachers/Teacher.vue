<template>
  <tr v-if="exists">
    <td class="check" @click="openProparties()" >{{teacher.id}}  
      <i v-if="opened"  class="fa fa-circle-plus plus "></i>
      <i v-else class="fa-solid fa-circle-minus minus"></i>
    </td>
    <td >{{teacher.name}}</td>
    <td class="open">{{teacher.nick_name }}</td>
    <!-- <td class="open">{{teacher.email}}</td> -->
    <td class="open">{{teacher.phone_number }}</td>
  </tr>
  <tr class="close" v-if="!opened  & exists" >
    <td colspan="7">
      <ul>
      <li>اللقب
        <div>{{teacher.nick_name }}</div>  
      </li>
      <!-- <li>الايميل
        <div>{{teacher.email}}</div>
      </li> -->
      <li>رقم التلفون
        <div>{{teacher.phone_number }}</div>
      </li>
    </ul>
    </td>
  </tr>
  <tr v-if="!opened  & exists">
    <td colspan="7" >
      <div class="close"  >
          <ul>
            <div>الخصائص</div>
          <li
            @click="
              $router.push({
                name: 'UpdateTeacher',
                params: { id: teacher.id,       },
              })
            "
          >
            <i class="fa fa-pen-to-square"></i> تعديل
          </li>            <li  @click="Delete()">  <i class="fa fa-trash"></i>   حذف</li>
          </ul>
      </div>
    </td>
  </tr>
</template>

<script>
import axios from 'axios'
export default {
  props:["teacher"],
  name: "teacher",
  data(){
    return{
      opened:true,
      exists: true,
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
    Delete() {
      Swal.fire({
        title: "هل انت متاكد",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#363062",
        cancelButtonColor: "#d33",
        confirmButtonText: "حذف",
        cancelButtonText: "لا ، إلغاء!",
      }).then(async(result) => {
        if (result.isConfirmed) {
          Swal.fire("تم !", "تم حذف المدرس", "نجاح");
          this.exists = false;
          await axios.delete(
            'api_dashboard/teachers/' + this.teacher.id)
            .then((res) => {
              console.log(res.data)
            })
            .catch(error => {
              console.log(error)
              console.log(error.response.data.errors);
              console.log(error.response.data.message);
            });
        }
      });
    },
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
.thumb_img
  {
    width: 100px;
    margin: 0 auto;
    
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