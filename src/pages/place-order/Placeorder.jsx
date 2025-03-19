import React, { useContext } from 'react'
import "./placeorder.css"
import { StoreContext } from '../../context/StoreCOntext'

const Placeorder = () => {

  const {getTotalAmount} = useContext(StoreContext)
  return (
    <form className='place-order'>
      <div className="left">
        <p className="title">Delivery Information</p>
        <div className="multi-field">
          <input type="text" placeholder='First Name' />
          <input type="text" placeholder='Last Name' />       
         </div>
         <input type="email" placeholder='Email' />
         <input type="text" placeholder='Street' />
         <div className="multi-field">
          <input type="text" placeholder='City' />
          <input type="text" placeholder='State' />       
         </div>
         <div className="multi-field">
          <input type="text" placeholder='Zip Code' />
          <input type="text" placeholder='Country' />       
         </div>
         <input type="number" placeholder='Phone' />
      </div>
      
      <div className="right">
      <div className="cart-total">
            <h2>Cart Total</h2>
            <div>
              <div className="total-details">
                <p>Subtotal</p>
                <p>${getTotalAmount()}</p>
              </div>
              <div className="total-details">
                <p>Delivery Fee</p>
                <p>${getTotalAmount() === 0 ? 0 : 2}</p>
              </div>
              <div className="total-details">
                <b>Total</b>
                <b>${getTotalAmount === 0?0:getTotalAmount() + 2}</b>
              </div>
            </div>
            <button >Proceed to pay!</button>
          </div>
      </div>
      </form>
  )
}

export default Placeorder;
