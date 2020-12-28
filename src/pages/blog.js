import React from "react"
import Layout from "../layout"
import { graphql, useStaticQuery } from "gatsby"

export default () => {
  const {allMarkdownRemark: {edges: posts}} = useStaticQuery(
    graphql`
  {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
    ) {
      edges {
        node {
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "YYYY-MM-DD")
            slug
            title
          }
        }
      }
    }
  }
`
  )

  console.log(posts)

  return (
    <Layout>
      <h1>Blog</h1>
      {posts.map(({node: p}) => (
          <a href={`/blog/${p.frontmatter.slug}`}>
            <p>{`${p.frontmatter.title} - ${p.frontmatter.date}`}</p>
            <p><em>{p.excerpt}</em></p>
          </a>
        ))}
    </Layout>
  )
}