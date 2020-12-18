import React from "react"
import "../styles/styles.scss"
import PrimaryButton from "../components/PrimaryButton"
import PrimaryButtonStyles from "../constants/PrimaryButtonStyles"
import SecondaryButton from "../components/SecondaryButton"
import SecondaryButtonStyles from "../constants/SecondaryButtonStyles"


function IndexPage() {
  return (
    <div>
      <div className="intro">
        <div className="intro-heading"></div>
        <div className="intro-body"></div>
        <div className="social-media-links"></div>
        <div className="buttons">
          <PrimaryButton style={PrimaryButtonStyles.BLACK} linkTo="/contact" buttonText="Get in touch" />
          <SecondaryButton style={SecondaryButtonStyles.BLACK} linkTo="/contact" buttonText="Download CV" />
        </div>
      </div>
    </div>
  )
}

export default IndexPage
