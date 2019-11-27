<template>
  <section>
    <img
      src="~assets/images/christian_memije.jpg"
      alt="Profile picture of Christian Memije"
    />
    <p>
      I am a UI engineer who enjoys designing and implementing great user
      experiences. I am driven to use my skills as a software engineer to make a
      positive impact in the world. I enjoy high-paced and collaborative work.
    </p>

    <p>
      I currently work at
      <ExternalLink :href="TERDATA_LINK" text="Teradata" /> as a UI Engineer. I
      help develop <ExternalLink :href="COVALENT_LINK" text="Covalent" />, an
      open source Angular UI component library.
      <ExternalLink :href="COVALENT_PRS_LINK" text="View contributions" />.
    </p>
    <p>
      I previously worked at
      <ExternalLink :href="LEARNING_EQUALITY_LINK" text="Learning Equality" />
      as a UX Developer helping design and develop
      <ExternalLink :href="KOLIBRI_LINK" text="Kolibri" />, an open source
      offline educational app.
      <ExternalLink :href="KOLIBRI_PRS_LINK" text="View contributions" />.
      <ExternalLink :href="KOLIBRI_DEMO_LINK" text="View demo of Kolibri" />.
    </p>
    <h2>Things I like:</h2>
    <ul>
      <li>Close collaboration with developers and designers</li>
      <li>High-paced work</li>
      <li>Tight deadlines</li>
      <li>Clean and consistent code</li>
      <li>Linters and formatters</li>
      <li>TypeScript</li>
      <li>Accessibility</li>
      <li>Really well done code reviews</li>
      <li>Questioning designs, not simply blindly implementing mocks</li>
      <li>Open source software</li>
    </ul>
    <h2>Other things I like</h2>
    <ul>
      <li>Music 🎧</li>
      <li>Staying active via exercise and hiking 🏃‍♂️⛰️</li>
      <li>Enjoying nature 🏕️</li>
      <li>Traveling 🛫</li>
    </ul>
  </section>
</template>

<script>
import ExternalLink from '~/components/ExternalLink'

export default {
  components: {
    ExternalLink
  },
  data() {
    return {
      TERDATA_LINK: 'https://teradata.com',
      COVALENT_LINK: 'https://teradata.github.io/covalent/',
      COVALENT_PRS_LINK:
        'https://github.com/teradata/covalent/pulls?q=is%3Apr+author%3Achristianmemije',
      LEARNING_EQUALITY_LINK: 'https://learningequality.org',
      KOLIBRI_LINK: 'https://learningequality.org/kolibri/',
      KOLIBRI_PRS_LINK:
        'https://github.com/learningequality/kolibri/pulls?q=is%3Apr+author%3Achristianmemije',
      KOLIBRI_DEMO_LINK: 'http://kolibribeta.learningequality.org/learn'
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
