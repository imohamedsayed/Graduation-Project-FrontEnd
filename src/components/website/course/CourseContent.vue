<template>
    <div class="coursContent">
      <div class="row">
        <div class="col-3 title">
          <i class="fa fa-list"></i> 10 محاضرات
        </div>
        <div class="col-4 title">
          <i class="fa fa-list"></i> 20:13:12 ساعة
        </div>
        <div class="col-12">
          <div class="ul">
            <li v-for="lec in content" :key="lec.id">
              <div class="row">
                <div class="col-9">
                  <div class="title">
                    <i class="fa fa-video "></i>
                    <span>{{ lec.name }}</span>
                  </div>
                </div>
                <div class="col-3">
                  <div class="info">
                    <div class="quist_num">
                      مجانى <i class="fa fa-play"></i> 
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
      content: [
        {
          
          id: 1,
          name: 'مقدمة في الفيزياء',
          quist_num: 15,
          period: 20
        },
        {
          id: 2,
          name: 'الوحده الاولي _ الدرس التاني ',
          quist_num: 15,
          period: 20
        },
        {
          id: 3,
          name: 'الوحده التانيه _ الدرس الرابع ',
          quist_num: 15,
          period: 20
        },
        {
          id: 4,
          name: 'الوحده التانيه _ الدرس الرابع ',
          quist_num: 15,
          period: 20
        },
        {
          id: 5,
          name: 'مقدمة في الفيزياء',
          quist_num: 15,
          period: 20
        },
        {
          id:6,
          name: 'الوحده الاولي _ الدرس التاني ',
          quist_num: 15,
          period: 20
        },
        {
          id: 7,
          name: 'الوحده التانيه _ الدرس الرابع ',
          quist_num: 15,
          period: 20
        },
        {
          id: 8,
          name: 'الوحده التانيه _ الدرس الرابع ',
          quist_num: 15,
          period: 20
        },
      ]
    }
  },
}
</script>

<style lang="scss">
.coursContent {
  padding: 20px 30px;

  .title {
    color: var(--darker-blue);
    font-size: 18px;

    i {
      margin-left: 10px;
    }
  }

  .ul {
    padding: 10px;

    li {
      list-style: none;
      background-color: var(--gray-blue);
      padding: 15px;
      margin: 15px;
      border-radius: 8px;
      box-shadow: 4px 2px 8px #00000052;

      i {
        color: var(--darker-blue);
        margin-left: 10px;
      }

      .title span {
        font-size: 19px;
      }
      .quist_num
      {
        width: 100%;
        text-align: left;
        i{
          font-size: 20px;
          margin-right: 10px;
        }
      }
    }
  }

}
</style>