import React from "react"
import TopHeader from "../NavBar/TopHeader"
import MidddleHeader from "../NavBar/MidddleHeader"
import BottomHeader from "../NavBar/BottomHeader"


const Header = () => {
  return (
    <div>
      <header id="header">
        <TopHeader />
        <MidddleHeader />
        <BottomHeader />
      </header>
    </div>
  )
}

export default Header
