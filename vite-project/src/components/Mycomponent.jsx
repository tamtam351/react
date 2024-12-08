import React,{useState} from 'react'

const Mycomponent = () => {
    const[name,setName]=useState('Guest')
    const[age,setAge]=useState(0)
    const[isEmployed,setIsEmployed]=useState(false)

    // const updateName=()=>{
    //     setName('Lasop')
    // }

    // const updateName=()=>{
    //     setName('Lasop')
    // }

    const updateNameChange=(event)=>{
        setName(event.target.value)
    }
    const IncreamentAge=()=>{
        setAge(age +2)
    }
    const toogleemplyedstatement =()=>{
        setIsEmployed(!isEmployed)
    }
  return (
    <div>
        <p>Name:{name}</p>
        <p>Age:{age}</p>
        <p>IS employed:{isEmployed ? 'yes' : 'no'}</p>
        <input type="text" value={name}  onChange={updateNameChange}/>
    <button> set name</button>
    <button onClick={IncreamentAge}> increament</button>
    <button onClick={toogleemplyedstatement}>Employment status</button>
    </div>
  )
}

export default Mycomponent