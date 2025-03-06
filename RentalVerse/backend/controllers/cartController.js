import { response } from "express";
import userModel from"../models/userModel.js"

// adding items to cart 

const addToCart = async(req,res)=>{
     try{
         let userData = await userModel.findById(req.body.userId);
         let cartData = await userData.cartData;
         if(!cartData[req.body.itemId]){
            cartData[req.body.itemId]= 1
         }else{
            cartData[req.body.itemId] += 1;
         }
         await userModel.findByIdAndUpdate(req.body.userId,{cartData});
         res.json({
            success:true,message:"ADDED to CART"
         })

     }catch(error){
        console.log(error)
        res.json({message:"not added to cart"})
     }
}

//removing from cart 

const removeFromCart =async(req,res)=>{

    try{
      let userData = await userModel.findById(req.body.userId);
      let cartData = await userData.cartData;
      console.log( "cart:",cartData)
        if(cartData[req.body.itemId]>0){
            cartData[req.body.itemId] -=1;
        }
        await userModel.findByIdAndUpdate(req.body.userId,{cartData});
        res.json({message:"item removed from cart"})
    }
    catch(error){
       console.log(error);
       res.json({message:"item is not removed from cart",error})
       console.log(error)
    }



}

//fetch user cart data 
const getCart = async(req,res)=>{

   
      try{
        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cartData;
        res.json({success:"true",message:cartData})
        console.log("cartData:",cartData)

      }
      catch(error){
       console.log(error);
       res.json({success:"false"})
      }
}

export {addToCart,removeFromCart,getCart}