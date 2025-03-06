import React from 'react';
import './FeaturedLaptopsCarousel.css'; // Import your CSS for styling
import { food_list } from '../../assets/assets'; // Import the food_list containing laptop data

const FeaturedLaptopsCarousel = () => {
    return (
        <div className="featured-carousel">
            <h2>Featured Laptops</h2>
            <div className="carousel-container">
                {food_list.slice(0, 5).map((laptop) => (
                    <div className="carousel-item" key={laptop._id}>
                        <img src={laptop.image} alt={laptop.name} />
                        <h3>{laptop.name}</h3>
                        <p>{laptop.description}</p>
                        <p className="price">${laptop.price}</p>
                        <button className="add-to-cart-btn">Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeaturedLaptopsCarousel;