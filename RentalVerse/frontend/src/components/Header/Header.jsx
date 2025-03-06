import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import './Header.css';
import headerImg1 from '../../assets/header_img1.jpg';
import headerImg2 from '../../assets/header_img2.jpg';
import headerImg3 from '../../assets/header_img3.jpg';

function Header() {
  return (
    <div className='header'>
      <Carousel
        className='header-carousel'
        showThumbs={false}
        autoPlay
        infiniteLoop
        interval={3000}
        stopOnHover={true}
        showStatus={false}
      >
        <div>
          <img src={headerImg1} alt="Slide 1" />
        </div>
        <div>
          <img src={headerImg2} alt="Slide 2" />
        </div>
        <div>
          <img src={headerImg3} alt="Slide 3" />
        </div>
      </Carousel>

      <div className="header-contents">
        <h2>Rent the Latest Laptops with Ease</h2>
        <p>Explore our wide selection of premium laptops available for rent at competitive prices. Whether you need a laptop for work, study, or gaming, we have the perfect solution to fit your needs. Flexible plans, fast delivery, and top-notch customer support await you.</p>
        <button>Browse Laptops</button>
      </div>
    </div>
  );
}

export default Header;
