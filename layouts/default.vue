<template>
  <div class="layout">
    <header>
      <h3>Christian Memije</h3>
      <nav>
        <ul>
          <li v-for="link in links" :key="link.title">
            <nuxt-link :to="link.href">{{ link.title }}</nuxt-link>
          </li>
          <li>
            <a :href="RESUME_LINK" target="_blank">Resume</a>
          </li>
          <li>
            <a :href="GITHUB_PROFILE_LINK" target="_blank">
              Github
            </a>
          </li>
          <li>
            <a :href="LINKEDIN_LINK" target="_blank">
              LinkedIn
            </a>
          </li>
        </ul>
        <hr />
      </nav>
    </header>
    <main>
      <nuxt />
    </main>
    <footer>
      <hr />
      <p>
        Built using <a href="https://nuxtjs.org/" target="_blank">Nuxt.js</a>,
        <a
          href="https://fonts.google.com/specimen/IBM+Plex+Mono"
          target="_blank"
          >IBM Plex Mono</a
        >, &
        <a href="https://devinhunt.github.io/typebase.css/" target="_blank"
          >typebase.css</a
        >. OSS FTW! :D
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          title: 'Home',
          href: '/'
        },
        {
          title: 'Articles',
          href: '/articles'
        },
        {
          title: 'Talks',
          href: '/talks'
        },
        {
          title: 'About',
          href: '/about'
        }
      ],
      RESUME_LINK:
        'https://drive.google.com/open?id=0Bzmbrj8wLiAaNTZGUHg4RVdLU2s',
      GITHUB_PROFILE_LINK: 'https://github.com/christianmemije',
      LINKEDIN_LINK: 'https://www.linkedin.com/in/christianmemije'
    }
  }
}
</script>

<style scoped lang="scss">
.layout {
  margin: 2rem;
}
nav {
  ul {
    // display: flex;
    // justify-content: space-between;
    // flex-wrap: wrap;
    padding: 0;
  }
  li:not(:last-child) {
    padding-right: 1.25rem;
  }
  li {
    display: inline;
  }
}
.icon {
  height: 1.25rem;
  padding-right: 0.25rem;
  vertical-align: bottom;
}

footer {
  font-size: smaller;
}
</style>
