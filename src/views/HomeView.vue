<template>
  <div class="home">
    <h1>Home</h1>
  </div>
  <Footer></Footer>
</template>

<script>
// @ is an alias to /src
import Footer from "@/components/Footer.vue";
export default {
  name: "HomeView",
  components: { Footer },
};
</script>
<style lang="scss">
.home {
  padding: 40px;
}
</style>
