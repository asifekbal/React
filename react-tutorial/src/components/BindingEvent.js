import React, { Component } from 'react'

export default class BindingEvent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message : 'Hello'
      }
      /* this.clickHandler = this.clickHandler.bind(this) */
    }
    clickHandler(){
        this.setState({
            message : 'Goodbye!'
        })
    }
    clickHandlerLast = ()=>{
        this.setState({
            message : 'Goodbye Asif!'
         })
    }
  render() {
    return (
      <div>
          <h2>{this.state.message}</h2>
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button>  --1. Updates the component each time, performance issues */}
        {/* <button onClick={() => this.clickHandler()}>Click</button> --2. It also has performance issues */}
        {/* <button onClick={this.clickHandler}>Click</button> --3. Bind in constructor. It is suugested way by React community */}
        {/* 4. Last approach - use an arrow function. Recommended  */}
        <button onClick={this.clickHandlerLast}>Click</button>
      </div>
    )
  }
}
