import React, {useState} from 'react'

function Mycomponent2() {

    const[name, setName]=useState(" ")
    const[quantity, setQuantity]=useState()
    const[comment, setComment]=useState("")
    const[payment, setPayment]=useState("")
    const[shipping, setShipping]=useState("")


    function handleNameChange(e){
        setName(e.target.value)
    }
    function handleQuantityChange(e){
        setQuantity(e.target.value)
    }
    function handleCommentChange(e){
        setComment(e.target.value)
    }
    function handlePaymentChange(e){
        setPayment(e.target.value)
    }
    function handleShippingChange(e){
        setShipping(e.target.value)
    }


  return (
    <div>

        <input type="text" onChange={handleNameChange} value={name}
        placeholder='name'/>
        <p>Name:{name}</p>
       
        <input type="number" onChange={handleQuantityChange} value={quantity} placeholder='quantity' />

        <p>Quantity:{quantity}</p>
       
        <textarea name="" id=""  onChange={handleCommentChange} value={comment} placeholder='Leave a delivery instruction ' />


        <p>Comment:{comment}</p>

        <select name="" id="" value={payment} onChange={handlePaymentChange}>
            <option value="">Select Payment method</option>
            <option value="Pay on delivery">Pay on delivery</option>
            <option value="Pay with Card">Pay with Card</option>
            <option value="Pay through wallet">Pay through wallet</option>
        </select>


        
        <p>Payment Method:{payment}</p>

        <label htmlFor="">
            <input type="radio" value='PickUp' checked={shipping=='PickUp'} onChange={handleShippingChange}/>
            
            Pick-Up
        </label>

        <label htmlFor="">
        <input type="radio" value='Delivery' checked={shipping=='Delivery'} onChange={handleShippingChange}/>
        </label>
        Delivery


        <p>Shipping:{shipping}</p>

    </div>
  )
}

export default Mycomponent2