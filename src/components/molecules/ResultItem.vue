<template>
  <li class="group relative h-[560px] cursor-pointer overflow-hidden rounded">
    <BasePoster
      :url="`https://image.tmdb.org/t/p/w342/${data.poster_path}`"
      class="h-full w-full rounded object-cover"
    />

    <div class="details">
      <BaseTitle class="text-2xl font-semibold">
        {{ data.title }}
      </BaseTitle>

      <BaseTitle
        v-if="data.original_title !== data.title"
        tag="h2"
        class="text-lg font-medium"
      >
        {{ data.original_title }}
      </BaseTitle>

      <BaseText>
        <FontAwesomeIcon
          v-for="n in data.vote_average"
          :key="n"
          class="text-amber-400"
          icon="fa-solid fa-star"
        />
      </BaseText>

      <BaseText class="my-2">
        {{ data.overview }}
      </BaseText>

      <BaseText class="font-medium">
        Lingua:
        <CountryFlag :country="data.language" class="align-bottom" />
      </BaseText>
    </div>
  </li>
</template>

<script>
import BaseTitle from '../atoms/BaseTitle.vue'
import BaseText from '../atoms/BaseText.vue'
import BasePoster from '../atoms/BasePoster.vue'

import CountryFlag from 'vue-country-flag'

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
        vote_average: Math.ceil(this.result.vote_average / 2),
        overview: this.result.overview,
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

<style>
.details {
  @apply absolute
    bottom-0
    left-0
    right-0
    mb-[-400px]
    h-[300px]
    overflow-auto
    bg-dark-gray-500
    bg-opacity-75
    p-2
    text-gray-50
    opacity-0
    transition-all
    duration-700
    group-hover:mb-0
    group-hover:opacity-100;
}
</style>
