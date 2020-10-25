import { Link } from "gatsby"
import React from "react"

import "../styles/header-nav-item.scss"

function HeaderNavItem ({name, linkTo,  isAction, isSelected}) {
    //For contact action
    if (isAction) {
        return (
            <div className="nav-action">
                <a href={linkTo}>{name}</a>
            </div>
        )
    }
    //for links
    return (
        <div className="nav-link">
            <Link to={linkTo}>{name}</Link>
        </div>
    )
}

export default HeaderNavItem