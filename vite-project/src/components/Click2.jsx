import React from 'react'

const click2 = () => {

    let count = 0;

    const handleClick = (name) => {
        if(count<3){
            count++;
            console.log(`Clicked ${count} times`);
        }else{
            console.log(`${name } stop clicking me`);
        }
    }
  return (
    <div>

        <button onClick={()=>handleClick('bro')}>click me</button>
    </div>
  )
}

export default click2