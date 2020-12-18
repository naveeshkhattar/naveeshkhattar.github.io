import React from "react"
import Text from "../components/Text"
import TextStyles from "../constants/TextStyles"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Tabs from "../constants/Tabs"
import "../styles/about.scss"
import "../styles/styles.scss"
import steps from "../images/steps.jpg"



function AboutPage() {
  return (
    <div>
      {/* Header */}
      <Header selectedItem={Tabs.ABOUT} />

      {/* Title + Description */}
      <div className ="about-me">
          <div className="my-name">
              <Text style={TextStyles.HEADING3}>Hi, I'm Naveesh Khattar</Text>
          </div>
          <div className="description">
              <Text style={TextStyles.BODY_BLACK}>I’m a designer exploring the areas of interaction and graphic design. Apart from helping businesses design stable and scalable interfaces, I devote my time to learning and exploring animation, 3D graphics and programming.</Text>
          </div>
      </div>

      {/* Project header image */}
      <div className="banner-image">
          <img src={steps} />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  
  )
}

export default AboutPage