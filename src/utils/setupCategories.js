const setupCategories = categories => {
    // console.log(categories);
    const allCategory = {}
  
    categories.forEach(category => {
        // console.log(category)
        // console.log(category.categories)
        let newCategory = category.categories
        if(newCategory !== null){
            newCategory.forEach(element => {
                console.log(element.name)
                if (allCategory[element.name]) {
                    allCategory[element.name] = allCategory[element.name] + 1
                  } else {
                    allCategory[element.name] = 1
                  }

            });
        }
        // console.log(category.categories.name)
        
           
         
        })
      
        const newTags = Object.entries(allCategory).sort((key, value) => {
          const [firstTag] = key
          const [secondTag] = value
          return firstTag.localeCompare(secondTag)
        })
      
        return newTags
}

export default setupCategories

// const setupTags = recipes => {
//     console.log(recipes)
//     const allTags = {}
  
//     recipes.forEach(recipe => {
//       recipe.content.tags.forEach(tag => {
//         if (allTags[tag]) {
//           allTags[tag] = allTags[tag] + 1
//         } else {
//           allTags[tag] = 1
//         }
//       })
//     })
  
//     const newTags = Object.entries(allTags).sort((key, value) => {
//       const [firstTag] = key
//       const [secondTag] = value
//       return firstTag.localeCompare(secondTag)
//     })
  
//     return newTags
//   }
  
//   export default setupTags