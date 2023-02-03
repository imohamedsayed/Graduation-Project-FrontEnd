<template>
    <div class="row ">
      <div class="col-12 mt-2 ">
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
          <swiper-slide v-for="cours in courses" :key="cours.id">
            <div class="cart">
              <div class="row">
                <div class="col-12">
                  <div class="img">
                    <img src="../../../assets/course/Rectangle_94.png" alt="">
                  </div>
                </div>
                <div class="col-12 text">
                  <div class="row">
                    <div class="col-6 name"> {{ cours.name}}</div>
                    <div class="col-6"> السعر : {{cours.price}} جنيه</div>
                  </div>
                </div>
                <div class="col-12 text  text-center ">
                  <i class="fa fa-clock"> </i>
                  الثلاثاء من 5 : 7 مساءا
                </div>
              </div>
            </div>
            <br><br><br>
          </swiper-slide>
        </swiper>
      </div>
    </div>
</template>
<script>
import { Navigation,Pagination,Scrollbar,A11y,Autoplay,Lazy } from 'swiper';

import { Swiper,SwiperSlide } from 'swiper/vue';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      courses:
        [
          {
            id: 1,
            name: 'فيزياء الصف الاول  ',
            commint: `    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam eveniet id dolores ratione nihil eligendi iusto magnam exercitationem consequatur repellendus. `,
            img: `https://ichef.bbci.co.uk/news/976/cpsprodpb/A20B/production/_123138414_1ae36bae-44c9-4277-89a0-7b41aaca2cdb.jpg.webp`
            ,price: 150
          }
          ,
          {
            id: 2,
            name: 'فيزياء الصف الاول',
            commint: `    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam eveniet id dolores ratione nihil eligendi iusto magnam exercitationem consequatur repellendus. `,
            img: `https://ichef.bbci.co.uk/news/976/cpsprodpb/A20B/production/_123138414_1ae36bae-44c9-4277-89a0-7b41aaca2cdb.jpg.webp`
            ,price: 150
          }
          ,
          {
            id: 3,
            name: 'فيزياء الصف الاول',
            commint: `    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam eveniet id dolores ratione nihil eligendi iusto magnam exercitationem consequatur repellendus. `,
            img: `https://ichef.bbci.co.uk/news/976/cpsprodpb/A20B/production/_123138414_1ae36bae-44c9-4277-89a0-7b41aaca2cdb.jpg.webp`
            ,price: 150
          },
          {
            id: 1,
            name: 'فيزياء  الصف الاول',
            commint: `    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam eveniet id dolores ratione nihil eligendi iusto magnam exercitationem consequatur repellendus. `,
            img: `https://ichef.bbci.co.uk/news/976/cpsprodpb/A20B/production/_123138414_1ae36bae-44c9-4277-89a0-7b41aaca2cdb.jpg.webp`
            ,price: 150
          }
          ,
          {
            id: 2,
            name: 'فيزياء الصف الاول',
            commint: `    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam eveniet id dolores ratione nihil eligendi iusto magnam exercitationem consequatur repellendus. `,
            img: `https://ichef.bbci.co.uk/news/976/cpsprodpb/A20B/production/_123138414_1ae36bae-44c9-4277-89a0-7b41aaca2cdb.jpg.webp`
            ,price: 150
          }
          ,
          {
            id: 3,
            name: 'فيزياء الصف الاول',
            commint: `    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam eveniet id dolores ratione nihil eligendi iusto magnam exercitationem consequatur repellendus. `,
            img: `https://ichef.bbci.co.uk/news/976/cpsprodpb/A20B/production/_123138414_1ae36bae-44c9-4277-89a0-7b41aaca2cdb.jpg.webp`
            ,price: 150
          }
        ]
    }
  },

  setup(props) {  
    let autoplay = {
      delay: 5000,
      disableOnInteraction: false,
    };
    let len = {
      600: { slidesPerView: 2 },
      800: { slidesPerView: 3 },
      1200: { slidesPerView: 4 }
    };
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
    };
    return {
      onSwiper,
      onSlideChange,
      Autoplay,
      len,
      autoplay,
      modules: [Navigation,Pagination,Scrollbar,A11y,Autoplay,Lazy],
    };
  },
};
</script>
<style lang="scss">
.cart{
  border: 2px solid #D9D9D9;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.144);
  border-radius: 8px;
  color: rgba(0, 0, 0, 0.6);
  .text{
    padding:10px 20px;
    // text-align: center;
  }
  .name{
    transition: .5s;
    &:hover
    {
      color: var(--landing-blue);
    }
  }
  img{
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

