import { Link } from "gatsby"
import React from "react"
import "../styles/project-card.scss"




function ProjectCard({projectTitle, projectImage , projectImageAltText, projectLink}) {
    return(
        <div className="project-card">
            <Link to={projectLink}>
                <div className="card-image">
                    {/* <div className="card-image-inner-wrapper"> */}
                    <img src={projectImage} alt={projectImageAltText} />
                    {/* </div> */}
                </div>
                <div className="card-title">
                    {projectTitle}
                </div>
            </Link>
        </div>
    )

}

export default ProjectCard