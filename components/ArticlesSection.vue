<template>
  <section id="articles">
    <h2>Articles</h2>
    <ul>
      <li v-for="article in articles" :key="article.text">
        <ExternalLink :href="article.href" :text="article.text" /> -
        {{ date(article.date) }}
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import ExternalLink from '~/components/ExternalLink.vue';

interface IArticle {
  text: string;
  href: string;
  date: string;
}

const articles: IArticle[] = [
  {
    text:
      'Optimizing Your Job Search - Job filtering tips for LinkedIn, Who is Hiring?, and Hacker News',
    href: 'https://dev.to/christianmemije/optimizing-your-job-search-fpm',
    date: '2020-09-01'
  },
  {
    text: 'Adding Cypress to an Angular project',
    href:
      'https://dev.to/christianmemije/adding-cypress-to-an-angular-project-30je',
    date: '2019-08-25'
  },
  {
    text: 'Cool ES2019 Use Cases',
    href: 'https://dev.to/christianmemije/cool-es2019-use-cases-2og2',
    date: '2019-08-22'
  },
  {
    text:
      '4 Improvements to Learners’ Exercise and Mastery Experience in Kolibri v0.10',
    href:
      'https://blog.learningequality.org/kolibri-0-10-exercise-mastery-d7213efd6f58',
    date: '2018-07-02'
  }
];

export default {
  components: {
    ExternalLink
  },
  data() {
    return {
      articles
    };
  },
  methods: {
    date(date: string) {
      return new Date(date).toLocaleDateString();
    }
  }
};
</script>
