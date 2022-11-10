<template>
  <div class="col-lg-3 col-md-6 col-12">
    <div class="service-box mb-4">
      <div class="service-title">
        <i :class="service.icon"></i>
        <h3 class="service-name">{{ service.name }}</h3>
      </div>
      <div class="service-description" dir="rtl">
        {{ service.description }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["service"],
};
</script>

<style lang="scss">
.service-box {
  background: #6061d766;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 1px 1px 1px 1px rgba($color: #000000, $alpha: 0.3);
  .service-title {
    text-align: center;
    i {
      font-size: 2.4rem;
      color: #779fe5;
      margin-bottom: 20px;
    }
  }
  .service-description {
    padding: 10px 0;
    font-size: 1.1rem;
    text-align: center;
  }
}
</style>
