import imagesModel from "../../models/imagesModel.js"


const getImages = (app) => {
    app.get('/images', async (req, res) => {
        try {
            const dataIcons = await imagesModel.find()

            res.send(dataIcons)
            

        } catch (error) {
            res.send({ status: error, error })
        }
    })



}

export default getImages