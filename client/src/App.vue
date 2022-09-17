<template>
  <NavBar/>
  <router-view/>
</template>

<script>
  import NavBar from "./components/navBar.vue"


export default {

  components:{
  NavBar,
}
}
</script>

<style>
body{
  background-color: #212121;
}
</style>
