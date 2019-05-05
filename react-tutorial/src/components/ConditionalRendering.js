import React, { Component } from 'react'

export class ConditionalRendering extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn : true
      }
    }
    /* --Approach 4 */
    render() {
        return(
            this.state.isLoggedIn && <div><h2>Welcome Asif</h2></div>
        )
    }   
  
}

export default ConditionalRendering


/* --Approach 3
render() {
    return(
        this.state.isLoggedIn?
        <div><h2>Welcome Asif</h2></div> :
            <div><h2>Welcome Guest</h2></div>
    )
} */

/* --Approach 2
render() {
    let message
    if(this.state.isLoggedIn){
        message = <div><h2>Welcome Asif</h2></div>
    } else{
        message = <div><h2>Welcome Guest</h2></div>
    }
    return message
} */   

/* --Approach 1  
  render() {
    if(this.state.isLoggedIn){
        return (
            <div>
               <h2>Welcome Asif</h2>
            </div>
          )
    } else{
        return (
            <div>
               <h2>Welcome Guest</h2>
            </div>
          )
    }
  } */