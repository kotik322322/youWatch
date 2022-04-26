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
    filter : {
        type : {}
    }
})

export default watchSchema