<template>
  <section class="how-to-use" ref="how" dir="rtl">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-12">
          <h1>كيف تستخدم المنصة ؟</h1>
          <div class="instructions">
            <p>
              يوجد اسفل هنا مجموعه من الفيديوهات الي تساعد الطالب علي فهم كيف
              يستخدم المنصه .
            </p>
            <div class="row questions">
              <div class="col-6">
                <a href="#">ازاي تسأل المدرس عن سؤال؟ </a>
              </div>
              <div class="col-6">
                <a href="#">كيف تسجل علي المنصه؟ </a>
              </div>
              <div class="col-6">
                <a href="#">ازاي تعرف درجات امتحانك ؟</a>
              </div>
              <div class="col-6">
                <a href="#">ازاي تسجل في دورة علي المنصة ؟</a>
              </div>
              <div class="col-6">
                <a href="#">ازاي تسلم واجباتك والمهام المطلوبة ؟</a>
              </div>
              <div class="col-6">
                <a href="#">ازاي تتصفح كل دوراتك ؟</a>
              </div>
            </div>
            <div class="text-center mt-5">
              <span class="call-support"
                >لازالت لديك مشكلة ؟ اتصل بالدعم الان</span
              >
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-12 text-center">
          <img
            src="../../../public/images/landing/Rectangle_69.png"
            class="img-fluid"
            alt=""
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
.how-to-use {
  margin: 225px 0;
  h1 {
    color: var(--landing-blue);
    font-weight: bolder;
  }
  .instructions {
    margin: 20px 0;
    p {
      font-size: 1.4rem;
      color: var(--text-black);
    }
    .questions {
      margin-top: 20px;
      .col-6 {
        margin: 10px 0;
      }
      a {
        color: var(--blue-color);
        font-size: 1.1rem;
        font-weight: 600;
      }
    }
    .call-support {
      display: inline-block;
      background: linear-gradient(
        89.7deg,
        #6061d7 3.74%,
        rgba(146, 150, 240, 0.71) 99.74%
      );
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 12px;
      color: #fff;
      font-size: 1.4rem;
      padding: 10px 15px;
      cursor: pointer;
      transition: all 0.3s ease;
      &:hover {
        transform: scale(1.05);
      }
    }
  }
}
</style>
