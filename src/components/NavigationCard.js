import React from "react"
import "../styles/navigation-card.scss"
import { Link } from "gatsby"

function NavigationCard({ linkTo, media, cardTitle, cardBody }) {
  return (
    <div>
      <Link to={linkTo}>
        <div className="navigation-card">
          <div className="navigation-card-title">{cardTitle}</div>
          <div className="navigation-card-body">{cardBody}</div>
          <div className="media-object">{media}</div>
        </div>
      </Link>
    </div>
  )
}

export default NavigationCard
