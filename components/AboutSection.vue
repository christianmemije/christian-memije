<template>
  <section id="about">
    <h2>About</h2>
    <div class="wrapper">
      <img src="/christian_memije.jpg" alt="Christian Memije" />
      <p>{{ about }}</p>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  components: {},
  data() {
    return {
      about:
        'I am a software engineer who enjoys designing and implementing great user experiences. For the moment, I happen to work mainly on the front-end. I enjoy high-paced and collaborative work and appreciate clean code, accessibility, and open source software. Other big interests of mine are music, AI, and space. But most importantly, I love to learn.'
    };
  }
};
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
}
img {
  width: 10rem;
  max-width: 100%;
}
p {
  padding-left: 1rem;
  flex: 1;
}
</style>
