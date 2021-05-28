//Dependencies
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

//Constants
const PORT = '6060'
const DB_URI = ''

const app = express()

app.use(express.json())
app.use(cors())

//Connect to DB
mongoose.connect(DB_URI, { useNewUrlParser:true, useUnifiedTopology:true, useFindAndModify: false, useCreateIndex:true })

//Routes
const typeRoute = require('./route/type')
app.use('/api/types', typeRoute)

const productRoute = require('./route/product')
app.use('/api/products', productRoute)

app.listen(PORT, ()=>{
    console.log(`Listening at http://localhost:${PORT}`)
})

module.exports = app
