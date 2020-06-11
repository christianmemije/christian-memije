<template>
  <section>
    <h1>Projects</h1>
    <ul>
      <li v-for="project in projects" :key="project.name">
        {{ project.name }} - {{ project.description }}
        <ExternalLink :href="project.demoHref" :text="'Demo'" />
        {{ ' ' }}
        <ExternalLink :href="project.codeHref" :text="'Source'" />
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
