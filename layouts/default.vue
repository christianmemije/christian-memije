<template>
  <div class="layout">
    <SiteHeader />
    <main>
      <nuxt />
    </main>
    <SiteFooter />
  </div>
</template>

<script>
import SiteHeader from '~/components/SiteHeader'
import SiteFooter from '~/components/SiteFooter'

export default {
  components: {
    SiteHeader,
    SiteFooter
  },
  data() {
    return {}
  }
}
</script>

<style scoped lang="scss">
.layout {
  margin: 0 auto;
  max-width: 50rem;
  padding: 1.5rem;
}
</style>
