<template>
  <NavBar />
  <router-view @paths="paths = test" />
</template>

<script>
import NavBar from "./components/navBar.vue"


export default {

  components: {
    NavBar,
  },
  data() {
    return {
      test: 0
    }
  },
  mounted() {
    EventBus.$on("")
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
