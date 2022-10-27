<template>
  <Header />
  <main>
    <AsideBar />
    <div class="view">
      <router-view />
    </div>
  </main>
</template>

<script>
import AsideBar from "./components/AsideBar.vue";
import Header from "./components/Header.vue";

export default { components: { Header, AsideBar } };
</script>

<style lang="scss">
:root {
  --text-black: #212529;
  --blue-color: #8f94fb;
  --darker-blue: #4e54c8;
}

#app {
  //font-family: Avenir, Helvetica, Arial, sans-serif;
  //-webkit-font-smoothing: antialiased;
  //-moz-osx-font-smoothing: grayscale;
  //text-align: center;
  //color: #2c3e50;
  main {
    margin-top: 60px;
    direction: rtl;
    background: #f7f7f7;
    display: flex;
    .view {
      min-height: calc(100vh - 60px);
    }
  }
}
/*
nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
*/
</style>
