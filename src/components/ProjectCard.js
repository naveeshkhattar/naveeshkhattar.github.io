import { Link } from "gatsby"
import React from "react"
import "../styles/project-card.scss"




function ProjectCard({projectTitle, projectImage , projectImageAltText, projectLink}) {
    return(
        <div className="project-card">
            <Link to={projectLink}>
                <div className="project-card-image">
                    <img src={projectImage} alt={projectImageAltText} />
                </div>
                <div className="project-card-title">
                    {projectTitle}
                </div>
            </Link>
        </div>
    )

}

export default ProjectCard