import React from 'react'

const userGreeting = (props) => {
    // if(props.isLoggedIn){
    //     return <h2>Welcome {props.username}</h2>
    // }else{
    //     return <h2>Please login to continue</h2>

    // }
  return (
    <div>
        {props.isLoggedIn ? <h1>Welcome {props.username}</h1> : <h1>Please Login</h1>}
        
    </div>
  )
}

export default userGreeting