import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import Layout from '../../components/Layout'
import Posts from '../../components/Posts'

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
        <section>
            <Posts blogs={blogs}/>    
        </section>
    </Layout>
    </>
  )
}



export default Blogs