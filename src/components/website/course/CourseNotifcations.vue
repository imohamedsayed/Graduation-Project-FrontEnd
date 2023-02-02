<template>
  <div class="courseexam">
    <div class="row">
      <div class="col-12 title">
        <i class="fa fa-list"></i> اعلامات الدورة
      </div>
      <div class="col-12">
        <div class="ul">
          <li v-for="notify in notification" :key="notify.id">
            <div class="row">
              <div class="col-8">
                <div> <i class=" fa fa-bell"></i> {{ notify.content }} </div>
              </div>
              <div class="col-4 align-left " >
                <div>{{ notify.time }} </div>
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

</style>