const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    let todoList = ["abc", "123"]

    res.render("index", {
        todoList: todoList
    })
})

app.post('/', (req, res) => {
    let todoList = ["abc", "123"]
    todoList.push(req.body.todo)

    res.render("index", {
        todoList: todoList
    })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
