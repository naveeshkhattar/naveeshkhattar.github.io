import React from "react"
import "../styles/text-styles.scss"

function Text ({style, children}) {
    return (
            <p className={style.className}>{children}</p>
    )
}

export default Text