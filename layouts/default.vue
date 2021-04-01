<template>
  <div class="wrapper">
    <HeaderSection class="header" />
    <div class="scroll">
      <main>
        <nuxt />
      </main>
      <FooterSection />
    </div>
  </div>
</template>

<script lang="ts">
import HeaderSection from '~/components/HeaderSection.vue';
import FooterSection from '~/components/FooterSection.vue';

export default {
  components: {
    HeaderSection,
    FooterSection
  },
  data() {
    return {};
  }
};
</script>

<style scoped lang="scss">
.wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
}
.header {
  flex: 1;
  padding: 1rem 10vmin 1rem 10vmin;
  border-bottom: 2px solid;
}
.scroll {
  overflow: auto;
  padding: 1rem 10vmin 1rem 10vmin;
}
</style>
