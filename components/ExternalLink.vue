<template>
  <a :href="href" target="_blank" rel="noreferrer">{{ text }}</a>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  },
  data() {
    return {}
  }
}
</script>

<style scoped lang="scss"></style>
