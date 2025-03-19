import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreCOntext'
import FoodItem from '../FoodItem/FoodItem'

const FoodDisplay = ({Category}) => {

    const {food_list} = useContext(StoreContext)

  return (
    <div className='fooddisplay' id='fooddisplay'>
        <h2>Top dishes near you</h2>
        <div className="foodlist">
            {food_list.map((item, index) => {
              if(Category === "All" || item.category === Category)  {
                return <FoodItem key={index}  id = {item._id} name = {item.name} description={item.description} price={item.price} image={item.image}/>
              }
                
                
            })}
        </div>
      
    </div>
  )
}

export default FoodDisplay
