<template>
  <div class="layout">
    <HeaderSection />
    <main>
      <nuxt />
    </main>
    <FooterSection />
  </div>
</template>

<script lang="ts">
import HeaderSection from '~/components/HeaderSection.vue'
import FooterSection from '~/components/FooterSection.vue'

export default {
  components: {
    HeaderSection,
    FooterSection
  },
  data() {
    return {}
  },
  mounted() {}
}
</script>

<style scoped lang="scss">
.layout {
  margin: 0 auto;
  max-width: 840px;
  padding: 1.5rem;
}
</style>
