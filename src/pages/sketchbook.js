import React from "react"
import Masonry from 'react-masonry-css'
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
import "../styles/sketchbook.scss"
import '../styles/styles.scss'



function SketchbookPage () { 
    return (
    <div>
        <Header selectedItem={Tabs.SKETCHBOOK}/>
        <div className="persistent-text">
            <Text style={TextStyles.HEADING1}>
                A showcase of my art and my fart.
            </Text>
        </div>
        <Masonry
            breakpointCols={2}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column">
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

        {/* Footer */}
        <Footer />

    </div>
  
    )
}

export default SketchbookPage