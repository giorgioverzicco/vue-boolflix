<template>
  <component :is="tag">
    <slot />
  </component>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    tag: {
      type: String,
      default: 'button',
    },
  },
}
</script>
