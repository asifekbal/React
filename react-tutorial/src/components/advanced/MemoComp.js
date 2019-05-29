import React from 'react'

function MemoComp({name}) {
    console.log('Rendering Memo Component')
    return (
        <div>
            {name}   
        </div>
    )
}

export default React.memo(MemoComp)

/* 
Notes :
1. Memo Comp is same as Pure Component but it is used for Functional Component and not for Class Components.
2. React.memo() is used and it stops unnecessary rerendering of component.
 */