import React from "react"
import Tabs from "../constants/Tabs.js"
import '../styles/styles.scss'
import Experiment from "../components/Experiment"
import Header from "../components/Header"


function AboutPage() {
  return (
    <div>
    <Header selectedItem={Tabs.ABOUT}/>
    <Experiment />
  </div>
  )
}

export default AboutPage