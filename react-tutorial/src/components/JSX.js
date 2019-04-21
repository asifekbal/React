import React from 'react'

export default function JSX() {
  /* return (
    <div className='myClass'>
      <h1> With Jsx Hello World</h1>
    </div>
  ) */
  return (
    React.createElement('div', {className: 'myClass'}, React.createElement('h1', null, 'Without Jsx Hello World'))
  )
}
