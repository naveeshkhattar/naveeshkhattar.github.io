import React from "react"
import Header from "../components/Header"
import ProjectCard from "../components/ProjectCard"
import '../styles/styles.scss'
import gatsbyAstronaut from'../images/gatsby-astronaut.png';
import gatsbyIcon from "../images/gatsby-icon.png"
import Banner from "../components/Banner"
import Tabs from "../constants/Tabs";

function IndexPage() {
    return(
        <div>
            <Header selectedItem={Tabs.WORK}/>
            <Banner descriptionText = "Interaction and graphic designer. Currently working at Gojek." />
            <div className="project-grid">
                <ProjectCard projectTitle="Asphalt Web" projectImage={gatsbyAstronaut} projectImageAltText="Asphalt Web Image" projectLink="/projectX" />
                <ProjectCard projectTitle="Asphalt Web" projectImage={gatsbyIcon} projectImageAltText="Asphalt Web Image" projectLink="/projectX" />
                <ProjectCard projectTitle="Asphalt Web" projectImage={gatsbyAstronaut} projectImageAltText="Asphalt Web Image" projectLink="/projectX" />
                <ProjectCard projectTitle="Asphalt Web" projectImage={gatsbyIcon} projectImageAltText="Asphalt Web Image" projectLink="/projectX" />
                <ProjectCard projectTitle="Asphalt Web" projectImage={gatsbyIcon} projectImageAltText="Asphalt Web Image" projectLink="/projectX" />
            </div>
        </div>
    )
}


export default IndexPage