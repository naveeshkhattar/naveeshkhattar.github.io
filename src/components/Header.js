import React from "react"
import HeaderLogo from "./HeaderLogo"
import HeaderNavItem from "./HeaderNavItem"
import "../styles/header.scss"


function Header () {
  return (
  <div className="header-component">
    <div className="header-logo">
      <HeaderLogo name="Naveesh Khattar" linkTo="/" />
    </div>
    <div className="header-nav">
    <HeaderNavItem name="Work" linkTo="/" />
    <HeaderNavItem name="Sketchbook" linkTo="/sketchbook" />
    <HeaderNavItem name="About" linkTo="/about" />
    <HeaderNavItem name="Contact" linkTo="mailto:naveeshkhattar@gmail.com" isAction/>
    </div>
  </div>
)
}


export default Header
