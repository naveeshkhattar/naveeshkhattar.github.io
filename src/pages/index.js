import React from "react"
import "../styles/styles.scss"
import "../styles/home.scss"
import PrimaryButton from "../components/PrimaryButton"
import PrimaryButtonStyles from "../constants/PrimaryButtonStyles"
import SecondaryButton from "../components/SecondaryButton"
import SecondaryButtonStyles from "../constants/SecondaryButtonStyles"
import NavigationCard from "../components/NavigationCard"
import Footer from "../components/Footer"


function IndexPage() {
  return (
    <div>
      <div className="intro-header-container">
        <div className="intro-header-inner">
          <div className="intro-header-text">
            Hi, I'm Naveesh.<br></br>Interaction Designer at
            Gojek.
          </div>
          <div className="intro-header-buttons">
            <div className="getintouch-button">
              <PrimaryButton
                style={PrimaryButtonStyles.WHITE}
                linkTo="/contact"
                buttonText="Get in touch"
              />
            </div>
            <SecondaryButton
              style={SecondaryButtonStyles.WHITE}
              linkTo="/contact"
              buttonText="Download CV"
            />
          </div>
        </div>
      </div>
      <div className="navigation-section">
        <NavigationCard
          linkTo="/work"
          cardTitle="Work"
          cardBody="A collection of work from 2017-2020"
        />
        <NavigationCard
          linkTo="/sketchbook"
          cardTitle="Sketchbook"
          cardBody="A collection of work from 2017-2020"
        />
        <NavigationCard
          linkTo="/about"
          cardTitle="About"
          cardBody="Since they wanna know"
        />
        <NavigationCard
          linkTo="/contact"
          cardTitle="Contact"
          cardBody="A collection of work from 2017-2020"
        />
      </div>
      <div className="intro-body-container">
        <div className="intro-body-text">
          I’m a designer exploring the areas of interaction and graphic
          design. Apart from helping businesses design stable and scalable
          interfaces, I devote my time to learning and exploring animation, 3D
          graphics and programming.
        </div>
      </div>
      <Footer />
      
    </div>
  )
}

export default IndexPage
