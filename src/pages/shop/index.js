// import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Layout from "../../components/Layout"
import discountImg from '../../Assests/images/shop/advertisement.jpg'
import SEO from "../../components/common/seo";
import AllProduct from './../../components/Product/AllProduct';
import CategoryList from './../../components/Category/CategoryList';
const Shop = () => {
  return (
    <Layout>
      <SEO title={"Shop Page"}/>
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
                <AllProduct />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Shop
