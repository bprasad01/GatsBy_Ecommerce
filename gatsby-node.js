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
  const categoryBlogTemplate = path.resolve(`src/templates/categoryblog-template.js`)
  const tagsBlogTemplate = path.resolve(`src/templates/tagblogs-template.js`)
  const productTemplate = path.resolve(`src/templates/product-template.js`)

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
      },
  `)

  const resBlog = await graphql(`
  query GetBlogByCategory{
    wpgraphql {
      categories {
        nodes {
          name
          slug
        }
      }
    }
  }
  `)

  const resTags = await graphql(`
    query GetBlogByTags {
    wpgraphql {
      tags {
        nodes {
          slug
          name
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
  const blogsCategory = resBlog.data.wpgraphql.categories.nodes
  const category = resCategory.data.allWcProducts.nodes
  const tags = resTags.data.wpgraphql.tags.nodes

  blogs.forEach(blog => {
    createPage({
      path: `/blog/${blog.slug}`,
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

  blogsCategory.forEach(blogCategory => {
    createPage({
      path: `/blogcategory/${blogCategory.slug}`,
      component: categoryBlogTemplate,
      context: {
        // passing slug for template to use get post
        slug: blogCategory.slug,
      },
    })
  })

  tags.forEach(tag => {
    createPage({
      path: `/tags/${tag.slug}`,
      component: tagsBlogTemplate,
      context: {
        // passing slug for template to use get post
        slug: tag.slug,
      },
    })
  })

  product.forEach(item => {
    console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$")
    console.log(item.slug)
    console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$")
    createPage({
      path: `/products/${item.slug}`,
      component: productTemplate,
      context: {
        // passing slug for template to use get post
        slug: item.slug,
      },
    })
  })

}
