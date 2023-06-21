<template>
  <Header />
  <div class="main-view">
    <AsideBar />
    <div class="notifications">
      <div class="sa4d25">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-12">
              <h2 class="st_title"><i class="fas fa-bell"></i> الاشعارات</h2>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <div class="all_msg_bg">
                <notification />
                <notification />
                <notification />
                <notification />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from "../../../components/Footer.vue";
import Header from "../../../components/Header.vue";
import AsideBar from "../../../components/WebsiteAsideBar.vue";
import notification from "@/components/notification.vue";
export default {
  name: "CreateNotificationPage",
  components: { Footer, AsideBar, notification, Header },
};
</script>
<style lang="scss">
.notifications {
  margin-right: 14rem;
  @media (max-width: 991px) {
    margin-right: 0;
  }
}
.sa4d25 {
  direction: rtl;
  padding: 30px 20px;
  width: 100%;
  margin-right: 20px;
}
.sa4d25 .st_title {
  margin-bottom: 20px !important;
  color: var(--text-black);
  font-size: 20px;
  font-weight: 500px;
  color: #333;
  line-height: 1.2;
}
.sa4d25 .st_title i {
  color: var(--light-blue);
  margin-left: 10px;
  font-size: 22px;
}
.all_msg_bg {
  margin: 0 20px 20px 0;
  background: #F1F3F8;
}
</style>
