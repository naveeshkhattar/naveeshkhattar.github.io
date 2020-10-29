import React from "react"
import Tabs from "../constants/Tabs.js"
import '../styles/styles.scss'
import Masonry from 'react-masonry-css'
import asphaltWebCover from "../images/asphalt web.png"
import building from "../images/building.jpg"
import clouds from "../images/clouds.jpg"
import dome from "../images/dome.jpg"
import steps from "../images/steps.jpg"
import window from "../images/window.jpg"
import "../styles/sketchbook.scss"
import Footer from "../components/Footer"

//Import Components
import Header from "../components/Header"


function SketchbookPage () { 
    return (
    <div>
        <Header selectedItem={Tabs.SKETCHBOOK}/>
        <Masonry
            breakpointCols={2}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column">
            <div>
                <img src={steps} />
            </div>
            <div>
                <img src={building} />
            </div>
            <div>
                <img src={window} />
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

        {/* Footer */}
        <Footer />

    </div>
  
    )
}

export default SketchbookPage