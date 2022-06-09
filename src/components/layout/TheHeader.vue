<template>
  <header class="flex h-[80px] items-center justify-between bg-gray-900 p-4">
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
