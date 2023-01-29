<template>
  <tr v-if="dell">
    <td class="check" @click="opened=!opened" >{{id}}  
      <i v-if="opened"  class="fa fa-circle-plus plus "></i>
      <i v-else class="fa-solid fa-circle-minus minus"></i>
    </td>
    <td >{{cours.name}}</td>
    <td class="open"><div class="thumb_img"><img src="../../../public/images/courses/img-2.jpg" alt=""></div></td>
    <td class="open">{{cours.part}}</td>
    <td class="open">{{cours.class_num}}</td>
    <td class="open">{{cours.price}} EGP</td>
    <td class="open">{{cours.pays}}</td>
  </tr>
  <tr class="close" v-if="!opened" >
    <td colspan="7">
      <ul>
      <li >الصورة 
        <div ><img src="../../../public/images/courses/img-2.jpg" alt=""></div>  
      </li>
      <li >القسم 
        <div>{{cours.part}}</div>
      </li>
      <li >الصف
        <div>{{cours.class_num}}</div>
      </li>
      <li >السعر
        <div>{{cours.price}}</div>
      </li>
      <li >المبيعات
        <div>{{cours.pays}}</div>
      </li>
    </ul>
    </td>
  </tr>
  <tr v-if="!opened && dell">
    <td colspan="7" >
      <div class="close"  >
        <div>الخصائص</div>
          <ul>
            <li><a href="">  <i class="fas fa-list"></i>   المحتوى</a> </li>
            <li><a href="">  <i class="fas fa-list"></i>   الاختبارات</a> </li>
            <li><a href="">  <i class="fas fa-list"></i>   ورشة العمل</a> </li>
            <li><a href="">  <i class="fas fa-list"></i>   الاسئلة</a> </li>
            <li><a href="">  <i class="fas fa-list"></i>   التفريغات</a> </li>
            <li><a href="">  <i class="fas fa-list"></i>   الاعلامات</a> </li>
            <li class="btn" 
            @click="
              this.redirectTo({
                name: 'EditeCourse', params: {
                  id: cours.id,
                  } })
              
            " >             
            <i class="fa fa-trash"></i>   تعديل
          
            </li>
            <li class="btn"  @click="Delete()">  <i class="fa fa-trash"></i>   حذف</li>
          </ul>
      </div>
    </td>
  </tr>
</template>

<script>
import { mapActions } from 'vuex';
import axios from 'axios';
export default {
  name: "Course",
  props: ["cours"],
  data(){
    return{
      opened:true,
      dell: true,
      showEditForm: false,
      }
  },
  methods:
  {
    ...mapActions(['redirectTo']),
    async Delete() {
      Swal.fire({
        title: 'هل انت متاكد',
        text: "لن تتمكن من التراجع عن هذا!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#363062',
        cancelButtonColor: '#d33',
        confirmButtonText: 'نعم ، احذفها!',
        cancelButtonText: 'لا ، إلغاء!',
    }).then(async (result) =>
    {
      if (result.isConfirmed) {
        Swal.fire(
          'تم الحذف!',
          'تم حذف الدورة',
          'نجاح'
        )
        this.dell = false;

        // let delet = await axios.delete(''+this.cours.id)
        
      }
    })
    }
  }
}
</script>

<style lang="scss">
tr{
  img
  {
    width: 100px;
    border-radius: 5px;
  }  
  div.close
  {
    display: flex;
    ul
    {
      display: flex !important;
      flex-wrap: wrap;
      gap: 5px;
      @media (min-width:767px) {
        flex-direction: row;
      }
      li {
        width: -moz-fit-content !important;
        width: fit-content !important;
        border: none !important;
        border-radius: 5px;
        display: flex;
        justify-content: start;
        gap: 5px !important;
        align-items: center;
        cursor: pointer;
        a{
        color: white !important;
        }
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
  .plus ,.minus{
    margin-right: 5px;
      color: var(--darker-blue) !important;
      padding: 2px;
      background-color: #f7f7f7;
      border: var(--border);
      border-radius: 50%;
    }
}
tr div.close ul > div{
  margin: 0 auto;
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