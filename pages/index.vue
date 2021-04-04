<template>
  <section>
    <IntroSection class="push" />
    <HeaderSection class="sticky" />
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
import HeaderSection from '~/components/HeaderSection.vue';

export default {
  components: {
    ArticlesSection,
    ProjectsSection,
    TalksSection,
    AboutSection,
    ExperienceSection,
    EducationSection,
    IntroSection,
    HeaderSection
  }
};
</script>

<style scoped lang="scss">
.push {
  padding: 8rem 0 0 0;
}

.sticky {
  position: sticky;
  top: 0;
  right: 0;
  left: 0;
  background: #edeae3;
  border-bottom: 0.1rem solid;
}
</style>
