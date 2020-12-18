import React from "react"
import { Link } from "gatsby"
import "../styles/secondary-button.scss"

function SecondaryButton({ style, buttonText, linkTo }) {
  return (
    <div className={style.className}>
      <Link to={linkTo}>{buttonText}</Link>
    </div>
  )
}

export default SecondaryButton
