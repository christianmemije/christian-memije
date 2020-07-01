<template>
  <section>
    <h1>Projects</h1>
    <ul>
      <li v-for="project in projects" :key="project.name">
        <ExternalLink :href="project.demoHref" :text="project.name" /> -
        {{ project.description }}
        <ExternalLink
          v-if="!!project.codeHref"
          :href="project.codeHref"
          :text="'Source'"
        />
      </li>
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
      projects: [
        {
          name: 'Trap y Corridos Soundboard',
          description:
            'A PWA that allows users to play and share catchphrases that are popular among the music genres of Latin Trap and Corridos',
          demoHref: 'https://trapcorridosboard.com'
        },
        {
          name: 'Sortify',
          description: 'Sort Spotify Playlists',
          demoHref: 'https://sortspotifyplaylists.com/',
          codeHref: 'https://github.com/christianmemije/sortify'
        }
      ]
    }
  }
}
</script>
