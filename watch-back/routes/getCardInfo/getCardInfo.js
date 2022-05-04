import watchesModel from "../../models/watchesModel.js"


const getCardInfo = (app) => {
    app.get('/store/:_id', async (req, res, next) => {
        try {
            const params = req.params
            const result = await watchesModel.find(params)

            res.status(200).send(result)
            next()
        } catch (error) {
            res.send({ message: error, error })

        }
    })
}

export default getCardInfo