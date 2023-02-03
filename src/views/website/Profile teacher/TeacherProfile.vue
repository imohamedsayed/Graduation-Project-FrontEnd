<template>
  <Header />
  <div class="main-view">
    <AsideBar />
    <div class="teacher">
    <div class="sec1">
      <div class="backgrund">
        <div class="back"></div>
        <div class="row">
          <div class="col-lg-3 h_150">
            <div class="image">
              <img src="../../../assets/course/8.png" alt="">
            </div>
          </div>
          <div class="col-lg-7">
            <div class="row text">
              <div class="col-12">
                <h2>محمد خليفة احمد</h2>
              </div>
              <div class="row">
                <div class="col-12">
                  <p>تاريخ الانضمام 13/12/2021 </p>
                </div>
                <div class="col-12">
                  <p>فرع أسيوط</p>
                </div>
                <div class="col-12">
                  <p>التخصص : فيزياء</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      <div class="bg">
        <div class="year1">
          <h1><i class="fa fa-list"></i> الدورات _ الصف الاول</h1>
          <Year1Courses />
        </div>
        <div class="year2">
          <h1><i class="fa fa-list"></i> الدورات _ الصف التاني</h1>
          <Year2Courses />
        </div>
        <div class="year3">
          <h1><i class="fa fa-list"></i> الدورات _ الصف الثالث</h1>
          <Year3Courses />
        </div>
        <div class="year3">
          <h1><i class="fa fa-list"></i> المذكرات   </h1>
          <Notes />
        </div>
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
import Footer from "../../../components/Footer.vue";
import Header from "../../../components/Header.vue";
import AsideBar from "../../../components/WebsiteAsideBar.vue";
import Year1Courses from '../../../components/website/Teacher/Year1Courses'
import Year2Courses from '../../../components/website/Teacher/Year2Courses'
import Year3Courses from '../../../components/website/Teacher/Year3Courses'
import Notes from "@/components/website/Teacher/Notes.vue";
export default {
  components: {
    Footer,AsideBar,Header,Year1Courses
    ,Year2Courses,Year3Courses,Notes
  },

  

}
</script >

<style lang="scss">
.teacher {
  margin-right: 15rem;
  @media (max-width: 991px) {
    margin-right: 0;
  }
  .sec1 {

    // height: 320px ;
    .backgrund {
      padding: 30px;
      background: url(../../../assets/course/Rectangle_94.png) no-repeat;
      background-size: cover;

      position: relative;
      height: 100%;

      .back {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #776fb4b7;
      }

      .h_150 {
        height: 200px;
      }

      .image {
        position: relative;
        border-radius: 12px;
        height: 100%;
        border: 5px solid #fff;

        @media (max-width:991px) {
          height: 100%;
        }

        img {
          border-radius: 12px;
          height: 100%;
          width: 100%;

          @media (max-width:991px) {
            height: 100%;

          }
        }
      }

      .text {
        position: relative;
        color: #fff;

        .sub {
          margin-bottom: 10px;
        }


      }
    }

    i {
      margin-left: 8px;
    }
  }
  .bg
  {
    padding: 30px;
    i{
      color: var(--landing-blue);
      margin-left: 10px;
    }
  }
}
</style>