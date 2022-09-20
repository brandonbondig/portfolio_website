<template>
  <NavBar />
  <router-view />
</template>

<script>
import NavBar from "./components/navBar.vue"
import store from './store/index.js';

export default {
  name: "app",
  components: {
    NavBar,
  },
  mounted() {
    document.getElementById("app").classList = "dark"
  }

}
</script>



<style>
body {
  background-color: #212121;
}

html,
body {
  max-width: 100%;
  overflow-x: hidden;
}
</style>
