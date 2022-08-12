import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Layout from "../../components/Layout"
import SEO from "../../components/common/SEO"
import Posts from './../../components/Blogs/Posts';

const query = graphql`
  query {
    wpgraphql {
      posts {
        nodes {
          author {
            node {
              name
            }
          }
          content
          id
          excerpt
          featuredImage {
            node {
              altText
              id
              title
              sourceUrl
            }
          }
          date
          title
          slug
        }
      }
    }
  }
`

const Blogs = () => {
  const data = useStaticQuery(query)
  const blogs = data.wpgraphql.posts.nodes
  return (
    <>
      <Layout>
        <SEO title={"Blog Page"}/>
        <section>
          <Posts blogs={blogs} />
        </section>
      </Layout>
    </>
  )
}

export default Blogs
