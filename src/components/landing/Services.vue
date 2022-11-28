<template>
  <section class="services" ref="services" id="section3">
    <SectionTitle>خدماتنا</SectionTitle>
    <div class="container">
      <div class="row" dir="rtl">
        <Service
          v-for="service in services"
          :key="service.id"
          :service="service"
        />
      </div>
    </div>
  </section>
</template>

<script>
import Service from "./Service.vue";
import SectionTitle from "./SectionTitle.vue";
export default {
  components: { Service, SectionTitle },
  data() {
    return {
      services: [
        {
          id: 0,
          name: "دعم فني",
          icon: "fa-solid fa-headset",
          description:
            "محاضرات مسجلة بواسطه سبوره ذكيه واعلي الامكانيات لضمان وصول المعلومه",
        },
        {
          id: 1,
          name: "محاضرات  مباشرة",
          icon: "fa-solid fa-home",
          description:
            "محاضرات مسجلة بواسطه سبوره ذكيه واعلي الامكانيات لضمان وصول المعلومه",
        },
        {
          id: 2,
          name: "محاضرات  مسجلة",
          icon: "fa-solid fa-globe",
          description:
            "محاضرات مسجلة بواسطه سبوره ذكيه واعلي الامكانيات لضمان وصول المعلومه",
        },
        {
          id: 3,
          name: "محاضرين  متميزين",
          icon: "fa-solid fa-chalkboard-user",
          description:
            "محاضرات مسجلة بواسطه سبوره ذكيه واعلي الامكانيات لضمان وصول المعلومه",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.services {
  margin: 125px 0;
  position: relative;
}
</style>
