<template>
  <section id="talks">
    <h2>Talks</h2>
    <ul>
      <li v-for="talk in talks" :key="talk.title">
        <ExternalLink :href="talk.href" :text="`${talk.title}`" /> -
        {{ date(talk.date) }} @ {{ talk.location }}
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import ExternalLink from '~/components/ExternalLink.vue'

interface ITalk {
  title: string
  href: string
  location: string
  date: string
}

const talks: ITalk[] = [
  {
    title: 'Cool new ES2019 features',
    href:
      'https://docs.google.com/presentation/d/1X54DZVIp-ssmdLjstXU9keAOz-O7OjAHpOfv8lWfaO0/edit?usp=sharing',
    location: 'San Diego Angular Meetup',
    date: '2019-08-21'
  },
  {
    title: 'NG E2E testing: Ditching Protractor for Cypress?',
    href:
      'https://docs.google.com/presentation/d/1cNCzi2Qp5u4cFQ2TjqjmQgSW8ZFeI8zUdLO4JZuZ0Ys/edit?usp=sharing',
    location: 'San Diego Angular Meetup',
    date: '2019-04-10'
  }
]

export default {
  components: {
    ExternalLink
  },
  data() {
    return {
      talks
    }
  },
  methods: {
    date(date: string) {
      return new Date(date).toLocaleDateString()
    }
  }
}
</script>
