<template>
  <div class="courseexam">
    <div class="row">
      <div class="col-12 title">
        <i class="fa fa-list"></i>
        15 اختبار
      </div>
      
      <div class="col-12">
        <div class="ul">
          <li v-for="exam in exams" :key="exam.id">
            <div class="row">
              <div class="col-8">
                <div class="title">
                  <i class="fa-regular fa-newspaper"></i>
                  <span>{{ exam.name }}</span>
                </div>                
              </div>
              <div class="col-4">
                <div class="info">
                  <div class="row">
                    <div class="col-6">
                      <div class="quist_num">
                        <i class="fa fa-list"></i>
                        {{ exam.quist_num }} سؤال
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="time">
                        <i class="fa fa-clock border"></i>
                        {{ exam.period }} دقيقة
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
data() {
  return {
    exams: [
      {
        id: 1,
        name:'اختبار الوحدة الاولى ',
        quist_num: 15,
        period:20
      },
      {
        id: 2,
        name: 'اختبار الوحدة الثانية ',
        quist_num: 15,
        period: 20
      },
      {
        id: 3,
        name: 'اختبار الوحدة الثالثه ',
        quist_num: 15,
        period: 20
      },
      {
        id: 4,
        name: 'اختبار الوحدة الرابعة ',
        quist_num: 15,
        period: 20
      },
      {
        id: 5,
        name: 'اختبار الوحدة الخامسة ',
        quist_num: 15,
        period: 20
      },
    ]
  }
},
}
</script>

<style lang="scss">
.courseexam{
  padding: 20px 30px;
  .title
  {
    color: var(--darker-blue);
    font-size: 18px;
    i{
      margin-left: 10px;
    }
  }
  .ul{
    padding: 10px ;
    li {
        list-style: none;
        background-color: var(--gray-blue);
        padding: 15px;
        margin: 15px;
        border-radius: 8px;
        box-shadow: 4px 2px 8px #00000052;
        transition: .5s;
        &:hover {
            scale: 1.1;
          }
        i
        {
          color: var(--darker-blue);
          margin-left: 10px;
        }
        .title span
        {
          font-size: 19px;
        }
      }
  }
  
}
</style>