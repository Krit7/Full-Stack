const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')

const app = express()

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.get("/", (req, res) => {
    res.send("Hello World")
});

app.get("/register", (req, res) => {
    res.send({
        message: "You Have reached the sigunp route"
    })
});

app.listen(8081, (req, res) => {
    console.log("Server has started at port 8081.!!!")
});