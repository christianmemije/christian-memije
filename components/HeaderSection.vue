<template>
  <header>
    <nav>
      <ul>
        <li v-for="link in anchorLinks" :key="link.text">
          <a :href="link.href">{{ link.text }}</a>
        </li>
        <li v-for="link in externalLinks" :key="link.text">
          <ExternalLink :href="link.href" :text="link.text" />
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import ExternalLink from '~/components/ExternalLink.vue';

interface ILink {
  text: string;
  href: string;
}

const anchorLinks: ILink[] = [
  {
    text: 'CM',
    href: '#intro'
  },
  {
    text: 'Experience',
    href: '#experience'
  },
  {
    text: 'Projects',
    href: '#projects'
  },
  {
    text: 'Education',
    href: '#education'
  },
  {
    text: 'Articles',
    href: '#articles'
  },
  {
    text: 'Talks',
    href: '#talks'
  },
  {
    text: 'About',
    href: '#about'
  }
];

const externalLinks: ILink[] = [
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
];

export default {
  components: {
    ExternalLink
  },
  data() {
    return {
      anchorLinks,
      externalLinks
    };
  }
};
</script>

<style scoped lang="scss">
nav {
  ul {
    padding: 0;
    margin: 0.5rem 0;
  }
  li:not(:last-child) {
    padding-right: 1.25rem;
  }
  li {
    display: inline-block;
  }
}
h1 {
  padding-right: 1.25rem;
}

h1,
nav {
  display: inline-block;
}
</style>
