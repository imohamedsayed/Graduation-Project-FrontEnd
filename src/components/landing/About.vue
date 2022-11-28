<template>
  <section class="about" ref="about" id="section2">
    <div class="container">
      <SectionTitle>من نحن ؟</SectionTitle>
      <div class="row align-items-center">
        <div class="col-md-6 col-12 paragraph position-relative">
          <p>
            أهلًا بكم بوابة نذاكر دوت اورج نتيجة الشهادة الإعدادية بالإسم 2022
            نتيجة امتحانات الصف الثالث الاعدادى من خلال نذاكر نت نتائج الطلاب
            بالرقم القومي والاهم نتيجة الشهادة الإعدادية محافظة الدقهلية الفصل
            الدراسي الأول مديرية التربية والتعليم الجيزة 2022 نتيجة الثانوية
            العامة 2022 ونتيجه الشهاده الاعداديه القاهرة الكبري بالإسم فقط
            Nezakr أو رابط
          </p>
          <img
            src="../../../public/images/landing/p.png"
            class="img-fluid"
            alt=""
          />
        </div>
        <div class="col-md-6 col-12">
          <img
            src="../../../public/images/landing/23.png"
            class="img-fluid"
            alt=""
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SectionTitle from "./SectionTitle.vue";
export default {
  components: { SectionTitle },
};
</script>

<style lang="scss">
.about {
  margin-top: 125px;
  .paragraph {
    p {
      font-size: 1.3rem;
      line-height: 2;
      word-spacing: 4px;
    }
    img {
      position: absolute;
      top: -190px;
      opacity: 0.4;
      transform: rotate(190deg);
      width: 70%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
}
</style>
