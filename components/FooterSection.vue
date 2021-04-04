<template>
  <footer>
    <p>
      Built using
      <ExternalLink href="https://nuxtjs.org/" text="Nuxt.js" />,
      <ExternalLink
        href="https://fonts.google.com/specimen/JetBrains+Mono"
        text="JetBrains Mono"
      />, and
      <ExternalLink
        href="https://devinhunt.github.io/typebase.css/"
        text="typebase.css"
      />. OSS FTW! :D
      <ExternalLink
        href="https://github.com/christianmemije/christianmemije"
        text="View source"
      />.
    </p>
  </footer>
</template>

<script lang="ts">
import ExternalLink from '~/components/ExternalLink.vue';

export default {
  components: {
    ExternalLink
  },
  data() {
    return {};
  }
};
</script>

<style scoped lang="scss">
footer {
  font-size: smaller;
  padding: 3rem 0 1rem 0;
}
</style>
