<template>
  <div class="nav absolute w-full">
    <nav class=" border-gray-200 px-2 sm:px-4 py-2.5 rounded">
      <div class="container flex flex-wrap justify-between items-center mx-auto">
        <router-link to="/" @click="hideMenu('home')" class="flex items-center">
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
            class="bg-[#2e2e2e]  flex flex-col p-4 rounded-md border md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
            <li class="md:block md:p-2 hidden">
              <darkModeToggler />
            </li>
            <li :class="{ active: menuToggle == 'home' }" class=" w-full md:p-2  rounded-md self-center">
              <router-link @click="hideMenu('home')" to="/"
                class="block py-2 pr-4 pl-3 text-xl text-white rounded font-bold active:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0">
                Home</router-link>
            </li>
            <li :class="{ active: menuToggle == 'apps' }" class=" w-full md:p-2 rounded-md self-center">
              <router-link @click="hideMenu('apps')" to="/apps"
                class="block py-2 pr-4 pl-3 text-xl text-white rounded font-bold  active:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0">
                Apps</router-link>
            </li>
            <li :class="{ active: menuToggle == 'work' }" class=" w-full md:p-2 rounded-md self-center">
              <router-link @click="hideMenu('work')" to="/work"
                class="block py-2 pr-4 pl-3 text-xl text-white rounded font-bold  active:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0">
                Work</router-link>
            </li>

            <li :class="{ active: menuToggle == 'about' }" class=" w-full md:p-2 rounded-md self-center">
              <router-link @click="hideMenu('about')" to="/about"
                class="block py-2 pr-4 pl-3 text-xl text-white rounded font-bold  active:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0">
                About</router-link>
            </li>
            <li :class="{ active: menuToggle == 'contact' }" class=" w-full md:p-2 rounded-md self-center">
              <router-link @click="hideMenu('contact')" to="/contact"
                class="block py-2 pr-4 pl-3 text-xl text-white rounded font-bold  active:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0">
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
  data() {
    return {
      menuToggle: ''
    }
  },
  methods: {
    toggleMenu() {
      const menu = document.getElementById("navbar-default")
      menu.classList.toggle("hidden");
    },
    hideMenu(el) {
      const menu = document.getElementById("navbar-default")
      const body = document.querySelector("body")
      menu.classList.add("hidden");

    }
  },
  computed: {
    path: function () {
      return this.$store.state.route
    }
  },
  watch: {
    path(pathName) {
      return this.menuToggle = pathName.name
    }
  },
}
</script>

<style>
.nav {
  touch-action: manipulation;
}

.active {
  background-color: #0FB981;
}
</style>