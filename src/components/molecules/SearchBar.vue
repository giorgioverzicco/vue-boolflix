<template>
  <div>
    <form @submit.prevent="searchQuery()">
      <BaseInput v-model="query" />
      <BaseButton type="submit">Cerca</BaseButton>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

import BaseInput from '../atoms/BaseInput.vue'
import BaseButton from '../atoms/BaseButton.vue'
export default {
  name: 'SearchBar',
  components: { BaseInput, BaseButton },
  data() {
    return {
      query: '',
    }
  },
  methods: {
    searchQuery() {
      axios
        .get('https://api.themoviedb.org/3/search/movie', {
          params: {
            api_key: '5031f648e435e991698175d09cdbf7a1',
            query: this.query,
            language: 'it-IT',
            include_adult: false,
          },
        })
        .then((response) => {
          this.$emit('search', response.data.results)
        })
    },
  },
}
</script>
