import React from "react"
import "../styles/navigation-card.scss"
import { Link } from "gatsby"

function NavigationCard({ linkTo, media, cardTitle, cardBody }) {
  return (
    <div className="navigation-card">
      <Link to={linkTo}>
        <div className="arrow-icon"></div>
        <div className="media-object">{media}</div>
        <div className="navigation-card-title">{cardTitle}</div>
        <div className="navigation-card-body">{cardBody}</div>
      </Link>
    </div>
  )
}

export default NavigationCard
