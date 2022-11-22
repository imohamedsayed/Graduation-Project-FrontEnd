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
            <li><a href=""></a>  <i class="fas fa-list"></i>   المحتوى</li>
            <li><a href=""></a>  <i class="fas fa-list"></i>   الاختبارات</li>
            <li><a href=""></a>  <i class="fas fa-list"></i>   ورشة العمل</li>
            <li><a href=""></a>  <i class="fas fa-list"></i>   الاسئلة</li>
            <li><a href=""></a>  <i class="fas fa-list"></i>   التفريغات</li>
            <li><a href=""></a>  <i class="fas fa-list"></i>   الاعلامات</li>
            <li @click="showEditForm = true"><a href=""></a>  <i class="fa fa-pen-to-square"></i>   تعديل </li>
            <li><a href=""></a>  <i class="fa fa-trash"></i>   حذف</li>
          </ul>
      </div>
    </td>
  </tr>
  <teleport to="body">
    <div class="edit-class-form" v-if="showEditForm">
      <form dir="rtl">
        <label>تغير اسم الدورة</label>
        <input type="text" v-model="name" />
        <label>تغير صورة الدورة </label>
        <input type="text" v-model="img" />
        <label>تغير قسم الدورة</label>
        <input type="text" v-model="part" />
        <label>تغير صف الدورة</label>
        <input type="text" v-model="class_num" />
        <label>تغير سعر الدورة</label>
        <input type="text" v-model="price" />
        <div class="actions text-center mt-5" dir="rtl">
          <button class="btn btn-success m-2">حفظ التغييرات</button>
          <button class="btn btn-danger m-2" @click="showEditForm = false">
            الغاء
          </button>
        </div>
      </form>
    </div>
  </teleport>
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
        background-color: var(--light-blue);
        border-radius: 5px;
        color: #efefef;
        display: flex;
        justify-content: start;
        gap: 5px !important;
        align-items: center;
        cursor: pointer;
        
      }
      li:hover{
          background-color: #1abaff9c ;
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