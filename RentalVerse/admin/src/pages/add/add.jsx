import React, { useEffect, useState } from 'react'
import './add.css'
import { assets } from '../../assets/assets'
import axios from 'axios'
import {toast} from 'react-toastify'

const Add = ()=>{
    
    const url ="http://localhost:4000/"
    const [image,setImage]=useState(false);
    const [data,setData]=useState({
        name:"",
        description:"",
        price:"",
        category:"laptop"

    })

    const onChangeHandler =(event)=>{
         const name=event.target.name;
         const value =event.target.value;
         setData(data=>({...data,[name]:value}))
    }

    const onSubmitHandler =async(event)=>{
     event.preventDefault();
     const formData = new FormData();
     formData.append("name",data.name)
     formData.append("description",data.description)
     formData.append("price",Number(data.price))
     formData.append("category",data.category)
     formData.append("image",image)
      
     const response = await axios.post(`${url}api/laptop/add`,formData)
     if(response.data.success){
       setData({
        name:"",
        description:"",
        price:"",
        category:"laptop"

    })
    setImage(false)
    toast.success(response.data.message)
    console.log("added successfully")
    console.log(response)
     }else{
       console.log("error")
       toast.error(response.data.message)

     }

    }

    useEffect(()=>{
  console.log(data)
    },[data])  /// this helps in checking whether input is being taken or not

    return(
    <div className='Content'>
        <form className='flex-col' onSubmit={onSubmitHandler}>
        <div className='add-image-upload flex-col'>
            <p>upload Image</p>
            <label htmlFor ="image">
                <img src={image?URL.createObjectURL(image):assets.upload} alt=""/>
            </label>
            <input onChange={(e)=>setImage(e.target.files[0])} type="file" id="image" hidden required/>

    
        </div>
        <div className='add-product-name flex-col'>
            <p>Product Name</p>
            <input onChange={onChangeHandler} value={data.name} type="text" name='name' placeholder='ENTER THE NAME' required/>
        </div>
        <div className='add-product-description flex-col'>
            <p>Product Description</p>
            <textarea  onChange={onChangeHandler} value={data.description} name="description" row="6" placeholder='Write description here' required/>
        </div>
        <div className='add-category-price'>
           <div className='add-category flex-col'>
           <p>Product category</p>
           <select  onChange={onChangeHandler} name="category">
            <option value="LAPTOP">Laptop</option>
            <option value="MOBILE">Mobile</option>
            <option value="WATCH">Watch</option>
           </select>

           </div>
           <div className='add-price flex-col'>
            <p>product price</p>
            <div className='price'>

            <label htmlFor="price">₹</label>
            <input onChange={onChangeHandler} value={data.price} type="Number" name="price" placeholder= "20" required />
            <label >/DAY</label>
            </div>
           </div>
        </div>
        <button type='submit' className='add-button'>ADD</button>

        </form>
        </div>
    )

}

export default Add 