<template>
  <footer>
    <hr />
    <p>
      Built using
      <ExternalLink href="https://nuxtjs.org/" text="Nuxt.js" />,
      <ExternalLink
        href="https://fonts.google.com/specimen/IBM+Plex+Mono"
        text="IBM Plex Mono"
      />, and
      <ExternalLink
        href="https://devinhunt.github.io/typebase.css/"
        text="typebase.css"
      />. OSS FTW! :D
      <ExternalLink
        href="https://github.com/christianmemije/christian-memije"
        text="View source"
      />.
    </p>
  </footer>
</template>

<script>
import ExternalLink from '~/components/ExternalLink'
export default {
  components: {
    ExternalLink
  },
  data() {
    return {}
  }
}
</script>

<style scoped lang="scss">
footer {
  font-size: smaller;
}
</style>
