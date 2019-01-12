import React from 'react'
import { Link } from 'gatsby'

import HomeLayout from '../layouts/Home/HomeLayout'
import SEO from '../components/seo'

const SecondPage = () => (
  <HomeLayout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </HomeLayout>
)

export default SecondPage
