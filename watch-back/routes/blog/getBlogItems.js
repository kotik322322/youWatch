import blogModel from "../../models/blogModel.js"


const getBlogItems = (app) => {
    app.get('/blog', async (req, res) => {
        try {
            const result = await blogModel.find()

            res.send(result)
            

        } catch (error) {
            res.send({ status: error, error })
        }
    })



}

export default getBlogItems