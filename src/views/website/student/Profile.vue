<template>
  <Header />
  <div class="main-view">
    <AsideBar />
    <div class="stu-profile">
      <div class="stu-pic">
        <div class="student-name">
          <h1 class="text-center pt-2 text-light">Mohamed Sayed</h1>
        </div>
        <div class="profile-picture">
          <img
            src="../../../../public/images/profile/01.jpg"
            alt="profile picture"
            class="img-fluid"
          />
        </div>
      </div>
      <div class="container">
        <div class="details">
          <!--1-->
          <p>
            <button
              class="btn"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#user-details"
              aria-expanded="false"
              aria-controls="user-details"
            >
              تفاصيل المستخدم
            </button>
          </p>
          <div class="collapse" id="user-details">
            <div class="card card-body">
              Some placeholder content for the collapse component. This panel is
              hidden by default but revealed when the user activates the
              relevant trigger.
            </div>
          </div>
          <!--2-->
          <p>
            <button
              class="btn"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#courses-details"
              aria-expanded="false"
              aria-controls="courses-details"
            >
              تفاصيل المقررات الدراسية
            </button>
          </p>
          <div class="collapse" id="courses-details">
            <div class="card card-body">
              Some placeholder content for the collapse component. This panel is
              hidden by default but revealed when the user activates the
              relevant trigger.
            </div>
          </div>
          <!--3-->
          <p>
            <button
              class="btn"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#variant"
              aria-expanded="false"
              aria-controls="variant"
            >
              متنوع
            </button>
          </p>
          <div class="collapse" id="variant">
            <div class="card card-body">
              Some placeholder content for the collapse component. This panel is
              hidden by default but revealed when the user activates the
              relevant trigger.
            </div>
          </div>
          <!--4-->
          <p>
            <button
              class="btn"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#reports"
              aria-expanded="false"
              aria-controls="reports"
            >
              التقارير
            </button>
          </p>
          <div class="collapse" id="reports">
            <div class="card card-body">
              Some placeholder content for the collapse component. This panel is
              hidden by default but revealed when the user activates the
              relevant trigger.
            </div>
          </div>
          <!--5-->
          <p>
            <button
              class="btn"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#log-details"
              aria-expanded="false"
              aria-controls="log-details"
            >
              نشاط تسجيل الدخول
            </button>
          </p>
          <div class="collapse" id="log-details">
            <div class="card card-body">
              Some placeholder content for the collapse component. This panel is
              hidden by default but revealed when the user activates the
              relevant trigger.
            </div>
          </div>
        </div>
        <div class="last-visited">
          <h3>اخر المقررات التي قمت بزيارتها</h3>
          <div class="courses">
            <LastVisitedCourses />
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "../../../components/Footer.vue";
import Header from "../../../components/Header.vue";
import AsideBar from "../../../components/WebsiteAsideBar.vue";
import LastVisitedCourses from "@/components/website/profile/LastVisitedCourses.vue";
export default {
  components: { Footer, AsideBar, Header, LastVisitedCourses },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
.stu-profile {
  margin-right: 15rem;
  @media (max-width: 991px) {
    margin-right: 0;
  }
  margin-bottom: 50px;
  padding-top: 0px;
  .stu-pic {
    width: 100%;
    height: 140px;
    margin-bottom: 100px;
    background: var(--gray-blue);
    position: relative;
    .profile-picture {
      width: 140px;
      height: 140px;
      position: absolute;
      left: 50%;
      bottom: -50%;
      border-radius: 50%;
      padding: 4px;
      background: #fff;
      transform: translate(-50%, 0);
      box-shadow: 1px 1px 1px 1px rgb(0 0 0/20%);
      img {
        border-radius: 50%;
      }
    }
  }
  .details {
    margin-top: 150px;
    p {
      margin-top: 20px;
    }
    button {
      width: 100%;
      text-align: right;
      background: var(--gray-blue);
      font-size: 1.2rem;
      font-weight: 700;
      position: relative;
      padding: 15px;
      &::after {
        font-family: "Font Awesome 6 Free";
        content: "\f0dd";
        position: absolute;
        width: 20px;
        height: 20px;
        left: 1%;
        top: 50%;
        transform: translate(-1%, -50%);
        display: block;
      }
    }
  }
  .last-visited {
    margin-top: 100px;
  }
}
</style>
