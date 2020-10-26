import React from "react"
import "../styles/banner.scss"

function Banner({descriptionText, bannerImage, bannerImageAltText}) {
    return (
        <div className="banner">
            <div className="banner-text">
                {descriptionText}
            </div>
            <div className="banner-image">
            <img src={bannerImage} alt={bannerImageAltText} />
            </div>
        </div>
    )
}

export default Banner