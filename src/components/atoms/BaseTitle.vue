<template>
  <component :is="tag">
    <slot />
  </component>
</template>

<script>
export default {
  name: 'BaseTitle',
  props: {
    tag: {
      type: String,
      default: 'h1',
    },
  },
}
</script>
