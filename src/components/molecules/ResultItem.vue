<template>
  <li>
    <BasePoster :url="data.poster_path" size="w185" />
    <BaseTitle>{{ data.title }}</BaseTitle>
    <BaseTitle :tag="h2">{{ data.original_title }}</BaseTitle>
    <CountryFlag :country="data.language" />
    <BaseText>{{ data.vote_average }}</BaseText>
  </li>
</template>

<script>
import CountryFlag from 'vue-country-flag'
import BaseTitle from '../atoms/BaseTitle.vue'
import BaseText from '../atoms/BaseText.vue'
import BasePoster from '../atoms/BasePoster.vue'

import CountryLanguage from 'country-language'

export default {
  name: 'ResultItem',
  components: { CountryFlag, BaseTitle, BaseText, BasePoster },
  props: {
    result: {
      type: Object,
      required: true,
    },
  },
  computed: {
    data() {
      return {
        poster_path: this.result.poster_path,
        title: this.result.title || this.result.name,
        original_title: this.result.original_title || this.result.original_name,
        language: this.getCountry(),
        vote_average: this.result.vote_average,
      }
    },
  },
  methods: {
    getCountry() {
      return CountryLanguage.getLanguage(
        this.result.original_language,
        (e, language) => {
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
        }
      )
    },
  },
}
</script>
