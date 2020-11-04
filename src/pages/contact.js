import React from "react"
import Text from "../components/Text"
import TextStyles from "../constants/TextStyles"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Tabs from "../constants/Tabs"
import "../styles/contact.scss"
import "../styles/styles.scss"

function ContactPage() {
  return (
    <div>
      {/* Header */}
      <Header selectedItem={Tabs.CONTACT} />

      <div className="contact-container">
        <Text style={TextStyles.HEADING1}>
          <a href="mailto:naveeshkhattar@gmail.com" target="_blank">
            Send me an email
          </a>{" "}
          to get in touch. You can also check out my{" "}
          <a
            href="https://www.linkedin.com/in/naveesh-khattar-753754a2/"
            target="_blank"
          >
            LinkedIn
          </a>,{" "}
          <a href="https://dribbble.com/naveeshkhattar" target="_blank">
            Dribbble
          </a>,{" "}
          <a href="https://www.instagram.com/naveeshkhattar/" target="_blank">
            Instagram
          </a>{" "}&{" "}
          <a href="https://twitter.com/naveeshkhattar" target="_blank">
            Twitter
          </a>.{" "}
        </Text>
      </div>
    </div>
  )
}

export default ContactPage
