import React, { Component } from "react"
import { setLogin } from "../../services/authService"
import { navigate } from "gatsby"
import Cookies from "universal-cookie"
const COOKIE_PATH = "/"
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

  doSubmit = async () => {
    const response = await setLogin(this.state.userData)
    this.setState({
      userData: {
        username: "",
        password: "",
      },
    })
    const userToken = response.data
    const token = userToken.token
    localStorage.setItem(
      "token",
      JSON.stringify({
        token: token,
      })
    )
      
    // using universal-cookie package
    var domainName = window.location.hostname;
    cookies.set(COOKIE_NAME, token,{path : COOKIE_PATH, domain : domainName})
    const getCookieName = cookies.get(COOKIE_NAME);
    console.log(getCookieName);
   
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
