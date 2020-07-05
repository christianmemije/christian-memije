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
import { tsParticles } from 'tsparticles'
import HeaderSection from '~/components/HeaderSection.vue'
import FooterSection from '~/components/FooterSection.vue'

export const PARTICLE_CONFIG: any = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: '#424242'
    },
    shape: {
      type: 'circle',
      stroke: {
        width: 0,
        color: '#000000'
      },
      polygon: {
        nb_sides: 5
      }
    },
    opacity: {
      value: 1,
      random: false,
      anim: {
        enable: true
      }
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: true
      }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#424242',
      opacity: 1,
      width: 1
    },
    move: {
      enable: true,
      speed: 1,
      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: false
      },
      onclick: {
        enable: false
      },
      resize: true
    }
  },
  retina_detect: true
}

export default {
  components: {
    HeaderSection,
    FooterSection
  },
  data() {
    return {}
  },
  mounted() {
    tsParticles.load('particles-js', PARTICLE_CONFIG)
  }
}
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
