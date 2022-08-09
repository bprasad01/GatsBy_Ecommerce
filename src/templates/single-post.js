import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import moment from "moment"
import CategoryList from "../components/CategoryList"
import socialImg from '../Assests/images/blog/socials.png'
import mediaImg from '../Assests/images/blog/man-one.jpg'
import mediaImg1 from '../Assests/images/blog/man-two.jpg'
import mediaImg2 from '../Assests/images/blog/man-three.jpg'
import mediaImg3 from '../Assests/images/blog/man-four.jpg'
import SEO from "../components/SEO"


const SinglePost = ({ data, pageContext }) => {
  const blog = data.wpgraphql.postBy
  return (
    <>
      <Layout>
      <SEO title={pageContext.slug}/>
        <section>
        <div className="container">
        <div className="row">
              <CategoryList />
              <div className="col-sm-9">
                <div className="blog-post-area">
                  <h2 className="title text-center">Latest From our Blog</h2>
                  <div className="single-blog-post">
                    <h3>{blog.title}</h3>
                    <div className="post-meta">
                      <ul>
                        <li>
                          <i className="fa fa-user"></i>
                          {blog.author.node.name}
                        </li>
                        <li>
                          <i className="fa fa-clock-o"></i> 1:33 pm
                        </li>
                        <li>
                          <i className="fa fa-calendar"></i>
                          {moment(blog.date).format("MMM Do YY")}
                        </li>
                      </ul>
                      <span>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star-half-o"></i>
                      </span>
                    </div>
                    <Link to="">
                      <img src={blog.featuredImage.node.sourceUrl} alt="" />
                    </Link>
                    <p>{blog.content}</p>
                  </div>
                </div>
                <div className="rating-area">
                  <ul className="ratings">
                    <li className="rate-this">Rate this item:</li>
                    <li>
                      <i className="fa fa-star color"></i>
                      <i className="fa fa-star color"></i>
                      <i className="fa fa-star color"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </li>
                    <li className="color">(6 votes)</li>
                  </ul>
                  <ul className="tag">
                    <li>TAG:</li>
                    <li>
                      <Link className="color" to="">
                        Pink <span>/</span>
                      </Link>
                    </li>
                    <li>
                      <Link className="color" to="">
                        T-Shirt <span>/</span>
                      </Link>
                    </li>
                    <li>
                      <Link className="color" to="">
                        Girls
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="socials-share">
                  <Link to="">
                    <img src={socialImg} alt="" />
                  </Link>
                </div>
                <div className="media commnets">
                  <Link className="pull-left" to="#">
                    <img
                      className="media-object"
                      src={mediaImg}
                      alt="Media"
                    />
                  </Link>
                  <div className="media-body">
                    <h4 className="media-heading">Annie Davis</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <div className="blog-socials">
                      <ul>
                        <li>
                          <Link to="">
                            <i className="fa fa-facebook"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="">
                            <i className="fa fa-twitter"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="">
                            <i className="fa fa-dribbble"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="">
                            <i className="fa fa-google-plus"></i>
                          </Link>
                        </li>
                      </ul>
                      <Link className="btn btn-primary" to="">
                        Other Posts
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="response-area">
                  <h2>3 RESPONSES</h2>
                  <ul className="media-list">
                    <li className="media">
                      <Link className="pull-left" to="#">
                        <img
                          className="media-object"
                          src={mediaImg1}
                          alt="Media1"
                        />
                      </Link>
                      <div className="media-body">
                        <ul className="sinlge-post-meta">
                          <li>
                            <i className="fa fa-user"></i>Janis Gallagher
                          </li>
                          <li>
                            <i className="fa fa-clock-o"></i> 1:33 pm
                          </li>
                          <li>
                            <i className="fa fa-calendar"></i> DEC 5, 2013
                          </li>
                        </ul>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
                        </p>
                        <Link className="btn btn-primary" to="">
                          <i className="fa fa-reply"></i>Replay
                        </Link>
                      </div>
                    </li>
                    <li className="media second-media">
                      <Link className="pull-left" to="#">
                        <img
                          className="media-object"
                          src={mediaImg2}
                          alt="Media"
                        />
                      </Link>
                      <div className="media-body">
                        <ul className="sinlge-post-meta">
                          <li>
                            <i className="fa fa-user"></i>Janis Gallagher
                          </li>
                          <li>
                            <i className="fa fa-clock-o"></i> 1:33 pm
                          </li>
                          <li>
                            <i className="fa fa-calendar"></i> DEC 5, 2013
                          </li>
                        </ul>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
                        </p>
                        <Link className="btn btn-primary" to="">
                          <i className="fa fa-reply"></i>Replay
                        </Link>
                      </div>
                    </li>
                    <li className="media">
                      <Link className="pull-left" to="#">
                        <img
                          className="media-object"
                          src={mediaImg3}
                          alt="Media3"
                        />
                      </Link>
                      <div className="media-body">
                        <ul className="sinlge-post-meta">
                          <li>
                            <i className="fa fa-user"></i>Janis Gallagher
                          </li>
                          <li>
                            <i className="fa fa-clock-o"></i> 1:33 pm
                          </li>
                          <li>
                            <i className="fa fa-calendar"></i> DEC 5, 2013
                          </li>
                        </ul>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
                        </p>
                        <Link className="btn btn-primary" to="">
                          <i className="fa fa-reply"></i>Replay
                        </Link>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="replay-box">
                  <div className="row">
                    <div className="col-sm-4">
                      <h2>Leave a replay</h2>
                      <form>
                        <div className="blank-arrow">
                          <label>Your Name</label>
                        </div>
                        <span>*</span>
                        <input type="text" placeholder="write your name..." />
                        <div className="blank-arrow">
                          <label>Email Address</label>
                        </div>
                        <span>*</span>
                        <input
                          type="email"
                          placeholder="your email address..."
                        />
                        <div className="blank-arrow">
                          <label>Web Site</label>
                        </div>
                        <input type="email" placeholder="current city..." />
                      </form>
                    </div>
                    <div className="col-sm-8">
                      <div className="text-area">
                        <div className="blank-arrow">
                          <label>Your Name</label>
                        </div>
                        <span>*</span>
                        <textarea name="message" rows="11"></textarea>
                        <Link className="btn btn-primary" to="">
                          post comment
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

export const query = graphql`
  query blogPostBySlug($slug: String) {
    wpgraphql {
      postBy(slug: $slug) {
        author {
          node {
            name
            firstName
            lastName
          }
        }
        title
        date
        content
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
      }
    }
  }
`

export default SinglePost
