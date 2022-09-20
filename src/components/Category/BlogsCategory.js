import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import defaultDiscountImg from "../../Assests/images/home/shipping.jpg"
import slugify from "slugify"
import setupBlogsCategory from "../../utils/setupBlogsCategory"

const query = graphql`
  {
    wpgraphql {
      posts {
        nodes {
          title
          slug
          categories {
            nodes {
              id
              slug
              name
            }
          }
        }
      }
    }
  }
`
const BlogsCategory = () => {
  const data = useStaticQuery(query)
  const category = data.wpgraphql.posts.nodes
  const newCategory = setupBlogsCategory(category)
  return (
    <>
      <div className="col-sm-3">
        <div className="left-sidebar">
          <h2>Blog Category</h2>
          <div className="panel-group category-products" id="accordian">
            {newCategory.map(category => {
              const [text, value] = category
              const slug = slugify(text, { lower: true })
              return (
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title">
                      <Link
                        to={`/blogcategory/${slug}`}>
                        {text} ({value})
                      </Link>
                    </h4>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="shipping text-center">
            <img src={defaultDiscountImg} alt="DefaultImg" />
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogsCategory
