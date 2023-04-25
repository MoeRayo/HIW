<template>
  <div class="border-rose-500 border-b-4 border-solid">
    <nav
      class="container px-6 py-8 mx-auto md:flex md:justify-between md:items-center"
    >
      <div class="flex items-center justify-between">
        <a
          href="https://mineiros.io"
          class="font-ubuntu text-xl font-bold text-gray-100 md:text-2xl hover:text-red-400"
        >
          <img src="../assets/mineiros.png" alt="" />
        </a>
        <!-- Mobile menu button -->
        <div @click="toggleNav" class="flex md:hidden">
          <button
            type="button"
            class="text-slate-500 hover:text-slate-600 hover:bg-gray-100 focus:outline-none focus:text-gray-400"
          >
            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
              <path
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
      <ul
        :class="showMenu ? 'flex' : 'hidden'"
        class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0 list-none text-medium"
      >
        <li class="inline-flex items-center text-slate-700 hover:text-rose-500">
          <span>Solutions</span>
          <svg
            class="fill-current h-5 w-5 ml-2 mt-1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
            />
          </svg>
        </li>
        <li class="inline-flex items-center text-slate-700 hover:text-rose-500">
          <span>Services</span>
          <svg
            class="fill-current h-5 w-5 ml-2 mt-1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
            />
          </svg>
        </li>
        <li class="inline-flex items-center text-slate-700 hover:text-rose-500">
          <span>Company</span>
          <svg
            class="fill-current h-5 w-5 ml-2 mt-1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
            />
          </svg>
        </li>
        <li class="text-slate-700 hover:text-rose-500">Case Studies</li>
        <li class="text-slate-700 hover:text-rose-500">Blog</li>
        <li
          class="bg-rose-500 hover:outline-solid rounded-full text-white text-medium py-2 hover:bg-rose-600 px-4 md:hidden lg:block md:w-50 lg:"
        >
          <a href="https://mineiros.io/contact">
            <img
              src="@/assets/telephone.png"
              alt=""
              class="inline-block w-6 h-6 mr--2"
            />
            Contact
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  setup() {
    let showMenu = ref(false);
    const toggleNav = () => (showMenu.value = !showMenu.value);
    return { showMenu, toggleNav };
  },
};
</script>
