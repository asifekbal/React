import React, { Component } from 'react'

export default class ClassEventHandling extends Component {
    clickHandler(){
        console.log('Button Clicked');
    }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}> Click Me</button>
      </div>
    )
  }
}
