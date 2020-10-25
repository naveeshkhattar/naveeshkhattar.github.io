import React from "react"
import HeaderLogo from "./HeaderLogo"
import HeaderNavItem from "./HeaderNavItem"
import Tabs from "../constants/Tabs.js"
import "../styles/header.scss"


function Header ({selectedItem}) {
  return (
  <div className="header-component">
    <div className="header-logo">
      <HeaderLogo name="Naveesh Khattar" linkTo="/" />
    </div>
    <div className="header-nav">
    <HeaderNavItem name="Work" linkTo="/" isSelected={selectedItem === Tabs.WORK}/>
    <HeaderNavItem name="Sketchbook" linkTo="/sketchbook" isSelected={selectedItem === Tabs.SKETCHBOOK}/>
    <HeaderNavItem name="About" linkTo="/about" isSelected={selectedItem === Tabs.ABOUT}/>
    <HeaderNavItem name="Contact" linkTo="mailto:naveeshkhattar@gmail.com" isAction/>
    </div>
  </div>
)
}


export default Header
