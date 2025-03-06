import React,{useContext, useState}from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link ,useNavigate} from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


const Navbar = ({setShowLogin}) => {
    
    const [menu,setMenu] = useState("laptops");
    
    const {getTotalCartAmount,token,setToken} = useContext(StoreContext);
    

    const navigate = useNavigate();

    const sell = () => {
    navigate(url);
     };




    const Logout = () =>{
      console.log('HIIII MOTHERFUCKER');
      localStorage.removeItem("token")
      setToken("");
      navigate("/")
  }

  return (
    <div className='navbar'>
      <Link to='/' ><img src={assets.logo} alt="" className="logo" /></Link>
      <ul className="navbar-menu">
        <Link to='/' onClick={()=>setMenu("home")} className={menu==='home'?"active":""}>Home</Link>
        <a href='#browser-laptops' onClick={()=>setMenu("laptops")} className={menu==='laptops'?"active":""}>Laptops</a>
        <a href='#footer' onClick={()=>setMenu("contact us")} className={menu==='contact us'?"active":""}>Contact us</a>
        {/* <a href='#app-download' onClick={()=>setMenu("mobile-app")} className={menu==='mobile-app'?"active":""}>Mobile</a> */}
      </ul>
      <div className="navbar-right">
      {/* <div className='button'>
          <button className='butt'>SELLER</button>
        </div> */}
        <img src={assets.search_icon} srcSet="" />
        <div className="navbar-search-icon">
            <Link to='/cart' ><img src={assets.bag_icon} alt="" srcSet="" /></Link>
            <div className={getTotalCartAmount()===0?"":"dot"}></div>
        </div>
        {!token ? <button onClick={()=>setShowLogin(true)}>LOGIN</button>
        :<div className='navbar-list'>
        
         <div className='navbar-profile'>
          <img src={assets.profile_icon} alt=""/>
          <ul className='nav-profile-dropdown'>
          <li><img src={assets.bag_icon} alt=""/><p>Orders</p></li>
          <hr/>
          <li onClick={Logout}><img src={assets.logout_icon} alt=""/><p>Log Out</p></li>
        <div className='button'>
          <button onClick={sell} className='butt'>SELL</button>
        </div>
          </ul>
        </div>
        </div>
      }
  
      </div>
    </div>
  )
}

export default Navbar
