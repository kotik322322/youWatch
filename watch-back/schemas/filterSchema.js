import mongoose from 'mongoose'

const filterSchema = new mongoose.Schema({
    Series : {
        type : {}
    },
    Size : {
        type : {}
    },
    Color : {
        type : {}
    }
})

export default filterSchema