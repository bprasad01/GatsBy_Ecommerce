query MyQuery {
  wpgraphql {
    posts {
      nodes {
        author {
          node {
            name
          }
        }
        content
        id
        excerpt
        featuredImage {
          node {
            altText
            id
            title
            sourceUrl
          }
        }
        date
        title
      }
    }
  }
}
