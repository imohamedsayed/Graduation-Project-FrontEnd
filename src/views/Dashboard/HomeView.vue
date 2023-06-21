<template>
  <Header />
  <div class="main-view">
    <AsideBar />
    <div class="home">
      <div class="cover">
        <div class="row">
          <div class="col-lg-12">
            <h2 class="st_title">
              <i class="fa fa-list"></i> مرحبا,
              <span class="tag-name" v-if="state.user"
                >{{ state.user.name }}
              </span>
            </h2>
          </div>
          <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-6">
            <div class="card_dash">
              <div class="card_dash_left">
                <h5>عدد الدورات</h5>
                <span class="crdbg_3">0</span>
              </div>
              <div class="card_dash_right">
                <img
                  src="../../../public/images/dashboard/online-course.svg"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-6">
            <div class="card_dash">
              <div class="card_dash_left">
                <h5>عدد المستخدمين</h5>

                <span class="crdbg_4">0</span>
              </div>
              <div class="card_dash_right">
                <img
                  src="../../../public/images/dashboard/knowledge.svg"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-6">
            <div class="card_dash">
              <div class="card_dash_left">
                <h5>عدد المشتركين</h5>
                <span class="crdbg_4">0</span>
              </div>
              <div class="card_dash_right">
                <img
                  src="../../../public/images/dashboard/graduation-cap.svg"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-6">
            <div class="card_dash">
              <div class="card_dash_left">
                <h5>اجمالي الأرباح</h5>

                <span class="crdbg_1">0 جنيه</span>
              </div>
              <div class="card_dash_right">
                <img
                  src="../../../public/images/dashboard/achievement.svg"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div class="col-md-12">
            <div class="card_dash1">
              <div class="card_dash_left1">
                <h1>
                  <i class="fa fa-comment"></i> محمد, هل انت مستعد للانطلاق ؟
                </h1>
              </div>

              <div class="card_dash_right1">
                <router-link
                  :to="{ name: 'new_course' }"
                  class="create_btn_dash"
                >
                  <i class="fa fa-plus-circle"></i> انشاء دورة
                  جديدة</router-link
                >
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="co-md-12" v-if="state.courses.length > 0">
            <div class="table-responsive">
              <table class="table ucp-table">
                <thead class="thead-s">
                  <tr>
                    <th class="text-center" scope="col">#</th>
                    <th class="cell-ta" scope="col">صورة</th>
                    <th class="cell-ta" scope="col">عنوان</th>
                    <th class="cell-ta" scope="col">الحالة</th>
                    <th class="text-center" scope="col">مشاهدات</th>
                    <th class="text-center" scope="col">المشتركين</th>
                  </tr>
                </thead>
                <tbody>
                  <Show_Course
                    v-for="cours in state.courses"
                    :key="cours.id"
                    :cours="cours"
                  />
                </tbody>
              </table>
            </div>
          </div>
          <div class="col-md-12" v-else>
            <div class="no_results">
              <p>
                <i class="fas fa-info-circle"></i>
                لم تقم بانشاء دورات بعد.
                <br />
                <router-link
                  :to="{ name: 'new_course' }"
                  class="create_btn_dash"
                >
                  <i class="fa fa-plus-circle"></i> انشاء اول دورة</router-link
                >
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";
import AsideBar from "@/components/AsideBar.vue";

import Show_Course from "@/components/Courses/Show_Course.vue";
import { reactive, onMounted, computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
  name: "HomeView",
  components: { Footer, AsideBar, Header, Show_Course },
  setup() {
    const state = reactive({
      user: computed(() => store.state.user),
      courses: [
        {
          id: 1,
          name: "منهج الفيزياء",
          status: "قيد الانشاء",
          views: 70,
          subscribes: 1150,
        },
        {
          id: 2,
          name: "منهج الكيمياء",
          status: "قيد الانشاء",
          views: 70,
          subscribes: 1150,
        },
        {
          id: 3,
          name: "منهج الاحياء",
          status: "قيد الانشاء",
          views: 70,
          subscribes: 1150,
        },
      ],
    });

    const store = useStore();
    const router = useRouter();

    onMounted(() => {
      // console.log(state.user);
      if (state.user == null) {
        router.push("/dashboard/login");
      }
    });

    return {
      state,
    };
  },
};
</script>

<style lang="scss">
.main-view {
  margin-top: 60px;
}
.home {
  margin-right: 14rem;
  @media (max-width: 991px) {
    margin-right: 0;
  }

  .cover {
    padding: 40px;
    width: 100%;
    i {
      color: var(--darker-blue);
      margin-left: 10px;
    }
    .st_title {
      margin-bottom: 8px;
      // color: var(--text-black);
      font-size: 20px;
      i {
        color: var(--darker-blue);
        margin-left: 10px;
      }
      span {
        display: inline-block;
        color: var(--darker-blue) !important;
      }
    }
    .card_dash,
    .card_dash1 {
      background: #fff;
      margin-top: 30px;
      float: right;
      display: flex;
      justify-content: space-between;
      width: 100%;
      border-radius: 10px;
      border: 1px solid #efefef;
      padding: 20px;
      .card_dash_left {
        padding: 5px 0px;
        h5 {
          margin-bottom: 30px;
        }
        span {
          font-size: 13pt;
          font-weight: bold;
          padding: 4px 20px;
          border-radius: 5px;
          color: #ffffff;
        }
      }
      .crdbg_3 {
        background: #ffa052 !important;
      }
      .crdbg_1 {
        background: #ffc136 !important;
      }
      .crdbg_4 {
        background: #cca1ff !important;
      }
      .card_dash_right {
        float: left;
        padding: 15px 0;
        img {
          width: 70px;
        }
      }

      .card_dash_left1 h1 {
        font-size: 22px;
        display: flex;
        color: var(--blue-color);
        font-weight: 700;
        @media screen and (max-width: 767px) {
          flex-direction: column;
          text-align: center;
          font-size: 20px;
          gap: 15px;
        }
      }
      .card_dash_right1 {
        background-color: var(--darker-blue);
        border-radius: 25px;
        border: 0;
        padding: 0px 25px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: 0.3s;
        @media screen and (max-width: 767px) {
          width: 150px;
          margin: 0 auto;
        }
        &:hover {
          color: var(--blue-color);
        }
        a,
        i {
          color: white;
          font-size: 14px;
          font-weight: 700;
        }
      }
    }
    .card_dash1 {
      @media screen and (max-width: 767px) {
        flex-direction: column;
        gap: 20px;
      }
    }
    .dash1 {
      flex-direction: column;
      justify-content: center;
      gap: 15px;
    }

    .no_results {
      width: 100%;
      text-align: center;
      padding: 150px 0px;
      background: white;
      border-radius: 10px;
      margin: 25px 0px;
      margin-bottom: 0;
      p {
        font-weight: 400;
        font-size: 19px;
        color: lightslategray;
      }
    }
  }
}
</style>
