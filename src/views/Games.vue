<template>
  <section class="text-gray-600 body-font">
    <div class="container px-5 mx-auto">
      <div
        v-if="datas == null"
        style="border-top-color: transparent"
        class="w-16 h-16 my-24 border-4 border-blue-400 mx-auto border-solid rounded-full animate-spin"
      ></div>
      <div v-else class="flex flex-wrap">
        <div class="w-full pt-2 relative">
          <input
            v-model="search"
            class="w-full border-2 h-12 text-xl px-5 rounded-lg focus:ring focus:outline-none"
            placeholder="Ara"
          />
          <svg class="absolute right-0 top-0 mt-6 mr-4 w-4 fill-current" viewBox="0 0 56.966 56.966">
            <path
              d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"
            />
          </svg>
        </div>
        <router-link
          :to="'/games/' + data.title"
          v-for="(data, index) in filteredDatas"
          :key="index"
          class="p-4 md:w-1/2 lg:w-1/4"
        >
          <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
            <img class="lg:h-48 md:h-36 w-full object-cover object-center" :src="data.img" />
            <div class="p-6">
              <h1 class="title-font text-lg font-medium text-gray-900 mb-3">{{ data.title }}</h1>
              <p class="leading-relaxed mb-3">
                Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.
              </p>
              <div class="flex items-center flex-wrap">
                <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                  >Detay
                  <svg
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </section>
</template>

<style>
.loader {
  border-top-color: #3498db;
  -webkit-animation: spinner 1.5s linear infinite;
  animation: spinner 1.5s linear infinite;
}

@-webkit-keyframes spinner {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spinner {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>

<script>
import { initializeApp } from 'firebase/app'
import { getDatabase, ref, onValue } from 'firebase/database'

const app = initializeApp({ databaseURL: 'https://akalan-db.firebaseio.com' })

export default {
  data() {
    return {
      search: null,
      datas: null,
    }
  },
  created() {
    onValue(ref(getDatabase(app), 'beytullah-website'), (snapshot) => {
      this.datas = snapshot.val()
    })
  },
  computed: {
    filteredDatas() {
      let tempDatas = Object.values(this.datas)
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
