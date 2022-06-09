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
import axios from 'axios'
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
  created() {
    axios
      .get('https://api.themoviedb.org/3/trending/all/week', {
        params: {
          api_key: '5031f648e435e991698175d09cdbf7a1',
          query: this.query,
          language: 'it-IT',
          include_adult: false,
        },
      })
      .then((response) => (this.search.results = response.data.results))
  },
}
</script>

<style>
ul {
  grid-template-columns: repeat(auto-fit, 342px);
}
</style>
