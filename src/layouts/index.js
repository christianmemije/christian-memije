import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import './index.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Christian Memije"
      meta={[
        { charset: 'utf-8' },
        { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Christian Memije' },
        { name: 'keywords', content: 'Christian Memije, christianmemije' },
        { property: 'og:title', content: 'Christian Memije' },
        { property: 'og:site_name', content: 'Christian Memije' },
        { property: 'og:description', content: 'UX Engineer' },
        { property: 'og:url', content: 'http://christianmemije.com' },
        { property: 'og:type', content: 'Website' },
      ]}
    />
    <div className="container">{children()}</div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
