import mongoose from "mongoose";
import watchSchema from "../schemas/watches.js";


const watchesModel = mongoose.model('watches', watchSchema )


export default watchesModel