const express = require('express')
const app = express()
const port = 3000

// ejsファイルのrenderに必要
app.set("view engine", "ejs")
// formの送信に必要
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    let name = req.query.name || "no data"
    let count = req.query.count || "no data"
    res.render("index", {
        count: count,
        name: name,
        address: "no data"
    })
})

app.post('/', (req, res) => {
    let address = req.body.address || "no data"
    res.render("index", {
        count: "no data",
        name: "no data",
        address: address
    })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
