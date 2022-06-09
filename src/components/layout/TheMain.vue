<template>
  <main class="overflow-auto bg-dark-gray-500">
    <div class="mx-auto w-full p-2 md:px-4">
      <BaseTitle class="mb-4 text-3xl font-semibold text-gray-50">
        <span v-if="search.query">Risultati per: {{ search.query }}</span>
        <span v-else>In Tendenza</span>
      </BaseTitle>
      <ResultList />
    </div>
  </main>
</template>

<script>
import search from '@/shared/search.js'

import BaseTitle from '../atoms/BaseTitle.vue'
import ResultList from '../organisms/ResultList.vue'
export default {
  name: 'TheMain',
  components: { ResultList, BaseTitle },
  data() {
    return {
      search,
    }
  },
}
</script>

<style scoped>
main {
  height: calc(100vh - 60px);
}
</style>
