import React from "react"
import Tabs from "../constants/Tabs.js"
import '../styles/styles.scss'

//Import Components
import Header from "../components/Header"


const SketchbookPage = () => ( 
    <div>
        <Header selectedItem={Tabs.SKETCHBOOK}/>
    </div>
  
)

export default SketchbookPage