<template>
  <section id="about">
    <h2>About</h2>
    <img src="~assets/images/christian_memije.jpg" alt="Christian Memije" />
    <p>{{ about }}</p>
  </section>
</template>

<script lang="ts">
export default {
  components: {},
  data() {
    return {
      about:
        'I am a software engineer who enjoys designing and implementing great user experiences. For the moment, I happen to work mainly on the front-end. I enjoy high-paced and collaborative work and appreciate clean code, accessibility, and open source software. Other big interests of mine are music, ML, and space. But most importantly, I love to learn.'
    }
  }
}
</script>

<style scoped>
img {
  width: 10rem;
  max-width: 100%;
}
</style>
