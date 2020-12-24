import React from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"
import PrimaryButton from "../components/PrimaryButton"
import ProjectCard from "../components/ProjectCard"
import Text from "../components/Text"
import PrimaryButtonStyles from "../constants/PrimaryButtonStyles"
import Tabs from "../constants/Tabs"
import TextStyles from "../constants/TextStyles"
import asphaltWebCover from "../images/asphalt web.png"
import building from "../images/building.jpg"
import clouds from "../images/clouds.jpg"
import dome from "../images/dome.jpg"
import steps from "../images/steps.jpg"
import window from "../images/window.jpg"
import "../styles/work.scss"

function WorkPage() {
  return (
    <div>
      {/* Header */}
      <Header selectedItem={Tabs.WORK} />


      {/* Work Header Section */}
      <div className="work-header-container">
        <div className="work-header-title">
          Recent Work
        </div>
        <div className="work-header-body">
          
            Our practice spans from environmental retrofits of existing
            buildings to the complete planning and design of new neighborhoods
            and public spaces. While our work is aesthetically diverse, our
            projects are linked by a focus on enhancing human relationships
            through architecture.
          
        </div>
      </div>

      {/* Projects */}
      <div className="project-grid">
        <ProjectCard
          projectTitle="Asphalt Web"
          projectImage={building}
          projectImageAltText="Asphalt Web Image"
          projectLink="/projectX"
        />
        <ProjectCard
          projectTitle="Asphalt Web"
          projectImage={dome}
          projectImageAltText="Asphalt Web Image"
          projectLink="/projectX"
        />
        <ProjectCard
          projectTitle="Asphalt Web"
          projectImage={clouds}
          projectImageAltText="Asphalt Web Image"
          projectLink="/projectX"
        />
        <ProjectCard
          projectTitle="Asphalt Web"
          projectImage={window}
          projectImageAltText="Asphalt Web Image"
          projectLink="/projectX"
        />
        <ProjectCard
          projectTitle="Asphalt Web"
          projectImage={steps}
          projectImageAltText="Asphalt Web Image"
          projectLink="/projectX"
        />
        <ProjectCard
          projectTitle="Asphalt Web"
          projectImage={asphaltWebCover}
          projectImageAltText="Asphalt Web Image"
          projectLink="/projectX"
        />
      </div>

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

export default WorkPage
