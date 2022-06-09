<template>
  <ul>
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
