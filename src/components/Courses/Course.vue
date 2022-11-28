<template>
  <tr >
    <td class="check" @click="openProparties()" >{{id}}  
      <i v-if="opened"  class="fa fa-circle-plus plus "></i>
      <i v-else class="fa-solid fa-circle-minus minus"></i>
    </td>
    <td >{{name}}</td>
    <td class="open"><div class="thumb_img"><img src="../../../public/images/courses/img-2.jpg" alt=""></div></td>
    <td class="open">{{part}}</td>
    <td class="open">{{class_num}}</td>
    <td class="open">{{price}} EGP</td>
    <td class="open">{{pays}}</td>
  </tr>
  <tr class="close" v-if="!opened" >
    <td colspan="7">
      <ul>
      <li >الصورة 
        <div ><img src="../../../public/images/courses/img-2.jpg" alt=""></div>  
      </li>
      <li >القسم 
        <div>{{part}}</div>
      </li>
      <li >الصف
        <div>{{class_num}}</div>
      </li>
      <li >السعر
        <div>{{price}}</div>
      </li>
      <li >المبيعات
        <div>{{pays}}</div>
      </li>
    </ul>
    </td>
  </tr>
  <tr v-if="!opened">
    <td colspan="7" >
      <div class="close"  >
          <ul>
            <div>الخصائص</div>
            <li><a href="">  <i class="fas fa-list"></i>   المحتوى</a> </li>
            <li><a href="">  <i class="fas fa-list"></i>   الاختبارات</a> </li>
            <li><a href="">  <i class="fas fa-list"></i>   ورشة العمل</a> </li>
            <li><a href="">  <i class="fas fa-list"></i>   الاسئلة</a> </li>
            <li><a href="">  <i class="fas fa-list"></i>   التفريغات</a> </li>
            <li><a href="">  <i class="fas fa-list"></i>   الاعلامات</a> </li>
            <li><router-link :to="{name: 'EditeCourse'}"><i class="fa fa-trash"></i>   تعديل</router-link>  </li>
            <li><a href=""> <i class="fa fa-pen-to-square"></i>   حذف </a> </li>
          </ul>
      </div>
    </td>
  </tr>
</template>

<script>
export default {
  name: "Course",
  data(){
    return{
      id: 1,
      name:"منهج الفيزياء الثانوية العامة",
      img:"../../../public/images/courses/img-2.jpg",
      part:"فيزياء",
      class_num:"الثالث الثانوي	",
      price:350,
      pays:234,
      opened:true,
      showEditForm:false,
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
      gap: 8px;
      @media (min-width:767px) {
        flex-direction: row;
      }
      a
      {
        display: block;
        padding: 10px 15px;
        width: fit-content !important;
        border: none !important;
        background-color: var(--light-blue) !important;
        border-radius: 5px;
        color: #efefef;
        display: flex;
        justify-content: start;
        gap: 8px !important;
        align-items: center;
        cursor: pointer;
        
      }
      a:hover{
          background-color: #1abaff9c !important;
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
      color: var(--light-blue);
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