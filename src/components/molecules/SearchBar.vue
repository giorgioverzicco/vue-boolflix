<template>
  <div>
    <form
      class="rounded-full border-2 border-gray-400 bg-gray-50 py-1"
      @submit.prevent="searchQuery"
      @keyup.enter="searchQuery"
    >
      <BaseInput
        v-model="query"
        class="rounded-l-full bg-inherit px-3 placeholder:text-gray-500 focus:outline-none"
        placeholder="Cosa vuoi guardare?"
      />
      <BaseButton class="pl-2 pr-4 text-gray-400" type="submit">
        <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
      </BaseButton>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
import search from '@/shared/search.js'

import BaseInput from '../atoms/BaseInput.vue'
import BaseButton from '../atoms/BaseButton.vue'
export default {
  name: 'SearchBar',
  components: { BaseInput, BaseButton },
  data() {
    return {
      query: '',
      search,
    }
  },
  methods: {
    searchQuery() {
      const results = []

      axios
        .get('https://api.themoviedb.org/3/search/movie', {
          params: {
            api_key: '5031f648e435e991698175d09cdbf7a1',
            query: this.query,
            language: 'it-IT',
            include_adult: false,
          },
        })
        .then((response) => results.push(...response.data.results))

      axios
        .get('https://api.themoviedb.org/3/search/tv', {
          params: {
            api_key: '5031f648e435e991698175d09cdbf7a1',
            query: this.query,
            language: 'it-IT',
            include_adult: false,
          },
        })
        .then((response) => results.push(...response.data.results))

      this.search.results = results
    },
  },
}
</script>
