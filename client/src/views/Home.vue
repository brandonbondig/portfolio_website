<template>
    <div id="header" class="flex h-screen">
        <div class="md:m-auto m-auto ml-1 mr-1">
            <h1 class=" md:text-9xl text-5xl font-bold tracking-tight text-[#0FB981]  text-center mb-3">
                Hello, I'm Brandon.
            </h1>
            <h2 class="md:text-6xl text-3xl font-bold tracking-tight color-secondary text-center">Full
                Stack Developer
            </h2>
            <p class=" md:text-2xl text-xl text-center dark:text-gray-400 m-3 w-70 md:w-90">
                I'm an aspirering software engineer. <br>
                Here you can find some of my latest projects and apps. <br>
            <p class="md:block hidden ">If you're interested in me working on your next project, feel free to contact
                me!
            </p>

            </p>
            <div class="flex justify-center">
                <button
                    class="  md:block hidden bg-transparent text-[#0FB981] hover:bg-[#0FB981] hover:text-white font-semibold py-2 px-20 border border-[#0FB981] rounded"
                    onclick="location.href='https://simplytics.io'">Simplytics</button>
                <button
                    class=" md:block hidden ml-5 mr-5 bg-transparent text-[#0FB981] hover:bg-[#0FB981] hover:text-white font-semibold py-2 px-20 border border-[#0FB981] rounded"
                    onclick="location.href='/'">Resume</button>
                <button
                    class=" bg-transparent text-[#0FB981] hover:bg-[#0FB981] hover:text-white font-semibold py-2 px-20 border border-[#0FB981] rounded"
                    onclick="location.href='/'">Apps</button>
            </div>

        </div>

    </div>
</template>
<script>



export default {
    name: "HomeView",
    created() {
        this.$store.commit('SET_ROUTE', this.$router.currentRoute)
    }
}
</script>
<style scoped>
#header {
    background-image: url('../assets/topography.svg');
}
</style>