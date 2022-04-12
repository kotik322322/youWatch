import slidesModel from '../../models/slidesModel.js'


const getSlides = (app) => {
    app.get('/slides', async (req, res) => {
        try {
            const dataSlides = await slidesModel.find()

            res.send(dataSlides)
            

        } catch (error) {
            res.send({ status: error, error })
        }
    })



}

export default getSlides