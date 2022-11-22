<template>
  <main>
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
body::-webkit-scrollbar {
  width: 15px;
}

body::-webkit-scrollbar-track {
  background: #fff;
}

body::-webkit-scrollbar-thumb {
  background: linear-gradient(#312776d2, #363062);
  border: 3px solid#fff;
  border-radius: 10px;
}

body::-webkit-scrollbar-thumb:hover {
  background: var(--darker-blue);
}
:root {
  --text-black: #212529;
  --blue-color: #312776d2;
  --darker-blue: #363062;
  --landing-blue: #3a3276d8;
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
    .view {
      min-height: calc(100vh - 60px);
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
