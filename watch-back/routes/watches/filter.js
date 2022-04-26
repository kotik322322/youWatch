import watchesModel from '../../models/watchesModel.js'

const filter = (app) => {
    app.get('/watches-name/', async (req, res) => {
        try {
            const query = req.query
            const result = await watchesModel.find(query)

            res.send(result)
        } catch (error) {
            res.send({ message: error, error })

        }
    })
}

export default filter



