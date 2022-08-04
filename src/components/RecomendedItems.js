import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import slugify from "slugify"
import defaultImg from "../Assests/images/furniture.jpg"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"

export const query = graphql`
  {
    allWcProducts(
      filter: { featured: { eq: true } }
      limit: 6
      sort: {
        order: ASC
        fields: wordpress_parent___wordpress_parent___wordpress_parent___featured
      }
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
        images {
          name
          src
          alt
        }
        id
        featured
      }
      totalCount
    }
  }
`

const RecomendedItems = () => {
  const data = useStaticQuery(query)
  console.log(data)
  const products = data.allWcProducts.nodes
  console.log(products)

  return (
    <>
      <div className="recommended_items">
        <h2 className="title text-center">recommended items</h2>
        <div
          id="recommended-item-carousel"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="item active">
              {products.map(product => {
                const { name, price, image, slug, id } = product
                const slugTitle = slugify(slug, { lower: true })
                return (
                    <Link key={id} to={`/shop/${slugTitle}`}>
                  <div className="col-sm-4">
                    <div className="product-image-wrapper">
                      <div className="single-products">
                        <div className="productinfo text-center">
                          <img src={image ? image : defaultImg} alt="" />
                          <h2>${price ? price : 56}</h2>
                          <p>{name}</p>
                          <Link to="#" className="btn btn-default add-to-cart">
                            <i className="fa fa-shopping-cart"></i>Add to cart
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default RecomendedItems
