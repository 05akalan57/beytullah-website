<template>
  <Popover class="relative bg-white">
    <div class="container mx-auto px-4 sm:px-6">
      <div class="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
        <div class="flex justify-start lg:w-0 md:flex-1">
          <router-link to="/" class="flex items-center text-lg font-bold">
            <img
              class="h-10 w-auto rounded-full"
              src="https://lh3.googleusercontent.com/ogw/ADea4I6NxmuUl03mhsD7Ut65unktKpcebN4jo4aVBY0o"
            />
            <span class="ml-3">Beytullah Akalan</span>
          </router-link>
        </div>
        <div class="-mr-2 -my-2 md:hidden">
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
        <PopoverGroup as="nav" class="hidden md:flex space-x-10">
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
                      v-for="categori in categories"
                      :key="categori.name"
                      :to="categori.to"
                      class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                    >
                      <component :is="categori.icon" class="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
                      <div class="ml-4">
                        <p class="text-base font-medium text-gray-900">
                          {{ categori.name }}
                        </p>
                        <p class="mt-1 text-sm text-gray-500">
                          {{ categori.description }}
                        </p>
                      </div>
                    </router-link>
                  </div>
                </div>
              </PopoverPanel>
            </transition>
          </Popover>
        </PopoverGroup>
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
      <PopoverPanel focus class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
        <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
          <div class="pt-5 pb-6 px-5">
            <div class="flex items-center justify-between">
              <h1 class="font-bold">Kategoriler</h1>
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
                  v-for="categori in categories"
                  :key="categori.name"
                  :to="categori.to"
                  class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                >
                  <component :is="categori.icon" class="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
                  <span class="ml-3 text-base font-medium text-gray-900">
                    {{ categori.name }}
                  </span>
                </router-link>
              </nav>
            </div>
          </div>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>

<script>
import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/vue'
import { CursorClickIcon, MenuIcon, XIcon } from '@heroicons/vue/outline'
import { ChevronDownIcon } from '@heroicons/vue/solid'

const categories = [
  {
    name: 'Oyunlar',
    description: 'En güncel pc oyunları',
    to: '/games',
    icon: CursorClickIcon,
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
