// const path = require("path")
// // const slugify = require("slugify")
// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions

//   const result = await graphql(`
//   query GetCategory {
//     allWcProducts {
//       nodes {
//         categories {
//           name
//         }
//       }
//     }
//   }
//   `)

//   result.data.allWcProducts.nodes.forEach(product => {
//     product.categories.forEach(category => {
//         createPage({
//             path : `/${category}`,
//             component : path.resolve(`src/templates/category-template.js`),
//             context : {
//                 category : category
//             }
//         })

//     })
//   })

// }
