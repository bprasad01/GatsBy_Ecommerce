import React from "react"
import { Link } from "gatsby"

import moment from "moment"
import slugify from "slugify"
import CategoryList from "../Category/CategoryList"

const Posts = ({ blogs = [] }) => {
  return (
    <>
      <div className="container">
        <div className="row">
          <CategoryList />
          <div className="col-sm-9">
            <div className="blog-post-area">
              <h2 className="title text-center">Latest From our Blog</h2>
              {blogs.map(blog => {
                const {
                  author,
                  id,
                  featuredImage,
                  date,
                  title,
                  excerpt,
                  slug
                } = blog
                const { name } = author.node
                const { altText, sourceUrl } = featuredImage.node
                const slugTitle = slugify(slug, {lower : true})
                return (
                  <div className="single-blog-post">
                    <h3>{title}</h3>
                    <div className="post-meta">
                      <ul>
                        <li>
                          <i className="fa fa-user"></i> {name}
                        </li>
                        <li>
                          <i className="fa fa-clock-o"></i> 1:33 pm
                        </li>
                        <li>
                          <i className="fa fa-calendar"></i> {moment(date).format("MMM Do YY")}
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
                      <img src={sourceUrl} alt={altText} />
                    </Link>
                    <p>
                      {excerpt}
                    </p>
                    
                    <Link key={id} className="btn btn-primary" to={`/blog/${slugTitle}`}>
                      Read More
                    </Link>
                  </div>
                )
              })}

              <div className="pagination-area">
                <ul className="pagination">
                  <li>
                    <Link to="" className="active">
                      1
                    </Link>
                  </li>
                  <li>
                    <Link to="">2</Link>
                  </li>
                  <li>
                    <Link to="">3</Link>
                  </li>
                  <li>
                    <Link to="">
                      <i className="fa fa-angle-double-right"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Posts
