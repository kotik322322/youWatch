import mongoose from "mongoose";

const watchSchema = new mongoose.Schema({
    name : {
        type : String
    },
    size : {
        type : [String]
    },
    price : {
        type : String
    },
    warranty : {
        type : String
    },
    productColors : {
        type :[String]
    },
    imageUrl : {
        type : [String]
    },
    description : {
        type : String
    },
    currentSeries : {
        type : String
    },
    currentSize : {
        type : String
    },
    currentColor : {
        type : String
    }

})

export default watchSchema