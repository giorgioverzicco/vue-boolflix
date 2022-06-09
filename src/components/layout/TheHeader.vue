<template>
  <header>
    <SearchBar @search="results = $event" />
    <ul>
      <li v-for="result in results" :key="result.id">
        <h1>{{ result.title }}</h1>
        <h2>{{ result.original_title }}</h2>
        <CountryFlag :country="getCountry(result.original_language)" />
        <p>{{ result.vote_average }}</p>
      </li>
    </ul>
  </header>
</template>

<script>
import CountryFlag from 'vue-country-flag'

import SearchBar from '../molecules/SearchBar.vue'

const CountryLanguage = require('country-language')
export default {
  name: 'TheHeader',
  components: { CountryFlag, SearchBar },
  data() {
    return {
      results: [],
    }
  },
  methods: {
    getCountry(lang) {
      return CountryLanguage.getLanguage(lang, (e, language) => {
        const result = language.countries.at(-1).code_2.toLowerCase()

        switch (result) {
          case 'ag':
            return 'gb'
          case 'ar':
            return 'es'
          default:
            return result
        }
      })
    },
  },
}
</script>
