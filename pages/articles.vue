<template>
  <section>
    <h1>Articles</h1>
    <ul>
      <li v-for="article in articles" :key="article.text">
        <ExternalLink :href="article.href" :text="article.text" /> -
        {{ date(article.date) }}
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
      articles: [
        {
          text: 'Adding Cypress to an Angular project',
          href:
            'https://dev.to/christianmemije/adding-cypress-to-an-angular-project-30je',
          date: '08-25-2019'
        },
        {
          text: 'Cool ES2019 Use Cases',
          href: 'https://dev.to/christianmemije/cool-es2019-use-cases-2og2',
          date: '08-22-2019'
        },
        {
          text:
            '4 Improvements to Learners’ Exercise and Mastery Experience in Kolibri v0.10',
          href:
            'https://blog.learningequality.org/kolibri-0-10-exercise-mastery-d7213efd6f58',
          date: '07-02-2018'
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
