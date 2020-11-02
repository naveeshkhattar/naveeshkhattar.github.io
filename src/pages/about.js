import React from "react"
import Header from "../components/Header"
import Tabs from "../constants/Tabs.js"
import '../styles/styles.scss'



function AboutPage() {
  return (
    <div>
    <Header selectedItem={Tabs.ABOUT}/>
  </div>
  )
}

export default AboutPage