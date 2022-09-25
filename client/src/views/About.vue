<template >
    <div id="header" class="flex h-screen ">
        <div class="md:m-auto m-auto ml-1 mr-1 flex">
            <div class=" w-2/6 self-center hidden md:block">
                <img class="h-80 rounded-full m-auto" src="../assets/profile.jpeg" alt="brandon bondig">
            </div>
            <div class="mx-auto w-10/12 md:w-4/5">
                <h1 class="md:text-6xl text-5xl font-bold tracking-tight text-[#0FB981] text-left mb-3">About me</h1>
                <h2 class=" text-2xl font-bold text-gray-100">Brandon Bondig - Fullstack</h2>
                <p class=" md:text-xl text-md font-thin text-left text-gray-200 mt-1 w-70 md:w-10/12">
                    I'm Brandon, a 20 year old self taught fullstack programmer. I've been programming
                    on and off since the age of 12. Ever since, i've been dabbling in all sorts of technologies
                    languages and projects.
                    My first language was visual basic. I then migrated to python and javascript, and are currently
                    exploring the vast amounts of frameworks,
                    and open source projects that are available. I'm currently in a gap year, with plans of going to
                    university
                    studying software engineering. <br>
                    <br>
                    I mainly do the backend stuff, but i have lately began learning frontend development, hence i can
                    call
                    myself a fullstack developer ;)
                    <br><br>
                    I like exploring the source codes of open source projects aswell as exploring how major websites
                    tick,
                    the biggest dream of mine, is getting to work with one of the FAANG companies, but until i'm there,
                    i'll keep practicing and getting better.
                </p>
                <div class="flex symbols w-full justify-evenly md:justify-start m-3">
                    <img src="../assets/symbols/icons8-facebook.svg" class=" cursor-pointer h-10 md:mr-2" alt="facebook">
                    <img src="../assets/symbols/icons8-github.svg" class=" cursor-pointer h-10 md:mr-2" alt="github">
                    <img src="../assets/symbols/icons8-instagram.svg" class=" cursor-pointer h-10 md:mr-2" alt="instagram">
                    <img src="../assets/symbols/icons8-linkedin.svg" class=" cursor-pointer h-10 md:mr-2" alt="linkdin">
                    <img src="../assets/symbols/icons8-twitter.svg" class=" cursor-pointer h-10 md:mr-2" alt="twitter">
                </div>
            </div>


        </div>

    </div>
</template>
<script>
export default {
    name: "about",
    created() {
        this.$store.commit('SET_ROUTE', this.$router.currentRoute)
    }
}
</script>
<style scoped>
#header {
    background-image: url('../assets/texture.svg');
}

.symbols img {
    fill: aqua;
}
</style>