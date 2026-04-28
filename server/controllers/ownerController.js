import { json } from "express";
import User from "../models/User.js";
import fs from "fs";
import imagekit from "../configs/imageKit.js";



export const changeRoleToOwner = async (req, res) => {
    try {
        const { _id } = req.user;
        await user.findByIdAndUpdate(_id, { role: "owner" })
        res.json({ success: true, message: "now you can list cars" })
       

        } catch (error) {
        res.json({ success: false, message: error.message })
        }
    }

    //api to list car

    export const addCar = async (req, res) => {
        try {
          const { _id } = req.user;
          let car = json.parse(req.body.carData)
            const imageFile = req.file;
//upload image to imagekit
            const fileBuffer = fs.readFileSync(imageFile.path);
            const response = await imagekit.upload({
                file: fileBuffer,
                fileName: imageFile.originalname,
                folder: '/cars'
            })

        } catch (error){
            console.log(error.message);
            res.json({success:false, message: error.message})
        }
    }   