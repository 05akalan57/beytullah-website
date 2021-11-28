<template>
  <header>
    <Popover class="container mx-auto relative bg-white">
      <div class="px-4 sm:px-6">
        <div class="flex justify-between items-center border-b-2 border-gray-100 py-6 lg:justify-start lg:space-x-10">
          <div class="flex justify-start lg:w-0 lg:flex-1">
            <router-link to="/" class="flex items-center space-x-4">
              <img class="h-8 w-auto sm:h-10 rounded-full" src="@/images/avatar.jpg" alt="" />
              <span class="font-bold">Beytullah Akalan</span>
            </router-link>
          </div>
          <div class="-mr-2 -my-2 lg:hidden">
            <PopoverButton
              class="
                bg-white
                rounded-md
                p-2
                inline-flex
                items-center
                justify-center
                text-gray-400
                hover:text-gray-500 hover:bg-gray-100
                focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500
              "
            >
              <span class="sr-only">Open menu</span>
              <MenuIcon class="h-6 w-6" aria-hidden="true" />
            </PopoverButton>
          </div>
          <PopoverGroup as="nav" class="hidden lg:flex space-x-10">
            <Popover class="relative" v-slot="{ open }">
              <PopoverButton
                :class="[
                  open ? 'text-gray-900' : 'text-gray-500',
                  'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500',
                ]"
              >
                <span>Kategoriler</span>
                <ChevronDownIcon
                  :class="[open ? 'text-gray-600' : 'text-gray-400', 'ml-2 h-5 w-5 group-hover:text-gray-500']"
                  aria-hidden="true"
                />
              </PopoverButton>

              <transition
                enter-active-class="transition ease-out duration-200"
                enter-from-class="opacity-0 translate-y-1"
                enter-to-class="opacity-100 translate-y-0"
                leave-active-class="transition ease-in duration-150"
                leave-from-class="opacity-100 translate-y-0"
                leave-to-class="opacity-0 translate-y-1"
              >
                <PopoverPanel
                  class="
                    absolute
                    z-10
                    -ml-4
                    mt-3
                    transform
                    px-2
                    w-screen
                    max-w-md
                    sm:px-0
                    lg:ml-0 lg:left-1/2 lg:-translate-x-1/2
                  "
                >
                  <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                      <router-link
                        v-for="item in categories"
                        :key="item.name"
                        :to="item.to"
                        class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                      >
                        <component :is="item.icon" class="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
                        <div class="ml-4">
                          <p class="text-base font-medium text-gray-900">
                            {{ item.name }}
                          </p>
                          <p class="mt-1 text-sm text-gray-500">
                            {{ item.description }}
                          </p>
                        </div>
                      </router-link>
                    </div>
                  </div>
                </PopoverPanel>
              </transition>
            </Popover>
          </PopoverGroup>
          <div class="hidden lg:flex items-center justify-end lg:flex-1 lg:w-0">
            <router-link to="/login" class="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
              >Giriş yap</router-link
            >
            <router-link
              to="/register"
              class="
                ml-8
                whitespace-nowrap
                inline-flex
                items-center
                justify-center
                px-4
                py-2
                border border-transparent
                rounded-md
                shadow-sm
                text-base
                font-medium
                text-white
                bg-indigo-600
                hover:bg-indigo-700
              "
            >
              Kayıt ol
            </router-link>
          </div>
        </div>
      </div>
      <transition
        enter-active-class="duration-200 ease-out"
        enter-from-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="duration-100 ease-in"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-95"
      >
        <PopoverPanel focus class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right lg:hidden z-10">
          <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div class="pt-5 pb-6 px-5">
              <div class="flex items-center justify-between">
                <span class="font-bold">Kategoriler</span>
                <div class="-mr-2">
                  <PopoverButton
                    class="
                      bg-white
                      rounded-md
                      p-2
                      inline-flex
                      items-center
                      justify-center
                      text-gray-400
                      hover:text-gray-500 hover:bg-gray-100
                      focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500
                    "
                  >
                    <span class="sr-only">Close menu</span>
                    <XIcon class="h-6 w-6" aria-hidden="true" />
                  </PopoverButton>
                </div>
              </div>
              <div class="mt-6">
                <nav class="grid gap-y-8">
                  <router-link
                    v-for="item in categories"
                    :key="item.name"
                    :to="item.to"
                    class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                  >
                    <component :is="item.icon" class="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
                    <span class="ml-3 text-base font-medium text-gray-900">
                      {{ item.name }}
                    </span>
                  </router-link>
                </nav>
              </div>
            </div>
            <div class="py-6 px-5 space-y-6">
              <div>
                <router-link
                  to="/login"
                  class="
                    w-full
                    flex
                    items-center
                    justify-center
                    px-4
                    py-2
                    border border-transparent
                    rounded-md
                    shadow-sm
                    text-base
                    font-medium
                    text-white
                    bg-indigo-600
                    hover:bg-indigo-700
                  "
                >
                  Giriş yap
                </router-link>
                <p class="mt-6 text-center text-base font-medium text-gray-500">
                  Existing customer?
                  {{ ' ' }}
                  <router-link to="/register" class="text-indigo-600 hover:text-indigo-500">Kayıt ol</router-link>
                </p>
              </div>
            </div>
          </div>
        </PopoverPanel>
      </transition>
    </Popover>
  </header>
</template>

<script>
import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/vue'
import { CursorClickIcon, MenuIcon, ViewGridIcon, XIcon } from '@heroicons/vue/outline'
import { ChevronDownIcon } from '@heroicons/vue/solid'

const categories = [
  {
    name: 'Oyunlar',
    description: 'En yeni pc oyunları',
    to: '/games',
    icon: CursorClickIcon,
  },
  {
    name: 'Programlar',
    description: 'İşinize yarayabilcek kullanışlı programlar',
    to: '/programs',
    icon: ViewGridIcon,
  },
]

export default {
  components: {
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
    ChevronDownIcon,
    MenuIcon,
    XIcon,
  },
  setup() {
    return {
      categories,
    }
  },
}
</script>
