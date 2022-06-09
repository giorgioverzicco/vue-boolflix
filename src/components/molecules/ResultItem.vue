<template>
  <li>
    <BasePoster :url="result.poster_path" size="w185" />
    <BaseTitle>{{ getData(result).title }}</BaseTitle>
    <BaseTitle :tag="h2">{{ getData(result).original_title }}</BaseTitle>
    <BaseText>{{ result.original_language }}</BaseText>
    <CountryFlag :country="getData(result).language" />
    <BaseText>{{ getData(result).vote_average }}</BaseText>
  </li>
</template>

<script>
import CountryFlag from 'vue-country-flag'
import BaseTitle from '../atoms/BaseTitle.vue'
import BaseText from '../atoms/BaseText.vue'
import BasePoster from '../atoms/BasePoster.vue'

const CountryLanguage = require('country-language')

export default {
  name: 'ResultItem',
  components: { CountryFlag, BaseTitle, BaseText, BasePoster },
  props: {
    result: {
      type: Object,
      required: true,
    },
  },
  methods: {
    getData(result) {
      return {
        title: result.title || result.name,
        original_title: result.original_title || result.original_name,
        language: this.getCountry(result.original_language),
        vote_average: Math.ceil(result.vote_average / 2),
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
