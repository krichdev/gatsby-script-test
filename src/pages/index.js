import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <h1>Target div for script below</h1>
      <div id='frameTitle' className='embedded-widget-title'>
        Book Now
      </div>
      <div className="vagaro"></div>
  </Layout>
)

export default IndexPage
