<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <nav class="bg-red-600">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <button
            type="button"
            class="relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-red-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded="false"
            @click="OpenMenu"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="block h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        <div class="hidden md:flex items-center justify-center">
          <div class="flex flex-shrink-0 items-center">
            <img class="h-8 w-auto" :src="logo" alt="My logo" />
            <p class="text-white font-serif text-2xl ml-1">GizmoShop</p>
          </div>
        </div>

        <div
          class="flex flex-col items-center justify-center sm:items-stretch sm:justify-center mx-auto"
        >
          <div class="flex flex-shrink-0 items-center sm:hidden">
            <img class="h-8 w-auto" :src="logo" alt="My logo" />
            <p class="text-white font-serif ml-1">GizmoShop</p>
          </div>
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">
              <a
                href="#"
                class="bg-red-500 rounded-md px-1.5 py-2 text-base font-medium text-white hover:bg-red-400 hover:text-white"
              >
                <i class="bx bx-notepad mr-2"></i>
                <span class="hidden lg:inline">Doanh mục</span>
              </a>
              <a
                href="#"
                class="rounded-md px-2 py-2 text-base font-medium text-white hover:bg-red-400 hover:text-white"
              >
                <i class="bx bxs-map-pin mr-2"></i>
                <span class="hidden lg:inline">Vị trí</span>
              </a>
              <form class="flex items-center mx-auto">
                <div class="relative w-full">
                  <input
                    type="text"
                    id="simple-search"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search branch name..."
                    required
                  />
                </div>
              </form>
              <a
                href="#"
                class="rounded-md px-2 py-2 text-base font-medium text-white hover:bg-red-400 hover:text-white"
              >
                <i class="bx bx-phone mr-2"></i>
                <span class="hidden lg:inline">Liên Hệ</span>
              </a>
              <a
                href="#"
                class="rounded-md px-2 py-2 text-base font-medium text-white hover:bg-red-400 hover:text-white"
              >
                <i class="bx bx-search-alt mr-2"></i>
                <span class="hidden lg:inline">Tra cứu</span>
              </a>
              <a
                href="#"
                class="rounded-md px-2 py-2 text-base font-medium text-white hover:bg-red-400 hover:text-white"
              >
                <i class="bx bx-cart mr-2"></i
                ><span class="hidden lg:inline">Giỏ hàng</span>
              </a>
            </div>
          </div>
        </div>

        <div
          class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
        >
          <button
            type="button"
            class="relative rounded-full bg-white p-1 text-black-400 hover:text-red-600"
          >
            <span class="sr-only">View notifications</span>
            <svg
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
              />
            </svg>
          </button>

          <!-- Profile dropdown -->
          <div class="relative ml-3">
            <div>
              <button
                type="button"
                class="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                id="user-menu-button"
                @click="toggleMenu"
              >
                <span class="sr-only">Open user menu</span>
                <img
                  class="h-8 w-8 rounded-full"
                  src="https://i.pinimg.com/564x/50/f5/c4/50f5c43263cc77f25bcb1e8e3b08636a.jpg"
                  alt=""
                />
              </button>
            </div>

            <!-- Dropdown menu -->
            <div
              v-if="isProfileOpen"
              class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="user-menu-button"
            >
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-slate-300"
                role="menuitem"
                >Thông tin</a
              >
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-slate-300"
                role="menuitem"
                >Cài đặt</a
              >
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-slate-300"
                role="menuitem"
                >Đăng xuất</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    <div class="sm:hidden" id="mobile-menu" v-if="isMenuOpen">
      <div class="space-y-1 px-2 pb-3 pt-2">
        <a
          href="#"
          class="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-red-500 hover:text-white"
          >Team</a
        >
        <a
          href="#"
          class="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-red-500 hover:text-white"
          >Projects</a
        >
        <a
          href="#"
          class="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-red-500 hover:text-white"
          >Calendar</a
        >
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      logo: require("@/assets/Screenshot_2024-09-04_123857-removebg-preview.png"),
      isProfileOpen: false,
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isProfileOpen = !this.isProfileOpen;
    },
    OpenMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>
