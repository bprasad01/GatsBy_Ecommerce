import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import slugify from "slugify"
import defaultImg from "../../Assests/images/furniture.jpg"
import OwlCarousel from "react-owl-carousel"
import "owl.carousel/dist/assets/owl.carousel.css"
import "owl.carousel/dist/assets/owl.theme.default.css"
import { useCart } from "react-use-cart"

export const query = graphql`
  {
    allWcProducts(
      limit: 3
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
    }
  }
`

const RecomendedItems = () => {
  const data = useStaticQuery(query)
  const products = data.allWcProducts.nodes
  const { addItem } = useCart();
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
          <OwlCarousel
                    className="owl-theme"
                    loop={true}
                    margin={10}
                    dots={true}
                    items={1}
                    autoplay={true}
                    nav
                  >
            <div className="item">
              {products.map(product => {
                const { name, price, slug, id } = product
                const slugTitle = slugify(slug, { lower: true })
                let imageData = []
                product.images.map(data => {
                  return imageData = data.src
                })
                return (
                    <Link key={id} to={`/products/${slugTitle}`}>
                  <div className="col-sm-4">
                    <div className="product-image-wrapper">
                      <div className="single-products">
                        <div className="productinfo text-center">
                          <img src={imageData ? imageData : defaultImg} alt="" />
                          <h2>${price ? price : 56}</h2>
                          <p>{name}</p>
                          <a href="/#" onClick={() => addItem(product)} className="btn btn-default add-to-cart">
                            <i className="fa fa-shopping-cart"></i>Add to cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  </Link>
                )
              })}
            </div>
            </OwlCarousel>
          </div>
        </div>
      </div>
    </>
  )
}

export default RecomendedItems
