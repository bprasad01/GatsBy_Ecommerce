import React from 'react'
import '../Assests/css/main.css'
import '../Assests/css/animate.css'
import '../Assests/css/prettyPhoto.css'
import '../Assests/css/price-range.css'
import '../Assests/css/responsive.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import Footer from './common/Footer';
import Header from './common/Header';

const Layout = ({children}) => {
  return (
    <>
        <Header />
        {children}
        <Footer />
    </>
  )
}

export default Layout