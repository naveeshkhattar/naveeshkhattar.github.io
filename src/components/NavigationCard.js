import React from "react"
import "../styles/navigation-card.scss"

function NavigationCard({ media, cardTitle, cardBody }) {
  return (
    <div className="navigation-card">
      <div className="arrow-icon"></div>
      <div className="media-object">
          {media}
      </div>
      <div className="navigation-card-title">
        {cardTitle}
      </div>
      <div className="navigation-card-body">
        {cardBody}
      </div>
    </div>
  )
}

export default NavigationCard
