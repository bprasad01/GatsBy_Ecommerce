import React from "react"
import CategoryList from "../components/CategoryList"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import FeaturedItems from "./home/featuredItems"
import RecomendedItems from "../components/RecomendedItems"
export default function Home() {
  return (
    <Layout>
      <>
        <section>
          <div className="container">
            <div className="row">
              <CategoryList />

              <div className="col-sm-9 padding-right">
                <FeaturedItems />

                <div className="category-tab">
                  <div className="col-sm-12">
                    <ul className="nav nav-tabs">
                      <li className="active">
                        <Link to="#tshirt" data-toggle="tab">
                          T-Shirt
                        </Link>
                      </li>
                      <li>
                        <Link to="#blazers" data-toggle="tab">
                          Blazers
                        </Link>
                      </li>
                      <li>
                        <Link to="#sunglass" data-toggle="tab">
                          Sunglass
                        </Link>
                      </li>
                      <li>
                        <Link to="#kids" data-toggle="tab">
                          Kids
                        </Link>
                      </li>
                      <li>
                        <Link to="#poloshirt" data-toggle="tab">
                          Polo shirt
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="tab-content">
                    <div className="tab-pane fade active in" id="tshirt">
                      <div className="col-sm-3">
                        <div className="product-image-wrapper">
                          <div className="single-products">
                            <div className="productinfo text-center">
                              <img src="images/home/gallery1.jpg" alt="" />
                              <h2>$56</h2>
                              <p>Easy Polo Black Edition</p>
                              <Link
                                to="#"
                                className="btn btn-default add-to-cart"
                              >
                                <i className="fa fa-shopping-cart"></i>Add to
                                cart
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="product-image-wrapper">
                          <div className="single-products">
                            <div className="productinfo text-center">
                              <img src="images/home/gallery2.jpg" alt="" />
                              <h2>$56</h2>
                              <p>Easy Polo Black Edition</p>
                              <Link
                                to="#"
                                className="btn btn-default add-to-cart"
                              >
                                <i className="fa fa-shopping-cart"></i>Add to
                                cart
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="product-image-wrapper">
                          <div className="single-products">
                            <div className="productinfo text-center">
                              <img src="images/home/gallery3.jpg" alt="" />
                              <h2>$56</h2>
                              <p>Easy Polo Black Edition</p>
                              <Link
                                to="#"
                                className="btn btn-default add-to-cart"
                              >
                                <i className="fa fa-shopping-cart"></i>Add to
                                cart
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="product-image-wrapper">
                          <div className="single-products">
                            <div className="productinfo text-center">
                              <img src="images/home/gallery4.jpg" alt="" />
                              <h2>$56</h2>
                              <p>Easy Polo Black Edition</p>
                              <Link
                                to="#"
                                className="btn btn-default add-to-cart"
                              >
                                <i className="fa fa-shopping-cart"></i>Add to
                                cart
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="tab-pane fade" id="blazers">
                      <div className="col-sm-3">
                        <div className="product-image-wrapper">
                          <div className="single-products">
                            <div className="productinfo text-center">
                              <img src="images/home/gallery4.jpg" alt="" />
                              <h2>$56</h2>
                              <p>Easy Polo Black Edition</p>
                              <Link
                                to="#"
                                className="btn btn-default add-to-cart"
                              >
                                <i className="fa fa-shopping-cart"></i>Add to
                                cart
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="product-image-wrapper">
                          <div className="single-products">
                            <div className="productinfo text-center">
                              <img src="images/home/gallery3.jpg" alt="" />
                              <h2>$56</h2>
                              <p>Easy Polo Black Edition</p>
                              <Link
                                to="#"
                                className="btn btn-default add-to-cart"
                              >
                                <i className="fa fa-shopping-cart"></i>Add to
                                cart
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="product-image-wrapper">
                          <div className="single-products">
                            <div className="productinfo text-center">
                              <img src="images/home/gallery2.jpg" alt="" />
                              <h2>$56</h2>
                              <p>Easy Polo Black Edition</p>
                              <Link
                                to="#"
                                className="btn btn-default add-to-cart"
                              >
                                <i className="fa fa-shopping-cart"></i>Add to
                                cart
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="product-image-wrapper">
                          <div className="single-products">
                            <div className="productinfo text-center">
                              <img src="images/home/gallery1.jpg" alt="" />
                              <h2>$56</h2>
                              <p>Easy Polo Black Edition</p>
                              <Link
                                to="#"
                                className="btn btn-default add-to-cart"
                              >
                                <i className="fa fa-shopping-cart"></i>Add to
                                cart
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="tab-pane fade" id="sunglass">
                      <div className="col-sm-3">
                        <div className="product-image-wrapper">
                          <div className="single-products">
                            <div className="productinfo text-center">
                              <img src="images/home/gallery3.jpg" alt="" />
                              <h2>$56</h2>
                              <p>Easy Polo Black Edition</p>
                              <Link
                                to="#"
                                className="btn btn-default add-to-cart"
                              >
                                <i className="fa fa-shopping-cart"></i>Add to
                                cart
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="product-image-wrapper">
                          <div className="single-products">
                            <div className="productinfo text-center">
                              <img src="images/home/gallery4.jpg" alt="" />
                              <h2>$56</h2>
                              <p>Easy Polo Black Edition</p>
                              <Link
                                to="#"
                                className="btn btn-default add-to-cart"
                              >
                                <i className="fa fa-shopping-cart"></i>Add to
                                cart
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="product-image-wrapper">
                          <div className="single-products">
                            <div className="productinfo text-center">
                              <img src="images/home/gallery1.jpg" alt="" />
                              <h2>$56</h2>
                              <p>Easy Polo Black Edition</p>
                              <Link
                                to="#"
                                className="btn btn-default add-to-cart"
                              >
                                <i className="fa fa-shopping-cart"></i>Add to
                                cart
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="product-image-wrapper">
                          <div className="single-products">
                            <div className="productinfo text-center">
                              <img src="images/home/gallery2.jpg" alt="" />
                              <h2>$56</h2>
                              <p>Easy Polo Black Edition</p>
                              <Link
                                to="#"
                                className="btn btn-default add-to-cart"
                              >
                                <i className="fa fa-shopping-cart"></i>Add to
                                cart
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="tab-pane fade" id="kids">
                      <div className="col-sm-3">
                        <div className="product-image-wrapper">
                          <div className="single-products">
                            <div className="productinfo text-center">
                              <img src="images/home/gallery1.jpg" alt="" />
                              <h2>$56</h2>
                              <p>Easy Polo Black Edition</p>
                              <Link
                                to="#"
                                className="btn btn-default add-to-cart"
                              >
                                <i className="fa fa-shopping-cart"></i>Add to
                                cart
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="product-image-wrapper">
                          <div className="single-products">
                            <div className="productinfo text-center">
                              <img src="images/home/gallery2.jpg" alt="" />
                              <h2>$56</h2>
                              <p>Easy Polo Black Edition</p>
                              <Link
                                to="#"
                                className="btn btn-default add-to-cart"
                              >
                                <i className="fa fa-shopping-cart"></i>Add to
                                cart
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="product-image-wrapper">
                          <div className="single-products">
                            <div className="productinfo text-center">
                              <img src="images/home/gallery3.jpg" alt="" />
                              <h2>$56</h2>
                              <p>Easy Polo Black Edition</p>
                              <Link
                                to="#"
                                className="btn btn-default add-to-cart"
                              >
                                <i className="fa fa-shopping-cart"></i>Add to
                                cart
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="product-image-wrapper">
                          <div className="single-products">
                            <div className="productinfo text-center">
                              <img src="images/home/gallery4.jpg" alt="" />
                              <h2>$56</h2>
                              <p>Easy Polo Black Edition</p>
                              <Link
                                to="#"
                                className="btn btn-default add-to-cart"
                              >
                                <i className="fa fa-shopping-cart"></i>Add to
                                cart
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="tab-pane fade" id="poloshirt">
                      <div className="col-sm-3">
                        <div className="product-image-wrapper">
                          <div className="single-products">
                            <div className="productinfo text-center">
                              <img src="images/home/gallery2.jpg" alt="" />
                              <h2>$56</h2>
                              <p>Easy Polo Black Edition</p>
                              <Link
                                to="#"
                                className="btn btn-default add-to-cart"
                              >
                                <i className="fa fa-shopping-cart"></i>Add to
                                cart
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="product-image-wrapper">
                          <div className="single-products">
                            <div className="productinfo text-center">
                              <img src="images/home/gallery4.jpg" alt="" />
                              <h2>$56</h2>
                              <p>Easy Polo Black Edition</p>
                              <Link
                                to="#"
                                className="btn btn-default add-to-cart"
                              >
                                <i className="fa fa-shopping-cart"></i>Add to
                                cart
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="product-image-wrapper">
                          <div className="single-products">
                            <div className="productinfo text-center">
                              <img src="images/home/gallery3.jpg" alt="" />
                              <h2>$56</h2>
                              <p>Easy Polo Black Edition</p>
                              <Link
                                to="#"
                                className="btn btn-default add-to-cart"
                              >
                                <i className="fa fa-shopping-cart"></i>Add to
                                cart
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="product-image-wrapper">
                          <div className="single-products">
                            <div className="productinfo text-center">
                              <img src="images/home/gallery1.jpg" alt="" />
                              <h2>$56</h2>
                              <p>Easy Polo Black Edition</p>
                              <Link
                                to="#"
                                className="btn btn-default add-to-cart"
                              >
                                <i className="fa fa-shopping-cart"></i>Add to
                                cart
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <RecomendedItems />
              </div>
            </div>
          </div>
        </section>
      </>
    </Layout>
  )
}
