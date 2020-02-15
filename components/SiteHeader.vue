<template>
  <header>
    <nuxt-link class="title" to="/">Christian Memije</nuxt-link>
    <nav>
      <ul>
        <li v-for="link in internalLinks" :key="link.text">
          <nuxt-link :to="link.href">{{ link.text }}</nuxt-link>
        </li>
        <li v-for="link in externalLinks" :key="link.text">
          <ExternalLink :href="link.href" :text="link.text" />
        </li>
      </ul>
      <hr />
    </nav>
  </header>
</template>

<script>
import ExternalLink from '~/components/ExternalLink'

export default {
  components: {
    ExternalLink
  },
  data() {
    return {
      internalLinks: [
        {
          text: 'About',
          href: '/'
        },
        {
          text: 'Projects',
          href: '/projects'
        },
        {
          text: 'Articles',
          href: '/articles'
        },
        {
          text: 'Talks',
          href: '/talks'
        }
      ],
      externalLinks: [
        {
          text: 'Resume',
          href: 'https://drive.google.com/open?id=0Bzmbrj8wLiAaNTZGUHg4RVdLU2s'
        },
        {
          text: 'Github',
          href: 'https://github.com/christianmemije'
        },
        {
          text: 'LinkedIn',
          href: 'https://www.linkedin.com/in/christianmemije'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.title {
  font-size: 1rem;
  color: #212121;
  text-decoration: none;
}
nav {
  font-size: 0.9rem;
  ul {
    padding: 0;
  }
  li:not(:last-child) {
    padding-right: 1.25rem;
  }
  li {
    display: inline;
  }
}
</style>
