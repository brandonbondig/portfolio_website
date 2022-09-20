<template lang="">
    <div>
        <h1>contact</h1>
    </div>
</template>
<script>
export default {
    name: "contact",
    created() {
    this.$store.commit('SET_ROUTE', this.$router.currentRoute)
  }
}
</script>
<style lang="">
    
</style>