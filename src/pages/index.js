import React from "react"
import Layout from "../components/Layout"
import FeaturedItems from "./home/featuredItems"
import RecomendedItems from "../components/common/RecomendedItems"
import BannerCarousel from "./home/bannerCarousel"
import SEO from "../components/common/seo"
import CategoryList from './../components/Category/CategoryList';
import CategoryNavList from './../components/Category/CategoryNavList';

export default function Home() {

  return (
      <>
    <Layout>
      <SEO title={"Home Page"}/>
      <BannerCarousel />
    
        <section>
          <div className="container">
            <div className="row">
              <CategoryList />

              <div className="col-sm-9 padding-right">
                <FeaturedItems />
                <CategoryNavList />
                <RecomendedItems />
              </div>
            </div>
          </div>
        </section>
    </Layout>
      </>
  )
}
