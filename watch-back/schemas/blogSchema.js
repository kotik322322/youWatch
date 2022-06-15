import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title : {
        type : String
    },
    text : {
        type : String
    },
    info : {
        type : String
    },
    mainImg : {
        type : String
    }
    
})

export default blogSchema