<template>
  <img :src="url" alt="" />
</template>

<script>
export default {
  name: 'BasePoster',
  props: {
    url: {
      type: String,
      required: true,
      default: 'https://via.placeholder.com/242x363',
    },
  },
}
</script>
