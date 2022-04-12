import watchesModel from "../../models/watchesModel.js";

const getWatches = (app) => {
    app.get('/watches', async (req, res) => {
        try {
            const resultWatches = await watchesModel.find()


            res.send(resultWatches)
        } catch (error) {
            res.send({ message: error, error })

        }
    })
}

export default getWatches