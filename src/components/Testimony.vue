<template>

  <div class="Testimony">
    <div class="testy-section">
      <Swiper 
      :effect="`coverflow`" 
      :grab-cursor="true"
      :centered-slides="`true`"
      :slides-per-view="`auto`"
      :autoplay="{delay:2500,disableOnInteraction:false}"
      :coverflow-effect="{
        rotate:50,
        stretch:0,
        depth:100,
        modifier:1,
        slideShadows:true
      }"
      :pagination="true"
      :modules="modules"
      class="mySwiper"
      >
      <SwiperSlide
      v-for="testy in testimonis" 
      :key="testy" 
      >
      <div class="person">
        <div class="image">
          <img :src="testy.img" alt="">
        </div>
        <div class="text">
          <h3>{{testy.name}}</h3>
          <p>{{testy.commint}}</p>
        </div>
      </div>
        
      </SwiperSlide>

    
      </Swiper>
    </div>
  </div>


</template>


<script>
import {Swiper ,SwiperSlide} from 'swiper/vue';
import Testimony from '../components/Testimony.vue'
import {Autoplay ,Pagination , EffectCoverflow} from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
  export default {
    modules:[Autoplay ,Pagination , EffectCoverflow],
    name:"Testimony",
    components:{
      Swiper,
      SwiperSlide,
      Testimony,
    },
    data(){
      return {
        testimonis:[
          {
            id:1,
          name:'اسلام ',
          commint:`موقع ممتاز ورائع وفيه كثير من المميزات وسهل الاستخدام وانصحكم بالاستمراريه فيه `,
          img:`https://ichef.bbci.co.uk/news/976/cpsprodpb/A20B/production/_123138414_1ae36bae-44c9-4277-89a0-7b41aaca2cdb.jpg.webp`
        }
        ,
        {
          id:2,
          name:'lorem',
          commint:`موقع ممتاز ورائع وفيه كثير من المميزات وسهل الاستخدام وانصحكم بالاستمراريه فيه `,
          img:`https://ichef.bbci.co.uk/news/976/cpsprodpb/A20B/production/_123138414_1ae36bae-44c9-4277-89a0-7b41aaca2cdb.jpg.webp`
        }
        ,
        {
          id:3,
          name:'lorem',
          commint:`موقع ممتاز ورائع وفيه كثير من المميزات وسهل الاستخدام وانصحكم بالاستمراريه فيه `,
          img:`https://ichef.bbci.co.uk/news/976/cpsprodpb/A20B/production/_123138414_1ae36bae-44c9-4277-89a0-7b41aaca2cdb.jpg.webp`
        }
        ,{
            id:4,
          name:'loren',
          commint:`موقع ممتاز ورائع وفيه كثير من المميزات وسهل الاستخدام وانصحكم بالاستمراريه فيه `,
          img:`https://ichef.bbci.co.uk/news/976/cpsprodpb/A20B/production/_123138414_1ae36bae-44c9-4277-89a0-7b41aaca2cdb.jpg.webp`
        },
        {
            id:5,
          name:'loren',
          commint:`موقع ممتاز ورائع وفيه كثير من المميزات وسهل الاستخدام وانصحكم بالاستمراريه فيه `,
          img:`https://ichef.bbci.co.uk/news/976/cpsprodpb/A20B/production/_123138414_1ae36bae-44c9-4277-89a0-7b41aaca2cdb.jpg.webp`
        }
    ]
  }
  }
}
</script>


<style lang="scss">

.Testimony
{
  .testy-section{
    height: auto;
    margin: 5% 0 8% 0;
    .swiper
    {
      padding-bottom: 50px;
      padding-top: 50px;
      width: 100%;
      .swiper-slide
      {
        background-position: center;
        background-size: cover;
        height: 320px;
        width: 320px;
        text-align: center;
        opacity: .5;
        border-radius: 12px;
        margin:  0 20px !important;
        
      }
      .swiper-slide-active
      {
        opacity: 1;
      }
      .person
      {
        width: 100%;
        height: 100%;
        background: rgba(217, 217, 217, 0.7);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 12px;
        position: relative;
        .image
        {
          position: absolute;
          left: 50%;
          top: -20%;
          transform: translate(-50%,10%);
          width: 150px;
          height: 150px;
          border-radius: 50%;
          img{
          border-radius: 50%;
            width: 100%;
            height: 100%;
          }
        }
        .text
        {
          padding: 100px 0;
          h3{
            margin: 20px 0;
            font-weight: 700;
            font-size: 24px;
            line-height: 35px;  
            color: #6061D7;
          }
          p{
            font-weight: 400;
            font-size: 24px;                                
            line-height: 35px;     
            padding: 0 10px;       
          }
        }
      }
    }
  }
}

</style>
