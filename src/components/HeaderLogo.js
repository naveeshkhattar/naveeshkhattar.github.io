import { Link } from "gatsby"
import React from "react"

import "../styles/header-logo.scss"

function HeaderLogo ({name, linkTo}) {
    return (
        <div className="nav-logo">
            <Link to={linkTo}>{name}</Link>
        </div>
    )
}

export default HeaderLogo