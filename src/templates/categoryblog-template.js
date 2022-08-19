import { graphql } from 'gatsby'
import React from 'react'
import BlogPost from '../components/Blogs/BlogPost';
import Seo from '../components/common/Seo';
import Layout from '../components/Layout';

const CategoryBlogTemplate = ({data, pageContext}) => {
  const blogs = data.wpgraphql.categories.nodes;
  return (
    <>
      <Layout>
      <Seo title={pageContext.slug}/>
        <section>
          <BlogPost blogs={blogs} />
        </section>
      </Layout>
    </>
  )
}

export const query = graphql`
  query ($slug: [String]) {
    wpgraphql {
      categories(where: {slug: $slug}) {
        nodes {
          name
          slug
          posts {
            nodes {
              author {
                node {
                  lastName
                  firstName
                  name
                }
              }
              content
              excerpt
              id
              date
              slug
              title
              featuredImage {
                node {
                  sourceUrl
                  altText
                }
              }
            }
          }
        }
      }
    }
  }
`

export default CategoryBlogTemplate