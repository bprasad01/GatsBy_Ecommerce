import React from "react"
import CategoryList from "../components/CategoryList"

const CategoryTemplate = ({ pageContext }) => {
  const { categories } = pageContext
  const newCat = [
    ...new Set(
      categories.reduce((acc, currentVal) => {
        return [...acc, currentVal.name]
      }, [])
    ),
  ]
console.log(newCat);
  return (
    <div>
      <h2>Category Template Page</h2>
      <CategoryList categories={newCat} />
    </div>
  )
}

export default CategoryTemplate
