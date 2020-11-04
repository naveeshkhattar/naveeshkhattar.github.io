import { Link } from "gatsby"
import React from "react"

import "../styles/header-nav-item.scss"

function HeaderNavItem({ name, linkTo, isSelected }) {
  return (
    <div className={`nav-link ${isSelected ? "selected" : ""}`}>
      <Link to={linkTo}>{name}</Link>
    </div>
  )
}

export default HeaderNavItem
