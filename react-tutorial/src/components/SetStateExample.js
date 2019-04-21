import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count : 0
      }
    }
    increment(){
        /* -- 1. Don't modify state directly
        this.state.count = this.state.count +1;  */

        /* -- 2. Avoid it when you want to do something only after state is update 
            instead pass a callback function to do things.
        this.setState({
            count :  this.state.count +1                  
        }) 
        console.log(this.state.count);*/

        /*  -- 3. Avoid if you are making repeating call and want to update state 
                based on prev state value.beacuse React groups all the setState call to one single setState call.
        this.setState({                  
            count : this.state.count +1 
        },()=>{console.log('Callback value ' , this.state.count)}) 
        console.log(this.state.count); */

        this.setState((prevState,props)=> ({
            count : prevState.count +1
        }))
        console.log(this.state.count);
    }
    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }
  render() {
    return (
      <div>
        <h1>Count - {this.state.count} </h1>
        <button onClick={()=> this.incrementFive()}>Increment</button>
      </div>
    )
  }
}
