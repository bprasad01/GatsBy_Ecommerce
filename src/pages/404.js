import { Link } from "gatsby"
import React from "react"
import logoImg from "../Assests/images/home/logo.png"
import errorImg from "../Assests/images/404/404.png"
import SEO from "../components/SEO"

const Error = () => {
  return (
    <>
        <SEO title={"Not-Found"}/>
      <div className="container text-center">
        <div className="logo-404">
          <Link to="/">
            <img src={logoImg} alt="" />
          </Link>
        </div>
        <div className="content-404">
          <img src={errorImg} className="img-responsive" alt="" />
          <h1>
            <b>OPPS!</b> We Couldn’t Find this Page
          </h1>
          <p>
            Uh... So it looks like you brock something. The page you are looking
            for has up and Vanished.
          </p>
          <h2>
            <Link to="/">Bring me back Home</Link>
          </h2>
        </div>
      </div>
    </>
  )
}

export default Error
