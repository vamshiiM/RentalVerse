import React from 'react'
import './navbar.css'
import {assets} from '../../assets/assets'


const Navbar =()=>{
    return(
        <div className='Navbar'>
        <img className='logo' src={assets.logo1} alt=""/>
        {/* <div className='empty'></div> */}
        <img className='profile_pic' src={assets.zebra} alt=""/>
        </div>
    )
}
export default Navbar