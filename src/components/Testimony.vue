<template>

<div class="container">
  <div class="row justify-content-center">
    <div class="col-10">
      <div id="carouselExampleDark" class="carousel  slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active btnt" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" class=" btnt"  aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" class=" btnt"  aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner "   >
      <div class="carousel-item active  " data-bs-interval="10000"
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

    </div>
  </div>
</div>
</div>
    </div>


</div>


</template>


<script>

import {  carousel   } from 'vue-owl-carousel';

export default {
    name:"Testimony",
    components:{
      carousel,
    },
    data(){
      return {
        testimonis:[
          {
            id:1,
          name:'اسلام ',
          commint:`    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam eveniet id dolores ratione nihil eligendi iusto magnam exercitationem consequatur repellendus. `,
          img:`https://ichef.bbci.co.uk/news/976/cpsprodpb/A20B/production/_123138414_1ae36bae-44c9-4277-89a0-7b41aaca2cdb.jpg.webp`
        }
        ,
        {
          id:2,
          name:'نورهان',
          commint:`    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam eveniet id dolores ratione nihil eligendi iusto magnam exercitationem consequatur repellendus. `,
          img:`https://ichef.bbci.co.uk/news/976/cpsprodpb/A20B/production/_123138414_1ae36bae-44c9-4277-89a0-7b41aaca2cdb.jpg.webp`
        }
        ,
        {
          id:3,
          name:'محمود',
          commint:`    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam eveniet id dolores ratione nihil eligendi iusto magnam exercitationem consequatur repellendus. `,
          img:`https://ichef.bbci.co.uk/news/976/cpsprodpb/A20B/production/_123138414_1ae36bae-44c9-4277-89a0-7b41aaca2cdb.jpg.webp`
        }
    ]
  }
  },

}
</script>



<style lang="scss">
.carousel
{
  background-color: transparent !important ;
  .btnt{
    width:12px !important;
    height: 12px !important;
    border-radius: 50%;
    background-color: var(--landing-blue) !important;
    margin: 0 5px 0 !important;
  }
}
.person
{
  width: 100%;
  height: 100%;
  background: #ecf0f3;
  border-radius: 12px;
  position: relative;
  padding: 50px 0;
  .image
  {
    width: 110px;
    height: 110px;
    border-radius: 50%;
    margin: auto;
    img{
    border-radius: 50%;
      width: 100%;
      height: 100%;
    }
  }
  .text
  {
    padding: 20px 0 50px;
    text-align: center;
    h3{
      font-weight: 700;
      font-size: 24px;
      line-height: 35px;  
      color: var(--landing-blue);
    }
    p{
      font-weight: 400;
      font-size: 17px;                                
      line-height: 35px;     
      padding: 0 10px;      
      color: var(--text-black);
    }
  }
}

</style>
