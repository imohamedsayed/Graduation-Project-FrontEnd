<template>
  <Header />
  <div class="main-view">
    <AsideBar />
    <div class="matrial">
      <div class="back">
        <div class="row">
          <div class="col-lg-8  courses">
            <div class="row">
              <div class="col-xl-3 col-lg-5 col-md-5 cours" v-for="cours in courses" :key="cours.id">
                <div class="img">
                  <img :src="cours.img" alt="">
                </div>
                <div class="overlay">
                  <span
                  @click="this.redirectTo({
                      name: 'course', params: {
                      id: cours.id,
                    }
                  })"
                  >{{ cours.name}}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 leftbar ">
            <div class="cat">
              <h3>الفئات</h3>
              <ul>
                <li v-for="cours in courses" :key="cours.id">
                  <i class="fa fa-book-open-reader"></i>
                  <span>{{cours.name }}</span>
                </li>
              </ul>
            </div>
            <div class="help">
              <div class="row">
                <div class="overlay"></div>
                <div class="col-12">
                  <h4>هل تحتاج مساعدة ؟</h4>                  
                </div>
                <div class="col-12">
                  <p>إذا لديك أي استفسارات نحن سعداء بمساعدتك</p>
                </div>
                <div class="col-12">
                  <router-link :to="{}">الدعم الفني</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import Footer from "../../../../components/Footer.vue";
import Header from "../../../../components/Header.vue";
import AsideBar from "../../../../components/WebsiteAsideBar.vue";
export default {
  name: 'course',
  components: {
    Footer,AsideBar,Header
  },
  props: ['id'],
  data() {
    return {
      std_id: this.id,
      courses: [
        {
          id: 1,
          name: 'فيزياء',
          img: require('../../../../assets/course/8.png')
        },
        {
          id: 2,
          name: 'رياضيات',
          img:require( '../../../../assets/course/1.png')
        },
        {
          id: 3,
          name: 'كيمياء',
          img:require( '../../../../assets/course/2.png')
        },
        {
          id: 4,
          name: 'علوم',
          img:require( '../../../../assets/course/3.png')
        },
        {
          id: 5,
          name: 'احياء',
          img:require( '../../../../assets/course/4.png')
        },
        {
          id: 6,
          name: 'تاريخ',
          img:require( '../../../../assets/course/5.png')
        },
        {
          id: 7,
          name: 'لغة انجليزية',
          img:require( '../../../../assets/course/6.png')
        },
        {
          id: 8,
          name: 'لغة عربية',
          img:require( '../../../../assets/course/7.png')
        },
        
      ]
    }
  },
  methods: {
    ...mapMutations(['redirectTo'])
  },

}
</script>

<style lang="scss">
.matrial {
  margin-right: 15rem;

  @media (max-width: 991px) {
    margin-right: 0;
  }
  .back
  {
    padding: 30px;
    .courses
    {
      .cours {
          position: relative;
          margin: 20px;
          border-radius: 5px;
          box-shadow: 3px 2px 8px #12111166;
      
          .img {
            width: 100%;
      
            img {
              width: 100%;
              height: 200px;
              border-radius: 5px;
            }
          }
      
          .overlay {
            border-radius: 5px;
            position: absolute;
            background-color: rgba(0, 0, 0, 0.50);
            top: 0;
            left: 0px;
            width: 100%;
            height: 100%;
      
            span {
              position: absolute;
              font-size: 24px;
              font-weight: bold;
              color: #fff;
              top: 50%;
              left: 50%;
              transition: .5s all;
              transform: translate(-50%, -50%);
              cursor: pointer;
            }
          }
          &:hover
          {
            span {
              scale: 1.3;
            }
          }
        }
    }
    .leftbar
    {
      .cat
      {
        background-color: var(--gray-blue);
        border-radius: 8px;
        padding: 20px;
        h3
        {
          text-align: center;
          padding-bottom: 10px;
          border-bottom: 1px solid #8d8484cb;
        }
        li
        {
          padding: 10px;
          font-size: 18px;
          width: 100;
          transition: .5s;
          &:hover {
              padding-right: 15px;
            }
          i{
            color: var(--darker-blue);
            margin-left: 10px;
          }
          
        }
      }
      .help
      {
        margin-top: 30px;
        border-radius: 8px;
        padding: 20px;
        color: #fff;
        background:url(../../../../assets/course/bg.png) no-repeat;
        background-position: center;
        background-size: cover;
        position: relative;
        .overlay{
          content:'';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.541);
          border-radius: 8px;
        }
        h4{
          position: relative;
        }
        p{
          position: relative;
        }
        a{
          position: relative;
          display: block;
          margin: 20px auto;
          width: fit-content;
          font-size: 22px;
          font-weight: bold;
          background-color: rgb(221, 221, 221) !important;
          color: var(--darker-blue);
          border: 1px solid var(--darker-blue);
          padding: 10px 20px;
          border-radius: 8px;
          transition: .5s;
          &:hover {
              color: rgb(221, 221, 221) ;
              background-color: var(--darker-blue) !important;
            }
        }
      }
    }
    
    
  }
}
</style>
