import mongoose from 'mongoose'

const imagesSchema = new mongoose.Schema({
    images : {
        type : {}
    },
    slides : {
        type : []
    }     
})


export default imagesSchema



