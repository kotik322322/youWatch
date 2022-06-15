import blogModel from "../../models/blogModel.js"



const getBlogItemById = (app) => {
        app.get('/blog/:_id', async (req, res) => {

            const params = req.params
            const product = await blogModel.findById(params)
            if(product) {
                res.json(product)
    
            } else {
                res.status(404)
                throw new Error("Product not found")
            }
        }) 
    }

export default getBlogItemById