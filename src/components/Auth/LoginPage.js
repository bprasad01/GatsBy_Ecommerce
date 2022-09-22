import React from "react"
import { useState } from "react"
import { setLogin } from "../../services/authService"
import { navigate } from "gatsby"
const LoginPage = () => {
 
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  })

  const doSubmit = async () => {
    const response = await setLogin(userData)
    console.log(response)
    const userToken = response.data
    const token = userToken.token
    const domainName = window.location.hostname;
    console.log(domainName)
    document.cookie =
      `Token=${token}` +"; domain=" +
      domainName +
      "; expires=" +
      expireAfter +
      "; path=/"
    navigate("/")
  }
  const handleChange = ({ currentTarget: input }) => {
    const userdata = { ...userData }
    userdata[input.name] = input.value
    setUserData(userdata)
  }
  const handleSubmit = e => {
    e.preventDefault()
    doSubmit()
    console.log("Hello")
  }
  console.log(userData)
  return (
    <>
      <div className="col-sm-4 col-sm-offset-1">
        <div className="login-form">
          <h2>Login to your account</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              name="username"
              value={userData.username}
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Email Address"
              name="password"
              value={userData.password}
              onChange={handleChange}
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

export default LoginPage
