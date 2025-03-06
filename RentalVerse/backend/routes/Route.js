import express from 'express'
import { addData, ListItem,RemoveItem } from '../controllers/Controller.js'
import multer from 'multer'

const DataRouter =express.Router();// using this we can use various methods like get,post etc

// image storage engine

const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null, `${Date.now()}${file.originalname}`);

    }
})

const upload = multer({storage:storage})

DataRouter.post("/add",upload.single("image"),addData)//using post method to add data 
DataRouter.get("/list",ListItem)
DataRouter.post("/remove",RemoveItem)


export default DataRouter