import React from 'react'

 const Props = (props) =>{
  return (
    <div>
      <h1> Functional Props Ex - Hello {props.name} a.k.a {props.heroName}</h1>
      {props.children}
    </div>
  )
}
export default Props