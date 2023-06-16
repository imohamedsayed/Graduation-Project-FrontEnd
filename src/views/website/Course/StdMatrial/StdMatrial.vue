<template>
  <Header />
  <div class="main-view">
    <AsideBar />
    <div class="matrial">
      <div class="back">
        <div class="row">
          <div class="col-lg-8  courses">
            <div class="row">
              <div class="col-xl-4 col-lg-5 col-md-5 cours" v-for="cours in state.accepted_courses" :key="cours.id">
                <div class="img">
                  <img src="../../../../../public/images/intro_background.png" alt="">
                </div>
                <div class="overlay">
                  <router-link :to="{ name: 'course', params: { id: cours.id } }">
                    <span> {{ cours.name }} <span class="time">: Start <br>{{ cours.start_date }}</span>
                    </span>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 leftbar ">
            <div class="cat">
              <h3>المجموعات المعلقة</h3>
              <ul>
                <li v-for="cours in state.waited_courses" :key="cours.id">
                  <i class="fa fa-book-open-reader"></i>
                  <span>{{ cours.name }}</span>
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
  <SpinnerLoading :loading="state.loading" />
</template>

<script>
import Footer from "../../../../components/Footer.vue";
import Header from "../../../../components/StudentHeader.vue";
import AsideBar from "../../../../components/WebsiteAsideBar.vue";
import SpinnerLoading from "@/components/SpinnerLoading.vue";
import { computed,onMounted,reactive } from "vue";
import { useStore } from "vuex";
import axios from 'axios';
export default {
  name: 'course',
  components: {
    Footer,AsideBar,Header,SpinnerLoading
  },
  setup(props) {
    const state = reactive({
      loading: true,
      accepted_courses: [],
      waited_courses: [],
      std_id: computed(() => useStore().state.student.id),
    });

    onMounted(async () => {
      
      // get accepted courses

      await axios
        .get("api/all-classroom-basedOnAuthStudent/3")
        .then((res) => {
          state.accepted_courses = res.data.data.allStudent;
          state.loading = false;
        })
        .catch((error) => {
          console.log(error);
          console.log(error.response.data.message)
        });

      // get waited courses

      await axios
        .get("api/all-classroom-basedOnAuthStudent/0")
        .then((res) => {
          state.waited_courses = res.data.data.allStudent;
          state.loading = false;
        })
        .catch((error) => {
          console.log(error);
          console.log(error.response.data.message)
        });
    });
    return { state };
  },

}
</script>

<style lang="scss">
.matrial {
  margin-right: 15rem;

  @media (max-width: 991px) {
    margin-right: 0;
  }

  .back {
    padding: 30px;

    .courses {
      .cours {
        position: relative;
        margin: 20px;
        border-radius: 5px;
        padding: 0;
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
          position: absolute;
          border-radius: 5px;
          background-color: rgba(0, 0, 0, 0.50);
          background-color: var(--gray-blue);
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          display: flex;
          flex-wrap: wrap;
          padding: 50px 10px;

          a {
            text-align: center;
            margin: auto;

            span {
              // position: absolute;
              display: block;
              width: 100%;
              font-size: 24px;
              font-weight: bold;
              color: #fff;
              margin-bottom: 15px;
              top: 0;
              left: 0;
              transition: .5s all;
              // transform: translate(-50%, -50%);
              cursor: pointer;
            }

            .time {
              font-size: 18px;
              text-align: center;
              // color: var(--darker-blue) !important;
            }
          }
        }

        &:hover {
          background-color: rgba(0, 0, 0, 0.50);

          span.time {
            color: #fff !important;
            // scale: 1.3;
          }
        }
      }
    }

    .leftbar {
      .cat {
        background-color: var(--gray-blue);
        border-radius: 8px;
        padding: 20px;

        h3 {
          text-align: center;
          padding-bottom: 10px;
          border-bottom: 1px solid #8d8484cb;
        }

        li {
          padding: 10px;
          font-size: 18px;
          width: 100;
          transition: .5s;

          &:hover {
            padding-right: 15px;
          }

          i {
            color: var(--darker-blue);
            margin-left: 10px;
          }

        }
      }

      .help {
        margin-top: 30px;
        border-radius: 8px;
        padding: 20px;
        color: #fff;
        background: url(../../../../assets/course/bg.png) no-repeat;
        background-position: center;
        background-size: cover;
        position: relative;

        .overlay {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.541);
          border-radius: 8px;
        }

        h4 {
          position: relative;
        }

        p {
          position: relative;
        }

        a {
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
            color: rgb(221, 221, 221);
            background-color: var(--darker-blue) !important;
          }
        }
      }
    }


  }
}
</style>
