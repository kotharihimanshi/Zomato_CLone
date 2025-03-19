import React, { useContext } from 'react'
import "./Cart.css"
import { StoreContext } from '../../context/StoreContext'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'

const Cart = () => {

  const {cartItems , food_list , removeFromCart, getTotalAmount} = useContext(StoreContext);
  const navigate = useNavigate()
  
  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item,index) => {
          if(cartItems[item._id] > 0){
            return (
              <div>
                <div className='items-title items-item'>
                <img src={item.image} alt="" />
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>{cartItems[item._id]}</p>
                <p>${cartItems[item._id] * item.price}</p>
                <p onClick={() => removeFromCart(item._id)}><img src={assets.remove_icon_red} alt="" /></p>
              </div>
              <hr />
              </div>
            )
          }
        } )}
        </div> 
        <div className="cart-bottom">
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
            <button onClick={() => navigate('/order')}>Proceed to checkout!</button>
          </div>
          <div className="promocode">
            <div>
              <p>If you have Promocode, Enter it here..</p>
              <div className="promocode_input">
                <input type="text"  placeholder='Promo Code'/>
                <button>Submit</button>
              </div>
            </div>
          </div>
          </div> 
        

    </div>
  )
}

export default Cart
