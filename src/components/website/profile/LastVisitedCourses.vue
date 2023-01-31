<template>
  <div class="row mt-5 align-items-center justify-content-center ">
    <div class="col-lg-4 col-12" v-for="course in courses" :key="course.id">
      <div class="card course-box" style="width: 18rem">
        <img :src="course.img" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{{ course.title }}</h5>
          <p class="card-text text-muted">أ.{{ course.teacher }}</p>
          <p class="mt-2 mb-0 course-date text-muted">{{ course.date }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      courses: [
        {
          id: 1,
          title: "فيزياء",
          teacher: "حازم السعدني",
          date: "الثلاثاء من 2 الي 5 مساء",
          img: require("../../../../public/images/categories/01.jpg"),
        },
        {
          id: 2,
          title: "رياضة",
          teacher: " خالد عبدالجليل",
          date: "الاثنين من 1 الي 3 مساء",
          img: require("../../../../public/images/categories/02.jpg"),
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.course-box {
  min-height: 350px !important;
  position: relative;
  padding-bottom: 35px;
  @media (max-width: 993px) {
    margin: 10px auto;
  }
  .course-date {
    border-top: 1px solid grey;
    padding: 5px;
    text-align: center;
    word-spacing: 8px;
    position: absolute;
    bottom: 0;
    width: 90%;
  }
}
</style>
