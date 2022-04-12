import mongoose from "mongoose";
import slidesSchema from "../schemas/slidesSchema.js";

const slidesModel = mongoose.model('slides', slidesSchema)

export default slidesModel