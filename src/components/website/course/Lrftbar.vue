<template>
  <div class="lftbar">
    <div class="notify">
      <h4> اعلامات الدورة </h4>
      <div class="ul">
        <li v-for="notify in notification" :key="notify.id">
          <h6> {{ notify.content }} </h6>
          <div>{{ notify.time }} </div>
        </li>
      </div>
    </div>
    <div class="techer">
      <div class="row">
        <div class="col-12">
          <h4><i class="fa fa-user"></i> عن المدرب </h4>
        </div>
        <div class="col-12">
          <div class="img">
            <img src="../../../assets/course/Ellipse_45.png" alt="">
          </div>
        </div>
        <div class="row">
          <div class="col-8 info">
            <i class="fa-solid fa-chevron-left"></i>
            الاسم
          </div>
          <div class="col-4">
            محمد خليفة
          </div>
        </div>
        <div class="row">
          <div class="col-8 info">
            <i class="fa-solid fa-chevron-left"></i> تاريخ الانضمام
          </div>
          <div class="col-4">  12/3/2022 </div>
        </div>
        <div class="row">
          <div class="col-8 info">
            <i class="fa-solid fa-chevron-left"></i> عدد الدورات
          </div>
          <div class="col-4">  3 </div>
        </div>
        <div class="row">
          <div class="col-8 info">
            <i class="fa-solid fa-chevron-left"></i> اجمالى الطلاب
          </div>
          <div class="col-4">  345 </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
data() {
  return {
    notification: [
      {
        id: 1,
        content: 'سوف يتم اضافة الوحدة التانية بعد اسبوع.',
        time: '12-2-2020 12:13 PM'
      },
      {
        id: 2,
        content: 'سوف يتم اضافة الوحدة التانية بعد اسبوع.',
        time: '12-2-2020 12:13 PM'
      },
      {
        id: 3,
        content: 'سوف يتم اضافة الوحدة التانية بعد اسبوع.',
        time: '12-2-2020 12:13 PM'
      },
      {
        id: 4,
        content: 'سوف يتم اضافة الوحدة التانية بعد اسبوع.',
        time: '12-2-2020 12:13 PM'
      },
    ]
  }
},
}
</script>

<style lang="scss">
.lftbar
{
  margin-top: 65px;
  margin-left: 50px;
  
  .notify
  {
    margin-bottom: 30px;
    background-color: var(--gray-blue);
    border-radius: 8px;
      padding: 15px;
    .ul {
        li {
          list-style: none;
          margin: 10px;
          border-bottom: 1px solid #8D8484;
        }
      }
  }.techer
  {
    margin-bottom: 30px;
    background-color: var(--gray-blue);
    border-radius: 8px;
    padding: 15px;
    h4 
    {
      i{
        color: var(--darker-blue);
      }
    }
    .img
    {
      margin: 20px 0;
      display: flex;
      justify-content: center;
    }
    .info
    {
      margin: 10px 0;
      color: rgb(14, 90, 116);
    }
  }
  
}
</style>