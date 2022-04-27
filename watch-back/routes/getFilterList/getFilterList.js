import filterModel from "../../models/filterModel.js"

const getFilterList = (app) => {
    app.get('/filters', async (req, res) => {
        try {
            const result = await filterModel.find()

            res.send(result)
        } catch (error) {
            res.send({ message: error, error })

        }
    })
}

export default getFilterList

