import { graphql } from "gatsby";
import React from "react"
import Layout from '../components/Layout'
import discountImg from '../Assests/images/shop/advertisement.jpg'
import Seo from "../components/common/Seo";
import ProductList from './../components/Product/ProductList';
import CategoryList from './../components/Category/CategoryList';

const CategoryTemplate = ({ data, pageContext }) => {
const products = data.allWcProducts.nodes
  return (
    <>
    <Layout>
      <Seo title={pageContext.slug}/>
    <section id="advertisement">
        <div className="container">
          <img src={discountImg} alt="BannerImg" />
        </div>
      </section>
      <section>
        <div class="container">
          <div class="row">
            <CategoryList />
            <div className="col-sm-9 padding-right">
              <div className="features_items">
                <h2 className="title text-center">Features Items</h2>
                <ProductList products={products}/>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      </Layout>
    </>
  )
}

export const query = graphql`
  query getProductByCategory ($slug: String) {
    allWcProducts(
      filter: {categories: {elemMatch: {slug: {eq: $slug}}}}
      sort: {fields: wordpress_parent___wordpress_parent___wordpress_parent___name, order: ASC}
    ) {
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
          slug
          id
        }
      }
    }
  }
`

export default CategoryTemplate

 