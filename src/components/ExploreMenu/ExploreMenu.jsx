import React from 'react'
import "./ExploreMenu.css"
import {menu_list} from "../../assets/assets"


const ExploreMenu = ({Category , setCategory}) => {
  return (
    <div className='exploremenu' id='exploremenu'>
        <h1>Explore Our Menu</h1>
        <p className='menu-text'>Discover our delicious menu featuring a variety of mouthwatering dishes, fresh ingredients, and flavors crafted to satisfy every craving! </p>
        <div className="menu_list">
            {menu_list .map((item,index) => {
                return (<div onClick={() => setCategory(prev => prev === item.menu_name?"All" : item.menu_name)} key={index} className="listitem">
                    <img className={Category === item.menu_name?"active" : ""} src={item.menu_image} alt="" />
                    <p>{item.menu_name}</p>

                </div>)
            })}
        </div>
        <hr /> 
    </div>
  )
}

export default ExploreMenu
