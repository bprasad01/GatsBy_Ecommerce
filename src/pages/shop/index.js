// import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import AllProduct from "../../components/AllProduct";
import CategoryList from "../../components/CategoryList"
import Layout from "../../components/Layout"
import discountImg from '../../Assests/images/shop/advertisement.jpg'
const Shop = () => {
  return (
    <Layout>
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
