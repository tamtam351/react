import React,{useState} from 'react'

const classwork = () => {

    const[num, setNUM] = useState(0)
   


    const updatenum =()=>{
        setNUM(num +1)
    }
    const decreasenum =()=>{
        setNUM(num-1)
    }
    const setRtrnNum =()=>{
        setNUM(0)
    }
  return (
    <div>
         <p>Number:{num}</p>
       
    <button onClick={updatenum}>increament number</button>
    <button onClick={decreasenum  }> decrease</button>
    <button onClick={setRtrnNum}>Reset</button>
    </div>
  )
}


export default classwork
