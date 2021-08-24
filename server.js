require('dotenv').config()
const express = require('express')
const app = express()

app.listen(process.env.PORT)

const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URL, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
    .then(value => {
        console.log(`db connected`)
    }, reason => {
        console.log(reason)
    })

const cors = require('cors')
const path = require('path')
const fileroutes = require('./routes/file')

app.use(cors())

app.use(express.json())

app.use(
    express.static(
        path.join(__dirname, 'public')
    )
)


app.use(fileroutes)


app.use(
    (req, res) => {
        res
            .status(404)
            .send(
                {
                    status: 0,
                    msg: '404 error'
                }
            )
    }
)