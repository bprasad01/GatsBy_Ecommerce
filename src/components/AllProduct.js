import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import ProductList from './ProductList'

const query = graphql`{
    allWcProducts {
      nodes {
        name
        price
        sku
        slug
        status
        type
        stock_status
        sold_individually
        featured
        images {
          name
          src
          alt
        }
        id
        categories {
          name
        }
      }
      totalCount
    }
  }
`
const AllProduct = () => {
    const data = useStaticQuery(query)
    const product = data.allWcProducts.nodes
    return (
      <section>
        <ProductList products={product} />
      </section>
    )
}

export default AllProduct