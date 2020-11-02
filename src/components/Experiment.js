import React from "react"
import { Link } from "gatsby"
import '../styles/experiment.scss'

function WorkParty () {
    return (
        <div className="hero-container">
            <div className="title-work">
            <Link to="/work">WORK</Link>
            </div>
            <div className="title-party">
                <Link to="/sketchbook">P<span className="art">ART</span>Y</Link>
            </div>
        </div>
    )
}

export default WorkParty