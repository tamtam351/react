// import React from 'react'
import styles from './Button.module.css'
import  './Button.module.css'

const Button = () => {

  const button={
    
      "backgroundColor": "red",
      "color": "black",
      "padding": "10px 20px",
      "border": "none",
      "cursor":" pointer"
  }
  
  return (
    <div>
        <p style={{background:"red"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibu
            s at voluptatibus recusandae non. Non nihil </p>
            <button className='button' style={button}>Click Me</button>

    </div>
  )
}

export default Button