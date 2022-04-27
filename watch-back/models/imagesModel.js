import mongoose from "mongoose";
import imagesSchema from "../schemas/imagesSchema.js";


const imagesModel = mongoose.model('images', imagesSchema)

export default imagesModel