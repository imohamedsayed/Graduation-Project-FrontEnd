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
import Footer from "./components/Footer.vue";

export default { components: { Header, AsideBar, Footer } };
</script>

<style lang="scss">
:root {
  --text-black: #212529;
  --blue-color: #8f94fb;
  --darker-blue: #4e54c8;
  --white-color: #f7f7f7;
  --light-blue: #1abcff;
  --border: 1px solid #ced4da;
}

#app {
  //font-family: Avenir, Helvetica, Arial, sans-serif;
  //-webkit-font-smoothing: antialiased;
  //-moz-osx-font-smoothing: grayscale;
  //text-align: center;
  //color: #2c3e50;
  main {
    direction: rtl;
    background: #f7f7f7;
    display: flex;
    margin-top: 60px;
    .view {
      min-height: calc(100vh - 60px);
      flex: 1;
      padding-right: 14rem;
      @media (max-width: 991px) {
        padding-right: 0;
      }
    }
    ul {
      list-style: none;
    }
    a {
      text-decoration: none;
      background-color: transparent;
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
