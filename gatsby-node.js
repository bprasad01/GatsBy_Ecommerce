const path = require("path")
const slugify = require("slugify")
const _ = require("lodash")

exports.onCreateWebpackConfig = ({ actions }) => {
  const { setWebpackConfig } = actions
  setWebpackConfig({
    externals: {
      jquery: "jQuery", // important: 'Q' capitalized
    },
  })
}

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === "wcProduct") {
    const slugFromSlug = slugify(node.posts.slug)
    createNodeField({
      node,
      name: "slug",
      value: slugFromSlug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const singlePostTemplate = path.resolve(`src/templates/single-post.js`)
  const categoryTemplate = path.resolve(`src/templates/category-template.js`)

  const result = await graphql(`
    query GetSingleBlogPost {
      wpgraphql {
        posts {
          nodes {
            title
            slug
          }
        }
      }
    }
  `)

  const resCategory = await graphql(`
    query {
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
            slug
            id
          }
        }
      },

    }
  `)

  const blogs = result.data.wpgraphql.posts.nodes
  const category = resCategory.data.allWcProducts.nodes

  blogs.forEach(blog => {
    createPage({
      path: blog.slug,
      component: singlePostTemplate,
      context: {
        // passing slug for template to use get post
        slug: blog.slug,
      },
    })
  })
  // Get all categories
  let categories = []
  _.each(category, node => {
    if (_.get(node, "categories")) {
      categories = categories.concat(node.categories)
    }
  })

  let categoryCounts = {}
  categories.forEach(item => {
    categoryCounts[item.name] = (categoryCounts[item.name] || 0) + 1
  })

  // Remove duplicates
  categories = _.uniq(categories)
  createPage({
    path: "/categories",
    component: categoryTemplate,
    context: {
      categories,
      categoryCounts,
    },
  })

  const product = resCategory.data.allWcProducts.nodes

  product.forEach(cat => {
    if(cat.categories !== null){
      cat.categories.forEach(catItem => {
       const { slug } = catItem
       const categorySlug = slugify(slug, { lower: true })
       createPage({
              path: `/category/${categorySlug}`,
              component: categoryTemplate,
              context: {
                slug: slug,
              },
            })
      })
    }
  })

}
