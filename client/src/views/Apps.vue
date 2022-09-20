<template lang="">
    <div>
        <h1>apps</h1>
    </div>
</template>
<script>
export default {
    name: "apps",
    created() {
        this.$store.commit('SET_ROUTE', this.$router.currentRoute)
    }
}
</script>
<style lang="">
    
</style>