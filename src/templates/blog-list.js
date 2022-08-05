import React from "react"
import Layout from "../components/Layout"
import Posts from "../components/Posts"

const BlogList = props => {
  const blogs = props.data.wpgraphql.posts.nodes
  const { currentPage } = props.pageContext
  return (
    <>
      <Layout>
        <Posts blogs={blogs} />
      </Layout>
    </>
  )
}

export const query = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    wpgraphql(limit: $limit, skip: $skip) {
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

export default BlogList
