<template>
  <header>
    <SearchBar @search="results = $event" />
    <ul>
      <li v-for="result in results" :key="result.id">
        <h1>{{ result.title }}</h1>
        <h2>{{ result.original_title }}</h2>
        <p>{{ result.original_language }}</p>
        <p>{{ result.vote_average }}</p>
      </li>
    </ul>
  </header>
</template>

<script>
import SearchBar from '../molecules/SearchBar.vue'
export default {
  name: 'TheHeader',
  components: { SearchBar },
  data() {
    return {
      results: [],
    }
  },
}
</script>
