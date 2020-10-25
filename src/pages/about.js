import React from "react"
import Tabs from "../constants/Tabs.js"
import '../styles/styles.scss'

//Import Components
import Header from "../components/Header"


const AboutPage = () => ( 
  <div>
    <Header selectedItem={Tabs.ABOUT}/>
  </div>
)

export default AboutPage