import { Link } from "gatsby"
import React, { useState } from "react"
import slugify from "slugify"
import defaultImg from "../../Assests/images/furniture.jpg"
import Pagination from "../common/Pagination"

const ProductList = ({ products = [] }) => {
  
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(6)

  const [cart, setCart] = useState([]);
  const handleCartItem = (product) => {
    if (cart.indexOf(product) !== -1) return;
    setCart([...cart, product]);
  };


  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = products.slice(indexOfFirstPost, indexOfLastPost)
  const paginate = pageNumber => {
    setCurrentPage(pageNumber)
  }

  return (
    <>
      {currentPosts.map(product => {
        const { name, price, image, slug, id } = product
        const slugTitle = slugify(slug, {lower : true})
        return (
          <Link key={id} to={`/product/${slugTitle}`}>
            <div className="col-sm-4">
              <div className="product-image-wrapper">
                <div className="single-products">
                  <div className="productinfo text-center">
                    <img src={image ? image : defaultImg} alt="Product" />
                    <h2>${price ? price : 56}</h2>
                    <p>{name}</p>
                    <Link to="#" className="btn btn-default add-to-cart">
                      <i className="fa fa-shopping-cart"></i>Add to cart
                    </Link>
                  </div>
                  <div className="product-overlay">
                    <div className="overlay-content">
                      <h2>${price ? price : 56}</h2>
                      <p>{name}</p>
                      <Link to="#" onClick={() => handleCartItem(product)} className="btn btn-default add-to-cart">
                        <i className="fa fa-shopping-cart"></i>Add to cart
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="choose">
                  <ul className="nav nav-pills nav-justified">
                    <li>
                      <Link to="">
                        <i className="fa fa-plus-square"></i>Add to wishlist
                      </Link>
                    </li>
                    <li>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Link>
        )
      })}
       <Pagination
                postsPerPage={postsPerPage}
                totalPosts={products.length}
                paginate={paginate}
                currentPage={currentPage}
              />
    </>
  )
}

export default ProductList
