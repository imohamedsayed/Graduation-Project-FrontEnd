<template>
  <header class="main-header">
    <div class="left">
      <div class="left-content">
        <div class="admin" @click="adminOptions">
          <img
            src="../../public/images/hd_dp.jpg"
            class="img-fluid admin-img"
            alt=""
            name="personalPhoto"
          />
          <div
            class="admin-options position-absolute"
            ref="adminOptions"
            v-if="user"
          >
            <div
              class="admin-info d-flex p-4 align-items-center gap-2"
              dir="rtl"
            >
              <div class="img" style="width: 50px">
                <img
                  src="../../public/images/hd_dp.jpg"
                  class="img-fluid admin-img"
                  alt=""
                  name="personalPhoto1"
                />
              </div>
              <h5 class="admin-name text-muted">
                {{ user.f_name }}
              </h5>
            </div>
            <ul class="list-unstyled">
              <li dir="rtl" @click="$router.push({ name: 'studentSettings' })">
                اعدادات الحساب
              </li>
              <li dir="rtl" @click="logout">تسجيل خروج</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="right d-flex">
      <!-- <input type="search" placeholder="ماذا تريد أن تتعلم" /> -->

      <div class="logo" style="width: 140px">
        <img
          src="../../public/images/logo/logo_01.png"
          class="img-fluid"
          alt=""
        />
      </div>
    </div>
  </header>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import axios from "axios";
export default {
  methods: {
    adminOptions() {
      this.$refs.adminOptions.classList.toggle("open");
    },
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    const logout = async () => {
      try {
        await store.dispatch("studentLogout");
      } catch (err) {}
    };
    return {
      user: computed(() => store.state.student),
      logout,
    };
  },
};
</script>

<style lang="scss">
.main-header {
  direction: ltr !important;
  height: 60px;
  z-index: 1000;
  background: linear-gradient(to right, var(--blue-color), var(--darker-blue));
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 40px;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 100;
  .left {
    flex: 0 0 1;
    max-width: 50%;
    display: flex;
    gap: 50px;
    align-items: center;
    .admin {
      width: 40px;
      border-radius: 50px;
      padding: 2px;
      background: #ffff;
      cursor: pointer;
      position: relative;
      img {
        border-radius: 50px;
      }
      .admin-options {
        width: 200px;
        background: #fff;
        border: 1px solid rgba(153, 153, 153, 0.369);
        top: 50px;
        cursor: auto;
        display: none;
        &.open {
          display: block;
        }
        ul {
          text-align: right;
          color: #777;
          li {
            margin: 10px 0;
            padding: 10px;
            transition: all 0.3 ease;
            cursor: pointer;
            &:hover {
              background: var(--blue-color);
              color: white;
            }
          }
        }
      }
    }
  }
  .right {
    align-items: center;
    @media (max-width: 991px) {
    }
    .logo {
      img {
        width: 70%;
      }
    }
    input {
      direction: rtl;
      width: 400px;
      border-radius: 15px;
      padding: 5px 10px;
      margin-right: 150px;
      transition: all 0.3s ease;
      height: 50px;
      &:focus {
        outline: 2px solid var(--landing-blue);
        transform: scale(1.05);
      }
      @media (max-width: 832px) {
        margin-right: 10px;
      }
      @media (max-width: 720px) {
        margin-right: 10px;
        width: 160px;
        background: transparent;
        border: none;
        border-bottom: 5px solid var(--landing-blue);
      }
      @media (max-width: 520px) {
        display: none;
      }
    }
  }
}
</style>
