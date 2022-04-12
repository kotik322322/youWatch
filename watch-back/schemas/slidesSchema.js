import mongoose from "mongoose";


const slidesSchema = new mongoose.Schema({
    slides: {
        type : String
    }
})


export default slidesSchema