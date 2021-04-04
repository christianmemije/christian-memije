<template>
  <div class="container">
    <main>
      <nuxt />
    </main>
    <FooterSection />
  </div>
</template>

<script lang="ts">
import FooterSection from '~/components/FooterSection.vue';

export default {
  components: {
    FooterSection
  },
  data() {
    return {};
  }
};
</script>

<style scoped lang="scss">
.container {
  padding: 1rem 2.5rem;
}
</style>
