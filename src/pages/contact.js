import React from "react"
import Text from "../components/Text"
import TextStyles from "../constants/TextStyles"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Tabs from "../constants/Tabs"
import "../styles/contact.scss"
import "../styles/styles.scss"
import steps from "../images/steps.jpg"



function ContactPage() {
  return (
    <div>
      {/* Header */}
      <Header selectedItem={Tabs.CONTACT} />



      {/* Footer */}
      <Footer />
    </div>
  
  )
}

export default ContactPage