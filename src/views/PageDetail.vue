<template>
  <div class="container mx-auto bg-white">
    <div class="py-24 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-32 lg:px-8 lg:grid-cols-2">
      <div>
        <div class="flex justify-between">
          <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">{{ data.title }}</h2>
          <a
            :href="data.downloadLink"
            target="__blank"
            class="
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
            >İndir</a
          >
        </div>
        <dl class="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
          <div v-if="data.ram" class="border-t border-gray-200 pt-4">
            <dt class="font-medium text-gray-900">Ram</dt>
            <dd class="mt-2 text-sm text-gray-500">{{ data.ram }}</dd>
          </div>
          <div v-if="data.storage" class="border-t border-gray-200 pt-4">
            <dt class="font-medium text-gray-900">Depolama</dt>
            <dd class="mt-2 text-sm text-gray-500">{{ data.storage }}</dd>
          </div>
          <div v-if="data.fileSize" class="border-t border-gray-200 pt-4">
            <dt class="font-medium text-gray-900">Dosya boyutu</dt>
            <dd class="mt-2 text-sm text-gray-500">{{ data.fileSize }}</dd>
          </div>
          <div v-if="data.displayCard" class="border-t border-gray-200 pt-4">
            <dt class="font-medium text-gray-900">Ekran kartı</dt>
            <dd class="mt-2 text-sm text-gray-500">{{ data.displayCard }}</dd>
          </div>
          <div v-if="data.filePassword" class="border-t border-gray-200 pt-4">
            <dt class="font-medium text-gray-900">Dosya şifresi</dt>
            <dd class="mt-2 text-sm text-gray-500">{{ data.filePassword }}</dd>
          </div>
          <div v-if="data.processor" class="border-t border-gray-200 pt-4">
            <dt class="font-medium text-gray-900">İşlemci</dt>
            <dd class="mt-2 text-sm text-gray-500">{{ data.processor }}</dd>
          </div>
        </dl>
      </div>
      <img :src="data.image" class="bg-gray-100 rounded-lg w-full h-full object-cover" />
    </div>
  </div>
</template>

<script>
import { initializeApp } from 'firebase/app'
import { getDatabase, ref, get } from 'firebase/database'
const app = initializeApp({ databaseURL: 'https://akalan-db.firebaseio.com' })

export default {
  data() {
    return {
      data: null,
    }
  },
  created() {
    get(ref(getDatabase(app), `beytullah-website/${this.$route.params.title}`)).then((snapshot) => {
      this.data = snapshot.val()
    })
  },
}
</script>
