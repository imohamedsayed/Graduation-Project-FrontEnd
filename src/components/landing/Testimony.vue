<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-10  ">
          <swiper :modules="modules" :slides-per-view="1" :space-between="100" :pagination="{ clickable: true }"
            @swiper="onSwiper" @slideChange="onSlideChange">
            <swiper-slide v-for="testy in testimonis" :key="testy">
              <div class="person">
                <div class="image">
                  <img :src="testy.img" alt="">
                </div>
                <div class="text">
                  <h3>{{ testy.name }}</h3>
                  <p>{{ testy.commint }}</p>
                </div>
              </div>
            </swiper-slide>
          </swiper>
      </div>
    </div>
  </div>
</template>
<script>
// import Swiper core and required modules
import { Navigation,Pagination,Scrollbar,A11y } from 'swiper';

// Import Swiper Vue.js components
import { Swiper,SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Import Swiper styles
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      testimonis:
        [
        {
          id: 1,
          name: 'اسلام ',
          commint: `    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam eveniet id dolores ratione nihil eligendi iusto magnam exercitationem consequatur repellendus. `,
          img: `https://ichef.bbci.co.uk/news/976/cpsprodpb/A20B/production/_123138414_1ae36bae-44c9-4277-89a0-7b41aaca2cdb.jpg.webp`
        }
        ,
        {
          id: 2,
          name: 'نورهان',
          commint: `    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam eveniet id dolores ratione nihil eligendi iusto magnam exercitationem consequatur repellendus. `,
          img: `https://ichef.bbci.co.uk/news/976/cpsprodpb/A20B/production/_123138414_1ae36bae-44c9-4277-89a0-7b41aaca2cdb.jpg.webp`
        }
        ,
        {
          id: 3,
          name: 'محمود',
          commint: `    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam eveniet id dolores ratione nihil eligendi iusto magnam exercitationem consequatur repellendus. `,
          img: `https://ichef.bbci.co.uk/news/976/cpsprodpb/A20B/production/_123138414_1ae36bae-44c9-4277-89a0-7b41aaca2cdb.jpg.webp`
          },
          {
            id: 1,
            name: 'محمد ',
            commint: `    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam eveniet id dolores ratione nihil eligendi iusto magnam exercitationem consequatur repellendus. `,
            img: `https://ichef.bbci.co.uk/news/976/cpsprodpb/A20B/production/_123138414_1ae36bae-44c9-4277-89a0-7b41aaca2cdb.jpg.webp`
          }
          ,
          {
            id: 2,
            name: 'احمد',
            commint: `    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam eveniet id dolores ratione nihil eligendi iusto magnam exercitationem consequatur repellendus. `,
            img: `https://ichef.bbci.co.uk/news/976/cpsprodpb/A20B/production/_123138414_1ae36bae-44c9-4277-89a0-7b41aaca2cdb.jpg.webp`
          }
          ,
          {
            id: 3,
            name: 'مصطفى',
            commint: `    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam eveniet id dolores ratione nihil eligendi iusto magnam exercitationem consequatur repellendus. `,
            img: `https://ichef.bbci.co.uk/news/976/cpsprodpb/A20B/production/_123138414_1ae36bae-44c9-4277-89a0-7b41aaca2cdb.jpg.webp`
          }
      ]
    }
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation,Pagination,Scrollbar,A11y],
    };
  },
};
</script>
<style lang="scss">
.swiper-pagination-clickable .swiper-pagination-bullet {
  width: 12px;
  height: 12px;
  background-color: var(--landing-blue);
}
.person {
  width: 100%;
  height: 100%;
  background: #ecf0f3;
  border-radius: 12px;
  position: relative;
  padding: 50px 0;

  .image {
    width: 110px;
    height: 110px;
    border-radius: 50%;
    margin: auto;

    img {
      border-radius: 50%;
      width: 100%;
      height: 100%;
    }
  }

  .text {
    padding: 20px 0 50px;
    text-align: center;

    h3 {
      font-weight: 700;
      font-size: 24px;
      line-height: 35px;
      color: var(--landing-blue);
    }

    p {
      width: 70%;
      margin: auto;
      font-weight: 400;
      font-size: 17px;
      line-height: 35px;
      padding: 0 10px;
      color: var(--text-black);
    }
  }
}
</style>

