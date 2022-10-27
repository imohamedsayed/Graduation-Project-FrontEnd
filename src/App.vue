<template>
  <Header />
  <main>
    <router-view />
  </main>
</template>

<script>
import Header from "./components/Header.vue";

export default { components: { Header } };
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
