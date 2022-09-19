<template>
    <div id="header" class="flex h-screen">
        <div class=" lg:m-auto m-auto ml-1 mr-1">
            <h1 class=" lg:text-9xl text-5xl font-bold tracking-tight color-primary text-center mb-3 lg:text-left">
                Hello, I'm Brandon.
            </h1>
            <h2 class="lg:text-6xl text-3xl font-bold tracking-tight color-secondary text-center lg:text-left">Full
                Stack Developer
            </h2>
            <p class=" lg:text-2xl text-center text-gray-400 lg:text-left m-3 w-70 lg:w-90">
                I'm an aspirering software developer. <br>
                Here you can find some of my latest projects and apps. <br>
                If you're interested in me working on your next project, feel free to contact me!
            </p>
            <div class=" flex justify-center">
                <button
                    class=" lg:block hidden bg-transparent color-primary hover:bg-color-primary hover:text-white font-semibold py-2 px-20 border border-color-primary rounded"
                    onclick="location.href='/NA'">Customs Helper</button>
                <button
                    class=" lg:block hidden ml-5 mr-5 bg-transparent color-primary hover: bg-color-primary hover:text-white font-semibold py-2 px-20 border border-color-primary rounded"
                    onclick="location.href='/NA'">Email Manager</button>
                <button
                    class=" bg-transparent color-primary hover:bg-color-primary hover:text-white font-semibold py-2 px-20 border border-color-primary rounded"
                    onclick="location.href='/NA'">Apps</button>
            </div>

        </div>

    </div>
</template>
<script>



export default {
    name: "HomeView"
}
</script>
<style scoped>
#header {
    background-image: url('../assets/topography.svg');
}
</style>