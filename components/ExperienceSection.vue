<template>
  <section id="experience">
    <h2>Work Experience</h2>
    <div
      v-for="experience in experiences"
      :key="experience.company.name"
      class="experience-item"
    >
      <h3>
        <ExternalLink
          :href="experience.company.url"
          :text="experience.company.name"
        />
        | {{ experience.dates }}
      </h3>
      <h4>{{ experience.title }}</h4>
      <ul>
        <li v-for="(bullet, index) in experience.description" :key="index">
          <span v-for="(bulletSubStr, subIndex) in bullet" :key="subIndex">
            <ExternalLink
              v-if="bulletSubStr.url"
              :href="bulletSubStr.url"
              :text="bulletSubStr.text"
            />
            <template v-else>{{ bulletSubStr.text }}</template>
          </span>
        </li>
      </ul>
    </div>
  </section>
</template>

<script lang="ts">
import ExternalLink from '~/components/ExternalLink.vue'

interface ICompany {
  name: string
  url: string
}

interface IExperience {
  company: ICompany
  dates: string
  title: string
  description: IBulletSubStr[][]
}

interface IBulletSubStr {
  text: string
  url?: string
}

const experiences: IExperience[] = [
  {
    company: { name: 'Teradata', url: 'https://www.teradata.com/' },
    dates: 'November 2018 – Present',
    title: 'UI Engineer',
    description: [
      [
        { text: 'Developing ' },
        { text: 'Covalent', url: 'https://github.com/teradata/covalent' },
        { text: ', ' },
        {
          text: 'Vantage UI Platform',
          url: 'https://github.com/Teradata/vantage-ui-platform'
        },
        { text: ', and a variety of ' },
        {
          text: 'Vantage',
          url: 'https://www.teradata.com/Products/Software/Vantage'
        },
        {
          text:
            ' applications using Angular, TypeScript, RxJS, REST APIs, and Material Design.'
        }
      ],

      [
        {
          text:
            'Creating coding standards to be leveraged by various projects and teams.'
        }
      ],
      [
        {
          text:
            'Introducing processes to make workflows for the team more efficient.'
        }
      ]
    ]
  },
  {
    company: {
      name: 'Learning Equality',
      url: 'https://learningequality.org/'
    },
    dates: 'June 2016 – November 2018',
    title: 'UX Developer',
    description: [
      [
        {
          text: 'Developed the front-end of '
        },
        {
          text: 'Kolibri',
          url: 'https://github.com/learningequality/kolibri'
        },
        {
          text: ' using Vue.js, JavaScript, Vuex, Webpack, and REST APIs.'
        }
      ],
      [{ text: 'Helped design and develop a living style guide for Kolibri.' }],
      [
        {
          text:
            'Regularly participated in design reviews with the UX design team.'
        }
      ],
      [{ text: 'Worked on the Android build of Kolibri.' }],
      [
        { text: 'Worked on the pipeline of the ' },
        {
          text: 'Video Vectorization Project',
          url: 'https://github.com/learningequality/video-vectorization'
        },
        { text: '.' }
      ],
      [{ text: 'Performed on-site UX research at various deployments.' }]
    ]
  }
]

export default {
  components: {
    ExternalLink
  },
  data() {
    return {
      experiences
    }
  }
}
</script>

<style scoped lang="scss">
.experience-item {
  padding: 0.5rem 0;
}
</style>
