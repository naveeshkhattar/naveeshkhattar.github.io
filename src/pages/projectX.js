import React from "react"
import Text from "../components/Text"
import TextStyles from "../constants/TextStyles"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Tabs from "../constants/Tabs"
import "../styles/project-x.scss"
import steps from "../images/steps.jpg"

function ProjectPage () {
    return (
        <div>
        {/* Header */}
        <Header selectedItem={Tabs.WORK} />

        {/* Project Title + Description */}
        <div className ="project-header">
            <div className="project-header-title">
                <Text style={TextStyles.HEADING3}>Asphalt Web Design System</Text>
            </div>
            <div className="project-header-body">
                <Text style={TextStyles.BODY_BLACK}>Asphalt Web came into existence with the idea of achieving consistency across internal tools and web based consumer and merchant facing products. The first step was to study already existing design systems like Google, Apple, Airbnb, Atlassian, and IBM. The list is endless. We tried to understand the challenges they face and how they solved it. </Text>
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

export default ProjectPage
