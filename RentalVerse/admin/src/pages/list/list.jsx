import React, { useEffect, useState } from 'react'
import './list.css'
import {toast} from 'react-toastify'
import axios from 'axios'

const List = ()=>{

   const[list,setList]= useState([]);
   const url ="http://localhost:4000"

   const fetchlist = async ()=>{
    const response = await axios.get(`${url}/api/laptop/list`)
    console.log(response.data)

        if(response.data.success){
            setList(response.data.data)
            console.log(response.data)
            
        }else{
            toast.error("error")
            console.log(response)
        }
     
}
useEffect(()=>{
    fetchlist()
    console.log(list)
},[])
    return(
        <div className='list and flex-col'>
         <p>ALL Items list</p>
         <div className='list-table'>
         <div className='list-table-format title'>
            <b>Image</b>
            <b>Name</b>
            <b>Category</b>
            <b>Price</b>
            <b>Action</b>
         </div>
             {list.map((item,index)=>{
                return(
                    <div key={index} className='list-table-format'>
                    <img src={`${url}/images/`+item.image} alt="" />
                    <p>{item.name}</p>
                    <p>{item.category}</p>
                    <p>₹{item.price}/DAY</p>
                    <p>x</p>
                    
                    </div>
                )
             })}
         </div>
        </div>
    )

}

export default List