<template>
  <section>
    <ProjectsSection class="push" />
    <ExperienceSection class="push" />
    <EducationSection class="push" />
    <ArticlesSection class="push" />
    <TalksSection class="push" />
    <AboutSection class="push" />
  </section>
</template>

<script lang="ts">
import ArticlesSection from '~/components/ArticlesSection.vue'
import ProjectsSection from '~/components/ProjectsSection.vue'
import TalksSection from '~/components/TalksSection.vue'
import AboutSection from '~/components/AboutSection.vue'
import ExperienceSection from '~/components/ExperienceSection.vue'
import EducationSection from '~/components/EducationSection.vue'

export default {
  components: {
    ArticlesSection,
    ProjectsSection,
    TalksSection,
    AboutSection,
    ExperienceSection,
    EducationSection
  }
}
</script>

<style scoped lang="scss">
section {
  margin: 2rem 0;
}

.push:not(:last-child) {
  margin-bottom: 2rem;
}
</style>
