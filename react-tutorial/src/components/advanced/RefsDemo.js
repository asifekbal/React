import React, { Component } from 'react'

export class RefsDemo extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
        this.cbRef = null
        this.setCallbackRef = (element) =>{
            this.cbRef = element
        }
    }

    componentDidMount(){
        // this.inputRef.current.focus()
        this.cbRef.focus()
        console.log(this.inputRef)
    }
    clickHandler = ()=>{
        alert(this.inputRef.current.value)
    }
    
    clickHandler2 = ()=>{
        if(this.setCallbackRef){
            alert(this.cbRef.value)
        }
    }
    
    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef}></input><br/>
                <input type="text" ref={this.setCallbackRef}></input><br/>
                <button onClick={this.clickHandler}>Click</button>
                <button onClick={this.clickHandler2}>Click</button>
            </div>
        )
    }
}

export default RefsDemo
