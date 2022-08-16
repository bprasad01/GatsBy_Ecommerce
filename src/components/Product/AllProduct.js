import React, { useState } from 'react'
import { graphql, useStaticQuery } from "gatsby"
import ProductList from './ProductList'
import Pagination from '../common/Pagination'

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

  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(6)

  const data = useStaticQuery(query)
  const product = data.allWcProducts.nodes

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = product.slice(indexOfFirstPost, indexOfLastPost)
  const paginate = pageNumber => {
    setCurrentPage(pageNumber)
  }
    return (
      <section>
        <ProductList products={currentPosts} />
        <Pagination
        postsPerPage={postsPerPage}
        totalPosts={product.length}
        paginate={paginate}
        currentPage={currentPage}
      />
      </section>
    )
}

export default AllProduct