<template>
  <section>
    <IntroSection class="push" />
    <ExperienceSection class="push" />
    <ProjectsSection class="push" />
    <EducationSection class="push" />
    <ArticlesSection class="push" />
    <TalksSection class="push" />
    <AboutSection class="push" />
  </section>
</template>

<script lang="ts">
import ArticlesSection from '~/components/ArticlesSection.vue';
import ProjectsSection from '~/components/ProjectsSection.vue';
import TalksSection from '~/components/TalksSection.vue';
import AboutSection from '~/components/AboutSection.vue';
import ExperienceSection from '~/components/ExperienceSection.vue';
import EducationSection from '~/components/EducationSection.vue';
import IntroSection from '~/components/IntroSection.vue';

export default {
  components: {
    ArticlesSection,
    ProjectsSection,
    TalksSection,
    AboutSection,
    ExperienceSection,
    EducationSection,
    IntroSection
  }
};
</script>

<style scoped lang="scss">
section {
  margin: 2rem 0;
}

.push:not(:last-child) {
  margin-bottom: 3rem;
}
</style>
