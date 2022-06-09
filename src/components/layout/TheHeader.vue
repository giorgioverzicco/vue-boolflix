<template>
  <header>
    <SearchBar />
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
