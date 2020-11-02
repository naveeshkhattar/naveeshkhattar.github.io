import React from "react"
import Header from "../components/Header"
import '../styles/styles.scss'
import Experiment from "../components/Experiment"
import '../styles/experiment.scss'


function IndexPage() {
    return(
            <div>
            <Header />
            <Experiment />
          </div>
    )
}


export default IndexPage