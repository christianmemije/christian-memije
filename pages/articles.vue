<template>
  <section>
    <h1>Articles</h1>
    <ul>
      <li v-for="article in articles" :key="article.title">
        <a :href="article.href" target="_blank">{{ article.title }}</a>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      articles: [
        {
          title: 'Adding Cypress to an Angular project',
          href:
            'https://dev.to/christianmemije/adding-cypress-to-an-angular-project-30je'
        },
        {
          title: 'Cool ES2019 Use Cases',
          href: 'https://dev.to/christianmemije/cool-es2019-use-cases-2og2'
        },
        {
          title:
            '4 Improvements to Learners’ Exercise and Mastery Experience in Kolibri v0.10',
          href:
            'https://blog.learningequality.org/kolibri-0-10-exercise-mastery-d7213efd6f58'
        }
      ]
    }
  }
}
</script>
