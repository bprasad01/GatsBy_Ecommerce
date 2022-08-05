import { Link, useStaticQuery } from 'gatsby'
import React from 'react'
import defaultDiscountImg from '../Assests/images/home/shipping.jpg'
import setupCategories from '../utils/setupCategories';


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
    console.log(data)
    const categories = data.allWcProducts.nodes
    console.log(categories)
    const newCategory = setupCategories(categories)
    console.log(newCategory)
  return (
    <><div className="col-sm-3">
    <div className="left-sidebar">
        <h2>Category</h2>
        <div className="panel-group category-products" id="accordian">
            {newCategory.map(category => {
                console.log(category)
                return(
                 <div className="panel panel-default">
                 <div className="panel-heading">
                     <h4 className="panel-title"><Link to="/#">{category}</Link></h4>
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