import React, { Component } from "react"
import { setLogin } from "../../services/authService"
import { navigate } from "gatsby"
// import Cookies from "js-cookie"
import Cookies from "universal-cookie"
  const COOKIE_PATH = "/"
  const COOKIE_DOMAIN = "localhost"
  const COOKIE_NAME = "myAuthToken"
  const cookies = new Cookies()

class Login extends Component {
  state = {
    userData: {
      username: "",
      password: "",
      token: "",
      login: "false",
    },
  }
  
  handleChange = ({ currentTarget: input }) => {
    const userData = { ...this.state.userData }
    userData[input.name] = input.value
    this.setState({ userData })
  }

  doSubmit = async props => {
    // console.log(props)
    const response = await setLogin(this.state.userData)
    this.setState({
      userData: {
        username: "",
        password: "",
      },
    })
    const userToken = response.data
    const token = userToken.token;
    console.log(userToken)
    localStorage.setItem(
      "token",
      JSON.stringify({
        token: token
      })
    )
    cookies.set(COOKIE_NAME, token, {path: COOKIE_PATH,domain: COOKIE_DOMAIN})
    
    // document.cookie = `token=${userToken.token};max-age=604800;`
    // var domainName = window.location.hostname;
    // let newDomainName = "example.com"
    // document.cookie =  `token=${userToken.token};max-age=604800; path=/; domain=. + ${domainName}; secure;`
    // console.log(domainName)
    // Cookies.set("cookieToken", userToken.token, {
    //   domain: "localhost",
    //   sameSite: "Lax",
    // })
    // const tkn = Cookies.get("cookieToken")
    // console.log(tkn)
    this.setState({ login: true })
    navigate("/")
  }

  handleSubmit = event => {
    event.preventDefault()
    this.doSubmit()
  }

  render() {
    const { userData } = this.state
    return (
      <>
        <div className="col-sm-4 col-sm-offset-1">
          <div className="login-form">
            <h2>Login to your account</h2>
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                placeholder="Name"
                name="username"
                value={userData.username}
                onChange={this.handleChange}
              />
              <input
                type="password"
                placeholder="Email Address"
                name="password"
                value={userData.password}
                onChange={this.handleChange}
              />
              <span>
                <input type="checkbox" className="checkbox" />
                Keep me signed in
              </span>
              <button type="submit" className="btn btn-default">
                Login
              </button>
            </form>
          </div>
        </div>
      </>
    )
  }
}

export default Login
