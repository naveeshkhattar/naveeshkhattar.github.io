import React from "react"
import "../styles/primary-button.scss"

function PrimaryButton({buttonText}) {
    return(
        <div className="primary-button">
            {buttonText}
        </div>
    )
}

export default PrimaryButton