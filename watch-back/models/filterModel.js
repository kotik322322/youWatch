import mongoose from "mongoose";
import filterSchema from "../schemas/filterSchema.js";

const filterModel = mongoose.model('filters', filterSchema )

export default filterModel