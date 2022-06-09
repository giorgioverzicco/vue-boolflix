<template>
  <img :src="`https://image.tmdb.org/t/p/${size}/${url}`" alt="" />
</template>

<script>
export default {
  name: 'BasePoster',
  props: {
    size: {
      type: String,
      default: 'w342',
    },
    url: {
      type: String,
      required: true,
    },
  },
}
</script>
