<template>
  <div class="main-view">
    <AsideBar />
    <div class="home">
      <h1>Home</h1>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from "@/components/Footer.vue";
import AsideBar from "@/components/AsideBar.vue";
export default {
  name: "HomeView",
  components: { Footer, AsideBar },
};
</script>
<style lang="scss">
.home {
  padding: 40px;
  margin-right: 14rem;
  @media (max-width: 991px) {
    margin-right: 0;
  }
}
</style>
