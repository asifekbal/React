import React from 'react'

export default function FunctionalEventHandling() {
    function clickHandler() {
        console.log('Button Clicked');
    }
  return (
    <div>
      <button onClick={clickHandler}>Click</button>
      {/* Don't use 'clickHandler()' with () because it gets called before click event */}
    </div>
  )
}
