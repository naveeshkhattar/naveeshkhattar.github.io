import React from "react"
import Text from "./Text"
import TextStyles from "../constants/TextStyles"
import "../styles/footer.scss"

function Footer() {
    return (
        <div className="footer-component">
            <Text style={TextStyles.BODY_BLACK}>Designed and developed with ❤️ by Naveesh Khattar. Special thanks to Aakash Khatter.</Text>
        </div>
    )
}

export default Footer