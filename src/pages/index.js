import React from "react"
import CategoryList from "../components/CategoryList"
import Layout from "../components/Layout"
import FeaturedItems from "./home/featuredItems"
import RecomendedItems from "../components/RecomendedItems"
import BannerCarousel from "./home/bannerCarousel"
import CategoryNavList from '../components/CategoryNavList'
import SEO from "../components/SEO"

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
