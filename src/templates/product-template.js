// import { graphql } from "gatsby";
// import React from "react"
// import Layout from '../components/Layout'
// import CategoryList from "../components/CategoryList";
// import BannerCarousel from "../pages/home/bannerCarousel";
// import CategoryNavList from "../components/CategoryNavList";
// import RecomendedItems from "../components/RecomendedItems";
// import CategoryProducts from "../components/CategoryProducts";
// import FeaturedItems from "../pages/home/featuredItems";

// const CategoryTemplate = ({ data, pageContext }) => {
// console.log(data);
// const products = data.allWcProducts.nodes
// console.log(products)
//   return (
//     <>
//     <Layout>
//         <BannerCarousel />
//         <section>
//           <div className="container">
//             <div className="row">
//               <CategoryList />
//               <div className="col-sm-9 padding-right">
//                 <FeaturedItems />
//                 <CategoryNavList />
//                 <CategoryProducts products={products}/>
//                 <RecomendedItems />
//               </div>
//             </div>
//           </div>
//         </section>      
//       </Layout>
//     </>
//   )
// }

// export const query = graphql`
//   query getProducts ($slug: String) {
//     allWcProducts(
//       filter: {categories: {elemMatch: {slug: {eq: $slug}}}}
//       sort: {fields: wordpress_parent___wordpress_parent___wordpress_parent___name, order: ASC}
//     ) {
//       nodes {
//         name
//         price
//         sku
//         slug
//         status
//         type
//         stock_status
//         sold_individually
//         featured
//         images {
//           name
//           src
//           alt
//         }
//         id
//         categories {
//           name
//           slug
//           id
//         }
//       }
//     }
//   }
// `

// export default CategoryTemplate

 