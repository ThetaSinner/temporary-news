import express from 'express'
import cors from 'cors'
import {getNewsStories, createNewsStory} from "./app.js";

const app = express()
app.use(cors())
app.use(express.json())
const port = 3005

app.get('/', (req, res) => {
    res.send('OK')
})

app.post('/newsStories', async (req, res) => {
    try {
        await createNewsStory(req.body)
        res.sendStatus(202)
    } catch (e) {
        console.error(e)
        res.sendStatus(400)
    }
})

app.get('/newsStories', async (req, res) => {
    try {
        res.send(await getNewsStories())
    } catch (e) {
        console.error(e)
        res.sendStatus(500)
    }
})

app.listen(port, () => {
    console.log(`Backend app listening at http://localhost:${port}`)
})
