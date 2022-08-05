const path = require("path")
const slugify = require("slugify")

exports.onCreateWebpackConfig = ({ actions }) => {
  const { setWebpackConfig } = actions
  setWebpackConfig({
    externals: {
      jquery: 'jQuery', // important: 'Q' capitalized
    },
  })
}

exports.onCreateNode = ({node, actions}) => {
    const { createNodeField } = actions
    if(node.internal.type === 'wcProduct' ){
        const slugFromSlug = slugify(node.posts.slug)
        createNodeField({
            node,
            name : 'slug',
            value : slugFromSlug
        })
    }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
    
  const singlePostTemplate = path.resolve(`src/templates/single-post.js`)
  const postList = path.resolve(`src/templates/post-list.js`)

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

  const blogs = result.data.wpgraphql.posts.nodes

  blogs.forEach(blog => {
    createPage({
        path : blog.slug,
        component : singlePostTemplate,
        context : {
            // passing slug for template to use get post
            slug : blog.slug
        }
    })
  })

  const blogsPerPage = 2
  const numberOfPages = Math.ceil(blogs.length / blogsPerPage)

  Array.from({ length : numberOfPages }.forEach((_, index) => {
    const isFirstPage = index === 0
    const currentPage = index + 1

    if(isFirstPage) return

    createPage({
        path : `/page/${currentPage}`,
        component : postList,
        context : {
            limit : blogsPerPage,
            skip : index * blogsPerPage,
            currentPage
        }
    })
  }))
}
