<template>
  <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-wrap -m-4">
        <div
          v-if="datas == null"
          style="border-top-color: transparent"
          class="w-16 h-16 border-4 border-blue-400 mx-auto my-auto border-solid rounded-full animate-spin"
        ></div>
        <router-link
          :to="'/games/' + data.title"
          v-for="(data, index) in datas"
          :key="index"
          v-else
          class="p-4 md:w-1/4"
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
      datas: null,
    }
  },
  created() {
    onValue(ref(getDatabase(app), 'beytullah-website'), (snapshot) => {
      this.datas = snapshot.val()
    })
  },
}
</script>
