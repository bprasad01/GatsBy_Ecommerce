import { Link } from "gatsby"
import React from "react"
import slugify from "slugify"
import defaultImg from "../Assests/images/furniture.jpg"

const ProductList = ({ products = [] }) => {
  return (
    <>
      {products.map(product => {
        const { name, price, image, slug, id } = product
        const slugTitle = slugify(slug, {lower : true})
        return (
          <Link key={id} to={`/shop/${slugTitle}`}>
            <div className="col-sm-4">
              <div className="product-image-wrapper">
                <div className="single-products">
                  <div className="productinfo text-center">
                    <img src={image ? image : defaultImg} alt="Product" />
                    <h2>${price ? price : 56}</h2>
                    <p>{name}</p>
                    <a href="#" className="btn btn-default add-to-cart">
                      <i className="fa fa-shopping-cart"></i>Add to cart
                    </a>
                  </div>
                  <div className="product-overlay">
                    <div className="overlay-content">
                      <h2>${price ? price : 56}</h2>
                      <p>{name}</p>
                      <a href="#" className="btn btn-default add-to-cart">
                        <i className="fa fa-shopping-cart"></i>Add to cart
                      </a>
                    </div>
                  </div>
                </div>
                <div className="choose">
                  <ul className="nav nav-pills nav-justified">
                    <li>
                      <a href="">
                        <i className="fa fa-plus-square"></i>Add to wishlist
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i className="fa fa-plus-square"></i>Add to compare
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Link>
        )
      })}
    </>
  )
}

export default ProductList