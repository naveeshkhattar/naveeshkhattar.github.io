import React from "react"
import { Link } from "gatsby"
import "../styles/primary-button.scss"

function PrimaryButton({ style, buttonText, linkTo }) {
  return (
    <div className={style.className}>
      <Link to={linkTo}>{buttonText}</Link>
    </div>
  )
}

export default PrimaryButton
