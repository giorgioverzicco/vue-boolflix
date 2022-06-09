<template>
  <header
    class="flex h-[60px] items-center justify-between bg-dark-gray-500 p-3"
  >
    <BaseLogo />
    <SearchBar />
  </header>
</template>

<script>
import BaseLogo from '../atoms/BaseLogo.vue'
import SearchBar from '../molecules/SearchBar.vue'

export default {
  name: 'TheHeader',
  components: { SearchBar, BaseLogo },
  data() {
    return {
      results: [],
    }
  },
}
</script>
