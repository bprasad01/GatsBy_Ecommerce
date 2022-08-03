import { Link } from "gatsby"
import React from "react"
import logo from '../../Assests/images/home/logo.png'
const MidddleHeader = () => {
  return (
    <>
      <div className="header-middle">
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <div className="logo pull-left">
                <Link to="/">
                  <img src={logo} alt="Logo" />
                </Link>
              </div>
              <div className="btn-group pull-right">
                <div className="btn-group">
                  <button
                    type="button"
                    className="btn btn-default dropdown-toggle usa"
                    data-toggle="dropdown"
                  >
                    USA
                    <span className="caret"></span>
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <Link to="/">Canada</Link>
                    </li>
                    <li>
                      <Link to="/">UK</Link>
                    </li>
                  </ul>
                </div>

                <div className="btn-group">
                  <button
                    type="button"
                    className="btn btn-default dropdown-toggle usa"
                    data-toggle="dropdown"
                  >
                    DOLLAR
                    <span className="caret"></span>
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <Link to="/">Canadian Dollar</Link>
                    </li>
                    <li>
                      <Link to="/">Pound</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-8">
              <div className="shop-menu pull-right">
                <ul className="nav navbar-nav">
                  <li>
                    <Link to="/">
                      <i className="fa fa-user"></i> Account
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i className="fa fa-star"></i> Wishlist
                    </Link>
                  </li>
                  <li>
                    <Link to="/heckout.html">
                      <i className="fa fa-crosshairs"></i> Checkout
                    </Link>
                  </li>
                  <li>
                    <Link to="/art.html">
                      <i className="fa fa-shopping-cart"></i> Cart
                    </Link>
                  </li>
                  <li>
                    <Link to="/ogin.html">
                      <i className="fa fa-lock"></i> Login
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MidddleHeader
