<template>
  <div class="container mx-auto w-full bg-white p-12">
    <div class="header lg:flex items-end justify-between mb-12">
      <div class="title">
        <p class="text-4xl font-bold text-gray-800 mb-4">Programlar</p>
        <p class="text-2xl font-light text-gray-400">İşinize yarayabilcek kullanışlı programlar</p>
      </div>
      <div v-if="datas != null && datas != 'error'" class="text-end mt-3">
        <div class="flex flex-row w-full">
          <input
            v-model="search"
            type="text"
            class="
              rounded-l-lg
              border-transparent
              flex-1
              appearance-none
              border border-gray-300
              w-full
              py-2
              px-4
              bg-white
              text-gray-700
              placeholder-gray-400
              shadow-sm
              text-base
              focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent
            "
            placeholder="Bir başlık girin"
          />
          <span
            class="
              flex-shrink-0
              px-4
              py-2
              text-base
              font-semibold
              text-white
              bg-purple-600
              rounded-r-lg
              shadow-md
              hover:bg-purple-700
              focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200
            "
          >
            Ara
          </span>
        </div>
      </div>
    </div>
    <div v-if="datas == null" class="grid lg:grid-cols-3 gap-12">
      <div v-for="skeleton in 9" :key="skeleton" class="bg-white rounded-lg shadow-lg">
        <div class="bg-gray-200 h-72 p-3 overflow-hidden animate-pulse rounded-t-lg"></div>
        <div class="p-3">
          <div class="grid grid-cols-1 gap-4 mt-2">
            <div class="h-6 w-60 bg-gray-200 rounded animate-pulse"></div>
            <div class="h-5 w-90 bg-gray-200 rounded animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
    <div v-else-if="datas == 'error'">
      <div class="flex mb-8 text-red-600">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          class="h-6 w-6"
          viewBox="0 0 1792 1792"
        >
          <path
            d="M1024 1375v-190q0-14-9.5-23.5t-22.5-9.5h-192q-13 0-22.5 9.5t-9.5 23.5v190q0 14 9.5 23.5t22.5 9.5h192q13 0 22.5-9.5t9.5-23.5zm-2-374l18-459q0-12-10-19-13-11-24-11h-220q-11 0-24 11-10 7-10 21l17 457q0 10 10 16.5t24 6.5h185q14 0 23.5-6.5t10.5-16.5zm-14-934l768 1408q35 63-2 126-17 29-46.5 46t-63.5 17h-1536q-34 0-63.5-17t-46.5-46q-37-63-2-126l768-1408q17-31 47-49t65-18 65 18 47 49z"
          ></path>
        </svg>
        <span class="ml-4 font-bold">Veri tabanı bağlantı hatası !</span>
      </div>
      <div class="space-y-2">
        <p class="font-bold mt-2">Muhtemel sebepler</p>
        <li>İnternet bağlantınızda sorun olabilir</li>
        <li>Firebase sunucularında arıza olabilir</li>
      </div>
    </div>
    <div v-else class="grid lg:grid-cols-3 gap-12">
      <div
        v-for="(data, index) in filteredDatas"
        :key="index"
        class="overflow-hidden shadow-lg rounded-lg h-90 w-full cursor-pointer m-auto"
      >
        <router-link :to="'/programs/' + data.title" class="w-full block h-full">
          <img alt="blog photo" :src="data.image" class="w-full h-72 object-cover" />
          <div class="bg-white w-full p-4 space-y-2">
            <p class="text-gray-800 text-xl font-medium">{{ data.title }}</p>
            <p class="text-gray-400 font-light text-md">
              {{ data.description }}
            </p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { initializeApp } from 'firebase/app'
import { get, ref, getDatabase } from 'firebase/database'
const app = initializeApp({ databaseURL: 'https://akalan-db.firebaseio.com' })
export default {
  data() {
    return {
      search: null,
      datas: null,
    }
  },
  created() {
    get(ref(getDatabase(app), `beytullah-website`))
      .then((snapshot) => {
        this.datas = snapshot.val()
      })
      .catch(() => {
        this.datas = 'error'
      })
  },
  computed: {
    filteredDatas() {
      let tempDatas = Object.values(this.datas.pc.programs)
      if (this.search) {
        tempDatas = tempDatas.filter((data) => {
          return data.title.toUpperCase().includes(this.search.toUpperCase())
        })
      }
      return tempDatas
    },
  },
}
</script>
