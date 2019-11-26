<template>
  <section class="container">
    <img src="~assets/images/christian_memije.jpg" />
    <p>
      A UI engineer who enjoys designing and implementing great user
      experiences. Passionate about using software to help make a positive
      impact in the world.
    </p>

    <p>
      I currently work at
      <a :href="TERDATA_LINK" target="_blank">Teradata</a> as a UI Engineer. I
      help develop <a :href="COVALENT_LINK" target="_blank">Covalent</a>, an
      open source Angular UI component library.
      <a :href="COVALENT_PRS_LINK" target="_blank">View contributions.</a>
    </p>
    <p>
      I previously worked at
      <a :href="LEARNING_EQUALITY_LINK" target="_blank">Learning Equality</a>
      as a UX Developer helping design and develop
      <a :href="KOLIBRI_LINK" target="_blank">Kolibri</a>, an open source
      offline educational app.
      <a :href="KOLIBRI_PRS_LINK" target="_blank">View contributions</a>.
      <a :href="KOLIBRI_DEMO_LINK" target="_blank">View demo of Kolibri</a>.
    </p>
    <ul>
      <li></li>
      <li></li>
    </ul>
    <ul>
      <li><a :href="RESUME_LINK" target="_blank">Resume</a>.</li>
      <li>
        View my open source contributions on
        <a :href="GITHUB_PROFILE_LINK" target="_blank">Github</a>.
      </li>
      <li>
        Connect with me on
        <a :href="LINKEDIN_LINK" target="_blank">LinkedIn</a>.
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  components: {},
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
      KOLIBRI_DEMO_LINK: 'http://kolibribeta.learningequality.org/learn',
      KOLIBRI_STYLE_GUIDE_LINK:
        'http://kolibribeta.learningequality.org/style_guide',
      RESUME_LINK:
        'https://drive.google.com/open?id=0Bzmbrj8wLiAaNTZGUHg4RVdLU2s',
      GITHUB_PROFILE_LINK: 'https://github.com/christianmemije',
      LINKEDIN_LINK: 'https://www.linkedin.com/in/christianmemije'
    }
  }
}
</script>

<style scoped>
.container {
  /* display: flex;
  align-items: center; */
}

img {
  width: 10rem;
  max-width: 100%;
}
</style>
