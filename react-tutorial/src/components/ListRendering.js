import React from 'react'

export default function ListRendering() {
    const names = ['Bruce','Clark','Diana']
  return(
    <div>
    {
      names.map(name=><h2>{name}</h2>)
    }
    </div>
  )
}



{/* <h2>{names[0]}</h2>
<h2>{names[1]}</h2>
<h2>{names[2]}</h2> */}