import React from 'react'

const click = () => {
    function handleClick(){
        console.log('OUCH');
    }
    function handleClick2(name){
        console.log(`${name} stop clicking me`);
    }
  return (
    <div>

        <button onClick={handleClick}> click me</button> 
        <button onClick={() => handleClick2 ('Dave')}> click me</button> 
    </div>
  )
}

export default click