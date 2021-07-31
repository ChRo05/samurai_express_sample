const express = require('express')
const app = express()
const port = 3000

app.set("view engine", "ejs")

app.get('/', (req, res) => {
    let name = req.query.name || "no data"
    let count = req.query.count || "no data"
    res.render("index", {
        count: count,
        name: name
    })
})

app.post('/', (req, res) => {
    res.render("index")
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
