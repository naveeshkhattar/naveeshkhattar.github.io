import React from "react"
import "../styles/description-group.scss"

function DescriptionGroup ({groupTitle, groupBody}) {
    return(
        <div className="description-group">
            <div className="group-title">
                {groupTitle}
            </div>
            <div className="group-body">
                {groupBody}
            </div>
        </div>
    )
}

export default DescriptionGroup