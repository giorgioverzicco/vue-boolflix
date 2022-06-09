<template>
  <header>
    <SearchBar @search="results = $event" />
    <ul>
      <li v-for="result in results" :key="result.id">
        <h1>{{ getData(result).title }}</h1>
        <h2>{{ getData(result).original_title }}</h2>
        <p>{{ result.original_language }}</p>
        <CountryFlag :country="getData(result).language" />
        <p>{{ getData(result).vote_average }}</p>
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
    getData(result) {
      return {
        title: result.title || result.name,
        original_title: result.original_title || result.original_name,
        language: this.getCountry(result.original_language),
        vote_average: result.vote_average,
      }
    },

    getCountry(lang) {
      return CountryLanguage.getLanguage(lang, (e, language) => {
        const result = language.countries[0].code_2.toLowerCase()

        switch (result) {
          case 'ag':
            return 'gb'
          case 'ar':
            return 'es'
          case 'be':
            return 'fr'
          default:
            return result
        }
      })
    },
  },
}
</script>
