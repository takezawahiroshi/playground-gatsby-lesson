import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

export default () => (
  <Layout>
    Hello people
    <div>
      <Link to="/blog/">blog page</Link>
    </div>
    <a href="https://www.gatsbyjs.org">gatsby docs</a>
  </Layout>
)
