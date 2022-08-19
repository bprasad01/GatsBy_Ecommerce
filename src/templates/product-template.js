import { graphql } from 'gatsby'
import React from 'react'
import Seo from '../components/common/Seo'
import Layout from '../components/Layout'
import Product from '../components/Product/Product'

const ProductTemplate = ({data, pageContext}) => {
    const product = data.wcProducts
  return (
    <>
        <Layout>
            <Seo title={pageContext.slug}/>
            <section>
                <Product product={product}/>
            </section>
        </Layout>
    </>
  )
}

export const query = graphql`
  query ($slug: String) {
    wcProducts(slug: {eq: $slug}) {
      name
      slug
      id
      price
      stock_status
      images {
        name
        src
        alt
      }
      categories {
        name
      }
    }
  }
`

export default ProductTemplate