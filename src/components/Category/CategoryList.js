import { graphql, Link, useStaticQuery } from 'gatsby'
import React from 'react'
import slugify from 'slugify';
import defaultDiscountImg from '../../Assests/images/home/shipping.jpg'
import setupCategories from '../../utils/setupCategories';

const query = graphql`{
    allWcProducts {
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
        }
      }
      totalCount
    }
  }
`
const CategoryList = () => {
    const data = useStaticQuery(query)
    const categories = data.allWcProducts.nodes
    const newCategory = setupCategories(categories)
  return (
    <><div className="col-sm-3">
    <div className="left-sidebar">
        <h2>Category</h2>
        <div className="panel-group category-products" id="accordian">
            {newCategory.map(category => {
                const [text, value] = category
                const slug = slugify(text, { lower: true })
                return(
                 <div className="panel panel-default">
                 <div className="panel-heading">
                     <h4 className="panel-title"><Link to={`/category/${slug}`}>{ text } ({value})</Link></h4>
                 </div>
             </div>)
            })}  
        </div>
        
        <div className="shipping text-center">
            <img src={defaultDiscountImg} alt="DefaultImg"/>
        </div>
        
    </div>
</div></>
  )
}

export default CategoryList

