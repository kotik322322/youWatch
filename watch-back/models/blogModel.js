import mongoose from "mongoose";
import blogSchema from "../schemas/blogSchema.js";

const blogModel = mongoose.model('blogs', blogSchema)

export default blogModel