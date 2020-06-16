const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

require('dotenv-flow').config()

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

const uri = process.env.ATLAS_URI
mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
const connection = mongoose.connection
connection.once('open', () => {
    console.log('Connected with database')
})

const pollsRouter = require('./routes/polls')

app.use('/polls', pollsRouter)

app.listen(port, () => {
    console.log(`Server is running in port ${port}`)
})