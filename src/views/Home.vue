<template>
  <div class="container mx-auto flex flex-col items-center py-12 sm:py-24">
    <div class="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col mb-5 sm:mb-10">
      <h1
        class="
          text-2xl
          sm:text-3xl
          md:text-4xl
          lg:text-5xl
          xl:text-6xl
          text-center text-gray-800
          font-black
          leading-7
          md:leading-10
        "
      >
        Bu sayfa çok
        <span class="text-indigo-700">yakında</span>
        kullanılacak
      </h1>
    </div>
    <pre class="text-white w-full overflow-hidden border-4 rounded-2xl p-2" style="background-color: #1e1e1e">
      {{ datas }}
    </pre>
  </div>
</template>

<script>
import { initializeApp } from 'firebase/app'
import { onValue, query, ref, getDatabase, orderByChild, startAt, limitToFirst } from 'firebase/database'

const app = initializeApp({ databaseURL: 'https://akalan-db.firebaseio.com' })

export default {
  data() {
    return {
      datas: null,
    }
  },
  created() {
    onValue(
      query(
        ref(getDatabase(app), 'beytullah-website'),
        orderByChild('title'),
        startAt('Among Us İndir'),
        limitToFirst(5)
      ),
      (snapshot) => {
        this.datas = snapshot.val()
      }
    )
  },
}
</script>
