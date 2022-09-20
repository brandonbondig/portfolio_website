<template>
  <div>
  </div>
</template>
<script>
export default {
  name: "Portfolio",
  created() {
    this.$store.commit('SET_ROUTE', this.$router.currentRoute)
  }
}
</script>
<style lang="sass">
    
</style>