import { Link } from "gatsby"
import React from "react"
import slugify from "slugify"
import defaultImg from "../../Assests/images/furniture.jpg"
import { useCart } from "react-use-cart"

const ProductList = ({ products = [] }) => {

  const { addItem } = useCart();

  // const [cart, setCart] = useState([])
  // const handleCartItem = product => {
  //   if (cart.indexOf(product) !== -1) return
  //   setCart([...cart, product])
  // }

  return (
    <>
      {products.map(product => {
        console.log(product)
        const { name, price, image, slug, id } = product
        const slugTitle = slugify(slug, { lower: true })
        return (
          <Link key={id} to={`/products/${slugTitle}`}>
            <div className="col-sm-4">
              <div className="product-image-wrapper">
                <div className="single-products">
                  <div className="productinfo text-center">
                    <img src={image ? image : defaultImg} alt="Product" />
                    <h2>${price ? price : 56}</h2>
                    <p>{name}</p>
                    <button
                        onClick={() => addItem(product)}
                        className="btn btn-default add-to-cart"
                      >
                        <i className="fa fa-shopping-cart"></i>Add to cart
                      </button>
                  </div>
                  <div className="product-overlay">
                    <div className="overlay-content">
                      <h2>${price ? price : 56}</h2>
                      <p>{name}</p>
                      <button
                        onClick={() => addItem(product)}
                        className="btn btn-default add-to-cart"
                      >
                        <i className="fa fa-shopping-cart"></i>Add to cart
                      </button>
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
                    <li></li>
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
