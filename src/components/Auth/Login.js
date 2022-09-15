import React, { Component } from "react"
import { setLogin } from "../../services/authService"
import { navigate } from 'gatsby'

class Login extends Component {
  state = {
    userData: {
      username: "",
      password: "",
      token: "",
      login : "false"
    },
  }

  handleChange = ({ currentTarget: input }) => {
    const userData = { ...this.state.userData }
    userData[input.name] = input.value
    this.setState({ userData })
  }

  doSubmit = async (props) => {
    // console.log(props)
    const response = await setLogin(this.state.userData);
    this.setState({
      userData : {
        username : "",
        password : ""
      }
    })
    const userToken = response.data;
    console.log(userToken);
    localStorage.setItem("token", JSON.stringify({
      token: userToken.token
    }))
    document.cookie = `token=${userToken.token};max-age=604800;`
    this.setState({ login : true })
    navigate('/');
  }

  handleSubmit = event => {
    event.preventDefault();
    this.doSubmit();
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
