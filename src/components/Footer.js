import React from "react"
import Text from "./Text"
import TextStyles from "../constants/TextStyles"
import "../styles/footer.scss"
import Twitter from "../images/icon-twitter.svg"
import Instagram from "../images/icon-instagram.svg"

function Footer() {
    return (
        <div className="footer-component">
            <div className="social-media-wrapper">
                <div className="social-media">
                <a href="https://twitter.com/naveeshkhattar" target="_blank">
                    <img src={Twitter} height="20" width="20" />  
                </a>
                <a href="https://www.instagram.com/naveeshkhattar/" target="_blank">
                    <img src={Instagram} height="20" width="20" />
                </a>
                </div>
            </div>
            <Text style={TextStyles.BODY_BLACK}>Designed and developed with ❤️ by Naveesh Khattar. Special thanks to Aakash Khatter.</Text>
        </div>
    )
}

export default Footer