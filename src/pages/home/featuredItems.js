import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import slugify from "slugify"
import defaultImg from "../../Assests/images/furniture.jpg"
import { useCart } from "react-use-cart"

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
const FeaturedItems = () => {
  const data = useStaticQuery(query)
  const products = data.allWcProducts.nodes
  const { addItem } = useCart()
  return (
    <>
      <div className="features_items">
        <h2 className="title text-center">Features Items</h2>
        {products.map(product => {
          const { name, price, image, slug } = product
          const slugTitle = slugify(slug, { lower: true })
          return (
            <div className="col-sm-4">
              <div className="product-image-wrapper">
                <Link to={`/products/${slugTitle}`}>
                <div className="single-products">
                  <div className="productinfo text-center">
                    <img src={image ? image : defaultImg} alt="" />
                    <h2>${price ? price : 56}</h2>
                    <p>{name}</p>
                    <a href="/#" onClick={() => addItem(product)} className="btn btn-default add-to-cart">
                      <i className="fa fa-shopping-cart"></i>Add to cart
                    </a>
                  </div>
                  <div className="product-overlay">
                    <div className="overlay-content">
                      <h2>${price ? price : 56}</h2>
                      <p>{name}</p>
                      <a href="/#" onClick={() => addItem(product)} className="btn btn-default add-to-cart">
                        <i className="fa fa-shopping-cart"></i>Add to cart
                      </a>
                    </div>
                  </div>
                </div>
                </Link>
                <div className="choose">
                  <ul className="nav nav-pills nav-justified">
                    <li>
                      <Link to="#">
                        <i className="fa fa-plus-square"></i>Add to wishlist
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default FeaturedItems
