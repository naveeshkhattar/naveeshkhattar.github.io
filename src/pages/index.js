import React from "react"
import Header from "../components/Header"
import '../styles/styles.scss'
import HomeBanner from "../components/HomeBanner"
import '../styles/home-banner.scss'


function IndexPage() {
    return(
            <div>
            <Header />
            <HomeBanner />
          </div>
    )
}


export default IndexPage