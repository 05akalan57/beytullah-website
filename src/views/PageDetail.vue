<template>
  <div>
    <section class="text-gray-600 body-font overflow-hidden">
      <div class="container px-5 py-24 mx-auto">
        <div
          v-if="data == null"
          style="border-top-color: transparent"
          class="w-16 h-16 border-4 border-blue-400 mx-auto border-solid rounded-full animate-spin"
        ></div>
        <div v-else-if="data == 'error'" class="flex flex-col text-red-600 justify-center items-center">
          <ExclamationCircleIcon class="w-24" />
          <h1 class="text-2xl font-bold">Veri tabanı bağlantı hastası!</h1>
        </div>
        <div v-else class="mx-auto flex flex-wrap">
          <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <h1 class="text-gray-900 text-3xl title-font font-medium mb-4">{{ data.title }}</h1>
            <div class="flex mb-4">
              <a class="flex-grow text-indigo-500 border-b-2 border-indigo-500 py-2 text-lg px-1">Açıklama</a>
            </div>
            <p class="leading-relaxed mb-4">
              {{ data.description }}
            </p>
            <div v-if="data.ram" class="flex border-t border-gray-200 py-2">
              <span class="text-gray-500">Ram</span>
              <span class="ml-auto text-gray-900">{{ data.ram }}</span>
            </div>
            <div v-if="data.processor" class="flex border-t border-gray-200 py-2">
              <span class="text-gray-500">İşlemci</span>
              <span class="ml-auto text-gray-900">{{ data.processor }}</span>
            </div>
            <div v-if="data.fileSize" class="flex border-t border-gray-200 py-2">
              <span class="text-gray-500">Dosya boyutu</span>
              <span class="ml-auto text-gray-900">{{ data.fileSize }}</span>
            </div>
            <div v-if="data.storage" class="flex border-t border-gray-200 py-2">
              <span class="text-gray-500">Depolama</span>
              <span class="ml-auto text-gray-900">{{ data.storage }}</span>
            </div>
            <div v-if="data.displayCard" class="flex border-t border-gray-200 py-2">
              <span class="text-gray-500">Ekran kartı</span>
              <span class="ml-auto text-gray-900">{{ data.displayCard }}</span>
            </div>
            <div v-if="data.filePassword" class="flex border-t border-gray-200 py-2">
              <span class="text-gray-500">Rar şifresi</span>
              <span class="ml-auto text-gray-900">{{ data.filePassword }}</span>
            </div>
            <div class="border-t border-gray-200 py-2"></div>
            <div class="flex">
              <a
                :href="data.downloadLink"
                target="__blank"
                class="
                  flex
                  ml-auto
                  text-white
                  bg-indigo-500
                  border-0
                  py-2
                  px-6
                  focus:outline-none
                  hover:bg-indigo-600
                  rounded
                "
              >
                İndir
              </a>
            </div>
          </div>
          <img class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" :src="data.image" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { initializeApp } from 'firebase/app'
import { getDatabase, ref, get } from 'firebase/database'
import { ExclamationCircleIcon } from '@heroicons/vue/outline'

const app = initializeApp({ databaseURL: 'https://akalan-db.firebaseio.com' })

export default {
  components: {
    ExclamationCircleIcon,
  },
  data() {
    return {
      data: null,
    }
  },
  created() {
    get(ref(getDatabase(app), `beytullah-website/pc/${this.$route.params.category + '/' + this.$route.params.title}`))
      .then((snapshot) => {
        if (snapshot.val()) {
          this.data = snapshot.val()
        } else {
          this.$router.push('/')
        }
      })
      .catch(() => {
        this.data = 'error'
      })
  },
}
</script>
