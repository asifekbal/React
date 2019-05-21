import React from 'react'
import '../css/myStyle.css'


function CSSStylesheet(props) {
    let className = props.primary ?'primary':''
    return (
        <div>
            <h1 className={`${className} font-xl`}> CSS Stylesheet </h1>
        </div>
    )
}

export default CSSStylesheet
