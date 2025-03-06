import mongoose from "mongoose";

const Schema = new mongoose.Schema({
    name:{type:String,required:true},
    description:{type:String,required:true},
    price:{type:Number,required:true},
    image:{type:String,required:true},
    category:{type:String,required:true}
})

const Model = mongoose.models.Laptop || mongoose.model("Laptop",Schema);// This line creates the model 

export default Model