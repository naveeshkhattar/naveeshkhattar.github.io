import React from "react"
import Header from "../components/Header"
import ProjectCard from "../components/ProjectCard"
import '../styles/styles.scss'
// import gatsbyAstronaut from'../images/gatsby-astronaut.png';
// import gatsbyIcon from "../images/gatsby-icon.png"
import asphaltWebCover from "../images/asphalt web.png"
import building from "../images/building.jpg"
import dome from "../images/dome.jpg"
import window from "../images/window.jpg"
import steps from "../images/steps.jpg"
import clouds from "../images/clouds.jpg"
import Banner from "../components/Banner"
import Tabs from "../constants/Tabs";
import DescriptionGroup from "../components/DescriptionGroup"
import PrimaryButton from "../components/PrimaryButton"
import Footer from "../components/Footer"

function IndexPage() {
    return(
        <div>
            <Header selectedItem={Tabs.WORK}/>
            <Banner descriptionText = "Senior interaction designer, currently working at Gojek." bannerImage={steps} bannerImageAltText="banner image" />
            <div className="recent-work">
                <DescriptionGroup groupTitle="Recent Work" groupBody="Our practice spans from environmental retrofits of existing buildings to the complete planning and design of new neighborhoods and public spaces. While our work is aesthetically diverse, our projects are linked by a focus on enhancing human relationships through architecture."/>
            </div>
            <div className="project-grid">
                <ProjectCard projectTitle="Asphalt Web" projectImage={building} projectImageAltText="Asphalt Web Image" projectLink="/projectX" />
                <ProjectCard projectTitle="Asphalt Web" projectImage={dome} projectImageAltText="Asphalt Web Image" projectLink="/projectX" />
                <ProjectCard projectTitle="Asphalt Web" projectImage={clouds} projectImageAltText="Asphalt Web Image" projectLink="/projectX" />
                <ProjectCard projectTitle="Asphalt Web" projectImage={window} projectImageAltText="Asphalt Web Image" projectLink="/projectX" />
                <ProjectCard projectTitle="Asphalt Web" projectImage={steps} projectImageAltText="Asphalt Web Image" projectLink="/projectX" />
                <ProjectCard projectTitle="Asphalt Web" projectImage={asphaltWebCover} projectImageAltText="Asphalt Web Image" projectLink="/projectX" />
            </div>
            <div className="work-together">
                <div className="work-together-text">
                    <DescriptionGroup groupTitle="Let's work together" groupBody="We’re always looking for new opportunities and are comfortable working internationally. Please get in touch and one of our project managers will contact you about beginning the proposal process." />
                </div>
                <div className="cta-button">
                    <PrimaryButton buttonText="Get in touch" linkTo="mailto:naveeshkhattar@gmail.com" />
                </div>
            </div>
            <Footer footerText="Designed and developed with ❤️ by Naveesh Khattar. Special thanks to Aakash Khatter.🤝" />
        </div>
    )
}


export default IndexPage