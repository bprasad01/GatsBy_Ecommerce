import { graphql } from 'gatsby';
import React from 'react'
import BlogPost from '../components/Blogs/BlogPost';
import Seo from '../components/common/Seo';
import Layout from '../components/Layout';

const TagTemplate = ({data, pageContext}) => {
    // console.log(pageContext);
    // console.log(data);
    const blogs = data.wpgraphql.tags.nodes;
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
      tags(where: {slug: $slug}) {
        nodes {
          name
          slug
          posts {
            nodes {
              author {
                node {
                  name
                  firstName
                  lastName
                }
              }
              date
              excerpt
              id
              slug
              title
              featuredImage {
                node {
                  altText
                  sourceUrl
                }
              }
            }
          }
        }
      }
    }
  }
`

export default TagTemplate