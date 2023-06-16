<template>
  <div class="row">
    <div class="col-12 mt-2">
      <swiper :modules="modules" :breakpoints="len" :space-between="50" :pagination="{ clickable: true }"
        :autoplay="autoplay" Lazy @swiper="onSwiper" @slideChange="onSlideChange">
        <swiper-slide v-for="cours in state.courseList" :key="cours.id" @click="classRoom(cours.id)">
          <div class="box-product mb-20">
            <a class="prod_img">
              <img src="../../../assets/course/4.png" alt="" />
            </a>
            <div class="prod_content">
              <a href="#!" class="box-title">{{ cours.name }}</a>
              <!-- <a href="#" class="crse-cate">{{ Details }}</a> -->
              <div class="row">
                <!-- <p class="teacher1 col-6"><a href="#">{{ TeacherName }}</a></p> -->
                <!-- <div class="price col-6">السعر : {{ price }}</div> -->
              </div>
              <div class="row">
                <!-- <a class="col-7 add-to-cart1" href="#!"><i class="fa fa-shopping-cart"></i> اضافة الي السلة</a>
                <a class="col-4 fav" href="#!"><i class="fa-regular fa-heart"></i> المفضله</a> -->
              </div>
            </div>
          </div>
          <br /><br /><br />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>
<script>
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  Lazy,
} from "swiper";

import { Swiper,SwiperSlide } from "swiper/vue";
import { useRouter } from "vue-router";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { onMounted,reactive } from "vue";
import axios from "axios";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {};
  },
  props: {
    id: Number,
  },
  setup(props) {
    const state = reactive({
      courseList: [],
    });
    onMounted(async () => {
      await axios
        .get("/api/classrooms-subject/" + props.id + "/" + props.id)
        .then((res) => {
          state.courseList = res.data.data;
        })
        .catch((error) => {
          console.log(error);
          console.log(error.response.data.errors);
        });
    });

    let autoplay = {
      delay: 5000,
      disableOnInteraction: false,
    };
    let len = {
      600: { slidesPerView: 2 },
      800: { slidesPerView: 3 },
      1200: { slidesPerView: 4 },
    };
    const onSwiper = (swiper) => {};
    const onSlideChange = () => {};

    const router = useRouter();

    const classRoom = (course_id) => {
      router.push({ name: "course_classes",params: { id: course_id } });
    };

    return {
      state,
      onSwiper,
      onSlideChange,
      Autoplay,
      len,
      autoplay,
      modules: [Navigation,Pagination,Scrollbar,A11y,Autoplay,Lazy],
      classRoom,
    };
  },
};
</script>
<style lang="scss" scoped>
.box-product {
  cursor: pointer;
  margin-bottom: 60px;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);
    transform: scale(1.05);
  }
}

.cartYear1 {
  border: 2px solid #d9d9d9;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.144);
  border-radius: 8px;
  color: rgba(0, 0, 0, 0.6);

  .text {
    padding: 10px 20px;
    // text-align: center;
  }

  .name {
    transition: 0.5s;

    &:hover {
      color: var(--landing-blue);
    }
  }

  img {
    width: 100%;
    height: 180px;
    border-radius: 8px 8px 0 0;
  }
}

.swiper-pagination-clickable .swiper-pagination-bullet {
  width: 12px;
  height: 12px;
  background-color: var(--landing-blue);
}
</style>




