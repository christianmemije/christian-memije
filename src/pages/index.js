import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const TITLE = 'Christian Memije';
const KEYWORDS = [`Christian Memije`, `memije`, `christianmemije`, `christianmemije.com`];

const GITHUB_PROFILE_LINK = 'https://github.com/christianmemije';
const LINKEDIN_LINK = 'https://www.linkedin.com/in/christianmemije';
const RESUME_LINK = '/Christian_Memije_Resume.pdf';

const TERDATA_LINK = 'https://teradata.com';
const COVALENT_LINK = 'https://teradata.github.io/covalent/';
const COVALENT_PRS_LINK = 'https://github.com/teradata/covalent/pulls?q=is%3Apr+author%3Achristianmemije';

const LEARNING_EQUALITY_LINK = 'https://learningequality.org';
const KOLIBRI_LINK = 'https://learningequality.org/kolibri/';
const KOLIBRI_PRS_LINK = 'https://github.com/learningequality/kolibri/pulls?q=is%3Apr+author%3Achristianmemije';
const KOLIBRI_DEMO_LINK = 'http://kolibribeta.learningequality.org/learn';
const KOLIBRI_STYLE_GUIDE_LINK = 'http://kolibribeta.learningequality.org/style_guide';

const IndexPage = () => (
  <Layout>
    <SEO title={TITLE} keywords={KEYWORDS} />

    <h1>Hello world!</h1>
    <p>My name is Christian Memije. I am a UI engineer who enjoys designing and implementing great user experiences. I am passionate about using software to help make a positive impact in the world.</p>
    <p>
      I currently work at <a target="_blank" rel="noopener noreferrer" href={TERDATA_LINK}>Teradata</a> as a UI Platform Engineer. I help develop <a target="_blank" rel="noopener noreferrer" href={COVALENT_LINK}>Covalent</a>, an open source Angular UI platform. You can view my code contributions to the project in the <a target="_blank" rel="noopener noreferrer" href={COVALENT_PRS_LINK}>repo's PR history</a>.
    </p>
    <p>
      I previously worked at <a target="_blank" rel="noopener noreferrer" href={LEARNING_EQUALITY_LINK}>Learning Equality</a> as a UX Developer helping design and develop <a target="_blank" rel="noopener noreferrer" href={KOLIBRI_LINK}>Kolibri</a>, an open source offline educational app. You can also view my code contributions to the project in the <a target="_blank" rel="noopener noreferrer" href={KOLIBRI_PRS_LINK}>repo's PR history</a>. You can view a <a target="_blank" rel="noopener noreferrer" href={KOLIBRI_DEMO_LINK}>demo of Kolibri</a> and check out the <a target="_blank" rel="noopener noreferrer" href={KOLIBRI_STYLE_GUIDE_LINK}>Kolibri style guide</a>.
    </p>
    <h2>Learn more</h2>
    <ul>
      <li>
        View my <a target="_blank" rel="noopener noreferrer" href={RESUME_LINK}>resume</a>.
      </li>
      <li>
        View my open source contributions on <a target="_blank" rel="noopener noreferrer" href={GITHUB_PROFILE_LINK}>Github</a>.
      </li>
      <li>
        Connect with me on <a target="_blank" rel="noopener noreferrer" href={LINKEDIN_LINK}>LinkedIn</a>.
      </li>
    </ul>
  </Layout>
);

export default IndexPage;
