<template>
  <section id="projects">
    <h2>Personal Projects</h2>

    <div class="grid">
      <div v-for="project in projects" :key="project.name" class="grid-item">
        <h3>{{ project.name }}</h3>
        <ul>
          <li v-for="link in project.links" :key="link.url">
            <ExternalLink :href="link.url" :text="link.text" />
          </li>
        </ul>
        <video width="100%" autoplay muted loop>
          <source :src="project.video" type="video/mp4" />
        </video>
        <ul>
          <li v-for="bullet in project.description" :key="bullet">
            {{ bullet }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import ExternalLink from '~/components/ExternalLink.vue';

const tcsbVideo = require('../assets/videos/tcsb.mp4');
const sortifyVideo = require('../assets/videos/sortify.mp4');

interface IBulletSubStr {
  text: string;
  url?: string;
}

interface IProject {
  name: string;
  description: string[];
  links: IBulletSubStr[];
  video: any;
}

const projects: IProject[] = [
  {
    name: 'Trap y Corridos Soundboard',
    description: [
      'Created a soundboard app that allows users to play and share catchphrases that are popular among the music genres of Latin Trap and Corridos',
      'Leveraged React Native and Expo during development to create an Android app, an iOS app, and a PWA from the same code base.',
      'Created an app to facilitate scraping using Vue.js, Python, and Flask.',
      'Deployed the app to the Google Play store and currently in the process of deploying it to the Apple App Store.'
    ],
    links: [
      {
        text: 'Progressive web app',
        url: 'https://trapcorridosboard.com'
      },
      {
        text: 'Android app',
        url:
          'https://play.google.com/store/apps/details?id=com.christianmemije.trapcorridossoundboard'
      }
    ],
    video: tcsbVideo
  },
  {
    name: 'Sortify',
    description: [
      'Created a web app that allows users to sort Spotify playlists based on various features such as artist, release date, popularity, tempo, etc.',
      'Utilized Angular, TypeScript, and the Spotify Web APIs.'
    ],
    links: [
      {
        text: 'Web app',
        url: 'https://sortspotifyplaylists.com/'
      },
      {
        text: 'Repo',
        url: 'https://github.com/christianmemije/sortify'
      }
    ],
    video: sortifyVideo
  }
];

export default {
  components: {
    ExternalLink
  },
  data() {
    return {
      projects
    };
  }
};
</script>

<style scoped>
ul {
  margin: 0.5rem 0;
}
video {
  max-width: 100%;
  width: 25rem;
}

.grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 2rem;
}

.grid-item {
  width: 100%;
}

@media (min-width: 960px) {
  .grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
