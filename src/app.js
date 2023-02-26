//Dependencies and Imports
const express = require('express')
const config = require('../config')
const database = require('./utils/database')
const charactersRoutes = require('./characters/characters.router')
const imagesRoutes = require('./images/images.router')
const cors = require('cors')

//Database
database.authenticate()
    .then(() => console.log('This database is authenticated'))
    .catch(err => console.log(err))

database.sync()
    .then(() => console.log('This database is synced'))
    .catch(err => console.log(err))

//Initial Config
const app = express()
app.use(express.json())
app.use(cors())

//Routes
app.get('/', (req, res) => {
    res.status(200).json('Ok!')
})

app.use('/api/v1/characters', charactersRoutes)
app.use('/api/v1/images', imagesRoutes)

//Server
app.listen(config.api.port, () => {
    console.log(`This server is active in ${config.api.host}`)
})