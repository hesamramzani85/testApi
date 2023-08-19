const express = require('express')
const app = express()
const port = 3002

app.use(express.json())

app.get('/hesam', (req, res) => {
    const { fname} = req.query
    res.send(`Hello ${fname}`)
})

app.get('/', (req, res) => {
    const { fname } = req.query
    res.send(`hesam ramzani  ${fname}`)
}
)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})