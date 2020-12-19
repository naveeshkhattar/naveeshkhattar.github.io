import React from "react"
import "../styles/styles.scss"
import PrimaryButton from "../components/PrimaryButton"
import PrimaryButtonStyles from "../constants/PrimaryButtonStyles"
import SecondaryButton from "../components/SecondaryButton"
import SecondaryButtonStyles from "../constants/SecondaryButtonStyles"
import NavigationCard from "../components/NavigationCard"

function IndexPage() {
  return (
    <div>
      <div className="intro">
        <div className="intro-heading">Hi, I'm Naveesh</div>
        <div className="intro-body">
          I’m a designer exploring the areas of interaction and graphic design.
          Apart from helping businesses design stable and scalable interfaces, I
          devote my time to learning and exploring animation, 3D graphics and
          programming.
        </div>
        <div className="social-media-links">
          <a href="https://www.instagram.com/naveeshkhattar/" target="_blank">
            Instagram
          </a>
          <a href="https://twitter.com/naveeshkhattar" target="_blank">
            Twitter
          </a>
          <a
            href="https://www.linkedin.com/in/naveesh-khattar/"
            target="_blank"
          >
            LinkedIn
          </a>
          <a href="https://dribbble.com/naveeshkhattar" target="_blank">
            Dribbble
          </a>
        </div>
        <div className="cta-buttons">
          <PrimaryButton
            style={PrimaryButtonStyles.BLACK}
            linkTo="/contact"
            buttonText="Get in touch"
          />
          <SecondaryButton
            style={SecondaryButtonStyles.BLACK}
            linkTo="/contact"
            buttonText="Download CV"
          />
        </div>
      </div>
      <div className="navigation-card-cluster">
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
    </div>
  )
}

export default IndexPage
