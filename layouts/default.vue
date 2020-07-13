<template>
  <div>
    <div class="layout">
      <HeaderSection />
      <main>
        <nuxt />
      </main>
      <FooterSection />
    </div>
    <div id="particles-js"></div>
  </div>
</template>

<script lang="ts">
import { tsParticles, OutMode } from 'tsparticles';
import { RecursivePartial } from 'tsparticles/dist/Types/RecursivePartial';
import { IOptions } from 'tsparticles/dist/Options/Interfaces/IOptions';
import { Container } from 'tsparticles/dist/Core/Container';
import HeaderSection from '~/components/HeaderSection.vue';
import FooterSection from '~/components/FooterSection.vue';

export const PARTICLE_CONFIG: RecursivePartial<IOptions> = {
  particles: {
    color: {
      value: '#ffffff'
    },
    opacity: {
      value: 0.1
    },
    size: {
      value: 1
    },
    links: {
      color: '#ffffff',
      enable: true,
      opacity: 0.1,
      width: 1
    },
    move: {
      enable: true,
      speed: 0.5,
      outMode: OutMode.bounce
    },
    collisions: {
      enable: true
    },
    number: {
      density: {
        enable: true,
        value_area: 3
      },
      value: 1
    },
    shape: {
      polygon: {
        sides: 4
      }
    }
  },
  fpsLimit: 60,
  detectRetina: true
};

export default {
  components: {
    HeaderSection,
    FooterSection
  },
  data() {
    return {};
  },
  async mounted() {
    const particles: Container = (await tsParticles.load(
      'particles-js',
      PARTICLE_CONFIG
    )) as Container;
    window.addEventListener('resize', () => particles.refresh());
  }
};
</script>

<style scoped lang="scss">
.layout {
  margin: 0 auto;
  max-width: 840px;
  padding: 1.5rem;
}
#particles-js {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: -1;
  background-color: #141414;
}
</style>
