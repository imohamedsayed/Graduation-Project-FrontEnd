<template>
  <div class="landing-page">
    <div class="header">
      <div class="right">
        <div class="logo d-flex gap-2 align-items-center">
          <div class="nav-toggler" @click="toggleSide">
            <i class="fa-solid fa-bars"></i>
          </div>
          <div class="img">
            <img
              src="../../public/images/logo/logo_01.png"
              class="img-fluid"
              alt=""
            />
          </div>
        </div>
        <div class="nav d-lg-none d-none">
          <ul class="list-unstyled">
            <li class="active">الصفحة الرئيسية</li>
            <li>حول</li>
            <li>اّراء الاخرين</li>
            <li>اتصل بنا</li>
          </ul>
        </div>
      </div>
      <div class="action">
        <button
          class="btn btn ms-3 login d-md-inline-block d-none"
          @click="$router.push({ name: 'login' })"
        >
          تسجيل الدخول
        </button>
        <router-link :to="{ name: 'signup' }">
          <button class="btn btn sign d-md-inline-block d-none">
            انشاء حساب
          </button>
        </router-link>
        <div
          class="responsive-action d-md-none d-block"
          @click="resLog = !resLog"
        >
          <i class="fa-solid fa-angle-down"></i>
          <i class="fa-solid fa-user"></i>
          <div class="log-menu" v-if="resLog">
            <ul class="list-unstyled">
              <li @click="$router.push({ name: 'login' })">
                <a href="#">
                  <i class="fa-regular fa-user"></i>
                  تسجيل الدخول</a
                >
              </li>
              <li>
                <router-link :to="{ name: 'signup' }">
                  <i class="fa-solid fa-right-to-bracket"></i>
                  انشاء حساب
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="sideBar colored closed" ref="side">
      <ul class="list-unstyled">
        <li class="active" @click="navTo('section1')" data-index="section1">
          <i class="fa-solid fa-house"></i>
        </li>
        <li @click="navTo('section2')" data-index="section2">
          <i class="fa-solid fa-user-tie"></i>
        </li>
        <li @click="navTo('section3')" data-index="section3">
          <i class="fa-solid fa-briefcase"></i>
        </li>

        <li @click="navTo('section4')" data-index="section4">
          <i class="fa-solid fa-comments"></i>
        </li>
        <li @click="navTo('section5')" data-index="section5">
          <i class="fa-solid fa-address-card"></i>
        </li>
      </ul>
    </div>
    <!--S Intro-->
    <Intro />
    <!--E Intro-->

    <!--S About-->
    <About />
    <!--E About-->

    <!--S Services-->
    <Services />
    <!--E Services-->

    <!--S Testimonials-->
    <Testimonials />
    <!--E Testimonials-->

    <!--S Contact-->
    <Contact />
    <!--E Contact-->

    <!--S How To Use-->
    <HowToUse />
    <!--E How To Use-->
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import Services from "@/components/landing/Services.vue";
import About from "@/components/landing/About.vue";
import Testimonials from "@/components/landing/Testimonials.vue";
import Contact from "@/components/landing/Contact.vue";
import HowToUse from "@/components/landing/HowToUse.vue";
import Intro from "@/components/landing/Intro.vue";
import { onMounted } from "@vue/runtime-core";

export default {
  components: {
    Services,
    Footer,
    About,
    Testimonials,
    Contact,
    HowToUse,
    Intro,
  },
  setup() {
    window.addEventListener("scroll", () => {

      if (scrollY >= 500) {
        document.querySelector(".header").classList.add("colored");
      } else {
        document.querySelector(".header").classList.remove("colored");
      }

      sections.forEach((sec) => {
        let sectionOffsets = sec.getBoundingClientRect();

        if (sectionOffsets.top > -300 && sectionOffsets.top <= 150) {
          HandleActiveClasses(sec.id);
        }
      });
    });
    var sections, menuLinks;
    onMounted(() => {
      sections = document.querySelectorAll("section");
      menuLinks = document.querySelectorAll(".sideBar li");
    });

    function HandleActiveClasses(sectionId) {
      menuLinks.forEach((a) => {
        a.classList.remove("active");
        if (a.dataset.index == sectionId) {
          a.classList.add("active");
        }
      });
    }
  },
  data() {
    return {
      resLog: false,
    };
  },
  methods: {
    toggleSide() {
      this.$refs.side.classList.toggle("closed");
    },
    navTo(ref) {
      document.getElementById(`${ref}`).scrollIntoView({
        behavior: "smooth",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.landing-page {
  background: #fff;
  .header {
    height: 80px;
    z-index: 1000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    padding-right: 0;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 100;
    background: transparent;
    box-shadow: 0 1px 1px 1px rgba($color: #fff, $alpha: 0.2);
    backdrop-filter: blur(6px);
    transition: background 0.4s ease-out;
    &.colored {
      background: var(--landing-blue);
    }
    .right {
      display: flex;
      align-items: center;
      .logo {
        .img {
          width: 140px;
          img {
            width: 90% !important ;
          }
        }
        .nav-toggler {
          background: linear-gradient(to right, var(--darker-blue), var(--blue-color));
          color: #fff;
          width: 82px;
          height: 80px;
          font-size: 2rem;
          display: grid;
          place-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          &:hover {
            transform: scale(1.05);
          }
        }
      }
      .nav {
        ul {
          display: flex;
          align-items: center;
          gap: 10px;
          margin: 0;
          li {
            padding: 10px 20px;
            background: var(--darker-blue);
            font-size: 1.1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.4s ease;
            border-radius: 10px;
            &:hover {
              background: var(--blue-color);
            }
            &.active {
              border-right: 4px solid var(--landing-blue);
              background: linear-gradient(to left, var(--darker-blue), var(--blue-color));
            }
          }
        }
      }
    }
    .action {
      .login {
        border: 1px solid #fff;
        color: #ffff;
        background: var(--darker-blue);
        transition: all 0.3s ease;
        &:hover {
          background: var(--blue-color);
          color: white;
        }
      }
      .sign {
        border: 1px solid #fff;
        background: var(--darker-blue);
        color: #fff;
        transition: all 0.3s ease;
        &:hover {
          background: var(--blue-color);
        }
      }
      .responsive-action {
        color: #fff;
        padding: 10px;
        font-size: 1.6rem;
        border-radius: 50px;
        cursor: pointer;
        transition: all 0.3s ease;
        position: relative;
        .log-menu {
          animation: fade-in 0.6s 0s 1 ease-out;
          position: absolute;
          width: 200px;
          font-size: 1.3rem;
          padding: 10px;
          background: rgba(255, 255, 255, 0.941);
          left: 0;
          top: 69px;
          border-bottom-right-radius: 25px;
          box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);
          ul {
            padding: 0;
            li {
              background: rgba($color: #777, $alpha: 0.1);
              padding: 5px 10px;
              &:not(:last-of-type) {
                margin-bottom: 10px;
              }
              a {
                i {
                  margin-left: 5px;
                }
                color: var(--text-black);
              }
            }
          }
        }
      }
    }
  }
  .sideBar {
    position: fixed;
    z-index: 100;
    height: calc(100vh - 80px);
    width: 80px;
    top: 80px;
    box-shadow: -3px 1px 4px 1px rgba($color: #fff, $alpha: 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(6px);
    transition: background 0.4s ease-out;
    &.colored {
      background: var(--landing-blue);
    }
    ul {
      margin: 0;
      padding: 0 10px;
      width: 100%;
      li {
        width: 100%;
        margin: 40px 0;
        padding: 10px 20px;
        text-align: center;
        font-size: 1.4rem;
        font-weight: bold;
        background: #ffffff4b;
        color: #ececec;
        border-radius: 5px;
        cursor: pointer;
        transition: all 0.3s ease-out;
        &.active {
          border-right: 4px solid var(--darker-blue);
          background: rgba(255, 255, 255, 0.62);
          color: var(--landing-blue);
        }
      }
    }
    transition: transform 0.7s ease-out;
    &.closed {
      transform: translateX(200px);
    }
  }
}
</style>
