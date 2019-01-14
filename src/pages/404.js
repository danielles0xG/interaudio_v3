import React from 'react'

import HomeLayout from '../layouts/Home/HomeLayout'
import SEO from '../components/seo'

const NotFoundPage = () => (
  <HomeLayout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </HomeLayout>
)

export default NotFoundPage