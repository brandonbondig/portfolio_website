<template>
    <div id="header" class="flex h-screen">
        <div class=" m-auto">
            <h1 class=" text-8xl font-bold tracking-tight color-primary text-left">Hello, I'm Brandon.</h1>
            <h2 class="text-4xl font-bold tracking-tight color-secondary text-left">Full Stack Developer</h2>
            <pre class=" text-gray-500 text-left">

I'm an aspirering software developer.
Here you can find some of my latest projects and webapps,
if you're interested in me working on your next project, feel free to contact me!
        </pre>
            <div>
                <button
                    class="bg-transparent color-primary hover:bg-color-primary hover:text-white font-semibold py-2 px-20 border border-color-primary rounded"
                    onclick="location.href='/NA'">Customs Helper</button>
                <button
                    class="ml-5 mr-5 bg-transparent color-primary hover: bg-color-primary hover:text-white font-semibold py-2 px-20 border border-color-primary rounded"
                    onclick="location.href='/NA'">Email Manager</button>
                <button
                    class="bg-transparent color-primary hover:bg-color-primary hover:text-white font-semibold py-2 px-20 border border-color-primary rounded"
                    onclick="location.href='/NA'">Web App</button>
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