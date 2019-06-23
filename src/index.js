import express from 'express'
import path from 'path'

const app = express()
const port = 8080

app.use('/static', express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(path.join(`${__dirname}/index.html`))
})

app.listen(port, () => console.log(`Listening to port ${port}.`))
