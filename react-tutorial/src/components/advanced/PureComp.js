import React, { PureComponent } from 'react'

export class PureComp extends PureComponent {
    render() {
        console.log('Pure Component Render')
        return (
            <div>
                Pure Component {this.props.name}
            </div>
        )
    }
}

export default PureComp

/* 
Notes : 
1. If Parent Component Rerender , Child components also rerenders.Child
2. A Pure Component implements shouldComponentUpdate() with a shallow prop and state comparison,
3. Pure Component is mainly used for Performance boost because it avoids unnecessaray rerendering
4. Works only with Class Components*/