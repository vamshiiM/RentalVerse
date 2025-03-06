import React, { useContext, useState } from 'react';
import './LaptopItem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';
import LaptopDetails from "../LaptopDetail/LaptopDetails";


const LaptopItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart, url } = useContext(StoreContext);
  
  const [showDetails, setShowDetails] = useState(false);
  // console.log("image:",image)
  // console.log("host",url)
  return (
    <div className='laptop-item'>
      <div className="laptop-items-img-container" onClick={() => setShowDetails(true)}>
        <img className='laptop-item-image' src={url+"/images/"+image} alt={name} />
        {!cartItems[id]
          ? <img className='add' onClick={(e) => { e.stopPropagation(); addToCart(id); }} src={assets.add_icon_white} alt='Add' />
          : <div className='laptop-item-counter'>
              <img onClick={(e) => { e.stopPropagation(); removeFromCart(id); }} src={assets.remove_icon_red} alt='Remove' />
              <p>{cartItems[id]}</p>
              <img onClick={(e) => { e.stopPropagation(); addToCart(id); }} src={assets.add_icon_green} alt='Add' />
            </div>
        }
      </div>
      <div className="laptop-item-info">
        <div className="laptop-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="Rating" />
        </div>
        <p className="laptop-item-desc">{description}</p>
        <p className="laptop-item-price">₹{price}/DAY</p>
      </div>

      {showDetails && <LaptopDetails id={id} name={name} description={description} image={url+"/images/"+image} price={price} onClose={() => setShowDetails(false)} />}
    </div>
  );
};

export default LaptopItem;