import React from 'react'
import './sidebar.css'
import { assets } from '../../assets/assets'
import {NavLink} from 'react-router-dom'

const Sidebar =()=>{
    return(
        <div className='sidebar'>
         <div className='sidebar-options'>

          <NavLink to="/add" className='sidebar-option'>
           <img src={assets.add} id='images' alt=""/>
           <p>ADD ITEMS</p>
          </NavLink>
          {/* <NavLink to="/list" className='sidebar-option'>
           <img src={assets.list} id='images' alt=""/>
           <p>LIST ITEMS</p>
          </NavLink> */}
          {/* <NavLink to="/order" className='sidebar-option'>
           <img src={assets.order} id='images' alt=""/>
           <p>ORDERS</p>
          </NavLink> */}
         </div>


        </div>
    )
}
export default Sidebar