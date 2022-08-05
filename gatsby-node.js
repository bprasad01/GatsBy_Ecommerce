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

}
