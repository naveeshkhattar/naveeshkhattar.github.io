import React from "react"
import "../styles/banner.scss"

function Banner({descriptionText}) {
    return (
        <div className="banner-text">
            {descriptionText}
        </div>
    )
}

export default Banner