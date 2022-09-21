import dbConnect from '../../../dbConnect'
import Tag from '../../../models/tag'

export default async function handler(req, res) {
    const { method } = req

    await dbConnect()

    switch (method) {
        case 'GET':
            try {
                const tags = await Tag.find({}) /* find all the data in our database */
                res.status(200).json({ success: true, data: tags })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break
        case 'POST':
            try {
                const tag = await Tag.create(
                    req.body
                ) /* create a new model in the database */
                res.status(201).json({ success: true, data: tag })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break
        default:
            res.status(400).json({ success: false })
            break
    }
}

