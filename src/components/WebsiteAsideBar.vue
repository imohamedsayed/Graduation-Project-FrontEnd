<template>
  <aside class="vertical-nav" ref="aside">
    <ul class="list-unstyled" dir="rtl">
      <router-link :to="{ path: '/branch' }">
        <li class="d-flex justify-content-between align-items-center">
          <div class="section-name">
            <i class="fa-solid fa-home"></i>
            <span> الرئيسية</span>
          </div>
        </li>
      </router-link>

      <router-link :to="{ name: 'profile' }">
        <li class="d-flex justify-content-between align-items-center">
          <div class="section-name">
            <i class="fa-solid fa-user"></i> <span>حسابي</span>
          </div>
        </li>
      </router-link>

      <router-link :to="{ path: '/Website/chooseBranch' }">
        <li class="d-flex justify-content-between align-items-center">
          <div class="section-name">
            <i class="fa-solid fa-school"></i>
            <span> الفروع </span>
          </div>
        </li>
      </router-link>

      <!--Start Notifications-->

      <!-- <router-link :to="{ name: 'WebsiteNotificationPage' }">
        <li class="d-flex justify-content-between align-items-center">
          <div class="section-name">
            <i class="fa-regular fa-bell"></i>
            <span>الاشعارات</span>
          </div>
        </li>
      </router-link> -->

      <!--End Notifications-->

      <!--Start cart-->
      <router-link :to="{ name: 'cart' }">
        <li class="d-flex justify-content-between align-items-center">
          <div class="section-name">
            <i class="fa-solid fa-cart-shopping"></i>
            <span>عربة التسوق</span>
          </div>
        </li>
      </router-link>
      <!--End cart-->

      <!--Start Sections-->
      <!-- <li
        class="d-flex justify-content-between align-items-center"
        data-bs-target="#sections"
        aria-expanded="false"
        data-bs-toggle="collapse"
      >
        <div class="section-name">
          <i class="fa-solid fa-list"></i>
          <span> الاقسام </span>
        </div>
        <i class="fa-solid fa-sort-down"></i>
      </li> -->

      <!-- <div class="collapse" id="sections">
        <ul class="list-unstyled">
          <a href="#">
            <li
              class="d-flex justify-content-between align-items-center second-li px-4"
            >
              <div class="section-name">
                <i class="fa-solid fa-rocket"></i>
                <span>فيزياء</span>
              </div>
            </li>
          </a>
          <a href="#">
            <li
              class="d-flex justify-content-between align-items-center second-li px-4"
            >
              <div class="section-name">
                <i class="fa-solid fa-flask"></i>
                <span>الكيمياء</span>
              </div>
            </li>
          </a>
          <a href="#">
            <li
              class="d-flex justify-content-between align-items-center second-li px-4"
            >
              <div class="section-name">
                <i class="fa-solid fa-frog"></i>
                <span>الأحياء</span>
              </div>
            </li>
          </a>
          <a href="#">
            <li
              class="d-flex justify-content-between align-items-center second-li px-4"
            >
              <div class="section-name">
                <i class="fa-solid fa-book"></i>
                <span>اللغة العربية</span>
              </div>
            </li>
          </a>
        </ul>
      </div> -->
      <!--End Sections-->
      <!--Start My Courses-->
      <router-link :to="{ name: 'matrial' }">
        <li class="d-flex justify-content-between align-items-center">
          <div class="section-name">
            <i class="fa-solid fa-clipboard"></i>
            <span>مجموعاتى</span>
          </div>
        </li>
      </router-link>
      <!--End My Courses-->
      <!--Start Favorites-->
      <router-link :to="{ name: 'Favourite' }">
        <li class="d-flex justify-content-between align-items-center">
          <div class="section-name">
            <i class="fa-regular fa-heart"></i>
            <span>المفضلة</span>
          </div>
        </li>
      </router-link>
      <!--End Favorites-->
      <!--Start store-->

      <!--End store-->

      <!--Start genuses-->
      <!-- <router-link :to="{ name: 'superior' }">
        <li class="d-flex justify-content-between align-items-center">
          <div class="section-name">
            <i class="fa-solid fa-trophy text-warning"></i>
            <span>المتفوقين</span>
          </div>
        </li>
      </router-link> -->
      <!--End genuses-->

      <!--start my account-->

      <!-- <li
        class="d-flex justify-content-between align-items-center"
        data-bs-target="#Accounty"
        aria-expanded="false"
        data-bs-toggle="collapse"
      >
        <div class="section-name">
          <i class="fa-solid fa-user"></i>
          <span> حسابي </span>
        </div>
        <i class="fa-solid fa-sort-down"></i>
      </li>
      <div class="collapse" id="Accounty">
        <ul class="list-unstyled">
          <a href="#">
            <li
              class="d-flex justify-content-between align-items-center second-li px-4"
            >
              <div class="section-name">
                <i class="fa-regular fa-note-sticky"></i>
                <span>ملاحظاتي</span>
              </div>
            </li>
          </a>
          <a href="#">
            <li
              class="d-flex justify-content-between align-items-center second-li px-4"
            >
              <div class="section-name">
                <i class="fa-brands fa-rev"></i>
                <span>المراجعة</span>
              </div>
            </li>
          </a>
          <a href="#">
            <li
              class="d-flex justify-content-between align-items-center second-li px-4"
            >
              <div class="section-name">
                <i class="fa-solid fa-chart-line"></i>
                <span>متابعة المستوي</span>
              </div>
            </li>
          </a>
        </ul>
      </div> -->

      <!--end my account-->

      <hr class="my-4" />

      <!--Start support-->
      <!-- <a href="#">
        <li class="d-flex justify-content-between align-items-center">
          <div class="section-name">
            <i class="fa-regular fa-circle-question"></i>
            <span> الدعم الفني </span>
          </div>
        </li>
      </a> -->
      <!--End support-->

      <!--Settings-->
      <router-link :to="{ name: 'studentSettings' }">
        <li class="d-flex justify-content-between align-items-center">
          <div class="section-name">
            <i class="fa-solid fa-gear"></i>
            <span> الاعدادات </span>
          </div>
        </li>
      </router-link>
      <!--End Settings-->
      <!--Logout-->
      <div @click="logout()">
        <li class="d-flex justify-content-between align-items-center">
          <div class="section-name text-danger">
            <i class="fa-solid fa-right-from-bracket text-danger"></i>
            <span> تسجيل الخروج </span>
          </div>
        </li>
      </div>
      <!--End Logout-->
    </ul>
  </aside>
  <teleport to="body">
    <div class="asideToggler" @click="openAside">
      <i class="fa-solid fa-bars"></i>
    </div>
  </teleport>
</template>

<script>
export default {
  methods: {
    openAside() {
      this.$refs.aside.classList.toggle("open");
    },
    async logout() {
      try {
        await this.$store.dispatch("studentLogout");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.vertical-nav {
  z-index: 999;
  position: fixed;
  height: calc(100vh - 60px);
  width: 220px;
  overflow-y: auto;
  background: #fff;
  transition: all 0.4s ease-out;
  box-shadow: 1px 0px 28.6px rgba(0, 0, 0, 0.052),
    3.4px 0px 50.5px rgba(0, 0, 0, 0.081), 15px 0px 123px rgba(0, 0, 0, 0.14);
  ul {
    padding: 0;
    a {
      text-decoration: none;
      color: var(--text-black);
      font-size: 1rem;
    }
    li {
      direction: rtl;
      padding: 10px;
      transition: all 0.4s ease-out;
      cursor: pointer;
      margin: 5px 0;
      i {
        color: var(--darker-blue);
      }
      &.second-li {
        span {
          font-size: 0.9rem;
          font-weight: 340;
        }
      }
      span {
        font-size: 1.1rem;
        font-weight: 500;
      }
      &:hover {
        color: #fff;
        background: var(--blue-color);
      }
      i {
        margin-left: 10px;
      }
    }
  }
  a {
    &.router-link-exact-active li {
      background: #8f94fb41 !important;
    }
    &.router-link-exact-active li {
      border-right: 6px solid var(--darker-blue);
    }
  }
  &::-webkit-scrollbar {
    width: 8px;
    height: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background: #8f94fb87;
    border: 1px solid #fff;
    border-radius: 20px;
  }

  @media (max-width: 991px) {
    position: fixed;
    right: 0;
    transform: translateX(250px);
    box-shadow: -1px 0 10px 2px rgba(153, 153, 153, 0.493);
    &.open {
      transform: translateX(0);
    }
  }
}
.asideToggler {
  position: fixed;
  top: 5px;
  right: 10px;
  border-radius: 5px;
  z-index: 1000;
  font-size: 1.5rem;
  padding: 6px 14px;
  color: #fff;
  cursor: pointer;
  display: none;
  background: linear-gradient(to top right, #1abcff, #02fbd6);
  @media (max-width: 991px) {
    display: block;
  }
}
</style>
