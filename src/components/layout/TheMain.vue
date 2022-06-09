<template>
  <main class="overflow-auto bg-dark-gray-500">
    <div class="mx-auto w-full p-2 md:px-0">
      <ResultList />
    </div>
  </main>
</template>

<script>
import ResultList from '../organisms/ResultList.vue'
export default {
  name: 'TheMain',
  components: { ResultList },
}
</script>

<style scoped>
main {
  height: calc(100vh - 60px);
}
</style>
