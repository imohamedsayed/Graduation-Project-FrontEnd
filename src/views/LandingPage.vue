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
        <button class="btn btn ms-3 login">تسجيل الدخول</button>
        <button class="btn btn sign">انشاء حساب</button>
      </div>
    </div>
    <div class="sideBar" ref="side">
      <ul class="list-unstyled">
        <li class="active"><i class="fa-solid fa-house"></i></li>
        <li><i class="fa-solid fa-user-tie"></i></li>
        <li><i class="fa-solid fa-briefcase"></i></li>
        <li><i class="fa-solid fa-comments"></i></li>
      </ul>
    </div>

    <div class="intro">
      <div class="overlay"></div>
      <div class="content container">
        <div class="txt">
          <h1 class="mt-4">أهلا بك في موقعنا</h1>
          <div class="paragraph">
            <p>
              تساهم الدراسة في بناء المهارات الشخصية والنفسية وصقلها لدى
              الأفراد، وهو ما يلازم الأشخاص طوال حياتهم غالباً، ومن ذلك
              المثابرة، وضبط النفس، والمرونة، والصبر، حيث يُمكن أن تساعد هذه
              المهارات في مجموعة متنوعة من تحديات الحياة ابتداءً من العمل إلى
              الحياة الأسرية.
            </p>
          </div>
          <div class="actions">
            <button class="read">قراءة المزيد</button>
            <button class="start">ابدأ الان</button>
          </div>
        </div>
        <div class="img-container d-lg-block d-none">
          <div class="img">
            <img
              src="../../public/images/landing/intro4.jpg"
              class="img-fluid"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toggleSide() {
      this.$refs.side.classList.toggle("closed");
    },
  },
};
</script>

<style lang="scss">
.landing-page {
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

    .right {
      display: flex;
      align-items: center;
      .logo {
        .img {
          width: 140px;
        }
        .nav-toggler {
          background: linear-gradient(to right, #6b5fbbd2, var(--landing-blue));
          color: #fff;
          width: 100px;
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
            background: #fffefe70;
            font-size: 1.1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.4s ease;
            border-radius: 10px;
            &:hover {
              background: #3227768d;
            }
            &.active {
              border-right: 4px solid var(--landing-blue);
              background: linear-gradient(to left, #3422aa87, #3227765b);
            }
          }
        }
      }
    }
    .action {
      .login {
        border: 1px solid #fff;
        color: #ffff;
        transition: all 0.3s ease;
        &:hover {
          background: #fff;
          color: #000;
        }
      }
      .sign {
        background: var(--landing-blue);
        color: #fff;
        transition: all 0.3s ease;
        &:hover {
          background: #242043;
        }
      }
    }
  }
  .sideBar {
    position: fixed;
    z-index: 100;
    height: calc(100vh - 80px);
    width: 100px;
    top: 80px;
    box-shadow: -3px 3px 4px 1px rgba($color: #fff, $alpha: 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(6px);
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
  .intro {
    height: calc(100vh);
    width: 100%;
    background: url("../../public/images/landing/intro6.jpg") top center;
    background-size: cover;
    display: flex;
    align-items: center;
    position: relative;
    .content {
      z-index: 2;
      display: flex;
      align-items: center;
      gap: 40px;
      backdrop-filter: blur(6px);
      .txt {
        width: 520px;
        background: #6f6b6b2e;
        border-radius: 10px;
        backdrop-filter: blur(9px);
        padding: 20px;
        flex: 1;
        h1 {
          text-align: center;
          font-size: 2.4rem;
          color: #5647cdd8;
        }
        .paragraph {
          margin: 40px 0;
          p {
            font-size: 1.6rem;
            font-weight: 600;
            color: #fff;
          }
        }
        .actions {
          text-align: center;
          > button {
            margin: 0 10px;
            padding: 10px 20px;
            border-radius: 20px;
            border: none;
            outline: none;
            background: transparent;

            font-size: 1.2rem;
            &.read {
              border: 1px solid #fff;
              color: #ffff;
              transition: all 0.4s ease;
              &:hover {
                background: #fff;
                color: #000;
              }
            }
            &.start {
              background: linear-gradient(
                to left,
                var(--blue-color),
                var(--landing-blue)
              );
              color: #fff;
            }
          }
        }
      }
      .img-container {
        flex: 1;

        img {
          height: 100%;
        }
      }
    }
    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba($color: #000000, $alpha: 0.3);
    }
  }
}
</style>
