import React, { useState } from "react"
import HeaderLogo from "./HeaderLogo"
import HeaderNavItem from "./HeaderNavItem"
import Tabs from "../constants/Tabs.js"
import "../styles/header.scss"
import Twitter from "../images/icon-twitter_black.svg"
import Instagram from "../images/icon-instagram_black.svg"
import MenuIcon from "../images/menu.svg"
import CrossIcon from "../images/cross.svg"

function Header({ selectedItem }) {
  const [Active, setActive] = useState(false)

  const toggleClass = () => {
    setActive(!Active)
  }

  return (
    <div className="header-component">
      <div className="header-logo">
        <HeaderLogo name="Naveesh" linkTo="/" />
      </div>
      <div className="header-menu-button">
        <button onClick={toggleClass}>
          <img src={Active ? CrossIcon : MenuIcon} height="20" width="20"></img>
        </button>
      </div>
      <div className={Active ? "header-menu-nav" : "header-nav"}>
        <HeaderNavItem
          name="Work"
          linkTo="/work"
          isSelected={selectedItem === Tabs.WORK}
        />
        <HeaderNavItem
          name="Sketchbook"
          linkTo="/sketchbook"
          isSelected={selectedItem === Tabs.SKETCHBOOK}
        />
        <HeaderNavItem
          name="About"
          linkTo="/about"
          isSelected={selectedItem === Tabs.ABOUT}
        />
        <HeaderNavItem
          name="Contact"
          linkTo="/contact"
          isSelected={selectedItem === Tabs.CONTACT}
        />
        <div>
          <div className="social-media">
            <a href="https://twitter.com/naveeshkhattar" target="_blank">
              <img src={Twitter} height="20" width="20" />
            </a>
            <a href="https://www.instagram.com/naveeshkhattar/" target="_blank">
              <img src={Instagram} height="20" width="20" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
