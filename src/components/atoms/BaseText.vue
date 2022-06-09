<template>
  <component :is="tag">
    <slot />
  </component>
</template>

<script>
export default {
  name: 'BaseText',
  props: {
    tag: {
      type: String,
      default: 'p',
    },
  },
}
</script>
