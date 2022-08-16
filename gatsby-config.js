/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  flags : {
    DEV_SSR : false
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-source-graphql",
      options: {
        // Arbitrary name for the remote schema Query type
        typeName: "WPGraphQL",
        // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
        fieldName: "wpgraphql",
        // Url to query from
        url: "https://furniture.mangoitsol.com/graphql",
      },
    },
    {       
      resolve: '@pasdo501/gatsby-source-woocommerce',
      options: {
        // Base URL of Wordpress site
        api: 'furniture.mangoitsol.com/',
  
        // set to false to not see verbose output during build 
        // default: true
        verbose: true,
  
        // true if using https. otherwise false.
        https: true,
        api_keys: {
          consumer_key:"ck_09e070e7214fbbaac8d98e6d96478704d59457f7",
          consumer_secret: "cs_d271fb01e3893cb7513d762a4f1cb409d9bb1944"
        },
        // Array of strings with fields you'd like to create nodes for...
        fields: ['products', 'products/categories', 'products/attributes'],
      }
    },
    
    `gatsby-plugin-react-helmet`
  ],
}
