import React from 'react';
import './BrowserLaptops.css';
import { menu_list } from '../../assets/assets';

const BrowserLaptops = ({ category, setCategory }) => {
  return (
    <div className='browser-laptops' id='browser-laptops'>
        <h1>Browse Our Laptops</h1>
        <p className='browser-laptops-text'>Find the perfect laptop for your needs from our selection.</p>
        <div className="browser-laptops-list">
            {menu_list.map((item, index) => (
                <div 
                  onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} 
                  key={item.menu_name} // Use a unique identifier if available
                  className="browser-laptops-list-items"
                >
                    <img 
                      className={category === item.menu_name ? "active" : ""} 
                      src={item.menu_image} 
                      alt={item.menu_name} 
                    />
                    <p>{item.menu_name}</p>
                </div>
            ))}
        </div>
        <hr />
    </div>
  );
}

export default BrowserLaptops;
