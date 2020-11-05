import React from "react"
import Masonry from "react-masonry-css"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Text from "../components/Text"
import Tabs from "../constants/Tabs.js"
import TextStyles from "../constants/TextStyles"
import asphaltWebCover from "../images/asphalt web.png"
import clouds from "../images/clouds.jpg"
import dome from "../images/dome.jpg"
import Fluid from "../images/fluid.gif"
import steps from "../images/steps.jpg"
import ThirdEye from "../images/third-eye.gif"
import PrimaryButton from "../components/PrimaryButton"
import "../styles/sketchbook.scss"
import "../styles/styles.scss"
import "../styles/work.scss"
import PrimaryButtonStyles from "../constants/PrimaryButtonStyles"

function SketchbookPage() {
  return (
    <div>
        {/* Header */}
      <Header selectedItem={Tabs.SKETCHBOOK} />
      <div className="banner-title">
        <Text style={TextStyles.HEADING1}>
          A showcase of my art and my fart.
        </Text>
      </div>
      <Masonry
        breakpointCols={2}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        <div>
          <img src={steps} />
        </div>
        <div>
          <img src={Fluid} />
        </div>
        <div>
          <img src={ThirdEye} />
        </div>
        <div>
          <img src={clouds} />
        </div>
        <div>
          <img src={dome} />
        </div>
        <div>
          <img src={asphaltWebCover} />
        </div>
      </Masonry>

      {/* Contact Section */}
      <div className="contact-section">
        <div className="contact-heading">
          <Text style={TextStyles.HEADING2_WHITE}>Let's work together</Text>
        </div>
        <div className="contact-body">
          <Text style={TextStyles.BODY_WHITE}>
            We’re always looking for new opportunities and are comfortable
            working internationally. Please get in touch and one of our project
            managers will contact you about beginning the proposal process.
          </Text>
        </div>
        <div className="contact-button">
          <PrimaryButton
            style={PrimaryButtonStyles.WHITE}
            buttonText="Get in touch"
            linkTo="/contact"
          />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default SketchbookPage
