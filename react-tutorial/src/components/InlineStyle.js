import React from 'react'

const heading = {
    fontSize: '72px',
    color: 'blue'
}

function InlineStyle() {
    return (
        <div>
            {/* <h1 className={styles.success}>Success</h1> -- Fails*/}
            <h1 className='error'>Error</h1>
            <h1 style={heading}>Inline CSS</h1>
        </div>
    )
}

export default InlineStyle
