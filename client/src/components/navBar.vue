<template>
  <div class="absolute w-full">
    <nav class=" border-gray-200 px-2 sm:px-4 py-2.5 rounded">
      <div class="container flex flex-wrap justify-between items-center mx-auto">
        <router-link to="/" class="flex items-center">
          <img src="../assets/logo.svg" class="mr-3 h-6 sm:h-9 fill-blue-500" alt="Bondig Logo" />
          <span class="self-center text-xl font-semibold whitespace-nowrap text-white">Brandon Bondig</span>
        </router-link>
        <div class="flex">

          <div class="mt-1 md: block md:hidden">
            <darkModeToggler />
          </div>

          <button data-collapse-toggle="hidden" @click="toggleMenu()" data-collapse-target="#navbar-default"
            type="button"
            class="inline-flex items-center p-2 ml-3 text-sm text-gray-600 rounded-md md:hidden active:bg-gray-100 focus:outline-none focus:ring-2 active:ring-gray-200"
            aria-controls="navbar-default" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-8 h-8 " aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"></path>
            </svg>
          </button>
        </div>

        <div class="hidden w-full md:block md:w-auto" id="navbar-default">

          <ul
            class="bg-[#212121] md:border-2 flex flex-col p-4 rounded-md border border-gray-500 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
            <li class="md:block hidden">
              <darkModeToggler />
            </li>
            <li @click="hideMenu()" class=" self-center">
              <router-link to="/"
                class="block py-2 pr-4 pl-3 text-xl text-white rounded active:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-500 md:p-0">
                Home</router-link>
            </li>
            <li @click="hideMenu()" class=" self-center">
              <router-link to="/apps"
                class="block py-2 pr-4 pl-3 text-xl text-white rounded active:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-500 md:p-0">
                Apps</router-link>
            </li>
            <li @click="hideMenu()" class=" self-center">
              <router-link to="/work"
                class="block py-2 pr-4 pl-3 text-xl text-white rounded active:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-500 md:p-0">
                Work</router-link>
            </li>

            <li @click="hideMenu()" class=" self-center">
              <router-link to="/about"
                class="block py-2 pr-4 pl-3 text-xl text-white rounded active:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-500 md:p-0">
                About</router-link>
            </li>
            <li @click="hideMenu()" class=" self-center">
              <router-link to="/contact"
                class="block py-2 pr-4 pl-3 text-xl text-white rounded active:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-500 md:p-0">
                Contact</router-link>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  </div>
</template>
<script>
import darkModeToggler from './darkModeToggler.vue';

export default {
  name: "NavBar",
  components: { darkModeToggler },
  methods: {
    toggleMenu: () => {
      const menu = document.getElementById("navbar-default")
      menu.classList.toggle("hidden");
    },
    hideMenu: () => {
      const menu = document.getElementById("navbar-default")
      menu.classList.add("hidden");
    }
  }
}
</script>
