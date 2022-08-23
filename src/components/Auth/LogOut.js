import { navigate } from "gatsby"
import React from "react"

const LogOut = () => {
  const token = localStorage.getItem("token")
  console.log(token)
  // To clear a specific item
  localStorage.removeItem(token)

  // To clear the whole data stored in localStorage
  localStorage.clear()
  navigate("/login")
}

export default LogOut
