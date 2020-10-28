import React from "react"
import "../styles/primary-button.scss"

function PrimaryButton({style, buttonText, linkTo}) {
    return(
       <a className={style.className} href={linkTo}>{buttonText}</a>
        );
}

export default PrimaryButton