<template>
  <header class="main-header">
    <div class="left">
      <div class="left-content">
        <div class="admin" @click="adminOptions">
          <img
            src="../../public/images/hd_dp.jpg"
            class="img-fluid admin-img"
            alt=""
          />
          <div class="admin-options position-absolute" ref="adminOptions">
            <div
              class="admin-info d-flex p-4 align-items-center gap-2"
              dir="rtl"
            >
              <div class="img" style="width: 50px">
                <img
                  src="../../public/images/hd_dp.jpg"
                  class="img-fluid admin-img"
                  alt=""
                />
              </div>
              <h5 class="admin-name text-muted">علي خالد</h5>
            </div>
            <ul class="list-unstyled">
              <li dir="rtl">اعدادات الحساب</li>
              <li dir="rtl">تسجيل خروج</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="right">
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
export default {
  methods: {
    adminOptions() {
      this.$refs.adminOptions.classList.toggle("open");
    },
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
    @media (max-width: 991px) {
      padding-right: 30px;
    }
  }
}
</style>
