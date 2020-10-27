import React from "react"
import "../styles/primary-button.scss"

function PrimaryButton({buttonText, linkTo}) {
    return(
       <a className="primary-button" href={linkTo}>{buttonText}</a>
        );
}

export default PrimaryButton