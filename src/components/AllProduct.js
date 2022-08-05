import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import ProductList from './ProductList'
import CategoryList from './CategoryList'

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
    console.log(data)
    const product = data.allWcProducts.nodes
    console.log(product)
    return (
      <section>
        <ProductList products={product} />
      </section>
    )
}

export default AllProduct