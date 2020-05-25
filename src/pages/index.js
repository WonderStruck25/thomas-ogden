import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Thomas' Personal Gatsby Blog"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <img style={{ margin: 0 }} src="./GatsbyScene.svg" alt="Gatsby Scene" />
        <h1>
          Welcome to my Website
        </h1>
        <p>Hi! My name is Thomas Ogden. This is the place where I put my videos, written posts, products, drawings, and other online content.</p>
        <p>
          I am just a nerdy guy on the internet sharing what I do with others interested in it.
        </p>
        <p>You'll be able to find a variety of different projects I have been working on listed here in some capacity. Those things include:</p>
        <ul>
          <li>Blacksmithing</li>
          <li>Dungeons and Dragons</li>
          <li>Engineering</li>
          <li>Gardening</li>
          <li>Outdoors Adventuring</li>
          <li>Web Development</li>
          <li>Writing</li>
          <li>And More to Come!</li>
        </ul>
        <p>
          And I'll be adding more stuff to this as I grow, both as a person and as whatever you would call any of the above/whatever I'm doing down the line.
        </p>
        <p>
          More updates to come, so stay tuned and enjoy!
        </p>
        <Link to="/blog/">
          <Button marginTop="35px">Go to Blog</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
