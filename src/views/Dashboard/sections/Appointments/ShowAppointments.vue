<template>
  <Header />
  <div class="main-view">
    <AsideBar />
    <div class="appointments">
      <div class="container">
        <h3 class="header" dir="rtl">
          <i
            class="fa-solid fa-clipboard ms-2"
            style="color: var(--blue-color)"
          ></i>
          جميع المواعيد
        </h3>
        <div class="all-appointments" dir="rtl">
          <AppointmentsList :classId="id" />
        </div>
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
import Footer from "../../../../components/Footer.vue";
import Header from "../../../../components/Header.vue";
import AsideBar from "../../../../components/AsideBar.vue";
import AppointmentsList from "@/components/sections/Appointments/AppointmentsList.vue";
export default {
  components: { Footer, AsideBar, Header, AppointmentsList },
  props: ["id"],
  data() {
    return {};
  },
};
</script>

<style lang="scss">
.appointments {
  margin-right: 14rem;
  @media (max-width: 991px) {
    margin-right: 0;
  }
  padding-top: 10px;
  .header {
    color: var(--text-black);
    font-size: 1.4rem;
    margin-block: 30px;
  }
  .all-appointments {
    background: #fff;
    margin: 60px 0;
    padding: 30px 20px;
    button {
      padding: 10px 15px;
      border: none;
      border-radius: 15px;
      color: white;
      font-weight: bold;
      background: var(--blue-color);
      transition: all 0.3s ease;
      &:hover {
        opacity: 0.8;
      }
    }
  }
}
</style>
