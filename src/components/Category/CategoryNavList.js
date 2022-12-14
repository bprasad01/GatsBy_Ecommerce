import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import defaultImg from "../../Assests/images/furniture.jpg"

const query = graphql`
  {
    allWcProducts(limit: 5) {
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
          id
          slug
        }
      }
      totalCount
    }
  }
`
const CategoryNavList = () => {
  const data = useStaticQuery(query)
  const category = data.allWcProducts.nodes

  let products = []
  let slugs = []

  const setSlug = () => {
    category.filter(item => {
      return slugs.push(item)
    })
  }

  setSlug()
  const showProducts = slug => {
    products = []
    slugs.map(item => {
      if (item.categories !== null) {
        item.categories.find(
          data => {
            if(data.slug === slug){
              console.log(item)
              products.push(item)
            }
            return data
          }
          )
      }
      return item
    })
  }

  showProducts("dresses")
  const productArr = []
  const getCategory = () => {
    category.map(item => {
      if (item.categories !== null) {
         item.categories.map(data => {
          return productArr.push(data)
        })
      }
      return item
    })
  }
  getCategory()

  const newCat = [
    ...new Set(
      productArr.reduce((acc, currentVal) => {
        return [...acc, currentVal.slug]
      }, [])
    ),
  ]
  return (
    <>
      <div className="category-tab">
        <div className="col-sm-12">
          <ul className="nav nav-tabs">
            {newCat.map(item => {
              return (
                <li>
                  <button
                    className="category-btn"
                    onClick={() => showProducts(item)}
                  >
                    {item}
                  </button>
                </li>
              )
            })}
          </ul>
        </div>

        <div className="tab-content">
          <div className="tab-pane fade active in">
            {
              products.map(product => {
                console.log(product)
                return (
                  <div className="col-sm-3">
                    <div className="product-image-wrapper">
                      <div className="single-products">
                        <div className="productinfo text-center">
                          <img
                            src={product.image ? product.image : defaultImg}
                            alt="defaultImg"
                          />
                          <h2>${product.price ? product.price : 56}</h2>
                          <p>{product.name}</p>
                          <Link to="#" className="btn btn-default add-to-cart">
                            <i className="fa fa-shopping-cart"></i>Add to cart
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
          </div>
        </div>
      </div>
    </>
  )
}

export default CategoryNavList
