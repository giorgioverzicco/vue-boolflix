<template>
  <ul class="grid justify-center gap-5">
    <ResultItem
      v-for="result in search.results"
      :key="result.id"
      :result="result"
    />
  </ul>
</template>

<script>
import search from '@/shared/search.js'

import ResultItem from '../molecules/ResultItem.vue'

export default {
  name: 'ResultList',
  components: { ResultItem },
  data() {
    return {
      search,
    }
  },
}
</script>

<style>
ul {
  grid-template-columns: repeat(auto-fit, 342px);
}
</style>
