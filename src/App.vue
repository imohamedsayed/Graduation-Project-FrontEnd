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

export default {
  components: { Header, AsideBar, Footer },
  
};
</script>

<style lang="scss">
body::-webkit-scrollbar {
  width: 15px;
}

body::-webkit-scrollbar-track {
  background: #fff;
}

body::-webkit-scrollbar-thumb {
  background: linear-gradient(#146c94, #19a7ce);
  border: 3px solid#fff;
  border-radius: 10px;
}

body::-webkit-scrollbar-thumb:hover {
  background: var(--darker-blue);
}

:root {
  --text-black: #212529;
  --blue-color: #19a7ce;
  --darker-blue: #146c94;
  --landing-blue: #526d82;
  --white-color: #ffffff;
  --light-blue: #009eff;
  --gray-blue: #d5def5;
  --border: 1px solid #ced4da;
}

#app {
  main {
    direction: rtl;

    background: #fff;
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
.skelton {
  height: 200px;
  width: 200px;
  background: linear-gradient(to right bottom, #d1d1d19e, white);
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
