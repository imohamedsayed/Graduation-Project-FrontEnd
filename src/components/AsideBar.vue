<template>
  <template v-if="user_role">
    <aside class="vertical-nav" ref="aside">
      <ul class="list-unstyled" dir="rtl">
        <router-link :to="{ name: 'home' }">
          <li class="d-flex justify-content-between align-items-center">
            <div class="section-name">
              <i class="fa-solid fa-home"></i>
              <span> الرئيسية</span>
            </div>
          </li>
        </router-link>
        <!--Academic Years-->
        <div v-if="user_role == 3">
          <li
            class="d-flex justify-content-between align-items-center"
            data-bs-target="#second-sections"
            aria-expanded="false"
            data-bs-toggle="collapse"
          >
            <div class="section-name">
              <i class="fa-regular fa-folder-closed"></i>
              <span>الاعوام الدراسية</span>
            </div>
            <i class="fa-solid fa-sort-down"></i>
          </li>
          <div class="collapse" id="second-sections">
            <ul class="list-unstyled">
              <router-link :to="{ name: 'CreateClass' }">
                <li
                  class="d-flex justify-content-between align-items-center second-li px-4"
                >
                  <div class="section-name">
                    <i class="fa-solid fa-plus"></i>
                    <span>اضافة عام جديد</span>
                  </div>
                </li>
              </router-link>
              <router-link :to="{ name: 'viewClasses' }">
                <li
                  class="d-flex justify-content-between align-items-center second-li px-4"
                >
                  <div class="section-name">
                    <i class="fa-regular fa-eye"></i>
                    <span> عرض الاعوام الدراسية</span>
                  </div>
                </li>
              </router-link>
            </ul>
          </div>
        </div>
        <!-- term -->
        <div v-if="user_role == 3">
          <li
            class="d-flex justify-content-between align-items-center"
            data-bs-target="#term-sections"
            aria-expanded="false"
            data-bs-toggle="collapse"
          >
            <div class="section-name">
              <i class="fa-solid fa-folder-tree"></i>
              <span> الفصول الدراسية </span>
            </div>
            <i class="fa-solid fa-sort-down"></i>
          </li>
          <div class="collapse" id="term-sections">
            <ul class="list-unstyled">
              <router-link :to="{ name: 'CreateTerm' }">
                <li
                  class="d-flex justify-content-between align-items-center second-li px-4"
                >
                  <div class="section-name">
                    <i class="fa-solid fa-plus"></i>
                    <span> اضافة فصل دراسى جديد</span>
                  </div>
                </li>
              </router-link>
              <router-link :to="{ name: 'ShowTerm' }">
                <li
                  class="d-flex justify-content-between align-items-center second-li px-4"
                >
                  <div class="section-name">
                    <i class="fa-regular fa-eye"></i>
                    <span> عرض الفصول الدراسية</span>
                  </div>
                </li>
              </router-link>
            </ul>
          </div>
        </div>

        <!-- teachers -->
        <div v-if="user_role == 3">
          <li
            class="d-flex justify-content-between align-items-center"
            data-bs-target="#teachers-sections"
            aria-expanded="false"
            data-bs-toggle="collapse"
          >
            <div class="section-name">
              <i class="fa-solid fa-chalkboard-user"></i>
              <span>الاساتذه</span>
            </div>
            <i class="fa-solid fa-sort-down"></i>
          </li>
          <div class="collapse" id="teachers-sections">
            <ul class="list-unstyled">
              <router-link :to="{ name: 'CreateTeacher' }">
                <li
                  class="d-flex justify-content-between align-items-center second-li px-4"
                >
                  <div class="section-name">
                    <i class="fa-solid fa-plus"></i>
                    <span>اضافة استاذ جديد</span>
                  </div>
                </li>
              </router-link>
              <router-link :to="{ name: 'ShowTeachers' }">
                <li
                  class="d-flex justify-content-between align-items-center second-li px-4"
                >
                  <div class="section-name">
                    <i class="fa-regular fa-eye"></i>
                    <span> عرض الاساتذه</span>
                  </div>
                </li>
              </router-link>
            </ul>
          </div>
        </div>

        <!--Start Courses-->
        <div v-if="user_role == 3">
          <li
            class="d-flex justify-content-between align-items-center"
            data-bs-target="#courses-sections"
            aria-expanded="false"
            data-bs-toggle="collapse"
          >
            <div class="section-name">
              <i class="fa-solid fa-folder-tree"></i>
              <span>الدورات</span>
            </div>
            <i class="fa-solid fa-sort-down"></i>
          </li>
          <div class="collapse" id="courses-sections">
            <ul class="list-unstyled">
              <router-link :to="{ name: 'new_course' }">
                <li
                  class="d-flex justify-content-between align-items-center second-li px-4"
                >
                  <div class="section-name">
                    <i class="fa-solid fa-plus"></i>
                    <span> اضافة دورة جديدة</span>
                  </div>
                </li>
              </router-link>
              <router-link :to="{ name: 'ShowCources' }">
                <li
                  class="d-flex justify-content-between align-items-center second-li px-4"
                >
                  <div class="section-name">
                    <i class="fa-regular fa-eye"></i>
                    <span> عرض الدورات </span>
                  </div>
                </li>
              </router-link>
            </ul>
          </div>
        </div>
        <!--End Courses-->
        <!-- Sections -->
        <div v-if="user_role == 3">
          <li
            class="d-flex justify-content-between align-items-center"
            data-bs-target="#primary-sections"
            aria-expanded="false"
            data-bs-toggle="collapse"
          >
            <div class="section-name">
              <i class="fa-solid fa-landmark"></i>
              <span> الفصول </span>
            </div>
            <i class="fa-solid fa-sort-down"></i>
          </li>
          <div class="collapse" id="primary-sections">
            <ul class="list-unstyled">
              <router-link :to="{ name: 'new_Section' }">
                <li
                  class="d-flex justify-content-between align-items-center second-li px-4"
                >
                  <div class="section-name">
                    <i class="fa-solid fa-plus"></i>
                    <span> اضافة فصل</span>
                  </div>
                </li>
              </router-link>
              <router-link :to="{ name: 'showsections' }">
                <li
                  class="d-flex justify-content-between align-items-center second-li px-4"
                >
                  <div class="section-name">
                    <i class="fa-regular fa-eye"></i>
                    <span> عرض الفصول</span>
                  </div>
                </li>
              </router-link>
            </ul>
          </div>
        </div>
        <!--Add Brach-->
        <div v-if="user_role == 1">
          <li
            class="d-flex justify-content-between align-items-center"
            data-bs-target="#branch-sections"
            aria-expanded="false"
            data-bs-toggle="collapse"
          >
            <div class="section-name">
              <i class="fa-solid fa-school"></i>
              <span>الفروع</span>
            </div>
            <i class="fa-solid fa-sort-down"></i>
          </li>
          <div class="collapse" id="branch-sections">
            <ul class="list-unstyled">
              <router-link :to="{ name: 'CreateBranch' }">
                <li
                  class="d-flex justify-content-between align-items-center second-li px-4"
                >
                  <div class="section-name">
                    <i class="fa-solid fa-plus"></i>
                    <span>اضافة فرع جديد</span>
                  </div>
                </li>
              </router-link>
              <router-link :to="{ name: 'ShowBranches' }">
                <li
                  class="d-flex justify-content-between align-items-center second-li px-4"
                >
                  <div class="section-name">
                    <i class="fa-regular fa-eye"></i>
                    <span> عرض الفروع</span>
                  </div>
                </li>
              </router-link>
            </ul>
          </div>
        </div>
        <!--ENdBrach-->
        <!-- assistant -->
        <div v-if="user_role == 2">
          <li
            class="d-flex justify-content-between align-items-center"
            data-bs-target="#assistant-sections"
            aria-expanded="false"
            data-bs-toggle="collapse"
          >
            <div class="section-name">
              <i class="fa-solid fa-user-ninja"></i>
              <span>المساعدين</span>
            </div>
            <i class="fa-solid fa-sort-down"></i>
          </li>
          <div class="collapse" id="assistant-sections">
            <ul class="list-unstyled">
              <router-link :to="{ name: 'CreateAssistant' }">
                <li
                  class="d-flex justify-content-between align-items-center second-li px-4"
                >
                  <div class="section-name">
                    <i class="fa-solid fa-plus"></i>
                    <span>اضافة مساعد جديد</span>
                  </div>
                </li>
              </router-link>
              <router-link :to="{ name: 'ShowAssistants' }">
                <li
                  class="d-flex justify-content-between align-items-center second-li px-4"
                >
                  <div class="section-name">
                    <i class="fa-regular fa-eye"></i>
                    <span> عرض المساعدين</span>
                  </div>
                </li>
              </router-link>
            </ul>
          </div>
        </div>

        <!--Store -->
        <div v-if="user_role == 3">
          <li
            class="d-flex justify-content-between align-items-center"
            data-bs-target="#store-sections"
            aria-expanded="false"
            data-bs-toggle="collapse"
          >
            <div class="section-name">
              <i class="fa-solid fa-store"></i>
              <span>المتجر</span>
            </div>
            <i class="fa-solid fa-sort-down"></i>
          </li>
          <div class="collapse" id="store-sections">
            <ul class="list-unstyled">
              <router-link :to="{ name: 'newshop' }">
                <li
                  class="d-flex justify-content-between align-items-center second-li px-4"
                >
                  <div class="section-name">
                    <i class="fa-solid fa-plus"></i>
                    <span> اضافة متجر جديد</span>
                  </div>
                </li>
              </router-link>
              <router-link :to="{ name: 'showshops' }">
                <li
                  class="d-flex justify-content-between align-items-center second-li px-4"
                >
                  <div class="section-name">
                    <i class="fa-regular fa-eye"></i>
                    <span> عرض المتاجر</span>
                  </div>
                </li>
              </router-link>
              <router-link :to="{ name: 'shoporder' }">
                <li
                  class="d-flex justify-content-between align-items-center second-li px-4"
                >
                  <div class="section-name">
                    <i class="fa-solid fa-dolly"></i>
                    <span> طلبات المتجر </span>
                  </div>
                </li>
              </router-link>
            </ul>
          </div>
        </div>
        <!-- End Store -->

        <!--Start Users-->
        <!--End Users-->
        <!--Start Exams -->
        <!-- <div v-if="user_role == 3">
          <li
            class="d-flex justify-content-between align-items-center"
            data-bs-target="#exam-sections"
            aria-expanded="false"
            data-bs-toggle="collapse"
          >
            <div class="section-name">
              <i class="fa-regular fa-file-lines"></i>
              <span>الاختبارات </span>
            </div>
            <i class="fa-solid fa-sort-down"></i>
          </li>
          <div class="collapse" id="exam-sections">
            <ul class="list-unstyled">
              <router-link :to="{ name: 'new_Exam' }">
                <li
                  class="d-flex justify-content-between align-items-center second-li px-4"
                >
                  <div class="section-name">
                    <i class="fa-solid fa-plus"></i>
                    <span> اضافة اختبار</span>
                  </div>
                </li>
              </router-link>
              <a href="#">
                <li
                  class="d-flex justify-content-between align-items-center second-li px-4"
                >
                  <div class="section-name">
                    <i class="fa-regular fa-eye"></i>
                    <span> عرض الاختبارات </span>
                  </div>
                </li>
              </a>
            </ul>
          </div>
        </div> -->
        <!--End Exams -->
        <!--Notification-->
        <!-- <router-link :to="{ name: 'CreateNotificationPage' }">
          <li class="d-flex justify-content-between align-items-center">
            <div class="section-name">
              <i class="fa-regular fa-bell"></i>
              <span>الاشعارات</span>
            </div>
          </li>
        </router-link> -->
        <!--Notification-->
        <!--Client's Support-->
        <!-- <a href="#">
          <li class="d-flex justify-content-between align-items-center">
            <div class="section-name">
              <i class="fa-solid fa-headset"></i>
              <span> خدمة العملاء</span>
            </div>
          </li>
        </a> -->
        <!--Client's Support-->

        <!--Start managers-->
        <div v-if="user_role == 1">
          <li
            class="d-flex justify-content-between align-items-center"
            data-bs-target="#managers-sections"
            aria-expanded="false"
            data-bs-toggle="collapse"
          >
            <div class="section-name">
              <i class="fa-solid fa-people-roof"></i>
              <span>المديرين </span>
            </div>
            <i class="fa-solid fa-sort-down"></i>
          </li>
          <div class="collapse" id="managers-sections">
            <ul class="list-unstyled">
              <router-link :to="{ name: 'Add_Manger' }">
                <li
                  class="d-flex justify-content-between align-items-center second-li px-4"
                >
                  <div class="section-name">
                    <i class="fa-solid fa-plus"></i>
                    <span>اضافة مدير</span>
                  </div>
                </li>
              </router-link>
              <router-link :to="{ name: 'Show_mangers' }">
                <li
                  class="d-flex justify-content-between align-items-center second-li px-4"
                >
                  <div class="section-name">
                    <i class="fa-regular fa-eye"></i>
                    <span> عرض المديرين </span>
                  </div>
                </li>
              </router-link>
            </ul>
          </div>
        </div>
        <!--End managers-->
        <!--Settings-->
        <div v-if="user_role == 1">
          <router-link :to="{ name: 'plat_settings' }">
            <li class="d-flex justify-content-between align-items-center">
              <div class="section-name">
                <i class="fa-solid fa-gear"></i>
                <span> اعدادات المنصة</span>
              </div>
            </li>
          </router-link>
        </div>
        <!--End Settings-->
        <hr />
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
  </template>
  <teleport to="body">
    <div class="asideToggler" @click="openAside">
      <i class="fa-solid fa-bars"></i>
    </div>
  </teleport>
</template>

<script>
import { useStore } from "vuex";
import { reactive, computed } from "vue";
export default {
  setup() {
    const store = useStore();
    const state = reactive({
      user: computed(() => store.state.user),
    });
    let user_role;
    if (state.user != null) {
      user_role = state.user.role_id;
    } else {
      user_role = null;
    }

    return {
      user_role: user_role,
    };
  },

  methods: {
    openAside() {
      this.$refs.aside.classList.toggle("open");
    },
    async logout() {
      try {
        await this.$store.dispatch("adminLogout");
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
