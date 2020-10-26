import React from "react"
import Header from "../components/Header"
import ProjectCard from "../components/ProjectCard"
import '../styles/styles.scss'
import gatsbyAstronaut from'../images/gatsby-astronaut.png';
import gatsbyIcon from "../images/gatsby-icon.png"
import clouds from "../images/clouds.jpg"
import Banner from "../components/Banner"
import Tabs from "../constants/Tabs";
import DescriptionGroup from "../components/DescriptionGroup"
import PrimaryButton from "../components/PrimaryButton"

function IndexPage() {
    return(
        <div>
            <Header selectedItem={Tabs.WORK}/>
            <Banner descriptionText = "Senior interaction designer, currently working at Gojek." bannerImage={clouds} bannerImageAltText="banner image" />
            <div className="recent-work">
                <DescriptionGroup groupTitle="Recent Work" groupBody="Our practice spans from environmental retrofits of existing buildings to the complete planning and design of new neighborhoods and public spaces. While our work is aesthetically diverse, our projects are linked by a focus on enhancing human relationships through architecture."/>
            </div>
            <div className="project-grid">
                <ProjectCard projectTitle="Asphalt Web" projectImage={gatsbyAstronaut} projectImageAltText="Asphalt Web Image" projectLink="/projectX" />
                <ProjectCard projectTitle="Asphalt Web" projectImage={gatsbyIcon} projectImageAltText="Asphalt Web Image" projectLink="/projectX" />
                <ProjectCard projectTitle="Asphalt Web" projectImage={gatsbyAstronaut} projectImageAltText="Asphalt Web Image" projectLink="/projectX" />
                <ProjectCard projectTitle="Asphalt Web" projectImage={gatsbyIcon} projectImageAltText="Asphalt Web Image" projectLink="/projectX" />
            </div>
            <div className="work-together">
                <DescriptionGroup groupTitle="Let's work together" groupBody="We’re always looking for new opportunities and are comfortable working internationally. Please get in touch and one of our project managers will contact you about beginning the proposal process." />
                <PrimaryButton buttonText="Contact" />
            </div>
        </div>
    )
}


export default IndexPage