const express = require('express')
const dateformat = require("dateformat")
const app = express()
const port = 3000

app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: true }))

// Sequelizeの設定
const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "./database.sqlite3"
});

// EJS内で使える関数を定義
app.locals.dateformat = dateformat


class Todo extends Model { }
Todo.init({
    todo: DataTypes.STRING,
    created: DataTypes.DATE
}, { sequelize, modelName: 'todo' });

app.get('/', async (req, res) => {
    let todoList = await Todo.findAll()

    res.render("index", {
        todoList: todoList
    })
})

app.post('/', async (req, res) => {
    await Todo.create({
        todo: req.body.todo,
        created: Date()
    })
    let todoList = await Todo.findAll()

    res.render("index", {
        todoList: todoList
    })
})

// データベースファイルを作成する
sequelize.sync()

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
