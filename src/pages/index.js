import React from 'react'
import Link from 'gatsby-link'
import { withPrefix } from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Christian Memije</h1>
    <h2>Hello world!</h2>
    <p>
      I am a UX engineer who enjoys designing and implementing great user experiences. I enjoy working closely with designers for rapid iteration. I also enjoy working in fast-paced teams. I am passionate about using software to help make a positive impact on this world.
    </p>
    <p>
      I currently work at <a href="https://learningequality.org/">Learning Equality</a> as a UX Developer. I help design and develop <a href="https://learningequality.org/kolibri/">Kolibri</a>, an open source offline educational app. You can view my code contributions to the project in the <a href="https://github.com/learningequality/kolibri/pulls?utf8=%E2%9C%93&q=is%3Apr+author%3Achristianmemije+">repo's pull request history</a>. You can also view the end result by clicking through a  <a href="http://kolibribeta.learningequality.org/learn/#/topics/c/4984b1b43e4c580e804779d7ee4f458f">demo of Kolibri</a> and checking out the <a href="http://kolibribeta.learningequality.org/style_guide#/components/buttons">Kolibri style guide</a>.
    </p>
    <h2>Learn more</h2>
      <ul>
        <li>
          View my <a href="/Christian_Memije_Resume.pdf">resume</a>.
        </li>
        <li>
          View my open source contributions on <a href="https://github.com/christianmemije">Github</a>.
        </li>
        <li>
          Connect with me on <a href="https://www.linkedin.com/in/christianmemije">LinkedIn</a>.
          </li>
      </ul>
  </div>
)

export default IndexPage
