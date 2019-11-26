<template>
  <section>
    <h1>Talks</h1>
    <ul>
      <li v-for="talk in talks" :key="talk.title">
        <a :href="talk.href" target="_blank"
          >{{ talk.title }} - {{ date(talk.date) }}</a
        >
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      talks: [
        {
          title: 'Cool new ES2019 features',
          href:
            'https://docs.google.com/presentation/d/1X54DZVIp-ssmdLjstXU9keAOz-O7OjAHpOfv8lWfaO0/edit?usp=sharing',
          location: 'San Diego Angular Meetup',
          date: '08-21-2019'
        },
        {
          title: 'NG E2E testing: Ditching Protractor for Cypress?',
          href:
            'https://docs.google.com/presentation/d/1cNCzi2Qp5u4cFQ2TjqjmQgSW8ZFeI8zUdLO4JZuZ0Ys/edit?usp=sharing',
          location: 'San Diego Angular Meetup',
          date: '04-10-2019'
        }
      ]
    }
  },
  methods: {
    date(date) {
      return new Date(date).toLocaleDateString()
    }
  }
}
</script>
