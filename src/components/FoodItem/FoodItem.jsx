import React, { useContext} from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContex';

const FoodItem = ({id, name, price , description, image}) => {

    const {cartItems , addToCart , removeFromCart} = useContext(StoreContext);

  return (
    <div className='fooditem'>
        <div className="img-container">
            <img src={image} alt="" className="foodimg" />
            {
                !cartItems[id]
                ? <img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} alt="" />
                : <div className="itemcounter">
                    <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                    <p>{cartItems[id]}</p>
                    <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt="" />
                </div>
            }
        </div>
        <div className="foodinfo">
            <div className="foodrating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" />
            </div>
            <p className="fooddesc">{description}</p>
            <p className="foodprice">${price}</p>
        </div>
    </div>

  )
}

export default FoodItem
