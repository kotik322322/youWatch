import watchesModel from "../../models/watchesModel.js";

const getWatchesByName = (app) => {
    app.get('/watches-name', async (req, res) => {
        try {
            const resultWatchesByName = await watchesModel.find({currentSeries : "Apple Watch Series 7"})


            res.send(resultWatchesByName)
        } catch (error) {
            res.send({ message: error, error })

        }
    })
}

export default getWatchesByName