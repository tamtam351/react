import React from 'react'

const students = (props) => {
  return (
    <div className='student'>
        <p>Name:{props.name}</p>
        <p>Age:{props.age}</p>
        <p>student:{props.isStudent ? 'yes':'no'}</p>
    </div>
  )
}

export default students