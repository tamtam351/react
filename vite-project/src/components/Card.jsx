import React from 'react'

import PROFILE from '../assets/cross.jpg'
const card = () => {
  return (
    <div className='card'>

        <img src={PROFILE} alt="wtf brooo"  className='card-img'/>
        <h2 className='card_title'>Lasop code</h2>
        <p className='card_text'>we teach fullstack,frontend,backend,cybersecurity etc</p>
    </div>
  )
}

export default card