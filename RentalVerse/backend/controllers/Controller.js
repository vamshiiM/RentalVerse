// creating the api 
import Model from "../models/model.js";
import fs from 'fs'

// adding Data

const addData = async (req,res) => {
    let image_filename = `${req.file.filename}`;

    const  DATA = new Model({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        image:image_filename
    })
    try{
     await DATA.save();
     res.json({success:'true',message:'Item Added'})
     console.log(DATA)
    }catch(error){
        console.log(error)
     res.json({success:'false',message:'Item NOT Added'})

    }
}

// all items lists

const ListItem = async(req,res)=>{
    try{
        const items = await Model.find({})
        res.json({success:"true",data:items})
    }
    catch(error){
       console.log(error)
       res.json({success:"false"})
    }  
}

// remove the item
const RemoveItem= async (req,res)=>{
    try{
     const item = await Model.findById(req.body.id);
     fs.unlink(`uploads/${item.image}`,()=>{})
      await Model.findByIdAndDelete(req.body.id);
      res.json({success:true,message:"item removed"})
    }
    catch(error){
     console.log(error)
     res.json({success:false,message:"item removed"})
    }
}

export {addData,ListItem,RemoveItem}