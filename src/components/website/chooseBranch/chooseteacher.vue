<template>
  <div class="row">
    <div class="col-12 mt-2">
      <swiper
        :modules="modules"
        :breakpoints="len"
        :space-between="50"
        :pagination="{ clickable: true }"
        :autoplay="autoplay"
        Lazy
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <swiper-slide v-for="item in state.teacherlist" :key="item.id">
          <div class="teachera" @click="goToClasses(item.id)">
            <div class="img">
              <img
                src="../../../assets/course/Ellipse_45.png"
                alt=""
                srcset=""
              />
            </div>
            <div class="name">{{ item.name }}</div>
            <div class="nikename">{{ item.nick_name }}</div>
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

import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { onMounted, reactive } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    id: Number,
  },
  setup(props) {
    const state = reactive({
      teacherlist: [],
    });

    const router = useRouter()

    onMounted(async () => {
      await axios
        .get("/api/teachers/" + props.id)
        .then((res) => {
          console.log(res.data);
          state.teacherlist = res.data.data;
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

    const goToClasses = (idd) => {
      router.push({ name: "teacher_classes", params: { id: idd } });
    };
    return {
      state,
      onSwiper,
      onSlideChange,
      Autoplay,
      len,
      autoplay,
      modules: [Navigation, Pagination, Scrollbar, A11y, Autoplay, Lazy],
      goToClasses,
    };
  },
};
</script>
<style lang="scss" scoped>
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
.teachera {
  transition: all 0.3s ease-out;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
}
.swiper-pagination-clickable .swiper-pagination-bullet {
  width: 12px;
  height: 12px;
  background-color: var(--landing-blue);
}
</style>
